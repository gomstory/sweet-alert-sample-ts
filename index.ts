// Import stylesheets
import "./style.css";
import swal from "sweetalert2";
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>ถอนเงิน</h1>`;

const btn = document.getElementById("btn");
btn.addEventListener("click", showDialog);

const btn_faild = document.getElementById("btn-withdraw-faild");
btn_faild.addEventListener("click", showFaildPopup);

const btn_confirm = document.getElementById("btn-confirmation-withdraw");
btn_confirm.addEventListener("click", showConfirmation);

function showDialog(): void {
  swal("ฝากเงินเรียบร้อย", "ยอดเงินคงเหลือ = 20,0000 บาท", "success");
}

function showFaildPopup(): void {
  swal("ผิดพลาด", "ยอดเงินในบัญชีไม่เพียงพอ", "error");
}

function showConfirmation(): void {
  swal({
    title: "ถอนเงิน",
    type: "warning",
    showConfirmButton: true,
    confirmButtonText: "ยืนยัน",
    showCancelButton: true,
    cancelButtonText: "ยกเลิก",
    html: `
          <p>ถอนเงินจากบัญชี</p>
          <p>858-49898-35 (K. Pathan Oman)</p>
          <p>เป็นจำนวนเงิน 10,000 บาท</p>
    `
  }).then(result => {
    console.log(result);
  });
}
