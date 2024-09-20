const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const Product = {
    id,
    productName,
    rating,
};

console.log(Product);

//  Destructor
const product2 = {
    description: "Product Description",
    id,
    productName,
    rating,
};

const getProductTwoDescription = product2.description;
console.log(getProductTwoDescription);

const { description } = product2;
console.log(description);

const array = [1, 2, 3];
let getArrayFristValue = array[0];
let getArrayTwoValue = array[1];

console.log(getArrayFristValue);
console.log(getArrayTwoValue);

const [arrayFirstElement, arraySecondElement, arrayThirdElement] = array;
console.log("Get Second Array Element", arraySecondElement);

const mulOfTwoNumbers = (num1 = 1, num2 = 2) => {
    console.log(num1, num2);
    return num1 * num2;
};

console.log("Multiple Two Numbers: ", mulOfTwoNumbers(10));

const array2 = [2, 3, 4];
const array3 = [10, 11, 12];
console.log(...array2);
console.log([...array2]);
console.log([100, ...array2, 41, ...array3, 40]);

const getInfo = (a, b, ...c) => {
    console.log(a, b, c);
    return "Vidusha Wijekoon";
};
console.log(getInfo(1, 2, 3, 4, 5, 4, 5, 6));

// map, filter, find, some, every, includes, indexOf, findIndex
const personsArray = [
    {
        name: "Persone 1",
        age: 30,
        country: "USA",
    },

    {
        name: "Persone 2",
        age: 34,
        country: "UK",
    },
    {
        name: "Persone 3",
        age: 34,
        country: "Sri Lanka",
    },
    {
        name: "Persone 4",
        age: 38,
        country: "USA",
    },
];

// Create New array retrive from personsArray names
const getAllName = personsArray.map((signlePerson, index) => {
    return `${signlePerson.name} age is ${signlePerson.age}`;
});

console.log("How to use Map in JS", getAllName);

// Find
const getPersonFromUSA = personsArray.find((personsArray, index) => {
    return personsArray.country === "USA";
});

console.log("Find Single Element in Array", getPersonFromUSA);

// Filter Check Everything in the array
const getAllPersonFromUSA = personsArray.filter((personData, index) => {
    return personData.country === "USA";
});

console.log("Get All the Person From USA", getAllPersonFromUSA);

// Some find all the values using if
// Only Return Trur or False only
const checkPersonsAgeMoreThan35 = personsArray.some((personAge, index) => {
    return personAge.age > 30;
});

console.log("Array Some", checkPersonsAgeMoreThan35);

// Every Check all the array elemetn and return true or false
const checkEveryMethod = personsArray.every((personData, index) => {
    return personData.age > 30;
});

console.log("Check Every Array Funtion", checkEveryMethod);

// Includes return true or false
const fruitArray = ["apple", "banana", "orange"];
console.log("include", fruitArray.includes("apple"));

// Index of
console.log("Index of", fruitArray.indexOf("banana"));
console.log("Index of", fruitArray.indexOf("kiwi"));

// Index
const getIndexFromArray = personsArray.findIndex((getIndexOf, index) => {
    return getIndexOf.country === "Sri Lanka";
});

console.log("Get Index Of The Person Array", getIndexFromArray);

let getListOfProductsElements = document.querySelector(".list-of-products");

const renderProducts = (getProducts) => {
    getListOfProductsElements.innerHTML = getProducts
        .map((getProducts, index) => {
            return `<p>${getProducts.title}</p>`;
        })
        .join(" ");
};

async function fetchListOfProducts() {
    try {
        const getAPIResponse = await fetch("https://dummyjson.com/products", {
            method: "GET",
        });
        const result = await getAPIResponse.json();
        console.log(result);
        return renderProducts(result.products);
    } catch (e) {
        console.log(e);
    }
}

fetchListOfProducts();
