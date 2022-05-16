let myArray = []
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

function clickHandler() {
    console.log("Button clicked!")
}

btnEl.addEventListener("click", function() { 
    myArray.push(inputEl.value);
    inputEl.value = ""
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

//     ulEl.textContent = ""
//     for (let i = 0; i < myArray.length; i++) {
//         const liEl = document.createElement("li")
//         const aEl = document.createElement("a")
//         aEl.textContent = myArray[i]
//         aEl.setAttribute("href", "https://" + myArray[i]) 
//         aEl.setAttribute("target", "_blank") 
//         liEl.append(aEl)
//         ulEl.append(liEl)
//     }

}
