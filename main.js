const block = document.querySelector('.block')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

let count = 0

const getTodos = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
            `
        })
}

nextBtn.onclick = () => {
    count++
    getTodos()
}

prevBtn.onclick = () => {
    if (count > 0) {
        count--
        getTodos()
    }else {
        block.innerHTML = `
            <h3>Click Next</h3>>
        `
    }
}


//fetch() to /posts

const data = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })