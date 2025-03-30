// Task 1 - Set Up the Project Structure (all in HTML)

// Task 2 - Fetch Products with then.()
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

// Task 3 - Fetch Products with async/wait
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

// Task 4 - Display the Products 
function displayProducts(products) {
    const container = document.getElementById("product-container")
    products.slice(0,5).forEach(product => {
        const div = document.createElement("div")
        div.setAttribute("class","product-card")
        div.innerHTML = `<h3 class="name">${product.fields.name}</h3><p class="price">Price: $${product.fields.price}</p><img class="image" src="${product.fields.image[0].url}" width="100" height="100" alt="${product.fields.name}">`
        container.appendChild(div)
    })
}

// Task 5 - Reusable Error Handler
function handleError(error) {
    console.error(`An error occured:`, error.message)
}

// Task 6 - Call your Fetch Functions
fetchProductsThen()
fetchProductsAsync()
