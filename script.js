document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const categoryFilter = document.getElementById("category-filter");

    
    fetch("products.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
           
            const categories = new Set(products.map(product => product.category));
            categories.forEach(category => {
                const option = document.createElement("option");
                option.value = category;
                option.textContent = category;
                categoryFilter.appendChild(option);
            });

            function displayProducts(filter = "all") {
                productList.innerHTML = ""; 
                products
                    .filter(product => filter === "all" || product.category === filter)
                    .forEach(product => {
                        const card = document.createElement("div");
                        card.className = "border rounded p-4 shadow-sm";
                        card.innerHTML = `
                            <img src="${product.imageurl}" alt="${product.name}" class="w-full h-40 object-cover rounded mb-4">
                            <h2 class="font-bold text-lg">${product.name}</h2>
                            <p class="text-sm text-gray-700">${product.description}</p>
                            <p class="text-blue-600 font-bold mt-2">${product.price}</p>
                        `;
                        productList.appendChild(card);
                    });
            }

           
            categoryFilter.addEventListener("change", () => {
                displayProducts(categoryFilter.value);
            });

            
            displayProducts();
        })
        .catch(error => console.error("Error loading products:", error));
});
