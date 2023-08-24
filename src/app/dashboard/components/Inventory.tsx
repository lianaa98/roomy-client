import React, { FC, useEffect, useState } from "react";
import { fetchData } from "@/lib/fetchData";
import { InventoryItem, InventoryColumn, InventoryRow, LocationWithSpaceAndUsers } from "@/lib/types";
import { useCookies } from "react-cookie";
import { CircularProgress } from "@mui/material";
import InventoryList from "./InventoryList";
import LocationModal from "./LocationModal";
import ItemModal from "./ItemModal";

interface InventoryProps {
  spaceId: number;
}

const Inventory: FC<InventoryProps> = ({ spaceId }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);
  const [dataLoading, setDataLoading] = useState(false);

  // Location modal states
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [locationsLoading, setLocationsLoading] = useState(false);
  const [locations, setLocations] = useState<LocationWithSpaceAndUsers[]>([]);

  // View item modal states
  const [openViewModal, setOpenViewModal] = useState(false);
  const [viewModalLoading, setViewModalLoading] = useState(false);
  const [viewModalData, setViewModalData] = useState<InventoryItem | null>(
    null
  );

  // Inventory data states
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [inventoryColumns, setInventoryColumns] = useState<InventoryColumn[]>([
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "location_id",
      headerName: "Location ID",
      width: 150,
      type: "number",
    },
    { field: "location", headerName: "Location", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "quantity", headerName: "Qty", width: 100 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "edit",
      headerName: "",
      width: 80,
      sortable: false,
      renderCell: (params) => {
        return (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleOpenViewModal(params.row.id)}
          >
            View
          </button>
        );
      },
    },
    {
      field: "delete",
      headerName: "",
      width: 80,
      sortable: false,
      renderCell: (params) => {
        return (
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => console.log(params.row)}
          >
            Delete
          </button>
        );
      },
    },
  ]);
  const [inventoryRows, setInventoryRows] = useState<InventoryRow[]>([]);

  useEffect(() => {
    const token = cookies["user-token"];
    setDataLoading(true);
    setInventoryRows([]);

    const fetchDataPromise = fetchData(
      `/spaces/${spaceId}/owned_items`,
      "GET",
      token
    )
      .then((data) => {
        if (data && data.length > 0) {
          data.forEach((item: InventoryItem) => {
            const row: InventoryRow = {
              id: item.id,
              location_id: item.location.id,
              location: item.location.name,
              name: item.name,
              brand: item.brand,
              quantity: item.quantity,
              status: item.status,
              description: item.description,
            };
            setInventoryRows((prevRows) => [...prevRows, row]);
          });
        }
        setDataLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setDataLoading(false);
      });
  }, []);

  const handleOpenLocationModal = () => {
    const token = cookies["user-token"];
    setLocationsLoading(true);
    fetchData(`/spaces/${spaceId}/locations`, "GET", token)
      .then((data) => {
        console.log(data);
        setLocations(data);
        setLocationsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLocationsLoading(false);
      });

    setOpenLocationModal(true);
  };

  const handleOpenViewModal = (id: number) => {
    const token = cookies["user-token"];
    setViewModalLoading(true);
    fetchData(`/owned_items/${id}`, "GET", token)
      .then((data) => {
        console.log(data);
        setViewModalData(data);
        setViewModalLoading(false);
        setOpenViewModal(true);
      })
      .catch((error) => {
        console.log(error);
        setViewModalLoading(false);
      });
  }

  const renderInventoryList = () => {
    return (
      <>
        <button
          className="h-10 p-3 m-3 bg-gray-600 rounded-md flex justify-center items-center border-2 border-slate-300 hover:bg-gray-700"
          onClick={handleOpenLocationModal}
        >
          <span>View All Locations</span>
        </button>
        <InventoryList
          inventoryRows={inventoryRows}
          inventoryColumns={inventoryColumns}
          dataLoading={dataLoading}
        />
      </>
    );
  };

  return (
    <>
      {dataLoading && <CircularProgress className="mt-4" />}
      {!dataLoading && renderInventoryList()}
      {openLocationModal && (
        <LocationModal setOpenLocationModal={setOpenLocationModal} locationsLoading={locationsLoading} locations={locations} spaceId={spaceId} />
      )}
      {openViewModal && (
        <ItemModal setOpenViewModal={setOpenViewModal} viewModalLoading={viewModalLoading} viewModalData={viewModalData} />
      )}
    </>
  );
};

export default Inventory;
