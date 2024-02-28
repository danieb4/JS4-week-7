

// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//      a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//              Do not use numbers to reference the last element, find it programmatically.
//              ages[7] - ages[0] is not allowed!
//      b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//      c. Use a loop to iterate through the array and calculate the average age.

//a utilizing ages.length in order to dynamically get the pieces of the array without using the array values specifically i.e. [0 or 7, etc]
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("Value: " + (ages[ages.length - 1] - ages[ages.length - ages.length]))
//b pushing multiple new values to ensure the code works dynmaically
ages.push(43, 6, 18)
console.log("New value: " + (ages[ages.length - 1] - ages[ages.length - ages.length]))
//c creating new variables to represent the sum and average in order to streamline finding the average
let totalSum = 0
for (let i = 0; i < ages.length; i++) {
    // console.log(ages[i]) -- I wasn't sure if I was supposed to display the iteration of the array or just find the average by iterating through using the for loop, so this is commented out but does function as intended to iterate each value
    totalSum += ages[i]
}
let avgAge = totalSum / (ages.length)
console.log("Average age: " + avgAge)

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//      a. Use a loop to iterate through the array and calculate the average number of letters per name.
//      b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
//a learned that names[i].length gives me the length of the item in the array, and used that to find the average length of the properties
let nameSum = 0
for (let i = 0; i < names.length; i++){
    nameSum += names[i].length
}
let nameAvg = nameSum / names.length
console.log("Average length of names: " + nameAvg)

//b created a new variable to represent the list and then used a for loop to iterate through the array and add each name to the string value of nameList
let nameList = ""
for (let i = 0; i < names.length; i++){
    nameList += (names[i] + " ")
}
console.log("Name List: " + nameList)

// 3. How do you access the last element of any array?

console.log("To find the last element of any array, you utilize arrayName[arrayName.length - 1] which will call the value of the last element in any array.")

// 4. How do you access the first element of any array?

console.log("To find the first element of any array, you utilize arrayName[0] which will call the value of the first element in any array, or you can use arrayName[arrayName.length - arrayName.length] if you are not wanting to use the specific placement of that element (i.e. [0 or 7, etc]).")

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//      For example:
//          let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//          let nameLengths = [5, 3, 4];             // create a new array

// utilizing the previously created names array, and creating a nameLengths array that coinsides with the names array, and then printing both cocatenated together based on the for loop
let nameLengths = [3, 5, 3, 5, 4, 3]
for (i = 0; i < nameLengths.length; i++){
    console.log("Name and number of characters in name: " + names[i] + " " + nameLengths[i])
}

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let nameTotal = 0
for (i = 0; i < nameLengths.length; i++){
    nameTotal += nameLengths[i]
}
console.log("Sum of name lengths: " + nameTotal)

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

// using an arrow function to create the function with correct parameters and creating the words variable to allow the string value to be modified to cocatenate the word n times
const thisFunction = (word, n) => {
    let words = ""
    for (let i = 0; i < n; i++)
    words += word
    return words
}
console.log("Cocatenated words: " + thisFunction ("word", 3))

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

// it do what it do because thats how to do the do
const fullName = (firstName, lastName) => firstName + " " + lastName
console.log("Full name is: " + fullName ("Boris", "Johnson"))

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// scoobie because running out of names for things; d allows the function to invoke any array of numbers, not just the one created for the question; numSum adds all the numbers together so that we can then return a boolean value that determines if the sum is greater than 100 or not
let numberArray = [5, 12, 64, 32, 2]
let scoobie = (d) => {
    let numSum = 0
    for (i = 0; i < d.length; i++){
        numSum += d[i] 
    }
    return numSum > 100
}
console.log("The sum of the numbers is greater than 100: " + scoobie(numberArray))

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

// using essentially the same process as question 9, but changing the return to give me a mean value instead of a boolean value
let scrappy = (f) => {
    let numSum = 0
    for (i = 0; i < f.length; i++){
        numSum += f[i]
    }
    return numSum / f.length
}
console.log("The mean of the numbers is: " + scrappy(numberArray))

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// created a new function that calls the previous 'create me a mean' function in order to determine the averages of two arrays, and then returning the compared values to get a boolean value
let daphne = (q, L) => {
    let A = scrappy(q)
    let B = scrappy(L)
    return A > B
}
console.log("The first array is greater than the second array: " + daphne(ages, numberArray))

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// using boolean comparison to return a boolean value from the executed side of the function when the arguments are invoked into it
let willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside === true && moneyInPocket > 10.50
console.log("We will buy a drink: " + willBuyDrink(false, 12))

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// created a list of employees, and created a function that can add people to that list using a function called hire in order to keep a list of everyone that has been hired (for posterity)
let employees = ["Dick", "John", "Harry"]
let hire = (person) => employees.push(person)

// created nameDisplay to display the names in a formatted and readable list; the for loop cocatenates the names minus the final name, outside the for loop before the return, it adds the final name without the ending comma
let nameDisplay = (emp) => {
    let empList = ""
        for (let i = 0; i < emp.length - 1; i++){
        empList += (emp[i] + ", ")
    }
    empList += emp[emp.length - 1]
    return empList
}

// console.log'ing each iteration to show that all instances of both functions work properly and are dynamic
console.log("List of employees: " + nameDisplay(employees))
hire("Abigail")
console.log("List of employees: " + nameDisplay(employees))
hire("Shonda")
console.log("List of employees: " + nameDisplay(employees))

