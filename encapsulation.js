// this is the process of hiding implementation details while exposing only necessary details
let counter = (function(){
    let count = 0;//private

    function increment(){
        count++; //private
    }

    function decrement(){
        count--;//private
    }

    function getCount() {
        return count;//public
    }

    return {
        increment: increment,
        decrement: decrement,
        getCount: getCount
    };
})();

// call the public methods
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());