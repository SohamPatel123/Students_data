import {handleDelete} from "./deleteData.js";

// window.handle_delete = handleDelete;

export  function handleDataDisplay(filteredData, placeForData) {
    let finalDivString = '';
    for(let data in filteredData) {
        let subData = filteredData[data];
        let innerDivString = '';
        for(let items in subData)
        {
            if(items === 'image') {
                innerDivString = `<img src='${subData[items]}' class='profileImage'/>` + innerDivString;
            }
            else {
                innerDivString += `<p><b>${items} :</b> ${subData[items]}</p>`;
            }
        }
    finalDivString = finalDivString +  `<div class='profileCard'>${innerDivString}<button class='deleteButton'>DELETE</button></div>`;
    }
    placeForData.innerHTML = finalDivString;

    let delete_buttons = document.getElementsByClassName("deleteButton");
    for (let i = 0; i < delete_buttons.length; i++) {
        delete_buttons[i].addEventListener('click', handleDelete, false);
    }

}
