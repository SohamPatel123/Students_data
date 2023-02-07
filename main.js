import { StudentsData } from "./studentsData.js";
import {handleDataDisplay} from "./handleDataDisplay.js";

let displayData = document.getElementById('studentsDisplayData');
handleDataDisplay(StudentsData,displayData);

{
const openModalButton = document.getElementById("add_modal");
const modalWindowOverlay = document.getElementById("modal_overlay");

const showModalWindow = () => {
  modalWindowOverlay.style.display = 'flex';
}
openModalButton.addEventListener("click", showModalWindow);

const closeModalButton = document.getElementById("close-modal");
const cancelFormButton = document.getElementById("cancelFormButton")

const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none';
}

closeModalButton.addEventListener("click", hideModalWindow);
cancelFormButton.addEventListener("click", hideModalWindow);

const hideModalWindowOnBlur = (e) => {
    if(e.target === e.currentTarget) {
      console.log(e.target === e.currentTarget)
        hideModalWindow();
    }
}

modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur)
}