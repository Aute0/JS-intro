// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, вывод должен выглядеть так (пример): Результат сложения чисел 5 и 2 равен 7.

// let a = Number.parseInt(prompt("Введите первое число: "));
// const b = Number.parseInt(prompt("Введите второе число: "));

// alert(`Результат сложения чисел ${a} и ${b} равен ${a + b}`);

// a = prompt("Введите первое число: ");

// alert(`Результат сложения чисел ${a} и ${b} равен ${(+a) + (+b)}`);

// Задача 3: Написать функцию, которая принимает имя пользователя при ее вызове и выводит сообщение с приветствием пользователя по имени.
// Проверить работоспособность функции.

// let user_name = prompt("Введите ваше имя: ");
// function hello (name){
//     alert(`Добра тебе ${name}`);
// }

// hello(user_name);

// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

// const user_answer = confirm("Вам хорошо живется?");

// if (user_answer) {
//     alert('Тогда мы идем к вам!');
// } else {
//     alert('Ну вы держитесь там!');
// }

// (user_answer) ? alert('Тогда мы идем к вам!') : alert('Ну вы держитесь там!');

// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.


// const age = Number.parseFloat(prompt("Введите ваш возраст: "));

// switch (age) {
//     case 18:
//         alert('Вы совершеннолетний, все можно!');
//         break;
//     case 10:
//         alert('Вам надо учить уроки!');
//         break;
//     case age == 30:
//         alert('Ложитесь спать, завтра на работу');
//         break;
//     default:
//         alert('Мы не знаем что Вам делать');
// }


// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемент массива, который записан в четном индексе включая 0.

function getMaxEvenElement(arr) {
    let max = arr[0];
    // for (let index = 0; index < arr.length; index++) {
    //     if (arr[index] > max && index % 2 == 0) {
    //         max = arr[index];
    //     }
    // }
    for (let index = 2; index < arr.length; index += 2) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    return max;
}

alert(getMaxEvenElement([5, 7, -1, 12, 3, 0]));

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31