function merge(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1 
    
    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1]
            p1--
        }
        else{
            nums1[p] = nums2[p2]
            p2--
        }
        p--
    }
}

// Test the function
let arr = [1, 5, 23, 20, 11, 0, 0, 0, 0, 0];
let arr1 = [1, 4, 2, 3, 1];

merge(arr, 5, arr1, 5);
console.log(arr); // Should output the merged and sorted array
