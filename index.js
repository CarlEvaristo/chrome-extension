// chrome://extensions/
let myArray = []

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtnEl = document.getElementById("delete-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (Boolean(leadsFromLocalStorage)) {
    myArray = leadsFromLocalStorage;
    renderLeads()
}

btnEl.addEventListener("click", function() { 
    myArray.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myArray))
    inputEl.value = ""
    renderLeads()
})

delBtnEl.addEventListener("click", function() {
    localStorage.removeItem("myLeads")
    myArray = []
    renderLeads()
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myArray.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='http://${myArray[i]}'>${myArray[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItems
}


