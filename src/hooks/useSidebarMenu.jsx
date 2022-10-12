import { useMemo } from "react";
import { Divider } from "@mui/material";
import { Dashboard, Logout, Mail, Person, Inventory } from "@mui/icons-material";

import useAuth from "./useAuth";

const iconColor = { color: "#FFAE0D" };

const useSidebarMenu = () => {
  const { auth } = useAuth();
  const sidebarData = useMemo(() => {
    return [
      {
        type: "listItem",
        id: 1,
        name: "Dashboard",
        icon: <Dashboard sx={iconColor} />,
        path: "/",
        permission: true,
      },
      {
        type: "listItem",
        id: 2,
        name: "Daily Work",
        icon: <Mail sx={iconColor} />,
        path: "/daily_work",
        permission: auth?.permissions?.dailywork,
      },
      {
        type: "listItem",
        id: 3,
        name: "HRM",
        icon: <Person sx={iconColor} />,
        permission:
          auth?.permissions?.employee ||
          auth?.permissions?.attendance ||
          auth?.permissions?.employeetype ||
          auth?.permissions?.role ||
          auth?.permission.salary ||
          auth?.permission.loan ||
          auth?.permission.department,
        subItems: [
          {
            type: "listItem",
            id: 4,
            name: "Employees",
            permission:
              auth?.permissions?.employee ||
              auth?.permissions?.attendance ||
              auth?.permissions?.employeetype ||
              auth?.permissions?.role,
            subItems: [
              {
                type: "listItem",
                id: 5,
                name: "Employee details",
                path: "/hrm/employee/details",
                permission: auth?.permissions?.employee,
              },
              {
                type: "listItem",
                id: 6,
                name: "Attendance",
                path: "/hrm/employee/attendance",
                permission: auth?.permissions?.attendance,
              },
              {
                type: "listItem",
                id: 7,
                name: "Employee type",
                path: "/hrm/employee/employee_type",
                permission: auth?.permissions?.employeetype,
              },
              {
                type: "listItem",
                id: 8,
                name: "Roles",
                path: "/hrm/employee/roles",
                permission: auth?.permissions?.role,
              },
            ],
          },
          {
            type: "listItem",
            id: 9,
            name: "Salaries",
            path: "hrm/salary",
            permission: auth?.permissions?.salary,
          },
          {
            type: "listItem",
            id: 10,
            name: "Loan",
            path: "/hrm/loan",
            permission: auth?.permissions?.loan,
          },
          {
            type: "listItem",
            id: 11,
            name: "Departments",
            path: "/hrm/departments",
            permission: auth?.permissions?.department,
          },
        ],
      },
      {
        type: "listItem",
        id: 12,
        name: "Units",
        icon: <Inventory sx={iconColor} />,
        permission: auth?.permissions?.unit || auth?.permissions?.unitprice || auth?.permissions?.measurecriteria,
        subItems: [
          {
            type: "listItem",
            id: 13,
            name: "Unit details",
            path: "units/unit_details",
            permission: auth?.permissions?.unit,
          },
          {
            type: "listItem",
            id: 14,
            name: "Unit prices",
            path: "units/unit_prices",
            permission: auth?.permissions?.unitprice,
          },
          {
            type: "listItem",
            id: 15,
            name: "Measure criteria",
            path: "units/measure_criteria",
            permission: auth?.permissions?.measurecriteria,
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
        permission: auth?.permissions?.user || auth?.permissions.group,
        subItems: [
          {
            type: "listItem",
            id: 19,
            name: "Users",
            path: "/system_users",
            permission: auth?.permissions?.user,
          },
          {
            type: "listItem",
            id: 20,
            name: "Groups",
            path: "/system_users/groups",
            permission: auth?.permissions?.group,
          },
        ],
      },
      {
        type: "listItem",
        id: 21,
        name: "Logout",
        icon: <Logout sx={iconColor} />,
        path: "/logout",
        permission: true,
      },
    ];
  }, []);
  return sidebarData;
};

export default useSidebarMenu;
