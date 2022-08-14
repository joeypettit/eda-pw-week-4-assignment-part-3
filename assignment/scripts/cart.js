console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];



function addItem(item){
    if (typeof item !== 'string') {
       console.log("incorrect data type, please input a string") ;
    } else {
        basket.push(item);
        return true;
    }
}

console.log(addItem(3));
  
console.log("adding apples: " + addItem('apples'));
console.log("adding beans: " + addItem('beans'));
console.log("adding pears: " + addItem('pears'));
console.log("adding kimchi: " + addItem('kimchi'));
console.log("in my basket is: " + basket);




function listItems(){
    for(let item of basket){
        console.log("this is from list: " + item);
    }
}

listItems();