// const fristname = "Nguyễn";
// const lastname = "Văn A";
//     const age = 20;
// c1 console.log("Họ và tên: " + fristname + " " + lastname);
// c2 console.log(`Hoj và tên: ${fristname} ${lastname}`);

// function hello() {
//     console.log("Xin chào");
// }
//Bai1
// const prinr=(product,prince) => {
//     console.log(`Sản phẩm: ${product} - Giá: ${prince}`);
// }
// prinr("Iphone 14", 2000)
//Bai 3
// Bài 3: Tính tổng các số từ 1 đến n
// Input:
// sumUpTo(5);
// Output:
// 15
// const sumUpTo = (n) => {
// return (n * (n + 1)) / 2;
// }
// print(sumUpTo(5));
//Bai 4
// Bài 4; Tính bình phương một số
// Input:
// square(6);
// Output:
// // 36

// const square = (n) => {
//     return n * n;
// }     
// console.log(square(6));

// Bài 5: Kiểm tra số chẵn hay lẻ
// Input:
// isEven(7);
// Output:
// false

// const isEven = (n) => {
//     return n % 2 === 0;
// }       
// console.log(isEven(9)); // false

// Bài 6: Viết hàm trả về phần tử đầu tiên của mảng
// Input:
// firstElement([1, 2, 3]);
// Output:
// 1

// const firstElement = (arr) => {
//     if (arr.length === 0) {
//         return undefined; // Trả về undefined nếu mảng rỗng
//     }
//     return arr[2]; // Trả về phần tử đầu tiên của mảng
// }
// console.log(firstElement([1,2,3]))

// Bài 7: Sử dụng Rest Operator để tính tổng
// Input:
// sum(1, 2, 3, 4);
// Output:
// 10

// const sum = (...args) => {
//     return args.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10

// Bài 8: Tách giá trị từ đối tượng
// Input:
// const user = { name: "Nam", age: 30 };
// Output:
// Name: Nam, Age: 30

// const user = { name: "Nam", age: 30 };
// const { name, age } = user;// Destructuring để lấy giá trị từ đối tượng 
// console.log(`Name: ${name}, Age: ${age}`); // 

// Bài 9: In ra danh sách tên từ mảng đối tượng
// Input:
// const people = [{ name: "And" }, { name: "Bình" }];
// Output:
// "An, Bình"

const people = [{ name: "An" },{ name: "Bình" }];
const names = people.map((person) => person.name).join(', ');       
console.log(names); // "An, Bình"


// Bài 10: Tính độ dài chuỗi
// Input:
// stringLength("Hello World");
// Output:
// 11
const length= (str) => {
    return str.length;
}
console.log(length("Hello ")); // 5

// Bài 11: Chuyển đổi chuỗi thành chữ hoa
// Input:
// toUpperCase("javascript");
// Output:
// "JAVASCRIPT”
const toUpperCase = (str) => {
    return str.toUpperCase();
}
console.log(toUpperCase('bach'))

// Bài 12: Chuyển đổi số sang dạng tiền tệ
// Input:
// formatCurrency(1000000);
// Output:
// "1,000,000 VNĐ"
const transtnumtomoney =(num) => {
    return num.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
console.log(transtnumtomoney(1000000)); // "1,000,000 VNĐ"

// Bài 13: Tính giá trị lớn nhất trong mảng
// Input:
// max([10, 5, 20, 8]);
// Output:
// 20
const max = (arr) => {
    return Math.max(...arr);
}
console.log(max([10, 5, 20, 8])); // 20

// Bài 14: Viết hàm kiểm tra số nguyên tố
// Input:
// isPrime(7);
// Output:
// true
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
