var firstCustomer = {
    name: 'John Doe',
    gender: 'M',
    height: 1.80,
    weight: 80
}

var secondCustomer = {
    name: 'Mary Anne',
    gender: 'F',
    height: 1.72,
    weight: 98
}

function BMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

function getBMIStatus(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi > 18.5 && bmi < 25) {
        return 'Normal';
    } else if ( bmi > 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

var firstCustomerBMI = BMI(firstCustomer.weight, firstCustomer.height)
var secondCustomerBMI = BMI(secondCustomer.weight, secondCustomer.height)

var firstCustomerResult = firstCustomer.name + ' | ' + firstCustomer.gender + ' | ' + 'BMI: ' + BMI(firstCustomer.weight, firstCustomer.height) + ' | ' + getBMIStatus(firstCustomerBMI);
var secondCustomerResult = secondCustomer.name + ' | ' + secondCustomer.gender + ' | ' + 'BMI: ' + BMI(secondCustomer.weight, secondCustomer.height) + ' | ' + getBMIStatus(secondCustomerBMI); 

console.log(firstCustomerResult);
console.log(secondCustomerResult);




