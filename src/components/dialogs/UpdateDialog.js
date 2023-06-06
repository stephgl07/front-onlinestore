import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const UpdateDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Modificar</DialogTitle>
      <DialogContent>
        {/* Contenido del modal de Modificar */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
        <Button variant="contained" color="primary">
          Guardar cambios
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateDialog;
