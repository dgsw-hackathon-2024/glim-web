import Swal from "sweetalert2";

export class CustomSwal {
  private Toast = Swal.mixin({
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


  success(text: string) {
    this.Toast.fire({
      icon: "success",
      title: text,
    });
  }

  error(text: string) {
    this.Toast.fire({
      icon: "error",
      title: text,
    });
  }

}
