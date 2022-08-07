//Anonmyous function 
let array1=[1,2,3,4,5];
let k=4;
let rotate=(function(array, stepsToShift) {

    for (let i = 0; i < stepsToShift; i++) {
        array.unshift(array.pop());
    }

    return array;
});
rotate(array1,k);

//IIEF

let array1=[1,2,3,4,5];
let k=4;
(function() {

    for (let i = 0; i < k; i++) {
        array1.unshift(array1.pop());
    }

    return array1;
})();