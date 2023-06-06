import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'Id', width: 90 },
  { field: 'productName', headerName: 'Nombre', width: 150 },
  { field: 'productDescription', headerName: 'Descripción', width: 200 },
  { field: 'categoryId', headerName: 'Categoría', width: 120 },
  { field: 'creationUser', headerName: 'Usuario de creación', width: 180 },
  { field: 'isActive', headerName: 'Activo', width: 100 },
  { field: 'creationDate', headerName: 'Fecha de creación', width: 180 },
  { field: 'lastUpdate', headerName: 'Última actualización', width: 180 },
];

const Table = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-onlinestore.azurewebsites.net/api/Product/GetAll');
        const { data } = response.data;
        const tablaData = data.map((producto) => {
            return {
              ...producto,
              id: producto.productId,
              productId: undefined
            };
          });
        setRows(tablaData);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: 300, width: '90%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default Table;
