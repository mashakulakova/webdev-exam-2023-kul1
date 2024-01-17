'use strict';
function getRouts(){
    let xhr = new XMLHttpRequest();
    let url = "http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=2ca053e5-b869-454d-ada8-8b9b35315db5";
    xhr.open("GET", url, true);
    xhr.send();           //Отправка запроса
    xhr.onload = function() {        //Обработка ответа сервера
        if (xhr.status === 200) {         //Обработка успешного ответа
            let routes = JSON.parse(xhr.responseText); 
            displayRoutes(routes);  // Вызов функции для отображения маршрутов в таблице
        } else {
            console.error('Ошибка', xhr.status);   //Обработка ошибок
        }
    };
    xhr.onerror = function() {     //Обработчик события ошибки при отправке запроса
        console.error('Ошибка');
    };
}

function displayRoutes(routes) {           // Вывод информации на страницу
   let tableBody = document.getElementById('routes');     //Получение ссылки на элемент в html
   tableBody.innerHTML = "";                    //Очистка от старых данных в таблице
   for (let i = 0; i < routes.length; i++) {      //Цикл для перебора массива routes и добавления данных в таблицу 
    tableBody.innerHTML += `<tr><td>${routes[i].name}</td>` +
        `<td>${routes[i].description}</td>` +
        `<td>${routes[i].mainObject}</td>` +
        `<td><button>Выбрать</button></td>`;
    }
}

window.onload = (e) => {     //Обработчик события для окна, вызывающий функцию getRoutes
    getRouts();
};
