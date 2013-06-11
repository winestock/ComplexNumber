# ComplexNumber

A JavaScript complex number class that allows you to do most of the core mathematical operations with complex numbers, including addition, subtraction, multiplication, and getting the modulus of a complex number.

Since forking this project from Jan Hartigan, I have made a few changes.  I have divided the project into two objects, ComplexNumber and ComplexMath.

<hr />

## properties

<pre>
/* The real part of the complex number
 * 
 * @type Number
 */
real: 0,

/* The imaginary part of the complex number
 * 
 * @type Number
 */
imaginary: 0,
</pre>

A complex number is made up of two parts: a real and an imaginary parts. In the complex number 3 + 5i, for example, the real part is 3 and the imaginary part 5.

Creating a ComplexNumber is done by passing in two parameters: 1) real part and 2) imaginary part:

<pre>
var complex = new ComplexNumber(3, 5);

complex.toString(); //returns "3 + 5i"
</pre>

The ComplexNumber object holds both the complex number, itself, as well as methods that act as unary operations on that complex number.

## Unary Methods
### mod

Returns the modulus of a complex number. The modulus is defined as the square root of the real part squared plus the imaginary part squared. This basically turns the complex number into a purely real number.

<pre>
/**
 * The modulus of a complex number
 * 
 * @return number
 */
mod: function() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
},
</pre>

**Example usage**:

<pre>
var complex = new ComplexNumber(3, 4);

complex.mod(); //returns 5 (3^2=9 and 4^2=16. 9 + 16 = 25. Square root of 25 is 5. 
</pre>

### toString

Returns the string representation of a complex number (e.g. "3 + 5i").  If the imaginary part is negative, then a minus sign will be placed in front of it instead of a plus sign.

**Example usage**:

<pre>
var complex = new ComplexNumber(3, 4);

complex.toString(); //returns "3 + 4i" 
</pre>

### conjugate

This function returns the conjugate of a complex number.  I.e., for a complex number (a + bi), ComplexNumber.conjugate will return (a - bi).

### Binary Methods

These methods are "binary" in the sense that they take two arguments.  These mathematical operations are `add()`, `sub()`, `mult()`, `div()`.  I moved these methods into a different object so as to make math operations on complex numbers look more natural.

### add

Adds two complex numbers together by adding the real parts and the complex parts.  In the source code, I call the first argument the addend and the second argument the summand even though the order of the arguments doesn't matter.

**Example usage**:

<pre>
var complex1 = new ComplexNumber(3, 5);
var	complex2 = new ComplexNumber(1, 2);

ComplexMath.add(complex1, complex2);
//returns "4 + 7i"
</pre>

### sub

Subtracts a complex number from another by finding the difference between the real parts and the complex parts.  The order of the arguments matters, in this case.  The first argument is the minuend and the second argument is the subtrahend.

**Example usage**:

<pre>
var complex1 = new ComplexNumber(3, 5);
var	complex2 = new ComplexNumber(1, 2);

ComplexMath.sub(complex1, complex2);
//returns "2 + 3i"
</pre>

### mult

Multiplies a complex number with another. Given complex numbers A and B, the result of their multiplication is: [(realA * realB) - (imaginaryA * imaginaryB)] + [(realA * imaginaryB) + (imaginaryA * realB)]*i.  In the source code, I call the first argument the multiplicand and the second argument the multiplier even though the order won't make any difference in the result.

**Example usage**:

<pre>
var complex1 = new ComplexNumber(3, 5);
var	complex2 = new ComplexNumber(1, 2);

ComplexMath.mult(complex1, complex2);
//returns "-7 + 11i"
</pre>

### div

Divides two complex numbers via the following formula:

<pre>
a + bi   ac + bd   bc - ad
------ = ------- + -------*i
c + di   c^2+d^2   c^2+d^2
</pre>

where (a + bi) is the dividend and (c + di) is the divisor.