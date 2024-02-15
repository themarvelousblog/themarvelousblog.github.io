document.getElementById("show").addEventListener("click", () => {

    var password = document.getElementById("password")

    if(password.type == "password") {

        password.type = "text"
        return

    }
    password.type = "password"

})
document.getElementById("register").addEventListener("submit", event => {

    let data = new FormData(document.getElementById("register"))
    
    event.preventDefault()
    fetch("http://localhost:4000/api/register", {
        method: "post",
        credentials: "include",
        eaders: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    }).then(response => {
        response.json().then(body => {
            window.location.reload()
        })
    })

})