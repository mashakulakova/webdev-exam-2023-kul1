'use strict';
function getRouts(){
    let xhr = new XMLHttpRequest();
    let url = "http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=2ca053e5-b869-454d-ada8-8b9b35315db5";
    xhr.open("GET", url, true);
    xhr.send();       
    xhr.onload = function() {       
        if (xhr.status === 200) {        
            let routes = JSON.parse(xhr.responseText); 
            displayRoutes(routes);  
        } else {
            console.error('Ошибка', xhr.status);   
        }
    };
    xhr.onerror = function() {     
        console.error('Ошибка');
    };
}

function displayRoutes(routes) {           
   let tableBody = document.getElementById('routes');     
   tableBody.innerHTML = "";                    
   for (let i = 0; i < routes.length; i++) {       
    tableBody.innerHTML += `<tr><td>${routes[i].name}</td>` +         
        `<td>${routes[i].description}</td>` +
        `<td>${routes[i].mainObject}</td>` +
        `<td><button>Выбрать</button></td>`;
    }
}

window.onload = (e) => {     
    getRouts();
};
