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

const ItemModal: FC<ItemModalProps> = ({ setOpenViewModal, viewModalLoading, viewModalData }) => {
  return (
    <Modal
      open
      onClose={() => setOpenViewModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 rounded-md p-7">
        <div>
          <div>
            <span>Image</span>
          </div>
          <div>
            <span>info</span>
          </div>
        </div>
        <div>
          <span>buttons</span>
        </div>
      </Box>
    </Modal>
  );
};

export default ItemModal;
