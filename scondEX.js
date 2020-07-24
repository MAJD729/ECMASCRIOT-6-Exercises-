
  /*EX1*/
  /*function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  }*/
    const checkAge = (age) => (age >= 18)? true : confirm('Do you have your parents permission to access this page?');
  /*endEX1*/

  /*EX2*/
  /*pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1*/

const pow = (x,n) => 
{ var result = x;
    for(let i = 1; i < n; i++){
    result *= x;
    }
    if(n<1) {return false};
    
    return result;
}
/*endEX2*/

/*EX3*/
/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}*/


const ask = (quistion, yes, no) => (confirm(quistion)) ? yes() : no();
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
)

/*endEX3*/

/*EX4*/
/*let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};
calculator.read();
alert( calculator.sum() );
/*OR*/
alert( calculator.mul() );

/*endEX4*/

/*EX5*/


const min = (a,b) => (a<b) ? a : b;

/*endEX5*/