function mergeAndReverse(arr1, arr2) {
    let i = 0; 
    let j = 0; 
    let merged = []; 

    // Сливаю два отсортированных массива
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    //оставшиеся элементы из arr1
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    //оставшиеся элементы из arr2
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    let reversed = [];
    for (let k = merged.length - 1; k >= 0; k--) {
        reversed.push(merged[k]);
    }

    return reversed;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const result = mergeAndReverse(arr1, arr2);
console.log(result); // [8, 7, 6, 5, 4, 3, 2, 1]
