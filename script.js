// bismillah
let ellistUser = document.querySelector("#user_list")
let showUserBtn = document.querySelector("#shower")
let elForm = document.querySelector("form")
let elCreateBtn = document.querySelector("#createBtn")
let elCloserBtn = document.querySelector("#closerBtn")
let logOutBtn = document.querySelector("#logOutBtn")
// import { Api } from "./data.js"

let token = localStorage.getItem("token") || false
if(!token){
    window.location.replace("login.html")
}

logOutBtn.addEventListener("click", (evt) => {
    window.location.replace("login.html")
    localStorage.removeItem("token")
})

// shower adding panel
showUserBtn.addEventListener("click", (evt) => {
    elForm.setAttribute("style", "display: flex")
})

// closer adding panel
elCloserBtn.addEventListener("click", (evt) => {
    elForm.setAttribute("style", "display: none")
})


elForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let {user_name, user_id, user_date, user_parent, user_city} = evt.target.elements
    
    createPost (user_name.value, user_id.value, user_date.value, user_parent.value, user_city.value,)
    // let Obj = {
    //     name: user_name.value,
    //     id: user_id.value ,
    //     address: {
    //         zipcode: user_date.value,
    //         city: user_city.value
    //     },
    //     username: user_parent.value
    // }
    
    // let result = await Api.POST("users", Obj)
    
    // if (result) {
    //     let userData = await Api.POST("users")
    //     let newData = [result, ...userData]
    
    
    //     elForm.setAttribute("style", "display: none")
    //     alert("New user added")
    //     console.log(result);
    // }
})

async function createPost (name, id, zipcode, username, city){
    let created = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST", 
    body: JSON.stringify({
        name: name,
        id: id ,
        address: {
            zipcode: zipcode,
            city: city
        },
        username: username
    }),
    headers: {"Content-type": "application/json"}
})
.then((res) => res.json())
.then((json) => json);

console.log(created);
}

// Rendering users
async function userRenderFunc (elem) {
    // fetching
    let userData = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json => json)
    
    // Creating users
    if (userData) {
        userData.forEach(user => {
            // Creating elements
            let newTr = document.createElement("tr")
            let newTh = document.createElement("th")
            let newPng = document.createElement("img")
            let newInput = document.createElement("input")
            let newTd = document.createElement("td")
            let newTd2 = document.createElement("td")
            let newTd3 = document.createElement("td")
            let newTd4 = document.createElement("td")
            let newTd5 = document.createElement("td")
            let newTd6 = document.createElement("td")
            let newTd7 = document.createElement("td")
            let newTd8 = document.createElement("td")
            let newA = document.createElement("a")
            let newA2 = document.createElement("a")
            let newImg = document.createElement("img")
            let newImg2 = document.createElement("img")
            let newGrade = document.createElement("p")
            let newDelBtn = document.createElement("button")
            
            // Setting attributes
            newTh.setAttribute("scope", "row")
            newTh.setAttribute("style", "display: flex; gap: 10px; align-items: center;")
            newPng.setAttribute("src", "./images/placeholder.png")
            newInput.setAttribute("type", "checkbox")
            newA.setAttribute("href", "user.phone")
            newA2.setAttribute("href", "user.email")
            newGrade.setAttribute("style", "padding: 7px 23px; margin: 0 0 0 0; width: 80px; height: 40px; background: #FB7D5B; border-radius: 40px;")
            newImg.setAttribute("src", "./images/Phone.svg")
            newImg2.setAttribute("src", "./images/Mail.svg")
            newDelBtn.setAttribute("class", "btn btn-secondary")
            
            // Adding textcontents
            newTd.textContent = user.name
            newTd2.textContent = user.id
            newTd3.textContent = user.address.zipcode
            newTd4.textContent = user.username
            newTd5.textContent = user.address.city
            newGrade.textContent = "VII A"
            newDelBtn.textContent = "Delete User"
            
            // Appending elements
            newTh.append(newInput, newPng, newTd)
            newA.append(newImg)
            newA2.append(newImg2)
            newTd6.append(newA, newA2)
            newTd7.append(newGrade)
            newTd8.append(newDelBtn)
            newTr.append(newTh, newTd2, newTd3, newTd4, newTd5, newTd6, newTd7, newTd8, newDelBtn)
            elem.appendChild(newTr)
            
            // Delete
            newDelBtn.addEventListener("submit", () => {
                Api.DELETE()
            })
        })
    }
}

userRenderFunc (ellistUser)