import React, { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface LocationModalProps {
  setOpenLocationModal: (open: boolean) => void;
}

const LocationModal: FC<LocationModalProps> = ({ setOpenLocationModal }) => {
  return (
    <Modal
      open
      onClose={() => setOpenLocationModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 rounded-md p-7">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Locations
        </Typography>
      </Box>
    </Modal>
  );
};

export default LocationModal;
