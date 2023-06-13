import React from "react";
import { Box, Button, Paper, Toolbar, Typography, Alert } from "@mui/material";
import { AddEditProductDTO } from "../../models/Product";
import FormProduct from "./components/FormProduct";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  fetchEditProduct,
  fetchGetDetailByProductId,
  fetchGetProductById,
} from "../../services/ProductService";
import * as IconsMaterial from "@mui/icons-material";
import Validation from "../../config/ValidationConfig";

Validation();

const ProductEdit = () => {
  const history = useHistory();
  const { id }: any = useParams();
  const [initialValues, setInitialValues] = React.useState<AddEditProductDTO>();

  React.useEffect(() => {
    const getProduct = async () => {
      const product = await fetchGetProductById(id);
      const productDetails = await fetchGetDetailByProductId(product.productId);
      setInitialValues({
        ...product,
        productDetails,
      });
    };
    getProduct();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Editar Producto
          </Typography>
          <Link to="/products">
            <Button variant="outlined" endIcon={<IconsMaterial.ArrowBack />}>
              Regresar
            </Button>
          </Link>
        </Toolbar>
      </Box>
      {initialValues ? (
        <Paper sx={{ width: "100%" }}>
          <FormProduct
            key="permission-edit-form"
            isEditing={true}
            model={initialValues}
            onSubmit={(values) => {
              const postPermission = async () => {
                const response = await fetchEditProduct(values);
                if (response) history.push("/products");
                else history.push("/products/edit");
              };
              postPermission();
            }}
          />
        </Paper>
      ) : (
        <Alert icon={<IconsMaterial.Info />} color="info" variant="outlined">
          Se están consultando los datos del producto...
        </Alert>
      )}
    </>
  );
};

export default ProductEdit;
