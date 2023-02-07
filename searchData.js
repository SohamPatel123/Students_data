import { StudentsData } from "./studentsData.js";
import {handleDataDisplay} from "./handleDataDisplay.js";

let searchInput = document.getElementById("searchInput");
let studentsDataDisplay = document.getElementById("studentsDisplayData");

export function handleSearch(event) {

    let filteredData = StudentsData.filter((data)=> {
        let searchName = event.target.value.toLowerCase();
        let dataNames = data['name'].toLowerCase();
        return dataNames.includes(searchName);
    })
    if(event.target.value == '' || event.target.value == null || event.target.value == undefined)
        filteredData = StudentsData;
    handleDataDisplay(filteredData, studentsDataDisplay);
};

function debounce(func, timeout=1000) {
    let timeoutPeriod;
    return (...args) => {
        clearTimeout(timeoutPeriod);
        timeoutPeriod = setTimeout(() => {
            func.apply(this,args);
        },timeout)
    };
}

searchInput.onkeyup = debounce(handleSearch,1000);
searchInput.onclick = debounce(handleSearch,1000);                                          
