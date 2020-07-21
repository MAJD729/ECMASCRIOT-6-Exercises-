

/* EX1*/
let user = {
    Name: "Majd",
    years: 21,
    isAdmin: "Admin"
}
const{ Name, years: Age, isAdmin = false } = user;
/*endEX1*/

/*EX2*/

const ourPlanet = "Earth";
let currentVistor = "Ahmad";

/*endEX2*/

/*EX3*/

    let phrase = "Hello"

    if (true) {
    let user = "John";
    function sayHi() {
        alert(`${phrase}, ${user}`)
    }
    }

    sayHi()
    /* it will be an alert contain Hello Jhon because of the alert function that has two variables */
    /*endEX3*/

    /*EX4*/

    let user2 = {
    Surname : "Smith"
    }

    /*endEX4*/

    /*EX5*/

    const user3 = {
    name: "John"
}

// does it work?
user3.name = "Pete"

/* Yes because you are not declearing it again */
/*endEX5*/

/*EX6*/

let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
    }
    let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
/*endEX6*/

/*EX7*/
let accessAllowed = (a + b < 4) ? "Below" : "Over";
/*if (a + b < 4) {
result = 'Below';
} else {
result = 'Over';
}*/

/*endEX7*/

/*EX8*/
/*let message;

    if (login == 'Employee') {
    message = 'Hello';
    } else if (login == 'Director') {
    message = 'Greetings';
    } else if (login == '') {
    message = 'No login';
    } else {
    message = '';
    }*/
    let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
    /*endEX8*/