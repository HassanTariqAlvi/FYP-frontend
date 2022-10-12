import { Dashboard, Logout, Mail, Person, Inventory } from "@mui/icons-material";
import { Divider } from "@mui/material";

const iconColor = { color: "#FFAE0D" };

const sidebarData = [
  {
    type: "listItem",
    id: 1,
    name: "Dashboard",
    icon: <Dashboard sx={iconColor} />,
    path: "/",
  },
  {
    type: "listItem",
    id: 2,
    name: "Daily Work",
    icon: <Mail sx={iconColor} />,
    path: "/daily_work",
  },
  {
    type: "listItem",
    id: 3,
    name: "HRM",
    icon: <Person sx={iconColor} />,
    subItems: [
      {
        type: "listItem",
        id: 4,
        name: "Employees",
        subItems: [
          {
            type: "listItem",
            id: 5,
            name: "Employee details",
            path: "/hrm/employee/details",
          },
          {
            type: "listItem",
            id: 6,
            name: "Attendance",
            path: "/hrm/employee/attendance",
          },
          {
            type: "listItem",
            id: 7,
            name: "Employee type",
            path: "/hrm/employee/employee_type",
          },
          {
            type: "listItem",
            id: 8,
            name: "Roles",
            path: "/hrm/employee/roles",
          },
        ],
      },
      {
        type: "listItem",
        id: 9,
        name: "Salaries",
        path: "hrm/salary",
      },
      {
        type: "listItem",
        id: 10,
        name: "Loan",
        path: "/hrm/loan",
      },
      {
        type: "listItem",
        id: 11,
        name: "Departments",
        path: "/hrm/departments",
      },
    ],
  },
  {
    type: "listItem",
    id: 12,
    name: "Units",
    icon: <Inventory sx={iconColor} />,
    subItems: [
      {
        type: "listItem",
        id: 13,
        name: "Unit details",
        path: "units/unit_details",
      },
      {
        type: "listItem",
        id: 14,
        name: "Unit prices",
        path: "units/unit_prices",
      },
      {
        type: "listItem",
        id: 15,
        name: "Measure criteria",
        path: "units/measure_criteria",
      },
    ],
  },
  // {
  //   type: "listItem",
  //   id: 16,
  //   name: "Reports",
  //   icon: <Assessment sx={iconColor} />,
  //   path: "/reports",
  // },
  {
    type: "divider",
    id: 17,
    icon: <Divider />,
  },
  {
    type: "listItem",
    id: 18,
    name: "System users",
    icon: <Person sx={iconColor} />,
    subItems: [
      {
        type: "listItem",
        id: 19,
        name: "Users",
        path: "/system_users",
      },
      {
        type: "listItem",
        id: 20,
        name: "Groups",
        path: "/system_users/groups",
      },
    ],
  },
  {
    type: "listItem",
    id: 21,
    name: "Logout",
    icon: <Logout sx={iconColor} />,
    path: "/logout",
  },
];

export { sidebarData };
