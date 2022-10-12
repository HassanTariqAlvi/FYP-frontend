import EditIcon from "@mui/icons-material/Edit";
import PaidIcon from "@mui/icons-material/Paid";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridActionsCellItem } from "@mui/x-data-grid";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const editDeleteButtons = (params, props) => {
  const { handleEdit, handleDelete, permissions } = props;
  let actions = [];
  if (permissions?.includes("change")) {
    actions.push(
      <GridActionsCellItem icon={<EditIcon color="primary" />} label="Edit" onClick={() => handleEdit(params)} />
    );
  }
  if (permissions?.includes("delete")) {
    actions.push(
      <GridActionsCellItem icon={<DeleteIcon color="error" />} label="Delete" onClick={() => handleDelete(params)} />
    );
  }
  return actions;
};

const approveRejectButtons = (params, props) => {
  return [
    <GridActionsCellItem
      icon={<CheckIcon color="success" />}
      label="Check"
      onClick={() => props.approveLoan(params)}
    />,
    <GridActionsCellItem icon={<CloseIcon color="error" />} label="Cross" onClick={() => props.rejectLoan(params)} />,
  ];
};

const salaryButtons = (params, props) => {
  let buttons = [];
  if (params.row.paid) {
    buttons.push(
      <GridActionsCellItem
        icon={<CreditScoreIcon color="success" sx={{ fontSize: "2rem" }} />}
        label="Check"
        disabled
      />
    );
  } else {
    buttons.push(
      <GridActionsCellItem
        icon={<PaidIcon color="warning" sx={{ fontSize: "2rem" }} />}
        label="Pay"
        onClick={() => props.handleEdit(params)}
      />
    );
  }
  return buttons;
};

const actionsColumn = (props) => {
  return {
    field: "operations",
    type: "actions",
    headerName: "Actions",
    flex: 1,
    minWidth: 150,
    getActions:
      props.mode === "buttons"
        ? (params) => editDeleteButtons(params, props)
        : props.mode === "salary_buttons"
        ? (params) => salaryButtons(params, props)
        : (params) => approveRejectButtons(params, props),
  };
};

export default actionsColumn;
