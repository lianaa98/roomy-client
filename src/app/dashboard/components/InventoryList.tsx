import React, { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { InventoryColumn, InventoryRow } from "@/lib/types";

interface InventoryListProps {
  inventoryRows: InventoryRow[];
  inventoryColumns: InventoryColumn[];
  dataLoading: boolean;
}

const InventoryList: FC<InventoryListProps> = ({
  inventoryRows: inventoryRows,
  inventoryColumns: inventoryColumns,
  dataLoading: dataLoading,
}) => {

  // reloads data when dataLoading changes
  useEffect(() => {
    console.log("dataLoading changed");
    console.log(dataLoading)
    console.log("inventory rows: ", inventoryRows);
    console.log("inventory columns: ", inventoryColumns);
  }, [dataLoading, inventoryRows, inventoryColumns]);

  return (
    <div>
      <Box sx={{ height: 600, width: "90%", backgroundColor: "slategrey" }}>
        <DataGrid
          rows={inventoryRows}
          columns={inventoryColumns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
            // hide id
            columns: {
              columnVisibilityModel: {
                id: false,
                location_id: false,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default InventoryList;
