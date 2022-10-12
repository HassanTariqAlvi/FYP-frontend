import useComponent from "./useComponent";

const useEmployeeDetail = (url) => {
  const {
    errors,
    Delete,
    destroy,
    details,
    onChange,
    Snackbar,
    handleEdit,
    handleBack,
    clearErrors,
    handleDelete,
    updateErrors,
    updateDetails,
    handleImageChange,
    ...component
  } = useComponent(url);

  const detailsToFormData = () => {
    let formData = new FormData();
    if (details) {
      if (details?.image) {
        const { image, imagePath, ...rest } = details;
        if (image && typeof image === "object") formData.append("image", image, details?.cnic);
        Object.entries(rest).forEach(([key, value]) => {
          formData.append(key, value);
        });
      } else {
        Object.entries(details).forEach(([key, value]) => {
          formData.append(key, value);
        });
      }
    }
    return formData;
  };
  const post = (event) => {
    const formData = detailsToFormData();
    component.post(event, formData, true);
  };

  const put = (event) => {
    const formData = detailsToFormData();
    component.put(event, formData, true);
  };
  return {
    put,
    errors,
    Delete,
    destroy,
    details,
    onChange,
    Snackbar,
    handleEdit,
    handleBack,
    clearErrors,
    handleDelete,
    updateErrors,
    updateDetails,
    handleImageChange,
    post,
  };
};

export default useEmployeeDetail;
