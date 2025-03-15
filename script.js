function recommendVegetables() {
    let familySize = document.getElementById('family-size').value;
    let category = document.getElementById('category').value;
    let recommendation = document.getElementById('recommendation');

    // Define recommendations for each category based on family size
    let veggies = {
        carbs: `Potatoes - ${2 * familySize}kg, Sweet Potato - ${1.5 * familySize}kg, Yam - ${1 * familySize}kg`,
        proteins: `Beans - ${1.5 * familySize}kg, Peas - ${1 * familySize}kg, Lentils - ${1 * familySize}kg, Chickpeas - ${1 * familySize}kg`,
        fats: `Avocados - ${0.5 * familySize}kg, Nuts - ${0.3 * familySize}kg, Olives - ${0.2 * familySize}kg, Coconuts - ${0.5 * familySize}kg`,
        vitamins: `Carrots - ${1 * familySize}kg, Spinach - ${0.7 * familySize}kg, Broccoli - ${0.8 * familySize}kg, Tomato - ${1 * familySize}kg, Fenugreek Leaves (Methi) - ${0.5 * familySize}kg, Coriander Leaves (Dhania) - ${0.3 * familySize}kg`,
        minerals: `Broccoli - ${1 * familySize}kg, Bitter Gourd - ${0.5 * familySize}kg, Kale - ${0.7 * familySize}kg, Zucchini - ${0.8 * familySize}kg, Amaranth Leaves (Chaulai) - ${0.5 * familySize}kg, Mustard Greens (Sarson) - ${0.5 * familySize}kg`,
        fiber: `Cabbage - ${1.2 * familySize}kg, Okra - ${0.8 * familySize}kg, Raddish - ${0.7 * familySize}kg, Pumpkin - ${1 * familySize}kg`
    };

    // Display recommendations based on the selected category
    if (veggies[category]) {
        recommendation.innerHTML = `<strong>Recommended for ${familySize} family members:</strong> ${veggies[category]}`;
    } else {
        recommendation.innerHTML = "Please select a valid category.";
    }
}

// Ensure the script runs after the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    let categorySelect = document.getElementById('category');
    let familyInput = document.getElementById('family-size');
    
    if (categorySelect && familyInput) {
        categorySelect.addEventListener("change", recommendVegetables);
        familyInput.addEventListener("input", recommendVegetables);
    }
});