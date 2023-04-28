// console.log("hi")
// console.log(10/0)

// let h2 = document.querySelector('h2')
// // @ts-ignore Игнорирует предупреждения в следующей строке
// setTimeout(() => { h2.innerText = 'Safari'}, 3000)

// let a  = 1
// a = 2 + 3 + 2 
// const daysInWeek = a
// console.log(daysInWeek)

// consolelet

// let admin = 'Jon'
// let name1 = 'Jon'
// console.log(admin)

// const x = ('Введите число','0')

// console.log('typeof(NaN)'), typeof (NaN)
// console.log('typeof(15)'), typeof (15)
// console.log('type(Infinity)'), typeof (Infinity)

// console.log('4 > 3', 4 > 3)
// console.log('4 == 3', s1 == s2)
// console.log('4 != 3', s1 != s2)

// console.log('"b" > "a"', "b" > "a")

// console.log()




1.// let a = +prompt("введите число");
// if  (a > 0){
//     alert("a положительно")
// } else if (a < 0) {
//     alert("a отрицательно")
// } else if (a == 0){
//     alert("a = 0")
// }

2.// let a = +prompt("введите возраст");
// if (120 >= a) {
//     alert("корректно")
// } if  (120 < a) {
//     alert("некорректно");
// }

// let a = +prompt("введите число");
// if(a || (-a)){
// alert(Math.abs(a))
// }

// let a = +prompt("введите часы");
// let b = +prompt("введите минуты");
// let c = +prompt("введите секунды");
// if (0 < a < 24 && 0 < b < 60 && 0 < c < 60) {
//     console.log("OK");
// } else {
//   console.log("error");
// }

let x = +prompt("координаты точки x");
let y = +prompt("координаты точки y");
if (x > 0 && y > 0){
    alert("First quarter")
} else if (x < 0 && y > 0) {
    alert("Second quarter")
} else if (x < 0 && y < 0) {
    alert("Third quarter")
} else if (x > 0 && y < 0){
    alert("Fourth quarter")
}

