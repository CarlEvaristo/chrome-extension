// chrome://extensions/
let myLeads = []

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtnEl = document.getElementById("delete-btn")
const saveTab = document.getElementById("save-tab")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (Boolean(leadsFromLocalStorage)) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

btnEl.addEventListener("click", function() { 
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    render(myLeads)
})

delBtnEl.addEventListener("dblclick", function() {
    localStorage.removeItem("myLeads")
    myLeads = []
    render(myLeads)
})

saveTab.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })

})

