/* Singleton Pattern 
    Share a single global instance throughout our application

    Note:  Singletons are actually 
    considered an anti-pattern, and can (or.. should) be avoided in JavaScript

    Singletons are classes which can be instantiated once, and can be accessed 
    globally. This single instance can be shared throughout our application, which 
    makes Singletons great for managing global state in an application.
    
    
    */

    //Example of Singleton using a counter.

    let count = 0;

    const counter = {
        increment(){
            return ++count;
        },
        decrement(){
            return --count;
        }
    };

    Object.freeze(counter); 
    /*The Object.freeze method makes sure that consuming code cannot 
    modify the Singleton. Properties on the frozen instance cannot be added or 
    modified, which reduces the risk of accidentally overwriting the values on the 
    Singleton*/


    export { counter };


    //using counter;

    console.log(counter.increment())

