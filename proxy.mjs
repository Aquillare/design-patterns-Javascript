/*Proxy Pattern 
    Share a single global instance throughout our application
    
     A proxy object can determine the behavior whenever we're interacting 
    with the object, for example when we're getting a value, or setting a value.

    Proxies are a powerful way to add control over the behavior of an object. A 
    proxy can have various use-cases: it can help with validation, formatting, 
    notifications, or debugging.
    
    Overusing the Proxy object or performing heavy operations on 
    each handler method invocation can easily affect the performance of your 
    application negatively. It's best to not use proxies for performance-critical 
    code.
*/

//Let's create a person object, that represents John Doe.
const person = {
    name: "Jhon Doe",
    age: 42,
    nationality: "American"
};

//Instead of interacting with this object directly, we want to interact with a proxy  object.

const personProxy = new Proxy(person,{
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`);
    },

    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
        return true; // add return true to avoid the type error generated when the value is set
    } 
});

personProxy.name;
personProxy.age = 45;

/*
    A proxy can be useful to add validation. A user shouldn't be able to 
    change person's age to a string value, or give him an empty name. Or if the 
    user is trying to access a property on the object that doesn't exist, we should
    let the user know
*/

const personProxyValidation = new Proxy(person, {
    get: (obj, prop) => {
        if(!obj[prop]) {
            console.log(
                `Hmm.. this property doesn't seem to exist on the target object`
            );
        }else{
            console.log(`The value of ${prop} is ${obj[prop]}`);
        }
    },

    set: (obj, prop, value) => {
        if (prop === "age" && typeof value !== "number"){
            console.log(`Sorry, you can only pass numeric values for age.`);
        }else if (prop ==="name" && value.length < 2 ){
            console.log(`You need to provide a valid name.`);
        }else{
            console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
            obj[prop] = value;
            return true; // add return true to avoid the type error generated when the value is set
        }
    }
});

personProxyValidation.age = "54";