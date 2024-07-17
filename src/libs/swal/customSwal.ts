import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

class LawBotSwal {
  public successToast(tilte: string) {
    Toast.fire({
      icon: "success",
      title: tilte,
    });
  }
  public errorToast(title: string) {
    Toast.fire({
      icon: "error",
      title: title,
    });
  }
  public infoToast(title: string) {
    Toast.fire({
      icon: "info",
      title: title,
    });
  }
}

export default new LawBotSwal();
