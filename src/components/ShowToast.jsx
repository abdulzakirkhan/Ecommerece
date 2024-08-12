import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const ShowToast = (text) => {
  Toastify({
    text: text,
    duration: 2000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
};

export default ShowToast;
