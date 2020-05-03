//añade nuevas tareas/ Creates new tasks    
const list=document.querySelector('#tasks-list ul');
const addForm=document.forms['add-task'];

addForm.addEventListener('submit',function(event){
   event.preventDefault();
   const task=addForm.querySelector('#new-task').value;
   
   const li= document.createElement('li');
   const chkbox=document.createElement('input')
   chkbox.setAttribute('type','checkbox');
   chkbox.className='chkbox';

   //chkbox.setAttribute('checked',true);
   
   li.textContent=task;
    
   li.appendChild(chkbox);
   list.appendChild(li);

   addForm.querySelector('#new-task').value=""
});

