/** ComplexNumber class
 * 
 * The complex number class holds complex numbers and performs unary operations on them.  It accepts a real and imaginary part.
 * 
 * @author Rudolf Winestock
 * 
 * I forked this project from Jan Hartigan's ComplexNumber project.  I have made a number of structural changes to it.
 * @inspiration http://www.java2s.com/Code/JavaScript/Language-Basics/Complexclasstorepresentcomplexnumbers.htm
 * @version 1.0.0 (6-10-2013)
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
	 * 
	 */
	mod: function() {
	    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
	},
	
    /**
     * The argument of a complex number (polar form).
     * Please note that this number will be in radians.
     * 
     * @return number
     * 
     */
    polarArgument: function() {
	return Math.atan2(this.imaginary, this.real);
    },

	/**
	 * The string representation of a complex number (e.g. 4 + 3i)
	 * 
	 * @return String
	 * 
	 */
	toString: function() {
	    if (this.imaginary >= 0)
	    return this.real + " + " + this.imaginary + "i";
	    else 
		return this.real + " - " + Math.abs(this.imaginary) + "i";
	},

    /** The conjugate function returns the conjugate of the complex number.
     * 
     * @return ComplexNumber
     * 
     * */
    conjugate: function() {
	return new ComplexNumber(this.real - this.imaginary);
	}
};


/** ComplexMath class
 * 
 * The ComplexMath object stores math operations that work on at least two complex numbers.
 */

var ComplexMath = {
	/**
	 * The add operation which sums the real and complex parts separately
	 * 
	 * @param ComplexNumber   addend
	 * @param ComplexNumber   summand
	 * 
	 * @return ComplexNumber
	 * 
	 */
	add: function(addend, summand) {
        return new ComplexNumber(addend.real + summand.real, addend.imaginary + summand.imaginary);
	},
	
	/**
	 * The subtract operation subtracts the real and complex parts from one another separately
	 * 
	 * @param ComplexNumber   minuend
	 * @param ComplexNumber   subtrahend
	 * 
	 * @return ComplexNumber
	 * 
	 */
	sub: function(minuend, subtrahend) {
        return new ComplexNumber(minuend.real - subtrahend.real, minuend.imaginary - subtrahend.imaginary);
	},
	
	/**
	 * The multiplication operation which multiplies two complex numbers
	 * 
	 * @param ComplexNumber   multiplicand
	 * @param ComplexNumber   multiplier
	 * 
	 * @return ComplexNumber
	 * 
	 */
	mult: function(multiplicand, multiplier) {
	return new ComplexNumber(multiplicand.real * multiplier.real - multiplicand.imaginary * multiplier.imaginary, multiplicand.real * multiplier.imaginary + multiplicand.imaginary * multiplier.real);
	},
	
	/**
	 * The division operation divides two complex numbers according to the following formula:
	 * 
	 * 
	 * a + bi   ac + bd   bc - ad
	 * ------ = ------- + -------*i
	 * c + di   c^2+d^2   c^2+d^2
	 *
	 * @param ComplexNumber   dividend
	 * @param ComplexNumber   divisor
	 * 
	 * @return ComplexNumber
	 * 
	 */
	 div: function(dividend, divisor) {
	 return new ComplexNumber((dividend.real * divisor.real + dividend.imaginary * divisor.imaginary) / (divisor.real * divisor.real + divisor.imaginary * divisor.imaginary), (dividend.imaginary * divisor.real - dividend.real * divisor.imaginary) / (divisor.real * divisor.real + divisor.imaginary * divisor.imaginary));
	}
};