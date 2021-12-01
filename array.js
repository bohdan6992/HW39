const sourceArr = [5, 23, -110, 3, 18, 0, 14];
console.log('Исходный массив:', sourceArr);

// a.Вывести в консоль только нечетные числа +
const task_1a = sourceArr.filter(element => element % 2 === 1 && element !== 0);
console.log('Hечетные числа:', task_1a);

// b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20 +
const task_1b = sourceArr.map(element => element + 20);
console.log('Каждая ячейка увеличена на 20:', task_1b);

// c.Вывести в консоль массив, состоящий только из положительных нечетных чисел +
const task_1c = sourceArr.filter(element => element % 2 === 1 && element !== 0);
console.log('Положительные нечетные числа:', task_1c);

// d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки +

const task_1d = sourceArr.reduce((acc , cur) => {return acc + (cur % 3)}, 0);
console.log('Cуммa остатков от целочисленных делений на 3:', task_1d);

// e.Проверить, и вывести в консоль результат проверки, есть ли в массиве числo 5 +
const task_1e = sourceArr.includes(5);
console.log('Проверка на наличие числa 5:', task_1e);

// f.Получить массив без первого элемента +
const task_2f = sourceArr.slice(1, sourceArr.length);
console.log('Массив без первого элемента', task_2f);

// g.Отсортировать массив по возрастанию +
const task_2g = sourceArr.sort((a, b) => a - b);
console.log('Массив по возрастанию',task_2g);

// h.Определить, есть ли в массиве числа, кратные 5 +
const task_2h = sourceArr.find(element => element % 5 === 0);
console.log('Проверка на наличие числa кратного 5:', task_2h);

// Преобразовать значения, записанные через дефис в значения, записанные в camelCase +
const sourceStr = 'border-radius';
console.log('sourceStr:',sourceStr);

const task_3 = sourceStr.replace(/-([a-z])/g, (m, w) => w.toUpperCase());
console.log('camelCase:',task_3);
