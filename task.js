// Global Variable and will create and empty array with name tasks

let tasks=[];

// AddTask Function
function addTask(){
const input = document.getElementById('taskInput');
const task = input.value.trim();
console.log(task);

if(task !=='')
{
    tasks.push(task);
    console.log(tasks);
    input.value='';
    displayTasks();
}
}
 function removeTask(index){
    tasks.splice(index,1);
    displayTasks();

}



// Display Tasks-
function displayTasks(){
    const taskList= document.getElementById('taskList');
    let html='';

    for(let i=0; i<tasks.length;i++){
        html += `
            <div class="task-item">
                <span class="task-text"> ${i+1}. ${tasks[i]}</span>    
           
            <div class="button-group">
            
            
            <button class="delete-btn" onclick="removeTask(${i})" >Delete </button>
            </div>
        
            </div>
        
        
        `;
    
    }



    taskList.innerHTML = html;

}