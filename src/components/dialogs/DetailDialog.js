import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const ModalVisualizar = ({ open, onClose, productData }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Visualizar</DialogTitle>
      <DialogContent>
        <ul>
          <li>
            <strong>Product ID:</strong> {productData?.productId}
          </li>
          <li>
            <strong>Nombre:</strong> {productData?.productName}
          </li>
          <li>
            <strong>Descripción:</strong> {productData?.productDescription}
          </li>
          <li>
            <strong>Categoría:</strong> {productData?.categoryId}
          </li>
          <li>
            <strong>Activo:</strong> {productData?.isActive ? "Sí" : "No"}
          </li>
          <li>
            <strong>Fecha de creación:</strong> {productData?.creationDate}
          </li>
          <li>
            <strong>Usuario de creación:</strong> {productData?.creationUser}
          </li>
          <li>
            <strong>Zona horaria:</strong> {productData?.creationTimeZone}
          </li>
          <li>
            <strong>Última actualización:</strong> {productData?.lastUpdate}
          </li>
          <li>
            <strong>Stock Threshold:</strong> {productData?.stockThreshold}
          </li>
        </ul>
        <h3>Detalles del producto</h3>
        {productData?.productDetails?.map((detail, index) => (
          <div key={detail.detailId}>
            <h4>Detalle #{index+1}</h4>
            <ul>
              <li>
                <strong>Detail ID:</strong> {detail.detailId}
              </li>
              <li>
                <strong>Precio del producto:</strong> {detail.productPrice}
              </li>
              <li>
                <strong>Stock:</strong> {detail.stock}
              </li>
              <li>
                <strong>Período de garantía:</strong> {detail.warrantyPeriod}
              </li>
              <li>
                <strong>Modelo:</strong> {detail.modelName}
              </li>
              <li>
                <strong>Imagen URL:</strong> {detail.imageUrl}
              </li>
              <li>
                <strong>Rating:</strong> {detail.reviewRating}
              </li>
              <li>
                <strong>Cantidad de reseñas:</strong> {detail.reviewCount}
              </li>
              <li>
                <strong>Peso del producto:</strong> {detail.productWeight}
              </li>
              <li>
                <strong>Dimensiones del producto:</strong> {detail.productDimensions}
              </li>
              <li>
                <h4>Promociones:</h4>
                {detail.promotions?.map((promotion, index) => (
                  <div key={index} style={{ marginBottom: "10px" }}>
                    {promotion.promotionName && (
                      <ul>
                        <li>
                          <strong>Nombre de la promoción:</strong> {promotion.promotionName}
                        </li>
                      </ul>
                    )}
                    {promotion.discountPercentage && (
                      <ul>
                        <li>
                          <strong>Descuento porcentual:</strong> {`${promotion.discountPercentage}%`}
                        </li>
                      </ul>
                    )}
                    {(promotion.shippingCost !== null && promotion.shippingCost !== undefined)  && (
                      <ul>
                        <li>
                          <strong>Costo de envío:</strong> {`$${promotion.shippingCost}`}
                        </li>
                      </ul>
                    )}
                    {promotion.productDiscount && (
                      <ul>
                        <li>
                          <strong>Descuento en producto:</strong> {`$${promotion.productDiscount}`}
                        </li>
                      </ul>
                    )}
                    {promotion.quantityThreshold && (
                      <ul>
                        <li>
                          <strong>Umbral de cantidad:</strong> {promotion.quantityThreshold}
                        </li>
                      </ul>
                    )}
                  </div>
                ))}
              </li>
            </ul>
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalVisualizar;
