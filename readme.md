# Algorithms

## Sorting algorithms

1. Bubble Sort
2. Selection Sort
3. Quick Sort
```
function quickSort(array, low, high) {

    if (low < high) {

        let part = partition(array, low, high);

        quickSort(array, low, part - 1);
        quickSort(array, part + 1, high);
    }

    return array;
}

function partition(array, low, high) {

    let pivot = array[high];

    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {

        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return (i + 1);
}

function swap(array, i, j) {

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let array = [10, 80, 30, 90, 40, 50, 70];
quickSort(array, 0, array.length - 1);
console.table(array);
```
4. Merge Sort
5. Insertion Sort
6. Recursive Bubble Sort
7. Recursive Insertion Sort
8. Heap Sort

## Search algorithms
1. Linear Search
2. Binary Search

## Greedy algorithms
1. Greedy Algorithms in Arrays
2. ...

## freeCodeCamp Algorithms
1. [x] Find the Symmetric Difference
2. [x] Inventory Update
3. [x] Implement Bubble Sort