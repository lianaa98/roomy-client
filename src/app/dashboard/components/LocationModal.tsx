import React, { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";
import { LocationWithSpaceAndUsers } from "@/lib/types";

interface LocationModalProps {
  setOpenLocationModal: (open: boolean) => void;
  locationsLoading: boolean;
  locations: LocationWithSpaceAndUsers[];
}

const LocationModal: FC<LocationModalProps> = ({
  setOpenLocationModal,
  locationsLoading,
  locations,
}) => {
  const renderLocations = () => {
    if (locationsLoading) {
      return <CircularProgress />;
    }
    return locations.map((location) => {
      return (
        <div key={location.id}>
          <Typography>{location.name}</Typography>
        </div>
      );
    });
  };

  return (
    <Modal
      open
      onClose={() => setOpenLocationModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 rounded-md p-7">
        <Typography variant="h6" className="mb-5">
          Locations
        </Typography>
        {renderLocations()}
      </Box>
    </Modal>
  );
};

export default LocationModal;
