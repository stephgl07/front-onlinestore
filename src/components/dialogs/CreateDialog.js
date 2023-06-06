import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const ModalRegistrar = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Registrar</DialogTitle>
      <DialogContent>
        {/* Contenido del modal de Registrar */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
        <Button variant="contained" color="primary">
          Registrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalRegistrar;
