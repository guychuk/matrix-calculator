# 🔢 Matrix Calculator and Linear Algebra Library

## 🧠 Overview

This is a TypeScript-based library for matrix calculations and linear algebra operations. It provides a comprehensive set of tools for working with matrices, vectors, complex numbers, and polynomials.

## ✨ Features

* **🧊 Complex Number Support:** 
    * Handles Cartesian and polar coordinate representations.
    * Performs basic arithmetic operations on complex numbers.

* **🧾 Linear System Solver:** 
  * Solves systems of linear equations.

* **🔢 Matrix Operations:** 
    * **Basic Arithmetic:** Addition, Subtraction, Multiplication, Division, Exponentiation.
    * **Row Operations:** Row Swap, Row Multiplication, Row Addition.
    * **Matrix Properties & Transformations:** Transpose, Conjugate, Conjugate Transpose, Determinant, Inverse, Trace, Minor.
    * **Matrix Diagonalization:** Diagonalization, Eigenvalues, Eigenvectors.
    * **Matrix Type Checking:** Identifies Square, Symmetric, Hermitian, Diagonal, Normal, and other matrix types.

* **📈 Polynomial Operations:** 
    * **Basic Arithmetic:** Addition, Subtraction, Multiplication, Division.
    * **Analysis:** Factorization, Root Finding, Polynomial Evaluation.

* **↗️ Vector Operations:** 
    * **Basic Arithmetic:** Addition, Subtraction, Scalar Multiplication, Scalar Division.
    * **Vector Properties:** Dot Product, Norm (Magnitude), Normalization.
    * **Basis & Orthogonalization:** Finds a basis from a given set, Gram-Schmidt Process.

## 💻 Local Installation

1.  **Prerequisites:**
    * [Node.js](https://nodejs.org/) (v14 or later)
    * [npm](https://www.npmjs.com/) (included with Node.js)

2.  **Clone the Repository:**

    ```bash
    git clone https://github.com/guychuk/matrix-calculator.git
    cd matrix-calculator
    ```

3.  **Install Dependencies:**

    ```bash
    npm install
    npm install ts-node --save-dev  # For running TypeScript files directly
    ```

## 🧪 Usage

1.  **Executing Calculations:**
    * Write your matrix calculations in a `.ts` file.
    * Use `ts-node` to run the script:  `ts-node your_script_name.ts`
    * **Example:** To run `examples/fib.ts`:

        ```bash
        ts-node examples/fib.ts
        ```

        **Output:**

        ```
        Example of calculating Fibonacci numbers using matrices:
         fib(0) = 0
         fib(1) = 1
         fib(2) = 1
         fib(3) = 2
         fib(4) = 3
         fib(5) = 5
         fib(6) = 8
         fib(7) = 13
         fib(8) = 21
         fib(9) = 34
        ```

2.  **Running Tests:**

    Use Jest to ensure the library functions correctly:

    ```bash
    npm test
    ```

## 📚 Project History

This project was initially part of the [`white-rabbit`](https://github.com/guychuk/white-rabbit) repository.

For the complete commit history and earlier development stages, see:

➡️  [`white-rabbit 🐇`](https://github.com/guychuk/white-rabbit)