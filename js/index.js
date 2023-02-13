const Products = 
[
    {
        id:1,
        name: 'iPhone 11',
        price: '120.000',
        description: 'iphone-11',
        image: 'images/iphone-11.png'
    },
    {
        id:2,
        name: 'iPhone 12 pro',
        price: '150.000',
        description: 'iphone-12-pro',
        image: 'images/iphone-12-pro.png'
    },
    {
        id:3,
        name: 'iPhone 13 pro',
        price: '200.000',
        description: 'iphone-13-pro',
        image: 'images/iphone-13.png'
    },
]

const root = document.querySelector('#root');
const cart = []

const loadEvents = () =>
{
    const buttons = document.querySelectorAll('.button')
    for (const button of buttons) 
    {
        button.addEventListener('click', ()=> {
            const selectedProduct = Products.find(product => product.id === Number(button.id))
            if(selectedProduct){
                alert(`Se agregó al carrito el producto: ${selectedProduct.name}`)
                cart.push(selectedProduct)
            }
        })    
    }
}

const createProducts = () =>
{
    Products.forEach(product => {
        const card = document.createElement('div')
        card.innerHTML = `
            <img src='${product.image}' alt='${product.description}'>
            <h3>$${product.price}</h3>
            <h4>${product.description}</h4>
            <button id='${product.id}' class='button'>Agregar al carrito</button>
        `
        root.appendChild(card)
    });
    loadEvents()
}

createProducts()



