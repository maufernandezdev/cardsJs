const Products = []

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
                alert(`Se agregó al carrito el producto: ${selectedProduct.title}`)
                cart.push(selectedProduct)
            }
        })    
    }
}

const createProducts = () =>
{
    Products.forEach(product => {
        const card = document.createElement('div')
        if(product.category.includes('clothing')){
            card.innerHTML = `
                <img src='${product.image}' alt='${product.title}'>
                <h3>$${product.price}</h3>
                <h4>${product.title}</h4>
                <button id='${product.id}' class='button'>Agregar al carrito</button>
            `
            root.appendChild(card)
        }
    });
    loadEvents()
}

const getProducts = async () =>
{
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        Products.push(...data);
        createProducts()

    } catch (error) {
        console.log(error);
    }
}

getProducts()





