// ES 5
function sayHi(name){
    var name  =  name || 'Best'
    console.log("Hi " + name);
}

sayHi()
sayHi('Woraprat')

// ES 6
function sayHello(name = 'Best'){
    console.log("Hi " + name);
}

sayHello()
sayHello('Patchare')