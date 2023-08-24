//------------------
// User Types      ||
//------------------

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  passwordHash: string;
  created_at: string;
  updated_at: string;
}

export interface UserWithSpaces extends User{
  spaces: Space[];
}

//------------------
// Space Types     ||
//------------------

export interface Space {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface SpaceWithUsers extends Space {
  users: User[];
}

//------------------
// Location Types  ||
//------------------

export interface LocationWithSpaceAndUsers {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  space: SpaceWithUsers;
}

//------------------
// Inventory Types ||
//------------------

export interface InventoryItem {
  id: number;
  name: string;
  brand: string;
  description: string;
  quantity: number;
  created_at: string;
  updated_at: string;
  purchased_at: string;
  status: string;
  location: LocationWithSpaceAndUsers;
  user: UserWithSpaces;
}

export interface InventoryColumn {
  field: string;
  headerName: string;
  width: number;
  type?: string;
  sortable?: boolean;
  renderCell?: (params: any) => JSX.Element;
}

export interface InventoryRow {
  id: number;
  location_id: number;
  location: string;
  name: string;
  brand: string;
  quantity: number;
  status: string;
  description: string;
};

// Fetched from back-end
export interface OwnedItem {
  id: number;
  name: string;
  brand: string;
  description: string;
  quantity: number;
  created_at: string;
  updated_at: string;
  purchased_at: string;
  status: string;
  location: LocationWithSpaceAndUsers;
  user: UserWithSpaces;
}