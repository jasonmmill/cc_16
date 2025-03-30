const BASE_URL = "https://www.course-api.com/javascript-store-products"

function fetchProductsThen() {
    return fetch(BASE_URL)
        .then (response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
            }
            return response.json()
        })
        .then(products => {
            products.forEach(product => {
                return console.log(`${product.fields.name}`)
            });
        })
        .catch(error => {
            console.error(`Fetch failed:`, error.message)
            throw error
        })
}

async function fetchProductsAsync() {
    try {
        const products = await fetch(BASE_URL)
        if (!products.ok) {
            throw new Error(`HTTP error: ${products.status}`)
        }
        const productsJSON = await products.json()
        displayProducts(productsJSON)
    } catch (error) {
        handleError(error)
    }
}

function displayProducts(products) {
    const container = document.getElementById("product-container")
    products.slice(0,5).forEach(product => {
        const div = document.createElement("div")
        div.setAttribute("class","product-card")
        div.innerHTML = `<h3 class="name">${product.fields.name}</h3><p class="price">Price: $${product.fields.price}</p><img class="image" src="${product.fields.image[0].url}" width="100" height="100" alt="${product.fields.name}">`
        container.appendChild(div)
    })
}

function handleError(error) {
    console.error(`An error occured:`, error.message)
}

fetchProductsThen()
fetchProductsAsync()
