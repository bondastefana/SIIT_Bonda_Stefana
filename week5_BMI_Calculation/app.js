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

firstCustomer.BMI = BMI(firstCustomer.weight, firstCustomer.height);
firstCustomer.BMIStatus = getBMIStatus(firstCustomer.BMI);

secondCustomer.BMI = BMI(secondCustomer.weight, secondCustomer.height);
secondCustomer.BMIStatus = getBMIStatus(secondCustomer.BMI);

function printResult(customer) {
    return customer.name + ' | ' + customer.gender + ' | ' + 'BMI: ' + BMI(customer.weight, customer.height) + ' | ' + getBMIStatus(customer.BMI);
}

console.log(printResult(firstCustomer));
console.log(printResult(secondCustomer));



