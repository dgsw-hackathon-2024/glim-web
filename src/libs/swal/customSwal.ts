import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

class LawBotSwal {
  public successToast(tilte: string) {
    return Toast.fire("success", tilte);
  }
  public errorToast(title: string) {
    return Toast.fire("error", title);
  }
  public infoToast(title: string) {
    return Toast.fire("info", title);
  }
}

export default new LawBotSwal();
