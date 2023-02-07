import {StudentsData} from './studentsData.js';
import {handleDataDisplay} from './handleDataDisplay.js';
import {handleSearch} from './searchData.js';

let displayData = document.getElementById('studentsDisplayData');

export function handleDelete(event) {
    let toBeDeleted = event.target.parentElement.childNodes;
    for(let ele = 0; ele < toBeDeleted.length; ele++)
    {
        let ans = StudentsData.filter((data)=>{
            let deleteName = toBeDeleted[ele].innerHTML.toLowerCase();
            let dataNames = data['name'].toLowerCase();
            return deleteName.includes(dataNames);
        })
        if(ans.length)
        {
            let indexOfDeletion = StudentsData.indexOf(ans[0]);
            StudentsData.splice(indexOfDeletion,1);
            handleDataDisplay(StudentsData, displayData);
            if(!document.getElementById('searchInput').value == '')
            {
                let dummyEvent = {target:{value:document.getElementById('searchInput').value}};
                handleSearch(dummyEvent);
                console.log(document.getElementById('searchInput').value);
            }

        }
    }
}
