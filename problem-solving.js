//finding  max number from a list

const heights=[65,66,68,72,74,72,40,41,4,3,80]

function getmax(numbers){
     // console.log(numbers)
let max = numbers[0];
for (const num of numbers) {
    if (num > max) {
        max = num;
    }
}
return max;
}

const  max=getmax(heights);
console.log('max value is',max)



//find the cheapest phone from a array



const moblies=[
    {name:'samsung',price:'20000',camera:'14mp',color:'black'},
    {name:'iphone',price:'65000',camera:'14mp',color:'black'},
    {name:'oppo',price:'10000',camera:'14mp',color:'black'},
    {name:'vivo',price:'12000',camera:'14mp',color:'black'},
    {name:'xiami',price:'23000',camera:'14mp',color:'black'}
]


function  getCheapestPhone(phones){
    // console.log(phones);
    let min =phones[0];
    for (const phone of phones) {
        if (parseInt(phone.price) < parseInt(min.price)) {
            min = phone;
        }
    }
    return min;
}
const cheap = getCheapestPhone(moblies);
console.log('cheapest phone is:',cheap);



//discount system

function discountTotal(quantity){
    const first100Price=100;
    const second100Price=90;
    const above200price=50;
    
    if(quantity<=100){
        const total=quantity*first100Price;
        return total;
    }
    else if(quantity<=200){
        const first100Total=100*first100Price;
        const remainingQuantity=quantity-100;
        const remainingTotal=remainingQuantity*second100Price;
        const total=first100Total+remainingTotal;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}


const discount =discountTotal(100)
console.log(discount)




//Find the lowest number in the array below.
//const heights2 = [167, 190, 120, 165, 137];

const heights2 = [167, 190, 120, 165, 137];
const lowest = Math.min(...heights2);

console.log(lowest);

//Find the friend with the smallest name.
//const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const persons = ['rahim', 'robin', 'rafi', 'roy', 'rashed'];

function smallName(arr){
    // console.log(arr);
    let shortest = arr[0];
    for(let name of arr){
        if(name.length < shortest.length){
            shortest=name;
        }
    }
    return shortest;
    }
const names=smallName(persons);
console.log(names);

//Your task is to calculate the total budget required to buy electronics:
//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptopCount, tabletCount, mobileCount) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const total = (laptopCount * laptopPrice) +
                  (tabletCount * tabletPrice) +
                  (mobileCount * mobilePrice);

    return total;
}
const totalBudget = calculateElectronicsBudget(1, 2, 1);
console.log("Total Budget:", totalBudget + " tk");


//You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(phones) {
    if (phones.length === 0) {
        return 0;  
    }

    let totalPrice = 0;

    for (let phone of phones) {
        totalPrice += phone.price;
    }

    return totalPrice / phones.length;
    
}

const averagePrice = findAveragePhonePrice(phones);
console.log("Average Price:", averagePrice);

//hard type
//For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
function calculateTotalMonthlySalary(employees) {
    let total = 0;

    for (let emp of employees) {
        const currentSalary = emp.starting + (emp.experience * emp.increment);
        total += currentSalary;
    }

    return total;
}
const totalSalary = calculateTotalMonthlySalary(employees);
console.log("Total Monthly Salary:", totalSalary + " tk");


//---------assignment----------------
//assignment-1(find out tax-ammount)

function calculateTax(income, expenses) {
     if(typeof income !='number'|| typeof expenses != 'number' ||  income<0|| expenses<0|| income<expenses){
        return "invalid input"
     }
     const profit = income-expenses;
     const tax=profit*0.20;
     return tax;
}

console.log(calculateTax(10000,3000));
console.log(calculateTax(50000, 30000));
console.log(calculateTax(0, 30000));


//assignment-2(email creation from domain and username and generate a message)


function sendNotification(email) {
    // Check if email contains exactly one "@"
    if (typeof email !== 'string' || email.indexOf("@") === -1) {
        return "Invalid Email";
    }

    const parts = email.split("@");

    if (parts.length !== 2 || parts[0] === "" || parts[1] === "") {
        return "Invalid Email";
    }

    const username = parts[0];
    const domain = parts[1];

    return `${username} sent you an email from ${domain}`;
}

console.log(sendNotification("shahin@outlook.com"));
console.log(sendNotification("zihad.ph@gmail.com"));

console.log(sendNotification("@gmail.com"));


//assignment-3(Checking Digits Inside a Name)

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    const hasDigit = /\d/.test(name);
    return hasDigit;
}
console.log(checkDigitsInName("Raju007"));      
console.log(checkDigitsInName("Rahim"));       


//assignment-4(based on score admission)


function calculateFinalScore(candidate) {
  
    if (typeof candidate !== 'object' || candidate === null || Array.isArray(candidate)) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = candidate;

    
    if (
        typeof name !== 'string' ||
        typeof testScore !== 'number' || testScore > 50 ||
        typeof schoolGrade !== 'number' || schoolGrade > 30 ||
        typeof isFFamily !== 'boolean'
    ) {
        return "Invalid Input";
    }

    
    let total = testScore + schoolGrade;
    if (isFFamily === true) {
        total += 20;
    }

    return total >= 80;
}
console.log(calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true
}));


//assignment-5(finding the serial number of interview)

function waitingTime(times, serial) {
  
    if (!Array.isArray(times) || typeof serial !== 'number') {
        return "Invalid Input";
    }

    
    const sum = times.reduce((acc, time) => acc + time, 0);
    const avgTime = Math.round(sum / times.length);

    
    const completed = times.length;
    const remaining = serial - 1 - completed;

    
    const isratWait = remaining > 0 ? remaining * avgTime : 0;

    return isratWait;
}
console.log(waitingTime([3, 5, 7, 11, 6], 8));