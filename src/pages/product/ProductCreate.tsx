import { Box, Button, Paper, Toolbar, Typography } from "@mui/material";
import { AddEditProductDTO } from "../../models/Product";
import FormProduct from "./components/FormProduct";
import { Link, useHistory } from "react-router-dom";
import { fetchCreateProduct } from "../../services/ProductService";
import * as IconsMaterial from "@mui/icons-material";
import Validation from "../../config/ValidationConfig";

Validation();

const ProductCreate = () => {
  const history = useHistory();

  const initialValues = new AddEditProductDTO();

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Nuevo Producto
          </Typography>
          <Link to="/products">
            <Button variant="outlined" endIcon={<IconsMaterial.ArrowBack />}>
              Regresar
            </Button>
          </Link>
        </Toolbar>
      </Box>
      <Paper>
        <FormProduct
          key="permission-create-form"
          isEditing={false}
          model={initialValues}
          onSubmit={(values) => {
            const postPermission = async () => {
              console.log("values", values);
              values.creationTimeZone = localStorage.getItem("timezone") ?? "";
              values.creationUser = localStorage.getItem("user") ?? "";

              var fechaActual = new Date();
              var desplazamientoMinutos = fechaActual.getTimezoneOffset();
              fechaActual.setMinutes(fechaActual.getMinutes() + desplazamientoMinutos);
              values.creationDateUtc = fechaActual.toISOString();
              values.categoryId = 1;

              const response = await fetchCreateProduct(values);
              if (response) history.push("/products");
              else history.push("/products/create");
            };
            postPermission();
          }}
        />
      </Paper>
    </>
  );
};

export default ProductCreate;
