// 1. display in the console the numbers from 1 to 20

for (var i = 1; i <= 20; i++) {
    console.log('numbers', i);
}

// 2. display in the console the odd numbers from 1 to 20

for (var i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log('odd', i);
    }
}

// 3. compute the sum of the elements of an array and display it in the console

var sum = 0;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
 console.log('Sum', sum); 

// 4. compute the maximum of the elements of an array and display it in the console 

var array_2 = [15, 26, 19, 89, 38, 1, 105, 2, 43];
var max = 0;
for (var i = 0; i < array_2.length; i++) {
    if ( max < array_2[i]) {
        max = array_2[i]
    }
}
console.log('Max', max);

// second method
console.log('Max', Math.max(...array_2));

// 5. compute how many times a certain element appears in an array

var array_3 = [23, 14, 11, 23, 17, 100, 100, 102, 100, 23];

function getDuplicates(array, arrayValue) {
    var count = 0;
    array.forEach((value) => {
        if (value === arrayValue) {
            count = count + 1
        }
    });
    return count;
}


for (var i = 0; i < array_3.length; i++) {
    var count = getDuplicates(array_3, array_3[i]);
    console.log('count for number ', array_3[i], '-', count, ' times')
}
