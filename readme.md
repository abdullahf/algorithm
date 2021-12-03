# Algorithms

## Sorting algorithms

1. Bubble Sort
```
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

let sortedArray = bubbleSort([1, 4, 2, 3, 4, -1, 9, 0, 7, 5, -9]);

console.table(sortedArray);

```
2. Selection Sort
3. Quick Sort
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