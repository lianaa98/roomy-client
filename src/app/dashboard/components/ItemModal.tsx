import React, { FC, useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";
import { OwnedItem } from "@/lib/types";
import { fetchData } from "@/lib/fetchData";
import { useCookies } from "react-cookie";

interface ItemModalProps {
  setOpenViewModal: (open: boolean) => void;
  viewModalLoading: boolean;
  viewModalData: OwnedItem | null;
}

const ItemModal: FC<ItemModalProps> = ({
  setOpenViewModal,
  viewModalLoading,
  viewModalData,
}) => {
  const {
    id,
    name,
    brand,
    description,
    quantity,
    created_at,
    updated_at,
    purchased_at,
    status,
    location,
    user,
  } = viewModalData;
  return (
    <Modal
      open
      onClose={() => setOpenViewModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 rounded-md p-7">
        <div className="flex">
          <div className="flex flex-col mx-2">
            <span>Name: {name}</span>
            <span>Brand: {brand}</span>
            <span>Quantity: {quantity}</span>
          </div>
          <div className="flex flex-col mx-2">
            <div className="bg-orange-300 rounded-sm text-center">
              <span>{status}</span>
            </div>
            <div className="bg-slate-900 rounded-md p-5">
              <span>{description}</span>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <button>Edit</button>
          <button>Move</button>
          <button>Add to grocery list</button>
          <button>Delete</button>
        </div>
      </Box>
    </Modal>
  );
};

export default ItemModal;
