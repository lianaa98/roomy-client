import React, { FC, useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";
import { LocationWithSpaceAndUsers } from "@/lib/types";
import { fetchData } from "@/lib/fetchData";
import { useCookies } from "react-cookie";

interface LocationModalProps {
  setOpenLocationModal: (open: boolean) => void;
  locationsLoading: boolean;
  locations: LocationWithSpaceAndUsers[];
  spaceId: number;
}

const LocationModal: FC<LocationModalProps> = ({
  setOpenLocationModal,
  locationsLoading,
  locations,
  spaceId,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);

  const [locationName, setLocationName] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationName(e.target.value);
  };

  const addLocation = (name: string) => {
    const token = cookies["user-token"];
    const trimmedName = name.trim();
    if (trimmedName === "") {
      return alert("Please enter a location name");
    }
    fetchData(`/spaces/${spaceId}/locations`, "POST", token, {
      name: trimmedName,
    })
      .then((res) => {
        if (res) {
          alert("Location added successfully!");
        } else {
          alert("Error adding location!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

        <form className="mt-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={locationName}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="locationName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              New location
            </label>
          </div>

          <div
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer"
            onClick={() => addLocation(locationName)}
          >
            Add
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default LocationModal;
