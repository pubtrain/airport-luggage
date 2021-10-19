let addButton = document.querySelector("#knapp");
let textInput = document.querySelector("#lista");
let queList = document.querySelector("#queList");

addButton.addEventListener("click", () => {
  if (textInput.value !== ""){
  let listPerson = document.createElement("li");
  listPerson.innerText = textInput.value;
  queList.appendChild(listPerson);
  textInput.value = "";
  } else {
    return null;
}});

let addVipButton = document.querySelector("#vip");

addVipButton.addEventListener("click", () => {
  if (textInput.value !== ""){
  let listPerson = document.createElement("li");
  listPerson.innerText = textInput.value;
  queList.prepend(listPerson);
  textInput.value = "";
  } else {
    return null;
}});

let removeButton = document.querySelector("#remove");

removeButton.addEventListener("click", () => {
let remove = document.querySelector("#queList");
remove.removeChild(remove.firstChild);
if(remove.firstChild == null) {
  alert("There's currently no people standing in line")
} else {
  return null;
}});