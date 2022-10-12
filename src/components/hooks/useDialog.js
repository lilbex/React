import swal from "sweetalert";
import { toast } from "react-toastify";

/**
 * Represents a React hook to show a delete dialog box.
 *
 */
 const dismissToast = () => {
  toast.dismiss();
};


export default function useDialog() {
  const deleteItemId = (handleDelete, id) => {
    swal({
      title: "Are you sure",
      text: `You want to delete? process cannot be reversed`,
      icon: "warning",
      buttons: {
        none: {
          text: "cancel",
          className: "cancel",
          value: null,
        },
        confirm: {
          text: "delete",
          value: true,
          closeModal: false,
          className: "confirm--delete",
        },
      },
    }).then((value) => {
      if (value) {
        handleDelete(id)
          .then(() => {
            swal.stopLoading();
            swal.close();
            toast.success("Deleted successfully",{
              autoClose: 3000,
              onClose: dismissToast,
            });
          })
          .catch((err) => {
            swal.stopLoading();
            swal.close();
            toast.error(err?.response?.data?.message || "Could not delete",{
              autoClose: 3000,
              onClose: dismissToast,
            });
          });
      } else {
        swal.stopLoading();
        swal.close();
      }
    });
  };
  return  {deleteItemId}
}
