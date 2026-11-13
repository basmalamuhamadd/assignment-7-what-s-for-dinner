// Many meals -> Array | One meal -> Object | Meal details -> Properties
const meals = [
  {
    title: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    difficulty: "Easy",
    cuisine: "Italian",
    rating: 4.5,
    reviews: 189,
    prep: "10 min",
    cook: "5 min",
    servings: "2 people",
    image: " https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop", 
    ingredients: ["1 ciabatta bread", "200g fresh mozzarella, sliced", "2 large tomatoes, sliced", "Fresh basil leaves", "3 tablespoons pesto", "2 tablespoons balsamic glaze", "Olive oil", "Salt and pepper"],
    steps: ["Slice ciabatta bread in half horizontally.", "Toast bread lightly until just crispy.", "Spread pesto on both sides of bread.", "Layer mozzarella slices, tomato slices, and fresh basil leaves.", "Drizzle with olive oil and balsamic glaze. Season with salt and pepper."],
    nutrition: [["Calories", "480 kcal", "bi-fire", "#e8731a"], ["Protein", "22g", "bi-lightning-charge-fill", "#2f6fe4"], ["Carbohydrates", "48g", "bi-flower1", "#c9a227"], ["Fat", "22g", "bi-droplet-fill", "#e0483e"], ["Fiber", "3g", "bi-flower2", "#2e9d5b"], ["Sodium", "680mg", "bi-box-seam-fill", "#c2417a"]],
    tips: ["Use ripe, in-season tomatoes for best flavor", "Buffalo mozzarella is traditional but harder to slice", "Toast bread lightly - not too crispy", "Add prosciutto or salami for a heartier sandwich"]
  },
  {
    title: "Shrimp Scampi",
      description: "Garlicky shrimp in white wine butter sauce",
      difficulty: "Easy",
      cuisine: "Seafood",
      rating: 4.8,
      reviews: 356,
      prep: "10 min",
      cook: "15 min",
      servings: "2 people",
      image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop", 
      ingredients: ["400g  large shrimp, peeled "," 300g linguine pasta","6 cloves garlic, minced","1/2 cup white wine ","4 tablespoons butter ", " 2 tablespoons olive oil", "Fresh parsley, chopped", "Lemon juice and zest ", "Red pepper flakes "],
      steps: ["Cook linguine according to package directions. Reserve 1 cup pasta water.","Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.","Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.", "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.", "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.","Garnish with parsley, lemon zest, and serve immediately."],
      nutrition: [["Calories", "520 kcal", "bi-fire", "#e8731a"], ["Protein", "36g", "bi-lightning-charge-fill", "#2f6fe4"], ["Carbohydrates", "52g", "bi-flower1", "#c9a227"], ["Fat", "18g", "bi-droplet-fill", "#e0483e"], ["Fiber", "4g", "bi-flower2", "#2e9d5b"], ["Sodium", "610mg", "bi-box-seam-fill", "#c2417a"]],
      tips: ["Drain excess fat from beef for healthier tacos", "Warm shells in oven for better texture.", "Prepare all toppings before cooking beef.","Use ground turkey for a lighter option"]
  
  },
  {
    title: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    difficulty: "Easy",
    cuisine: "seafood",
    rating: 4.9,
    reviews: 189,
    prep: "10 min",
    cook: "15 min",
    servings: "2 person",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop", 
    ingredients: ["2 salmon fillets (6oz each) ", "3 tablespoons honey", " 2 tablespoons soy sauce", " 4 cloves garlic, minced", "1 tablespoon olive oil", "1 teaspoon fresh ginger, grated", 
"Sesame seeds for garnish " , "Green onions, sliced "],
    steps: ["Pat salmon fillets dry with paper towels. Season with salt and pepper. ","In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger."," In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.","Heat olive oil in a large skillet over medium-high heat.","Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden. ","Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.","Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice. "],
    nutrition: [["Calories", "350 kcal", "bi-fire", "#e8731a"], ["Protein", "39g", "bi-lightning-charge-fill", "#2f6fe4"], ["Carbohydrates", "30g", "bi-flower1", "#c9a227"], ["Fat", "14g", "bi-droplet-fill", "#e0483e"], ["Fiber", "0g", "bi-flower2", "#2e9d5b"], ["Sodium", "728mg", "bi-box-seam-fill", "#c2417a"]],
    tips: [" Don't overcook salmon - it should be slightly pink in the center", "Use wild-caught salmon for best flavor and nutrition", "Let the sauce caramelize slightly for deeper flavor"]
  },
  {
    title: "Beef Tacos",
    description: "Flavorful Mexican tacos with seasoned ground beef",
    difficulty: "Easy",
    cuisine: "american",
    rating: 4.7,
    reviews: 256,
    prep: "15 min",
    cook: "20 min",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    ingredients: ["500g ground beef","8 taco shells","1 onion, diced","2 tablespoons taco seasoning","Shredded lettuce", "Diced tomatoes", "Shredded cheese", "Sour cream", "Salsa"],
    steps: ["Add diced onion and cook until softened, about 5 minutes.","Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.","Warm taco shells according to package directions.", "Fill each shell with seasoned beef.", "Serve with your favorite toppings.","Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."],
    nutrition: [["Calories", "420 kcal", "bi-fire", "#e8731a"], ["Protein", "26g", "bi-lightning-charge-fill", "#2f6fe4"], ["Carbohydrates", "32g", "bi-flower1", "#c9a227"], ["Fat", "18g", "bi-droplet-fill", "#e0483e"], ["Fiber", "4g", "bi-flower2", "#2e9d5b"], ["Sodium", "750mg", "bi-box-seam-fill", "#c2417a"]],
    tips: ["Drain excess fat from beef for healthier tacos", "Warm shells in oven for better texture.", "Prepare all toppings before cooking beef.","Use ground turkey for a lighter option"]
  },
  
  
{

   title: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    difficulty: "Easy",
    cuisine: "italian",
    rating: 4.8,
    reviews: 356,
    prep: "15 min",
    cook: "25 min",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    ingredients: ["400g  spaghetti pasta "," 200g pancetta or guanciale, diced","3 large eggs ","100g Pecorino Romano cheese, grated ","50g Parmesan cheese, grated ", " Freshly ground black pepper", "Salt for pasta water"],
    steps: ["Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente. ","While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.","In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.", "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.", "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce..","Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!."],
    nutrition: [["Calories", "520 kcal", "bi-fire", "#e8731a"], ["Protein", "26g", "bi-lightning-charge-fill", "#2f6fe4"], ["Carbohydrates", "62g", "bi-flower1", "#c9a227"], ["Fat", "18g", "bi-droplet-fill", "#e0483e"], ["Fiber", "3g", "bi-flower2", "#2e9d5b"], ["Sodium", "660mg", "bi-box-seam-fill", "#c2417a"]],
    tips: ["Drain excess fat from beef for healthier tacos", "Warm shells in oven for better texture.", "Prepare all toppings before cooking beef.","Use ground turkey for a lighter option"]

},


{

   title: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    difficulty: "Easy",
    cuisine: "asian",
    rating: 8.4,
    reviews: 400,
    prep: "15 min",
    cook: "10 min",
    servings: "3 people",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
    ingredients: ["500g  chicken breast, sliced","2 bell peppers, sliced","1 broccoli head, florets","2 carrots, julienned ","3 tablespoons soy sauce","2 tablespoons oyster sauce ", "1 tablespoon sesame oil ", "2 cloves garlic, minced ","Fresh ginger, grated"],
    steps: ["Mix soy sauce, oyster sauce, and sesame oil for the sauce. ","Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.","Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.", "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.", "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes."],
    nutrition: [["Calories", "300 kcal", "bi-fire", "#e8731a"], ["Protein", "36g", "bi-lightning-charge-fill", "#2f6fe4"], ["Carbohydrates", "16g", "bi-flower1", "#c9a227"], ["Fat", "12g", "bi-droplet-fill", "#e0483e"], ["Fiber", "5g", "bi-flower2", "#2e9d5b"], ["Sodium", "860mg", "bi-box-seam-fill", "#c2417a"]],
    tips: ["Cut all ingredients before starting to cook  ", "Keep heat high for authentic stir-fry texture.", "Don't overcrowd the wok or vegetables will steam.","Add cashews or peanuts for extra crunch"]

},


{

   title: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    difficulty: "Intermediate",
    cuisine: "Asian",
    rating:4.8,
    reviews: 445,
    prep: "20 min",
    cook: "15 min",
    servings: "2 people",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop",
    ingredients: ["200g rice noodles","200g shrimp, peeled","2 eggs","3 tablespoons tamarind paste","2 tablespoons fish sauce","1 tablespoon palm sugar","Bean sprouts","Crushed peanuts","Lime wedges and cilantro"],
    steps: ["Soak rice noodles in warm water for 30 minutes. Drain and set aside.","Mix tamarind paste, fish sauce, and palm sugar to make the sauce. ","Heat wok over high heat. Scramble eggs and set aside ","Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.","Add scrambled eggs and bean sprouts. Toss everything together."],
    nutrition: [["Calories", "540 kcal", "bi-fire", "#e8731a"], ["Protein", "32g", "bi-lightning-charge-fill", "#2f6fe4"], ["Carbohydrates", "62g", "bi-flower1", "#c9a227"], ["Fat", "16g", "bi-droplet-fill", "#e0483e"], ["Fiber", "4g", "bi-flower2", "#2e9d5b"], ["Sodium", "1120mg", "bi-box-seam-fill", "#c2417a"]],
    tips: ["Don't oversoak noodles or they'll be mushy", "Cook on high heat for authentic wok flavor", "Balance sweet, sour, and salty flavors","Prepare all ingredients before starting to cook"]

},



















];

let currentIndex = 0;

// Random choice -> Math.random() + Math.floor()
function getRandomIndex() {
  let index;
  do {
    index = Math.floor(Math.random() * meals.length);
  } while (index === currentIndex && meals.length > 1);
  return index;
}

// Put the logic together -> Function
function showMeal(meal) {
  document.querySelector(".recipe-card h1").textContent = meal.title;
  document.querySelector(".recipe-card h1 + p").textContent = meal.description;
  document.querySelector(".tag-easy").textContent = meal.difficulty;
  document.querySelector(".tag-italian").textContent = meal.cuisine;
  document.querySelector(".rating").innerHTML =
    `<i class="bi bi-star-fill text-warning"></i> ${meal.rating} <small class="text-muted">(${meal.reviews} reviews)</small>`;

  const stats = document.querySelectorAll(".stats strong");
  stats[0].textContent = meal.prep;
  stats[1].textContent = meal.cook;
  stats[2].textContent = meal.servings;

  if (meal.image) {
    const img = document.querySelector(".hero img");
    if (img) img.src = meal.image;
  }

  document.getElementById("ingredients-list").innerHTML = meal.ingredients
    .map((t, i) => `<li class="d-flex align-items-center gap-3"><span class="num sm">${i + 1}</span>${t}</li>`).join("");

  document.getElementById("steps-list").innerHTML = meal.steps
    .map((t, i) => `<li class="d-flex align-items-center gap-3"><span class="num">${i + 1}</span>${t}</li>`).join("");

  document.getElementById("nutrition-list").innerHTML = meal.nutrition
    .map(([n, v, ic, c]) => `<div class="col-md-6"><div class="nutri d-flex align-items-center gap-3 p-3">
      <span class="ico" style="background:${c}22"><i class="bi ${ic}" style="color:${c}"></i></span>
      <span class="flex-grow-1">${n}</span><strong>${v}</strong></div></div>`).join("");

  document.getElementById("tips-list").innerHTML = meal.tips
    .map(t => `<div class="tip d-flex align-items-center gap-3 p-3"><i class="bi bi-check-circle-fill"></i>${t}</div>`).join("");
}

// أول ما الصفحة تفتح
showMeal(meals[currentIndex]);

// زرار Try Another Recipe
document.querySelector(".btn-accent").addEventListener("click", function () {
  currentIndex = getRandomIndex();
  showMeal(meals[currentIndex]);
});