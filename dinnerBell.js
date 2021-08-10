class Dinner {
    constructor(appitizer, entree, side1, side2, dessert, drink){
        this.appitizer = appitizer
        this.entree = entree
        this.side1 = side1
        this.side2 = side2
        this.dessert = dessert
        this.drink = drink
    }
    dinnerTime() {
        console.log(`Tonight we will have ${this.drink} for our beverage. Then we will start with ${this.appitizer}. For our main course we will have ${this.entree} with ${this.side1} and ${this.side2}. We will wrap this up with ${this.dessert}.`)
    }
}
const appitizer = [
    'Fried Pickles', 'Salad', 'Garlic Bread', 'Garlic Knots', 'Bonless Wings', 'Wings','Motzarella Sticks', 'French Fries', 'Sweet Potatoe Fries', 'Spinnach Artichoke Dip', 'Chips and Salsa', 'Chese Quesadilla', 'Shrimp Cocktail', 'Popcorn Shrimp', 'Popcorn Cauliflower', 'Bruschetta', 'Cheese Fries', 'Onion Rings', 'Fried Mushrooms', 'Chicken Nuggets', 'Chicken Fingers', 'Stuffed Peppers', 'Jalapeno Poppers', 'Cheese, Meat and Cracker Platter'
]
const entree = [
    'Pizza', 'Hoagie', 'Cheesesteak', 'Chicken', 'Steak', 'Pork Chops', 'Spagetti', "Taco's", 'Soup', 'Fish', 'Shrimp', 'Crabs', 'Ribs', 'Venison', 'Turkey', 'Duck', 'Lobster', 'Salad', 'Burgers'
]
const side1 = [
    'Baked Potato', 'Mashed Potato', 'Sweet Potato', 'French Fries', 'Sweet Potato Fries', 'Rice', 'Pasta',
]
const side2 = [
    'Corn', 'Peas', 'Broccoli', 'Cauliflower', 'Mixxed Vegetables', 'Spinnach', 'Corn on the Cob', 'Kale', 'String Beans', 'Zucchini', 'Asparagus', 'Artichoke', 'Brussel Sprouts', 'Mushrooms', 'Cabbage', 'Beats'
]
const dessert = [
    'Ice Cream', 'Tiramisu', 'Brownies', 'Cookies', 'Cake', 'Pudding', 'Yogurt', "Jello", 'Pie', 'Cheesecake', 'Sundae', 'Candy', 'Chocolate', 'Fruit', 'Cannoli', 'Funnel Cake', 'Gelato'
]
const drink = [
    'Water', 'Beer', 'Craft Beer', 'Hot Tea', 'Iced Tea', 'Juice', 'Soda', 'Alcoholic Cocktail', 'Coffee', 'Sports Drink'
]
const dinnerMeal = []
for (let i = 1; i <= 100; i++) {
    let randomAppitizer = Math.floor(Math.random() * (appitizer.length - 1))
    let randomEntree = Math.floor(Math.random() * (entree.length - 1))
    let randomSide1 = Math.floor(Math.random() * (side1.length - 1))
    let randomSide2 = Math.floor(Math.random() * (side2.length - 1))
    let randomDessert = Math.floor(Math.random() * (dessert.length - 1))
    let randomDrink = Math.floor(Math.random() * (drink.length - 1))
    dinnerMeal.push(new Dinner(appitizer[randomAppitizer], entree[randomEntree], side1[randomSide1], side2[randomSide2], dessert[randomDessert], drink[randomDrink]));  
}
//console.log(dinnerMeal)
dinnerMeal[0].dinnerTime()