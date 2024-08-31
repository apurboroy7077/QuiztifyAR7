import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const mySwal = withReactContent(Swal);
export const successMessageAR7 = (maintext: string, subText: string) => {
  mySwal.fire({
    title: maintext,
    text: subText,
    icon: "success",
  });
};
export const failureMessageAR7 = (maintext: string, subText: string) => {
  mySwal.fire({
    title: maintext,
    text: subText,
    icon: "error",
  });
};
