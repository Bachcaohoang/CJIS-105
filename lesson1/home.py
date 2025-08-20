
# lesson1/home.py
n = int(input("Nhập số n (1 < n < 100): "))
if n <= 1 or n >= 100:
    print("Số n không hợp lệ. Vui lòng nhập lại.")
else:
    primes = []
    for num in range(2, n + 1):
        is_prime = True
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime and (num % 10 in [3, 5, 7, 9]):
            primes.append(num)
    
    print("Các số nguyên tố từ 1 đến", n, "có chữ số tận cùng là 3, 5, 7 hoặc 9:", primes)