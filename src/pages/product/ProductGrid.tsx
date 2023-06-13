import React from "react";
import { fetchGetAllProducts } from "../../services/ProductService";
import { ProductGridItem } from "../../models/Product";
import DataTable from "../../commons/components/DataTable";
import { getColumnNames } from "../../commons/utils/ArrayMapping";
import { Link, useHistory } from "react-router-dom";
import * as IconsMaterial from "@mui/icons-material";
import { Box, Button, Paper, Toolbar, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';

const ProductGrid = () => {
  const history = useHistory();
  const [products, setProducts] = React.useState<ProductGridItem[]>([]);
  const handleToHome = () =>{
    localStorage.clear();
    history.push("/");
  };
  const actionsProduct = [
    {
      url: "/products/edit",
      handleOnClick: () => {
        console.log("");
      },
      icon: IconsMaterial.Edit,
    },
    {
      url: "/products/detail",
      handleOnClick: () => {
        console.log("");
      },
      icon: IconsMaterial.Visibility,
    },
  ];

  React.useEffect(() => {
    const getAllProducts = async () => {
      setProducts([]);

      const zonaHoraria = Intl.DateTimeFormat().resolvedOptions().timeZone;
      localStorage.setItem("user", "admin");
      localStorage.setItem("timezone", zonaHoraria.toString());

      const productList = await fetchGetAllProducts();

      if (productList && productList.length > 0) {
        // setProducts(arr);
        setProducts(productList);
      }
    };

    getAllProducts();
  }, []);

  const columnNames = getColumnNames(new ProductGridItem());

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Toolbar>
          <IconButton onClick={handleToHome}><IconsMaterial.Home/></IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Productos
          </Typography>
          <Link to="/products/create">
            <Button variant="contained" endIcon={<IconsMaterial.Add />}>
              Nuevo Producto
            </Button>
          </Link>
        </Toolbar>
      </Box>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {products && (
          <DataTable
            data={products}
            columnNames={columnNames}
            itemName="productName"
            itenId="productId"
            actionsTable={actionsProduct}
          />
        )}
      </Paper>
    </>
  );
};

export default ProductGrid;
