// быстрая сортировка
// отсортировать массив чисел по возрастанию

function qsort(arr) {
    if (arr.length <= 1) { // базовый случай: массив пустой или с одним элементом
        return arr;
    }

    if (arr.length === 2) { // сравнение в массиве из двух элементов
        if (arr[0] > arr[1]) {
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }

        return arr;
    }

    const randomIndex = Math.floor(Math.random() *  arr.length);
    const baseElement = arr[randomIndex]; // получаем элемент со случайным индексом - базовый
    arr.splice(randomIndex, 1); // исключаем базовый элемент из массива
    const lessElements = []; // элементы меньше базового
    const greaterElements = []; // элементы больше базового
    arr.forEach(num => {
        if (num > baseElement || num === baseElement) greaterElements.push(num);
        if (num < baseElement) lessElements.push(num);
    });

    return qsort(lessElements).concat(baseElement).concat(qsort(greaterElements));

}

console.log(qsort([]));
console.log(qsort([1]));
console.log(qsort([1, 2]));
console.log(qsort([5, 1, 3, 6, 7, 9, 4, 5, 7]));
console.log(qsort([2, 5, 7, 3, 3, 2, 5, 7, 8, 9]));
console.log(qsort([4, 6, 8, 6, 2, 2, 5, 6, 8, 9]));
console.log(qsort([9, 8, 7, 6, 5, 4, 3, 2, 1, 10]));
console.log(qsort([13, 15,  26, 76, 89, 11, 1]));
console.log(qsort([313, 145,  226, 716, 869, 110, 11]));