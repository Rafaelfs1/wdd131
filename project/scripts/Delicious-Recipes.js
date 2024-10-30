// Array of recipes
const recipes = [
    {
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
        category: "Italian",
        ingredients: [
            { item: "Spaghetti", quantity: "200g" },
            { item: "Pancetta", quantity: "100g" },
            { item: "Eggs", quantity: "2" },
            { item: "Parmesan cheese", quantity: "50g" },
            { item: "Black pepper", quantity: "to taste" }
        ],
        preparationMethod: "Cook pasta, mix with pancetta, eggs, and cheese.",
        prepTime: "20 minutes",
        imageUrl: "images/Spaghetti-Carbonara.webp", 
        loading: "lazy",
        rating: 4.5
    },
    {
        name: "Chicken Curry",
        description: "Rich and spicy chicken curry with coconut milk.",
        category: "Asian",
        ingredients: [
            { item: "Chicken breast", quantity: "300g" },
            { item: "Coconut milk", quantity: "200ml" },
            { item: "Curry powder", quantity: "2 tbsp" },
            { item: "Onion", quantity: "1, chopped" },
            { item: "Garlic", quantity: "2 cloves, minced" }
        ],
        preparationMethod: "Sauté ingredients, add chicken and coconut milk, simmer.",
        prepTime: "30 minutes",
        imageUrl: "images/Chicken-Curry.webp",
        loading: "lazy",
        rating: 4.7
    },
    {
        name: "Beef Stew",
        description: "Hearty beef stew with potatoes and carrots.",
        category: "American",
        ingredients: [
            { item: "Beef", quantity: "400g" },
            { item: "Potatoes", quantity: "2, cubed" },
            { item: "Carrots", quantity: "2, sliced" },
            { item: "Onion", quantity: "1, chopped" },
            { item: "Beef broth", quantity: "500ml" }
        ],
        preparationMethod: "Brown beef, add vegetables and broth, simmer until tender.",
        prepTime: "1 hour",
        imageUrl: "images/Beef-Stew.webp",
        loading: "lazy",
        rating: 4.6
    },
    {
        name: "Vegetable Stir-Fry",
        description: "Quick and colorful stir-fried vegetables with soy sauce.",
        category: "Asian",
        ingredients: [
            { item: "Bell peppers", quantity: "2, sliced" },
            { item: "Broccoli", quantity: "100g" },
            { item: "Carrot", quantity: "1, sliced" },
            { item: "Soy sauce", quantity: "2 tbsp" },
            { item: "Garlic", quantity: "1 clove, minced" }
        ],
        preparationMethod: "Stir-fry vegetables in oil, add soy sauce.",
        prepTime: "15 minutes",
        imageUrl: "images/Vegetable-Stir-Fry.webp",
        loading: "lazy",
        rating: 4.3
    },
    {
        name: "Grilled Cheese Sandwich",
        description: "Classic grilled cheese with cheddar on toasted bread.",
        category: "American",
        ingredients: [
            { item: "Bread", quantity: "2 slices" },
            { item: "Cheddar cheese", quantity: "50g" },
            { item: "Butter", quantity: "1 tbsp" }
        ],
        preparationMethod: "Butter bread, add cheese, grill until golden brown.",
        prepTime: "10 minutes",
        imageUrl: "images/Grilled-Cheese-Sandwich.webp",
        loading: "lazy",
        rating: 4.8
    },
    {
        name: "Avocado Toast",
        description: "Simple avocado on toasted bread with spices.",
        category: "Breakfast",
        ingredients: [
            { item: "Bread", quantity: "2 slices" },
            { item: "Avocado", quantity: "1, mashed" },
            { item: "Salt and pepper", quantity: "to taste" }
        ],
        preparationMethod: "Toast bread, top with avocado, season.",
        prepTime: "5 minutes",
        imageUrl: "images/Avocado-Toast.webp",
        loading: "lazy",
        rating: 4.2
    },
    {
        name: "Caesar Salad",
        description: "Fresh salad with romaine lettuce, croutons, and Caesar dressing.",
        category: "Salad",
        ingredients: [
            { item: "Romaine lettuce", quantity: "1 head" },
            { item: "Croutons", quantity: "50g" },
            { item: "Caesar dressing", quantity: "3 tbsp" },
            { item: "Parmesan cheese", quantity: "30g" }
        ],
        preparationMethod: "Mix all ingredients in a bowl, toss with dressing.",
        prepTime: "10 minutes",
        imageUrl: "images/Caesar-Salad.webp",
        loading: "lazy",
        rating: 4.4
    },
    {
        name: "Pancakes",
        description: "Fluffy pancakes with maple syrup.",
        category: "Breakfast",
        ingredients: [
            { item: "Flour", quantity: "1 cup" },
            { item: "Milk", quantity: "1 cup" },
            { item: "Egg", quantity: "1" },
            { item: "Baking powder", quantity: "1 tsp" },
            { item: "Salt", quantity: "1/4 tsp" }
        ],
        preparationMethod: "Mix ingredients, cook on a griddle until golden.",
        prepTime: "15 minutes",
        imageUrl: "images/Pancakes.webp",
        loading: "lazy",
        rating: 4.9
    },
    {
        name: "Tomato Soup",
        description: "Warm tomato soup with basil.",
        category: "Soups",
        ingredients: [
            { item: "Tomatoes", quantity: "400g, chopped" },
            { item: "Onion", quantity: "1, chopped" },
            { item: "Garlic", quantity: "2 cloves, minced" },
            { item: "Basil", quantity: "1 tbsp, chopped" },
            { item: "Vegetable broth", quantity: "500ml" }
        ],
        preparationMethod: "Simmer ingredients, blend, and serve warm.",
        prepTime: "30 minutes",
        imageUrl: "images/Tomato-Soup.webp",
        loading: "lazy",
        rating: 4.5
    },
    {
        name: "Baked Salmon",
        description: "Oven-baked salmon with herbs.",
        category: "Seafood",
        ingredients: [
            { item: "Salmon fillet", quantity: "200g" },
            { item: "Olive oil", quantity: "1 tbsp" },
            { item: "Lemon", quantity: "1, sliced" },
            { item: "Thyme", quantity: "1 tsp" },
            { item: "Salt and pepper", quantity: "to taste" }
        ],
        preparationMethod: "Brush salmon with oil, add seasonings, bake at 180°C for 15 minutes.",
        prepTime: "20 minutes",
        imageUrl: "images/Baked-Salmon.webp",
        loading: "lazy",
        rating: 4.7
    },
    {
        name: "Mango Smoothie",
        description: "Refreshing mango smoothie with yogurt and honey.",
        category: "Smoothie",
        ingredients: [
            { item: "Mango", quantity: "1, peeled and chopped" },
            { item: "Yogurt", quantity: "1/2 cup" },
            { item: "Honey", quantity: "1 tbsp" },
            { item: "Ice cubes", quantity: "4-5" }
        ],
        preparationMethod: "Blend all ingredients until smooth, serve chilled.",
        prepTime: "5 minutes",
        imageUrl: "images/Mango-Smoothie.webp",
        loading: "lazy",
        rating: 4.6
    },
    {
        name: "Quinoa Salad",
        description: "Healthy quinoa salad with mixed vegetables and a lemon dressing.",
        category: "Salad",
        ingredients: [
            { item: "Quinoa", quantity: "1 cup, cooked" },
            { item: "Cherry tomatoes", quantity: "100g, halved" },
            { item: "Cucumber", quantity: "1, diced" },
            { item: "Red onion", quantity: "1/2, chopped" },
            { item: "Lemon juice", quantity: "2 tbsp" }
        ],
        preparationMethod: "Mix all ingredients in a bowl and toss with lemon juice.",
        prepTime: "15 minutes",
        imageUrl: "images/Quinoa-Salad.webp",
        loading: "lazy",
        rating: 4.5
    },
    {
        name: "Stuffed Bell Peppers",
        description: "Baked bell peppers stuffed with rice, vegetables, and cheese.",
        category: "Vegetarian",
        ingredients: [
            { item: "Bell peppers", quantity: "4, tops removed" },
            { item: "Rice", quantity: "1 cup, cooked" },
            { item: "Corn", quantity: "1/2 cup" },
            { item: "Black beans", quantity: "1/2 cup" },
            { item: "Cheddar cheese", quantity: "50g, shredded" }
        ],
        preparationMethod: "Stuff peppers with filling, bake at 180°C for 25 minutes.",
        prepTime: "30 minutes",
        imageUrl: "images/Stuffed-Bell-Peppers.webp",
        loading: "lazy",
        rating: 4.4
    },
    {
        name: "Shrimp Tacos",
        description: "Grilled shrimp tacos with lime, avocado, and cilantro.",
        category: "Mexican",
        ingredients: [
            { item: "Shrimp", quantity: "200g, peeled and deveined" },
            { item: "Tortillas", quantity: "4" },
            { item: "Avocado", quantity: "1, sliced" },
            { item: "Lime", quantity: "1, cut into wedges" },
            { item: "Cilantro", quantity: "2 tbsp, chopped" }
        ],
        preparationMethod: "Grill shrimp, assemble tacos with toppings, and serve with lime.",
        prepTime: "20 minutes",
        imageUrl: "images/Shrimp-Tacos.webp",
        loading: "lazy",
        rating: 4.8
    },


    {
        name: "Banana Bread",
        description: "Moist and fluffy banana bread with walnuts and cinnamon.",
        category: "Breakfast",
        ingredients: [
            { item: "Bananas", quantity: "3, mashed" },
            { item: "Flour", quantity: "1.5 cups" },
            { item: "Sugar", quantity: "1/2 cup" },
            { item: "Walnuts", quantity: "1/2 cup, chopped" },
            { item: "Cinnamon", quantity: "1 tsp" }
        ],
        preparationMethod: "Mix all ingredients, bake at 175°C for 50 minutes.",
        prepTime: "1 hour",
        imageUrl: "images/Banana-Bread.webp",
        loading: "lazy",
        rating: 4.9
    },
    {
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu, seaweed, and green onions.",
        category: "Soups",
        ingredients: [
            { item: "Miso paste", quantity: "3 tbsp" },
            { item: "Tofu", quantity: "100g, cubed" },
            { item: "Green onions", quantity: "2, chopped" },
            { item: "Wakame seaweed", quantity: "1 tbsp" },
            { item: "Water", quantity: "500ml" }
        ],
        preparationMethod: "Dissolve miso in warm water, add tofu and seaweed, simmer.",
        prepTime: "10 minutes",
        imageUrl: "images/Miso-Soup.webp",
        loading: "lazy",
        rating: 4.6
    },
    {
        name: "Falafel Wrap",
        description: "Crispy falafel wrapped in pita bread with veggies and tahini sauce.",
        category: "Vetetarian",
        ingredients: [
            { item: "Falafel balls", quantity: "4-5" },
            { item: "Pita bread", quantity: "1" },
            { item: "Tomato", quantity: "1, sliced" },
            { item: "Lettuce", quantity: "1/2 cup, chopped" },
            { item: "Tahini sauce", quantity: "2 tbsp" }
        ],
        preparationMethod: "Wrap falafel and veggies in pita, drizzle with tahini sauce.",
        prepTime: "15 minutes",
        imageUrl: "images/Falafel-Wrap.webp",
        loading: "lazy",
        rating: 4.7
    }
];

/*---- slider -----------------------------------------------------*/

let currentSlide = 0;
// Add a random recipe
function getRandomRecipes() {
    const selectedRecipes = [];
    while (selectedRecipes.length < 5) {
        const randomIndex = Math.floor(Math.random() * recipes.length);
        if (!selectedRecipes.includes(recipes[randomIndex])) {
            selectedRecipes.push(recipes[randomIndex]);
        }
    }
    return selectedRecipes;
}

function renderSlides() {
    const recipeSlider = document.querySelector(".slides");
    const randomRecipes = getRandomRecipes();
    
    recipeSlider.innerHTML = randomRecipes.map(recipe => `
        <div class="slide" style="background-image: url('${recipe.imageUrl}'); background-size: cover; background-position: center;">
            <div class="text-slide">
                <h2>${recipe.name}</h2>
                <p></P>
                <p>${recipe.description}</p>
                <p><strong>Rating:</strong> ${recipe.rating} ⭐</p>
            </div>
        </div>
    `).join('');
}

function showSlide(index) {
    const slides = document.querySelector(".slides");
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : 4;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide < 4) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
    renderSlides();
    showSlide(currentSlide);
});

let slideInterval;

// Automatically change slides every 3 seconds
function startAutoplay() {
    slideInterval = setInterval(nextSlide, 3000);
}

// Stop autoplay on user interaction
function stopAutoplay() {
    clearInterval(slideInterval);
}

document.addEventListener("DOMContentLoaded", () => {
    renderSlides();
    showSlide(currentSlide);
    startAutoplay();

    const sliderContainer = document.querySelector(".slides");

    sliderContainer.addEventListener("mouseenter", stopAutoplay);
    sliderContainer.addEventListener("mouseleave", startAutoplay);
});
// --------------------------------------------------
// categories ---------------------------------------

// Function to get the top 5 most common categories
function getTopCategories() {
    const categoryCount = {};

    // Count occurrences of each category
    recipes.forEach(recipe => {
        categoryCount[recipe.category] = (categoryCount[recipe.category] || 0) + 1;
    });

    // Sort categories by frequency and get top 5
    return Object.entries(categoryCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(entry => entry[0]);
}

// Render top categories into the HTML section
function renderCategories() {
    const categoriesContainer = document.querySelector(".categories");
    if (!categoriesContainer) return;

    const topCategories = getTopCategories();

    categoriesContainer.innerHTML = topCategories.map(category => {
        // Get all recipes in this category and select a random one
        const categoryRecipes = recipes.filter(r => r.category === category);
        const recipeImage = categoryRecipes.length > 0
            ? categoryRecipes[Math.floor(Math.random() * categoryRecipes.length)].imageUrl // Random image from category
            : "images/default.jpg"; // Fallback image

        return `
            <div class="category-1"  style="background-image: url('${recipeImage}'); background-size: cover; background-position: center;">
               <a href="recipes.html" > ${category} </a>
            </div>
        `;
    }).join('');
}

// Render all recipes in the HTML section
function renderAllRecipes() {
    const recipesContainer = document.querySelector(".all-recipe");
    if (!recipesContainer) return;

    // Generate the HTML for recipe cards
    recipesContainer.innerHTML = recipes.map((recipe, index) => `
        <div class="recipe-card" data-index="${index}">
            <div class="recipe-image" style="background-image: url('${recipe.imageUrl}');" loading="${recipe.loading}"></div>
            <div class="recipe-details">
                <h2>${recipe.name}</h2>
                <p class="description">${recipe.description}</p>
                <p class="category"><strong>Category:</strong> ${recipe.category}</p>
                <p class="rating"><strong>Rating:</strong> ${recipe.rating}</p>
                <p class="prep-time"><strong>Prep Time:</strong> ${recipe.prepTime}</p>
                
                <!-- Ingredients List -->
                <ul class="ingredients">
                    <strong>Ingredients:</strong>
                    ${recipe.ingredients.map(ingredient => `
                        <li>${ingredient.quantity} of ${ingredient.item}</li>
                    `).join('')}
                </ul>

                <!-- Preparation Method -->
                <p class="preparation-method"><strong>Method:</strong> ${recipe.preparationMethod}</p>
            </div>
        </div>
    `).join('');

    // Add click event to each recipe card
    document.querySelectorAll(".recipe-card").forEach(card => {
        const recipeIndex = card.getAttribute("data-index");
        card.addEventListener("click", () => redirectToRecipe(recipes[recipeIndex]));
    });
}

// Function to redirect to recipe page and store recipe data in localStorage
function redirectToRecipe(recipe) {
    localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
    window.location.href = 'recipe.html';
}

// Call render functions when the document is loaded
document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderAllRecipes();
});








// nav categoria ----------------------

// Function to render the category navigation bar
function renderCategoryNav() {
    const navContainer = document.querySelector(".cat-nav");
    if (!navContainer) return;

    // Get unique categories from recipes
    const categories = ["All", ...new Set(recipes.map(recipe => recipe.category))];

    // Render category buttons
    navContainer.innerHTML = categories.map(category => `
        <button class="category-btn" data-category="${category}">${category}</button>
    `).join('');
    
    // Add event listeners to filter by category on button click
    document.querySelectorAll(".category-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const selectedCategory = event.target.getAttribute("data-category");
            filterRecipes(selectedCategory);
        });
    });
}

// Function to render recipes based on selected category
function renderAllRecipes(filteredRecipes) {
    const recipesContainer = document.querySelector(".all-recipe");
    if (!recipesContainer) return;

    // Clear existing content and render filtered recipes
    recipesContainer.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card">
            <div class="recipe-image" loanding="lazy" style="background-image: url('${recipe.imageUrl}');" loading="${recipe.loading}"></div>
            <div class="recipe-details">
                <h2>${recipe.name}</h2>
                <p class="description">${recipe.description}</p>
                <p class="category"><strong>Category:</strong> ${recipe.category}</p>
                <p class="rating"><strong>Rating:</strong> ${recipe.rating}</p>
                <p class="prep-time"><strong>Prep Time:</strong> ${recipe.prepTime}</p>
                
                <!-- Ingredients List -->
                <ul class="ingredients">
                    <strong>Ingredients:</strong>
                    ${recipe.ingredients.map(ingredient => `
                        <li>${ingredient.quantity} of ${ingredient.item}</li>
                    `).join('')}
                </ul>

                <!-- Preparation Method -->
                <p class="preparation-method"><strong>Method:</strong> ${recipe.preparationMethod}</p>
            </div>
        </div>
    `).join('');
}


// Function to filter recipes based on selected category
function filterRecipes(category) {
    const filteredRecipes = category === "All" 
        ? recipes 
        : recipes.filter(recipe => recipe.category === category);
    
    renderAllRecipes(filteredRecipes);
}

// Initial render of all recipes and category nav
document.addEventListener("DOMContentLoaded", () => {
    renderCategoryNav();
    renderAllRecipes(recipes); // Show all recipes initially
});

// footer ----------------------------------------
// insert the current year and de copyright symbol
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `&copy ${today.getFullYear()}</span>`;

// insert the date from the last modification was done
const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = lastModified;


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});



// --------------------------------------------
// search bar ---------------------------------
function searchRecipe() {
    const query = document.getElementById('searchInput').value;
    const resultsContainer = document.querySelector('.recipe-choose');

    // Filter recipes based on search query
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query.toLowerCase())
    );

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Display results
    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.innerHTML = `<h3>${recipe.name}</h3><p>${recipe.description}</p>`;
            resultsContainer.appendChild(recipeElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No recipes found.</p>';
    }
}

function redirectToRecipesPage() {
    const query = document.getElementById('searchInput').value;
    // Redirect to recipes.html with the search term as a URL parameter
    window.location.href = `recipes.html?search=${encodeURIComponent(query)}`;
}

// Add event listener to the input to trigger search as the user types
document.getElementById('searchInput').addEventListener('input', searchRecipe);





// form ---------------------------------------
// Function to handle recipe form submission
// Insert the recipe form into the .recipe-form container


document.getElementById("recipe-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form data
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const prepTime = document.getElementById("prepTime").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const rating = parseFloat(document.getElementById("rating").value);
    
    // Parse ingredients (format: quantity item)
    const ingredients = document.getElementById("ingredients").value
        .split("\n")
        .map(line => {
            const [quantity, ...itemParts] = line.trim().split(" ");
            return { quantity, item: itemParts.join(" ") };
        });
    
    const preparationMethod = document.getElementById("preparationMethod").value;

    // Create a new recipe object
    const newRecipe = {
        name,
        description,
        category,
        ingredients,
        preparationMethod,
        prepTime,
        imageUrl,
        loading: "lazy",
        rating
    };

    // Add new recipe to recipes array and render it
    recipes.push(newRecipe);
    renderAllRecipes(recipes);

    // Clear the form after submission
    document.getElementById("recipe-form").reset();
});
