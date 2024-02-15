let post = async (lang, title) => {
    
    let comments = document.getElementById("comments")
    let response
    let body

    response = await fetch("http://localhost:4000/api/user", {
        method: "get",
        credentials: 'include'
    })
    body = await response.json()
    if(body) {
        comments.innerHTML += `<div class="card">
                                <form>
                                    <p><textarea name="text"></textarea/><br/></p>
                                    <p><input type="submit"/></p>
                                </form>
                            </div>`
    } else {
        comments.innerHTML += "<h3>Please login to comment</h3>"
    }
    response = await fetch("http://localhost:4000/api/comments?" + new URLSearchParams({
        language: lang,
        post: title
    }))
    body = await response.json()
    comments.innerHTML += "<h2 style=\"text-align: center\">Comments</h2>"
    if(!Array.isArray(body)) {
        comments.innerHTML += "<h3 style=\"text-align: center\">No comments found</h3>"
        return
    }
    body.forEach(i => {
        comments.innerHTML += `<div class="card">
                                    <h3 style="text-align: center">${i.username}</h3>
                                    <small>${i.timestamp}</small>
                                    <p>${i.text}</p>
                                </div>`
    });

}

export default post