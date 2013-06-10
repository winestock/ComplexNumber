/** ComplexNumber class
 * 
 * The complex number class allows us to do complex math. It accepts a real and imaginary part
 * 
 * @author Jan Hartigan
 * @inspiration http://www.java2s.com/Code/JavaScript/Language-Basics/Complexclasstorepresentcomplexnumbers.htm
 * @version 1.0.0 (2011-03-08)
 */


/**
 * @param Number	real
 * @param Number	imaginary
 */
function ComplexNumber(real,imaginary) {
	this.real = real;
	this.imaginary = imaginary;
}

//Then we make the prototype object for the class so we can perform actions on complex numbers (like multiplication, addition, etc.)
ComplexNumber.prototype = {
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

	/**
	 * The modulus of a complex number
	 * 
	 * @return number
	 */
	mod: function() {
	    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
	},
	
	/**
	 * The string representation of a complex number (e.g. 4 + 3i)
	 * 
	 * @return String
	 */
	toString: function() {
	    return this.real + " + " + this.imaginary + "i";
	},

    /** The conjugate function returns the conjugate of the complex number.  This is a unary operation, so I'll include it, here. */

    conjugate: function() {
	return new ComplexNumber(this.real - this.imaginary);
	},
};

/** I'm chopping this into two objects.  The ComplexNumber object stores the complex number as well as unary operations on the complex number.  The ComplexMath object stores math operations that work on at least two complex numbers.**/

var ComplexMath = {
    
	/**
	 * The add operation which sums the real and complex parts separately
	 * 
	 * @param ==> 	If there is one argument, assume it's a ComplexNumber
	 * 				If there are two arguments, assume the first is the real part and the second is the imaginary part
	 * 
	 * @return ComplexNumber
	 */
	add: function(addend, summand) {
        return new ComplexNumber(addend.real + summand.real, addend.imaginary + summand.imaginary);
	},
	
	/**
	 * The subtract operation which subtracts the real and complex parts from one another separately
	 * 
	 * @param ==> 	If there is one argument, assume it's a ComplexNumber
	 * 				If there are two arguments, assume the first is the real part and the second is the imaginary part
	 * 
	 * @return ComplexNumber
	 */
	sub: function(minuend, subtrahend) {
        return new ComplexNumber(minuend.real - subtrahend.real, minuend.imaginary - subtrahend.imaginary);
	},
	
	/**
	 * The multiplication operation which multiplies two complex numbers
	 * 
	 * @param ==> 	If there is one argument, assume it's a ComplexNumber
	 * 				If there are two, assume the first is the real part and the second is the imaginary part
	 * 
	 * @return ComplexNumber
	 */
	mult: function() {
	    var multiplier = arguments[0];
		
	    if(arguments.length != 1)
	        multiplier = new ComplexNumber(arguments[0], arguments[1]);
		 
	    return new ComplexNumber(this.real * multiplier.real - this.imaginary * multiplier.imaginary, 
								this.real * multiplier.imaginary + this.imaginary * multiplier.real);
	},
	

	/**
	 * 3:28 PM, 3-20-2013
	 * The division operation divides two complex numbers.
	 * 
	 * a + bi   ac + bd   bc - ad
	 * ------ = ------- + -------i
	 * c + di   c^2+d^2   c^2+d^2
	 *
	 */
	 div: function(dividend, divisor) {
	 	var quotient = new ComplexNumber;

	     quotient.real = [(dividend.real * divisor.real) + (dividend.imaginary * divisor.imaginary)] / [(dividend.real * divisor.real) + (dividend.imaginary * divisor.imaginary)];

	     quotient.imaginary = [(dividend.imaginary * divisor.real) - (dividend.real * divisor.imaginary)] / [(dividend.real * divisor.real) + (dividend.imaginary * divisor.imaginary)];

return quotient;
	}

};