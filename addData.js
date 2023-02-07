import { StudentsData } from "./studentsData.js";
import {handleDataDisplay} from "./handleDataDisplay.js";

let add_button = document.getElementById('add_modal');
let displayData = document.getElementById('studentsDisplayData');

add_button.onclick = () => {
    
    document.getElementById('addDataForm').onsubmit = (event) => {
        event.preventDefault();
        StudentsData.push({
            "name": `${document.getElementById('formName').value}` || 'dummy doo',
            "address": `${document.getElementById('formAddress').value}` || 'ahmadabad, gujarat',
            "class": `${document.getElementById('formClass').value}` || '10',
            "image": `${document.getElementById('formPhoto').value}` || "./student_photo.png",
        });
        handleDataDisplay(StudentsData,displayData);
        document.getElementById("addDataForm").reset();
    }; 
    document.getElementById("addDataForm").reset();

}