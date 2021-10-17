// рекурсивная функция для подсчета суммы чисел в массиве

function sum(arr) {
    if (arr.length === 0) {
        return 'Пустой массив';
    }

    if (arr.length === 1) {
        return arr[0];
    } else {
        return arr.pop() + sum(arr);
    }
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([1]));
console.log(sum([2, 4, 6]));
console.log(sum([]));