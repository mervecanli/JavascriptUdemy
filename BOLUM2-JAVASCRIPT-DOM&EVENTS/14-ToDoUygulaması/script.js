"use strict";
let gorevListesi=[
    // {"id":1, "gorevAdi":"Görev 1", "durum":"pending", "tarih": null},
    // {"id":2, "gorevAdi":"Görev 2", "durum":"pending", "tarih": null},
    // {"id":3, "gorevAdi":"Görev 3", "durum":"pending", "tarih": null},
    // {"id":4, "gorevAdi":"Görev 4", "durum":"pending", "tarih": null},
    // {"id":5, "gorevAdi":"Görev 5", "durum":"pending", "tarih": null}
];

if(localStorage.getItem("gorevListesi") !== null) {
    gorevListesi = JSON.parse(localStorage.getItem("gorevListesi"));
}

const taskInput = document.getElementById("txtTaskName");
const filters = document.querySelectorAll(".filters span");
const filterButton = document.querySelector("#btnFilterTask"); 
filterButton.addEventListener("click", getTaskByFilter);

let isEditTask=false;
let editId;


displayTask("all");
document.getElementById("btnAddNewTask").addEventListener("click", newTaskAdd);
document.querySelector("#btnAddNewTask").addEventListener("keypress", function() {
    if(event.key == "Enter") {
        document.getElementById("btnAddNewTask").click();
    }
});

document.querySelector("#btnClear").addEventListener("click", clearAllTask);

function displayTask(filterStatus, filterText) {
    let ulTaskList = document.getElementById("task-list");
    ulTaskList.innerHTML="";
    if(gorevListesi.length==0) {
        ulTaskList.innerHTML="<p class='p-3 m-0'>Task list is empty.</p>";
    } else {
        for(let gorev of gorevListesi) {
            let queryExp;
            if(filterText != undefined){
                queryExp = gorev.durum==filterStatus && gorev.gorevAdi.includes(filterText) || (filterStatus == 'all' && gorev.gorevAdi.includes(filterText));
            } else {
                queryExp = gorev.durum==filterStatus || filterStatus == 'all';
            }

            if(queryExp) {
                let completed = gorev.durum == 'completed' ? 'checked' : "";
                let liNewTask = `
                    <li class="task list-group-item">
                        <div class="form-check">
                            <input type="checkbox" onclick="updateStatus(this)" id=${gorev.id} class="form-check-input" ${completed} /> 
                            <label for=${gorev.id} class="form-check-label ${completed}">${gorev.gorevAdi}</label>
                            <label for=${gorev.id} class="form-check-label completedDate">${gorev.tarih == null ? "" : gorev.tarih}</label>
                        </div>
                        <div class="dropdown">
                            <button type="button" id="dropdownMenuButton1" class="btn btn-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
                                <li><a onclick="editTask(${gorev.id}, '${gorev.gorevAdi}')" class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
                            </ul>
                        </div>
                    </li>
                `;
                ulTaskList.insertAdjacentHTML("beforeend", liNewTask);
            }
        }
    }
}

function newTaskAdd(event) {
    if(taskInput.value == "") {
        alert("Task name must be filled out.");
    } else {
        for(let gorev of gorevListesi) {
            if(gorev.gorevAdi == taskInput.value) {
                alert("Task name already exist.");
                return;
            } 
        }
        if(!isEditTask) { //ekleme
            gorevListesi.push({"id":gorevListesi.length+1, "gorevAdi":taskInput.value, "durum":"pending"});
        } else { //güncelleme
            for(let gorev of gorevListesi) {
                if(gorev.id == editId) {
                    gorev.gorevAdi=taskInput.value;
                }
                isEditTask=false;
            }
        }
        taskInput.value="";
        displayTask(document.querySelector("span.active").id);
        localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
    }
    event.preventDefault();
};

function deleteTask(id) {
    let deletedIndex;
    // for(let index in gorevListesi) {
    //     if(gorevListesi[index].id == id) {
    //         deletedIndex=index;
    //     }
    // }
   
    // deletedIndex = gorevListesi.findIndex(function(gorev) {
    //     return gorev.id == id;
    // });
    
    deletedIndex = gorevListesi.findIndex(gorev => gorev.id==id);

    gorevListesi.splice(deletedIndex, 1);
    displayTask(document.querySelector("span.active").id);
    localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
};

function editTask(taskId, taskName) {
    editId=taskId;
    isEditTask=true;
    taskInput.value=taskName;
    taskInput.focus();
    taskInput.classList.add("active");
};

function clearAllTask() {
    gorevListesi.splice(0, gorevListesi.length);
    localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
    displayTask(document.querySelector("span.active").id);
}

function updateStatus(selectedTask) {
    let label = selectedTask.nextElementSibling;
    let durum;
    let tarih;
    if(selectedTask.checked) {
        label.classList.add("checked");
        durum="completed";
        tarih=`${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
    } else {
        label.classList.remove("checked");
        durum="pending";
    }
    for(let gorev of gorevListesi) {
        if(gorev.id == selectedTask.id) {
            gorev.durum = durum;
            gorev.tarih = tarih;
        }
    }
    displayTask(document.querySelector("span.active").id);
    localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
}

for(let span of filters) {
    span.addEventListener("click", function() {
        document.querySelector("span.active").classList.remove("active");
        span.classList.add("active");
        displayTask(span.id);
    });
}

function getTaskByFilter() {
    let txtFilterName = document.querySelector("#txtFilterName");
    if(txtFilterName.value == ""){
        alert("Filter text must be filled out.");
    } else {
        displayTask(document.querySelector("span.active").id, txtFilterName.value);
    }
}