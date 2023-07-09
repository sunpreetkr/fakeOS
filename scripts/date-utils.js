export function getCurrentDateTime(){
  const currentDateTime = new Date();
  const formattedDate =  currentDateTime.getUTCDate();
  const  formattedDay = new Intl.DateTimeFormat("en-US", { weekday: "short"}).format(currentDateTime);
  const  formattedMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format(currentDateTime);
  const formattedDateTime = formattedDay+ " " +formattedDate+" "+formattedMonth+ " "+currentDateTime.toLocaleTimeString('en-US');
  document.getElementById("datetime").textContent = formattedDateTime;
};
