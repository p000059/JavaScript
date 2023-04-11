const url = "https://jsonplaceholder.typicode.com/posts"

async function getAllPosts(){
    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    console.log(data)
}

getAllPosts()