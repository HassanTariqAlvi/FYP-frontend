import Loan from "./Loan/Loan";
import User from "./User/User";
import Roles from "./Roles/Roles";
import UnitsHome from "./UnitsHome";
import Salary from "./Salary/Salary";
import Groups from "./Groups/Groups";
import ReportsHome from "./ReportsHome";
import OverTime from "./OverTime/OverTime";
import Logout from "./Authentication/Logout";
import UnitPrice from "./UnitPrice/UnitPrice";
import Dashboard from "./Dashboard/Dashboard";
import DailyWork from "./DailyWork/DailyWork";
import Attendance from "./Attendance/Attendance";
import Department from "./Department/Department";
import UnitDetail from "./UnitDetail/UnitDetail";
import EmployeeType from "./EmployeeType/EmployeeType";
import LoanRecovery from "./LoanRecovery/LoanRecovery";
import EmployeeDetail from "./EmployeeDetail/EmployeeDetail";
import MeasureCriteria from "./MeasureCriteria/MeasureCriteria";

const Pages = [
  {
    id: 2,
    path: "/",
    name: <Dashboard />,
  },
  {
    id: 3,
    path: "/hrm/employee/details/*",
    name: <EmployeeDetail />,
  },
  {
    id: 4,
    path: "/hrm/employee/attendance/*",
    name: <Attendance />,
  },
  {
    id: 5,
    path: "/hrm/loan/*",
    name: <Loan />,
  },
  {
    id: 7,
    path: "/hrm/employee/employee_type/*",
    name: <EmployeeType />,
  },
  {
    id: 8,
    path: "/hrm/departments/*",
    name: <Department />,
  },
  {
    id: 9,
    path: "/hrm/salary/*",
    name: <Salary />,
  },
  {
    id: 11,
    path: "/daily_work/*",
    name: <DailyWork />,
  },
  {
    id: 12,
    path: "units/unit_details/*",
    name: <UnitDetail />,
  },
  {
    id: 13,
    path: "units/unit_prices/*",
    name: <UnitPrice />,
  },
  {
    id: 14,
    path: "units/measure_criteria/*",
    name: <MeasureCriteria />,
  },
  {
    id: 16,
    path: "/system_users/*",
    name: <User />,
  },
  {
    id: 17,
    path: "/hrm/loan_recovery/*",
    name: <LoanRecovery />,
  },
  {
    id: 76,
    path: "/logout",
    name: <Logout />,
  },
  {
    id: 78,
    path: "/reports",
    name: <ReportsHome />,
  },
  {
    id: 65,
    path: "/hrm/employee/roles/*",
    name: <Roles />,
  },
  {
    id: 66,
    path: "/system_users/groups/*",
    name: <Groups />,
  },
  {
    id: 67,
    path: "/hrm/employee/overtime/*",
    name: <OverTime />,
  },
  {
    id: 68,
    path: "/units",
    name: <UnitsHome />,
  },
];

export default Pages;
