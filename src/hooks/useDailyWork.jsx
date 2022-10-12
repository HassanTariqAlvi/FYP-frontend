import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useComponent from "hooks/useComponent";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { getDailyWorkData } from "features/DailyWorkPrintData/dailyWorkPrintDataSlice";
import { getEmployeeTable, resetEmployeeTable } from "features/EmployeeTable/employeeTableSlice";

export const useDailyWork = (url) => {
  const axiosPrivate = useAxiosPrivate();
  const {
    put,
    details,
    errors,
    Delete,
    destroy,
    onChange,
    handleEdit,
    handleBack,
    clearErrors,
    handleDelete,
    updateErrors,
    updateDetails,
    ...component
  } = useComponent(url);
  const employeeData = useSelector((state) => state.employeeTable);
  const dispatch = useDispatch();
  const [units, setUnits] = useState([]);
  const [criteria, setCriteria] = useState([]);
  const [unitPrices, setUnitPrices] = useState([]);

  useEffect(() => {
    dispatch(getDailyWorkData({ ...details, name: employeeData?.Name }));
  }, [details]);

  useEffect(() => {
    filterUnits();
  }, [unitPrices]);

  useEffect(() => {
    if (details?.unit) {
      filterCriteria();
    }
  }, [details?.unit]);

  useEffect(() => {
    if (details?.unit && details?.criteria) {
      filterUnitPrice();
    }
  }, [details?.unit, details?.criteria]);

  useEffect(() => {
    if (details?.price_per_unit) {
      calculateTotalAmount();
    }
  }, [details?.total_pieces]);

  const filterUnits = () => {
    const units = unitPrices.map((item) => {
      return {
        id: item.id,
        name: item.unit,
      };
    });
    let unique_units = [...new Map(units.map((item) => [item["name"], item])).values()];
    setUnits(unique_units);
  };

  const filterCriteria = () => {
    const filtered_data = unitPrices.filter((item) => item.unit === details.unit);
    const criteria = filtered_data.map((item) => {
      return {
        id: item.id,
        name: item.criteria,
        quantity: item.quantity,
      };
    });
    setCriteria(criteria);
  };

  const filterUnitPrice = () => {
    const instance = unitPrices.filter((item) => item.unit === details.unit && item.criteria === details.criteria)[0];
    updateDetails({ ...details, price_per_unit: instance.price / instance.quantity });
  };

  const calculateTotalAmount = () => {
    updateDetails({
      ...details,
      total_amount: Math.round(details.price_per_unit * details.total_pieces) || 0,
    });
  };

  const getData = async () => {
    if (details !== null && details?.employee !== "") {
      try {
        const response = await axiosPrivate.get(url.add_daily_work.replace("id", details.employee));
        const { employee_data, unit_prices } = response.data;
        dispatch(getEmployeeTable(employee_data));
        setUnitPrices(unit_prices);
        updateDetails({ ...details, department: employee_data.Department });
        clearErrors();
      } catch (error) {
        updateErrors({ employee: error.response.data.detail });
        dispatch(resetEmployeeTable());
      }
    }
  };

  const post = async (event) => {
    component.post(event, null, false, () => {
      window.frames[0].print();
    });
  };

  return {
    put,
    post,
    errors,
    Delete,
    details,
    getData,
    destroy,
    onChange,
    units,
    criteria,
    handleEdit,
    handleBack,
    handleDelete,
  };
};
