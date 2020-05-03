//añade nuevas tareas/ Creates new tasks    
const list = document.querySelector('#tasks-list ul');
const addForm = document.forms['add-task'];
const doneList = document.querySelector('#tasks-done-list ul');

function eTaskDone(event) {
   event.preventDefault;
   const li = event.target.parentElement;
   li.parentNode.removeChild(li);
   let newLi = li.cloneNode(true);
   //mejorar para que sea escalable
   const checkbox=Array.from(newLi.children)[0];
   newLi.removeChild(checkbox);
   doneList.appendChild(newLi);
};

addForm.addEventListener('submit', function (event) {
   event.preventDefault();
   const task = addForm.querySelector('#new-task').value;

   newLi = document.createElement('li');
   const newChkbox = document.createElement('input')
   newChkbox.className = 'chkboxDone';
   newChkbox.setAttribute('type', 'checkbox');
   newChkbox.addEventListener('change', (e) => eTaskDone(e));

   newLi.textContent = task;

   newLi.appendChild(newChkbox);
   list.appendChild(newLi);

   addForm.querySelector('#new-task').value = ""
});

let chkboxs = document.querySelectorAll('#tasks-list .chkboxDone');


Array.from(chkboxs).forEach(function (chkbox) {
   chkbox.addEventListener('change', (e) => eTaskDone(e))
});
