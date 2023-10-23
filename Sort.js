function sortDesc(arr) {
    let n = arr.length;
    let s;

    do {
        s = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                // Swaping elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                s = true;
            }
        }
    } while (s);

    return arr;
}

const n = [5, 3, 9, 1, 4, 8, 2, 7, 6];

const sort = sortDesc(n);

console.log("Sorted Array in Descending Order:", sort);
