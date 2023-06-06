import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import moment from 'moment-timezone';
import UpdateDialog from './dialogs/UpdateDialog';
import DetailDialog from './dialogs/DetailDialog';
import CreateDialog from './dialogs/CreateDialog';

const BASEURL = "https://api-onlinestore.azurewebsites.net";

const TableProduct = () => {
  const [rows, setRows] = useState([]);
  const [openModificarModal, setOpenModificarModal] = useState(false);
  const [openVisualizarModal, setOpenVisualizarModal] = useState(false);
  const [openRegistrarModal, setOpenRegistrarModal] = useState(false);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/Product/GetAll`);
        const { data } = response.data;
        const tablaData = data.map((producto) => {
          const timeCreate = moment.tz(producto.creationDate);
          const creationDate = timeCreate.clone().tz(producto.creationTimeZone).format('DD/MM/YYYY HH:mm');
          const timeUpdate = moment.tz(producto.lastUpdate);
          const lastUpdate = timeUpdate.clone().tz(producto.creationTimeZone).format('DD/MM/YYYY HH:mm');
          return {
            ...producto,
            id: producto.productId,
            productId: undefined,
            creationDate,
            lastUpdate,
          };
        });
        setRows(tablaData);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  const handleOpenVisualizarModal = async (productId) => {
    try {
      const response = await axios.get(`${BASEURL}/api/Product/GetAllById?ProductId=${productId}`);
      const { data } = response.data;
      setProductData(data);
      setOpenVisualizarModal(true);
    } catch (error) {
      console.error('Error al obtener el producto:', error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'Id', width: 90 },
    { field: 'productName', headerName: 'Nombre', width: 150 },
    { field: 'productDescription', headerName: 'Descripción', width: 200 },
    { field: 'categoryId', headerName: 'Categoría', width: 120 },
    { field: 'creationUser', headerName: 'Usuario de creación', width: 180 },
    { field: 'isActive', headerName: 'Activo', width: 100 },
    { field: 'creationDate', headerName: 'Fecha de creación', width: 180 },
    { field: 'creationTimeZone', headerName: 'Zona horaria', width: 180 },
    { field: 'lastUpdate', headerName: 'Última actualización', width: 180 },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 250,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ margin: '0px 5px 0px 5px' }}
            onClick={() => setOpenModificarModal(true)}
          >
            Modificar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ margin: '0px 5px 0px 5px' }}
            onClick={() => handleOpenVisualizarModal(params?.row.id)}
          >
            Visualizar
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: 300, width: '80%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <Typography variant="h5">Tabla de Productos</Typography>
        <Button variant="contained" color="primary" onClick={() => setOpenRegistrarModal(true)}>
          Registrar
        </Button>
      </Box>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />

      {/* Modales */}
      <UpdateDialog open={openModificarModal} onClose={() => setOpenModificarModal(false)} />
      <DetailDialog open={openVisualizarModal} onClose={() => setOpenVisualizarModal(false)} productData={productData} />
      <CreateDialog open={openRegistrarModal} onClose={() => setOpenRegistrarModal(false)} />
    </Box>
  );
};

export default TableProduct;
