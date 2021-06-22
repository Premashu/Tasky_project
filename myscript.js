const taskcontainer=document.querySelector(".task_container");

const saveChanges=()=>{
    const taskData={
        id:`${Date.now()}`,  //IT Provide a unique id every milli second
        imageUrl:document.getElementById("imageurl").value,
        taskType:document.getElementById("Tasktype").value,
        taskTytle:document.getElementById("tasktitle").value,
        taskDescription:document.getElementById("Taskdescription").value,
    };
    
    const newCard=`
    <div class="col-md-6 col-lg-4" id=${taskData.id}>
    <div class="card text-center">
       <div class="card-header d-flex justify-content-end gap-2">
           <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
           <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
       </div>
       <img src=${taskData.imageUrl} class="card-img-top" alt="...">
       <div class="card-body ">
         <h5 class="card-title">${taskData.taskTytle}</h5>
         <p class="card-text">${taskData.taskDescription}</p>
         <a href="#" class="btn btn-primary float-start ">${taskData.taskType}</a>
       </div>
       <div class="card-footer text-muted ">
           <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
       </div>
     </div>
  </div>   
    `;
    taskcontainer.insertAdjacentHTML("beforeend",newCard);
};


