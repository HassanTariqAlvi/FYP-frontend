import { configureStore } from '@reduxjs/toolkit'


import detailsReducer from 'features/Details/detailsSlice'
import snackbarReducer from 'features/Snackbar/snackbarSlice'
import dataTableReducer from 'features/DataTable/dataTableSlice'
import loanTableReducer from 'features/LoanTable/loanTableSlice'
import salaryTableReducer from 'features/SalaryTable/salaryTableSlice'
import employeeTableReducer from 'features/EmployeeTable/employeeTableSlice'
import authenticationReducer from 'features/Authentication/authenticationSlice'
import listItemSelectReducer from 'features/ListItemSelect/listItemSelectSlice'
import attendanceTableReducer from 'features/AttendanceTable/attendanceTableSlice'
import dailyWorkPrintDataReducer from 'features/DailyWorkPrintData/dailyWorkPrintDataSlice'


export const store = configureStore({
    reducer: {
        details: detailsReducer,
        snackbar: snackbarReducer,
        dataTable: dataTableReducer,
        loanTable: loanTableReducer,
        salaryTable: salaryTableReducer,
        employeeTable: employeeTableReducer,
        selectedIndex: listItemSelectReducer,
        authentication: authenticationReducer,
        attendanceTable: attendanceTableReducer,
        dailyWorkPrintData: dailyWorkPrintDataReducer,
    },
})