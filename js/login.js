document.getElementById("show").addEventListener("click", () => {

    var password = document.getElementById("password")

    if(password.type == "password") {

        password.type = "text"
        return

    }
    password.type = "password"

})
document.getElementById("login").addEventListener("submit", event => {

    let data = new FormData(document.getElementById("login"))
    
    event.preventDefault()
    fetch("http://localhost:4000/api/login", {
        method: "post",
        credentials: "include",
        body: data
    }).then(response => {
        response.json().then(body => {
            sessionStorage.setItem("user", data.username)
            window.location.reload()
        })
    })

})