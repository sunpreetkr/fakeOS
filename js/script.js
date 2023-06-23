let computerApp = document.getElementById("computerApp");
let recycleApp = document.getElementById("recycleApp");
let chromeApp = document.getElementById("chromeApp");
let notepadApp = document.getElementById("notepadApp");

let computerModal = document.getElementById("computerModal");
let recycleModal = document.getElementById("recycleModal");
let chromeModal = document.getElementById("chromeModal");
let notepadModal = document.getElementById("notepadModal");

const modalArr = [computerModal,recycleModal,chromeModal, notepadModal];
let closeBtn = document.querySelectorAll(".modal__close");

function openModal(modalEl) {
  modalEl.style.display = "block";
}

function closeModal(modalEl) {
  modalEl.style.display = "none";
}

computerApp.addEventListener("click", () => {
  openModal(computerModal);
});

recycleApp.addEventListener("click", () => {
  openModal(recycleModal);
});

chromeApp.addEventListener("click", () => {
  openModal(chromeModal);
});

notepadApp.addEventListener("click", () => {
  openModal(notepadModal);
});

closeBtn.forEach((btn,index) => btn.addEventListener("click", () => {
   closeModal(modalArr[index]);
}))


function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const getCurrentDateTime = () => {
  let currentDateTime = new Date();
  let year = currentDateTime.getFullYear();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let month = months[currentDateTime.getMonth()];

  let date = currentDateTime.getDate();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 
  let day = days[currentDateTime.getDay()];
  let formattedDateTime = day+ " "+date+ " "+month+ " "+ formatDate(currentDateTime);
  document.getElementById("datetime").textContent = formattedDateTime;
};


setInterval(getCurrentDateTime, 1000);