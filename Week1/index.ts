//Eercise 1
//basic types and functions
let myName: string = "Abdulsalam, Muhsin Ahmad";
let myAge: number = 30;

function introduce(name: string, age: number): string
{
    return `Hello, ${name}, How does being ${age} feel?`;
}

console .log(introduce(myName, myAge));

//Exercise 2
///Basic function for prime number check in TS
// Algo: Get the root of the number and ceil it to the upper whole number
//check if any of the values <= root are factors of the numbe, if any is, it is not a prime number, else, it is  

function isPrimeNumer(val: number): boolean
{
    //
    if (val < 0)
    {
        throw Error("Please provide a value higher that 2");
        return false;
    }
    
    if (val <= 2)
        return false;
    
    
    let root = Math.ceil(Math.sqrt(val));
    for (let i = 2; i <= root; i++)
    {
        if (val % i === 0)
        {
            return false;
        }    
    }

    return true;
}

console.log(isPrimeNumer(11));
console.log(isPrimeNumer(200));



//Exercise 3 Basic Array Sorting and Manipulation
const Names: string[] = ['Adam', 'Joe', "Muhsin", 'Eren', "Tony", "Mark"];
Names.sort();
console.log("Sorted Values in The array");
console.log({ Names });
Names.reverse();
console.log({ Names });

//Traversing the arrays
Names.forEach( (name)=>{ 
    console.log(`Hello ${name}, it is nice to meet you.`);
});



//Exercise 4
//Using Types

//Exercise 4
//Basic Usage  of Enums and Types

enum Status{
    Vetted, 
    Applied, 
    Active, 
    Free, 
    Mentor,
}

type Talent = {
    name: string;
    status?: Status;
    rate: number;
}
let muhsin: Talent = { name:"Muhsin",rate:30};
let Eren: Talent = { name:"Eren",rate:1000, status:Status.Mentor};
console.log({muhsin})
console.log({Eren})
