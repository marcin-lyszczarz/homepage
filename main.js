// const newParagraph = document.querySelector(".week-summary__description--js");
// // console.log(newParagraph);

// newParagraph.innerHTML = "Udało się wstawić tekst";

// function calculate(number){
//     number = number*7;
//     return `Wynik działania to ${number}`;
// }

// const result = calculate(7);
// console.log(result);

const name = "michał";
const age = 19;

const greet = function (n, a) {
  console.log(`Witaj ${n} czy masz ${a} lat`);
};
greet(name, age);

function createContent(querySelectorContent, content) {
  const currentContent = document.querySelector(querySelectorContent);

  currentContent.innerHTML = content;
}
createContent(".week-summary__description--js", "TAK TAK TAK");


// const humanOne = {
//   name: "Maciek",
//   age: 32,
//   adress: {
//     city: "Warszawa",
//     street: "Polna",
//   },
// };

// const humanTwo = {
//   name: "Paweł",
//   age: 42,
//   adress: {
//     city: "Poznań",
//     street: humanOne.adress.street,
//   },
// };

// console.log(humanOne);
// console.log(humanTwo);

// humanOne.adress.street = "ASDASD";

// const studentName = "Marcin";
// const page = "WTF:Co ten frontend";

// function welcome (nameOfStudent, coursePage){
//   alert(`Witaj ${nameOfStudent} na stronie ${coursePage}`)
// }

// welcome(studentName, page)

// const welcome2 = function(student, page) {
//   console.log(`Strona powitalna szkolenia ${page}. Baw się dobrze ${student}`)
// }

// welcome2(studentName, page);

const welcomeFunction = (querrySelector, newContent, yourName) =>{
  const currentContent = document.querySelector(querrySelector);
  currentContent.innerHTML = `Siemanko ${yourName}! Zaczynamy zabawę z JS! ${newContent}`
}

welcomeFunction('.about__heading', 'NIE BÓJ SIĘ !', 'Marcin');