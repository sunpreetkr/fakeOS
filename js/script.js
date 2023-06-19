let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName("close")[0];
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
let app = document.getElementById("notepadApp");
app.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);




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
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
 
  let day = days[currentDateTime.getDay()];
  let formattedDateTime = day+ " "+date+ " "+month+ " "+ formatDate(currentDateTime);
  document.getElementById("datetime").textContent = formattedDateTime;
};


setInterval(getCurrentDateTime, 1000);