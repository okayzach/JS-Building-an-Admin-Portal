async function getBooks(){
    let response = await fetch('http://localhost:3001/listBooks/')
    let books = await response.json()
    books.forEach(createInput)
}

function createInput (book){
    let root = document.querySelector('#root')
    let li = document.createElement('li')
    li.textContent = book.title
    let quantity = document.createElement('input')
    quantity.textContent = book.quantity
    let button = document.createElement('button')
    button.textContent = 'Save'
    
    button.addEventListener('click', function(){
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })
    li.append(quantity, button)
    root.append(li)
}

getBooks()
