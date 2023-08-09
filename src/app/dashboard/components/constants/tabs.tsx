import Calendar from "../Calendar";
import Chores from "../Chores";
import Expenses from "../Expenses";
import Groceries from "../Groceries";
import Inventory from "../Inventory";
import Overview from "../Overview";
import Settings from "../Settings";

export const tabs = [
  {
    name: "Overview",
    component: <Overview />,
  },
  {
    name: "Inventory",
    component: <Inventory />,
  },
  {
    name: "Groceries",
    component: <Groceries />,
  },
  {
    name: "Chores",
    component: <Chores />,
  },
  {
    name: "Expenses",
    component: <Expenses />,
  },
  {
    name: "Calendar",
    component: <Calendar />,
  },
  {
    name: "Settings",
    component: <Settings />,
  },
];
