// // 
// Bài 1. Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng.

// Input: arr = [1, 2, 3, 4]
// Output: 10
const sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumArray([1, 2, 3, 4])); 
// Bài 2. Viết hàm countOccurrences(arr, value) đếm số lần xuất hiện của value trong mảng arr

// Input: arr = [1, 2, 2, 3, 2], value = 2
// Output: 3
const countOccurrences = (arr, value) => {
    return arr.reduce((count, curr) => curr === value ? count + 1 : count, 0);
};      
console.log(countOccurrences([1, 2, 2, 3, 2], 2));
// Bài 3. Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.

// Input: arr = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
// Output: [1, 2, 3, 4, 6]
const removeDuplicates = (arr) => {
    return arr.reduce((unique, curr) => {
        if (!unique.includes(curr)) {
            unique.push(curr);
        }
        return unique;
    }, []);
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));


// Bài 6. Viết hàm findSecondLargest(arr) trả về giá trị lớn thứ hai trong mảng.

// Input: arr = [3, 1, 4, 2, 4]
// Output: 3
// const findSecondLargest = (arr) => {
//     const uniqueArr = removeDuplicates(arr);
//     if (uniqueArr.length < 2) return null; // Không đủ phần tử để tìm giá trị lớn thứ hai
//     uniqueArr.sort((a, b) => b - a); // Sắp xếp mảng theo thứ tự giảm dần
//     return uniqueArr[1]; // Trả về phần tử lớn thứ hai
// };
// console.log(findSecondLargest([3, 1, 4, 2, 4])); // Output: 3
// Bài 8. Viết hàm findMostExpensiveProduct(products) trả về sản phẩm có giá lớn nhất.

// Input:
// products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];
// Output:
// { name: 'Product C', price: 50 }
const findMostExpensiveProduct = (products) => {
    return products.reduce((mostExpensive, current) => {
        return current.price > mostExpensive.price ? current : mostExpensive;
    }, products[0]);
};
console.log(findMostExpensiveProduct([
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
])); // Output: { name: 'Product C', price: 50 }




