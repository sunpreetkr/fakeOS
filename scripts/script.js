import {getCurrentDateTime} from './date-utils.js';
import {openModal, closeModal} from './dom-utils.js';


let availableKeywords = [
  'Melbourne',
  'Sydney',
  'Brisbane',
  'Canberra',
  'Adelaide',
  'Perth',
  'Gold Coast',
  'Darwin',
  'Hobart',
  'Cairns',
  'Bendigo',
  'Mount Gambier'
];
const inputBox = document.getElementById("input-box");
const resultBox = document.querySelector(".result-box");

inputBox.onkeyup =  function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = availableKeywords.filter((keyword) =>{
      return keyword.toLowerCase().includes(input.toLowerCase());
    })
  }
  display(result);
  if(!result.length){
    resultBox.innerHTML = '';
  }
}

 function display(result){
  const content = result.map((list) => {
    return "<li onclick = selectInput(this)>" + list + "</li>";
  });
  resultBox.innerHTML = "<ul>" + content.join('')+ "</ul>";
}

 function selectInput(list){
  inputBox.value =list.innerHTML;
  resultBox.innerHTML = '';
}

const notesContainer = document.querySelector(".notes-container");
const createNotesBtn = document.querySelector(".notesBtn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
  localStorage.setItem("notes",notesContainer.innerHTML);
}

createNotesBtn.addEventListener("click", ()=>
{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable","true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }
  else if (e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
})

document.addEventListener("keydown", event => {
  if(event.key == "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
    
  }
})





const computerModal = document.getElementById("computerModal");
const recycleModal = document.getElementById("recycleModal");
const chromeModal = document.getElementById("chromeModal");
const notesModal = document.getElementById("notesModal");
const imageFolderModal = document.getElementById("imageFolderModal");

const modalArr = [computerModal, imageFolderModal, recycleModal,chromeModal, notesModal];
const closeBtn = document.querySelectorAll(".modal__close");
const appBtn = document.querySelectorAll(".icon__image");


closeBtn.forEach((btn,index) => btn.addEventListener("click", () => {
   closeModal(modalArr[index]);
}))

appBtn.forEach((btn,index) => btn.addEventListener("click", () => {
  openModal(modalArr[index]);
}))


getCurrentDateTime();


setInterval(getCurrentDateTime, 1000);