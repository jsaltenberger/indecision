
// const vs. let
let x = 1;
let x = 2 // error, let can't be reinitialized
x = 2; // ok, let value can be changed


const y = 1;
const y = 2 // error, const can't be reinitialized
y = 1; // error, const value can't be changed

// Function level scope
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
        console.log(x);  // 2
}


// Block level scope
function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
        console.log(x);  // 1
}