const n = parseInt(prompt("Nhập số nguyên dương n:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
    if (sum >= 100) {
        break;
    }
}

console.log(`Tổng các số từ 1 đến ${n} là: ${sum}`);
