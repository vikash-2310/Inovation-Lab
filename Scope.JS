
//Globle Scope:
//variable declared outside any function or block are in the globl scope. They are accesed anywhere in the script

let a = "77";

function Say() {
    console.log("hii I am Thilakshitha");
    console.log(a);
}

Say();
console.log(a);


//Block Scope
//the block scope of a variable means that the variable accessible within the block that is btw the curly braces.

function Vote(age){
    if(age>=18){
        let iscloudy=true;
        var israining=true;
        console.log("Eligible");
        console.log(iscloudy);
        console.log(israining); 

    }
    console.log(israining);

}
Vote(18)


//Local scoap
// same as function or block scope depending on context

function text(){
    console.log("message");
}
text();
function send(callback){
    console.log("message send");
    callback();
}
send(text);
