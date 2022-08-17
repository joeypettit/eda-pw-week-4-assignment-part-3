console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// ~~~~~ Global Variables~~~~~

let basket = [];
const maxItems = 5;


//~~~~~~~~~~~~~
function addItem(item){
    if (typeof item !== 'string') {
       console.log("incorrect data type, please input a string") ;
    } else if (isFull() === true){
        console.log('Your basket is already full');
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



//~~~~~~~~~~~


function listItems(){
    for(let item of basket){
        console.log("this is from list: " + item);
    }
}

listItems();


//~~~~~~~~~~~~



console.log('This is basket before empty(): ' + basket);

function empty(){
    for(let i = 0; i = basket.length;   ){
        basket.pop();
    }
}

empty();
console.log('This is basket AFTER empty(): ' + basket);





//          ~~~~~ Stretch Goals ~~~~~




function isFull(){
    if (basket.length < maxItems){
        return false;
    } else {
        return true;
    }
}

addItem("beans");
addItem("carrots");
addItem("tuna");
addItem("coffee");
console.log("Test of isFull(), should be false: ", isFull());
addItem("peanuts");
console.log("Test of isFull(), should be true: ", isFull());
addItem("ketchup");


//~~~~~~~~~~~~



function removeItem(item) { 
    if (typeof item !== 'string') {
        console.log("incorrect data type, please input a string") ;
    } else {
        let removedIndex = basket.indexOf(item);
        console.log("This should show index of item removed: ", removedIndex);
        if(removedIndex === -1){
            return "This should say null: ", null;
        } else {
            let removed = basket.splice(removedIndex, 1);
            console.log("this should show item removed: ", removed)
            return removed.toString();
        }
    }
}

console.log("This is removeItem Test:")
console.log(basket);
console.log("This should be say tuna: ", removeItem("tuna"));
console.log(basket);
console.log(removeItem("bacon"));
console.log(basket);

/*






*/










