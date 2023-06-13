import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";
import { PromotionDTO } from "../../../models/Product";

interface DialogPromotionsProps {
  open: boolean;
  onClose: () => void;
  promotions?: PromotionDTO[];
}

const DialogPromotions: React.FC<DialogPromotionsProps> = ({
  open,
  onClose,
  promotions,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Visualizar</DialogTitle>
      <DialogContent>
        <div>
          <h2>Promociones</h2>
          {promotions?.map((promotion, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              {promotion.promotionName && (
                <ul>
                  <li>
                    <strong>Nombre de la promoción:</strong>{" "}
                    {promotion.promotionName}
                  </li>
                </ul>
              )}
              {promotion.discountPercentage && (
                <ul>
                  <li>
                    <strong>Descuento porcentual:</strong>{" "}
                    {`${promotion.discountPercentage}%`}
                  </li>
                </ul>
              )}
              {promotion.shippingCost !== null &&
                promotion.shippingCost !== undefined && (
                  <ul>
                    <li>
                      <strong>Costo de envío:</strong>{" "}
                      {`$${promotion.shippingCost}`}
                    </li>
                  </ul>
                )}
              {promotion.productDiscount && (
                <ul>
                  <li>
                    <strong>Descuento en producto:</strong>{" "}
                    {`$${promotion.productDiscount}`}
                  </li>
                </ul>
              )}
              {promotion.quantityThreshold && (
                <ul>
                  <li>
                    <strong>Umbral de cantidad:</strong>{" "}
                    {promotion.quantityThreshold}
                  </li>
                </ul>
              )}
              <Divider />
            </div>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogPromotions;
