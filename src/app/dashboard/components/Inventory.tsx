import React, { FC, useEffect, useState } from "react";
import { fetchData } from "@/lib/fetchData";
import { InventoryItem, InventoryColumn, InventoryRow } from "@/lib/types";
import { useCookies } from "react-cookie";
import { CircularProgress } from "@mui/material";
import InventoryList from "./InventoryList";

interface InventoryProps {
  spaceId: number;
}

const Inventory: FC<InventoryProps> = ({ spaceId }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);
  const [dataLoading, setDataLoading] = useState(false);

  // Inventory data states
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [inventoryColumns, setInventoryColumns] = useState<InventoryColumn[]>([
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "location_id",
      headerName: "Location ID",
      width: 200,
      type: "number",
    },
    { field: "location", headerName: "Location", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "quantity", headerName: "Quantity", width: 100 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "description", headerName: "Description", width: 200 },
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

  const renderInventoryList = () => {
    return (
      <InventoryList
        inventoryRows={inventoryRows}
        inventoryColumns={inventoryColumns}
        dataLoading={dataLoading}
      />
    );
  };

  return (
    <>
      {dataLoading && <CircularProgress className="mt-4" />}
      {!dataLoading && renderInventoryList()}
    </>
  );
};

export default Inventory;
