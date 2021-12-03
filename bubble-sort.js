function bubbleSort(array) {

    if(!array) return;

    let isSorted = false;
    let sortedArrayLength = array.length - 1;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < sortedArrayLength; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                isSorted = false;
            }
        }
        sortedArrayLength--;
    }

    return array;
}

console.clear();
console.table(bubbleSort([1, 4, 2, 3, 4, 5, 9, 0, 7, 5, 6]));
console.table(bubbleSort([1, 4, 2, 3, 4, -1, 9, 0, 7, 5, -9]));
console.table(bubbleSort([]));
console.table(bubbleSort(null));