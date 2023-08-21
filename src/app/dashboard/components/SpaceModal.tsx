import React, { ChangeEvent, FC, useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { fetchData } from "@/lib/fetchData";
import { useCookies } from "react-cookie";

interface SpaceModalProps {
  setOpenModal: Function;
}

const SpaceModal: FC<SpaceModalProps> = ({ setOpenModal }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);
  const [spaceName, setSpaceName] = useState("");

  const token = cookies["user-token"];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpaceName(e.target.value);
  };

  const addSpace = (name: string) => {
    try {
      fetchData("/spaces", "POST", token, { name }).then((res) => {
        if (res) {
          window.location.href = "/dashboard";
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 rounded-md p-7">
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          className="mb-4"
        >
          Add new space
        </Typography>

        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={spaceName}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="spaceName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          <div
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer"
            onClick={() => addSpace(spaceName)}
          >
            Submit
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default SpaceModal;
