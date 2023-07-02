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

const resultBox = document.querySelector(".result-box");

export function searchInput(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = availableKeywords.filter((keyword) =>{
      return keyword.toLowerCase().startsWith(input.toLowerCase());
    })
  }
  display(result);
  if(!result.length){
    resultBox.innerHTML = '';
  }
}

export function display(result){
  const content = result.map((list) => {
    return "<li onclick = selectInput(this)>" + list + "</li>";
  });
  resultBox.innerHTML = "<ul>" + content.join('')+ "</ul>";
}

export function selectInput(list){
  inputBox.value =list.innerHTML;
  resultBox.innerHTML = '';
}