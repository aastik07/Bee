// GET REQUEST
// Get / Read all products from the API

async function getProducts() {

    const response = await fetch(
        "https://fakestoreapi.com/products"
    );

    const data = await response.json();

    console.log("GET Response:");
    console.log(data);
}


// POST REQUEST
// Add a new product

async function addProduct() {

    const product = {
        title: "Wireless Headphones",
        price: 1999,
        category: "electronics"
    };

    const response = await fetch(
        "https://fakestoreapi.com/products",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(product)
        }
    );

    const data = await response.json();

    console.log("POST Response:");
    console.log(data);
}


// PUT REQUEST
// Completely update product with ID 1

async function updateProduct() {

    const product = {
        title: "Updated Product",
        price: 999,
        category: "electronics"
    };

    const response = await fetch(
        "https://fakestoreapi.com/products/1",
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(product)
        }
    );

    const data = await response.json();

    console.log("PUT Response:");
    console.log(data);
}


// PATCH REQUEST
// Update only the price of product with ID 1

async function updatePrice() {

    const product = {
        price: 1499
    };

    const response = await fetch(
        "https://fakestoreapi.com/products/1",
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(product)
        }
    );

    const data = await response.json();

    console.log("PATCH Response:");
    console.log(data);
}


// DELETE REQUEST
// Delete product with ID 1

async function deleteProduct() {

    const response = await fetch(
        "https://fakestoreapi.com/products/1",
        {
            method: "DELETE"
        }
    );

    const data = await response.json();

    console.log("DELETE Response:");
    console.log(data);
}