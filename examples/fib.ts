import { Matrix } from "../src/matrix";
import { Vector } from "../src/vector";
import { Complex } from "../src/complex";

// Calculate Fibonacci numbers using matrices

// The formula is f_(n+2) = f_n + f_(n-1) where f_0 = 0 and f_1 = 1
// Which can be thought of as matrix multiplication.

const FIB_0 = 0;
const FIB_1 = 1;

const fibMatrix = new Matrix([[1, 1], [1, 0]]); 
const fibVector = Vector.columnVector([FIB_1, FIB_0]);

const fib = (n: number): Complex => {
    const matPow = fibMatrix.power(n);
    const vec = matPow.multiplyByVector(fibVector);

    return vec.get(1)
};

console.log("Example of calculating Fibonacci numbers using matrices:");

for (let i = 0; i < 10; i++) {
    console.log(`\tfib(${i}) = ` + fib(i).toString());
}
