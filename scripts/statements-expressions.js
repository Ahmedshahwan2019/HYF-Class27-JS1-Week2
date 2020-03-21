{
	/*
	 * STATEMENTS & EXPRESSIONS
	 *
	 * The way how all computer programs work is that you as a human gives a set of instructions to the machine
	 * and then the machine processes those instructions one by one. These instructions are also known as statements.
	 *
	 * On the other hand, we also have to deal with values within our program. A variable wouldn't be of any purpose
	 * to us if it weren't containing any value. This is where expressions come into picture.
	 * Expressions always evaluate to a value.
	 * 
	 * Important point to remmeber is that a statement can contain an expression but an expression can never contain a statement
	 */

	 /*
	  * Below is a simple line of code which you would have seen or written previous week.
	  * It creates a constant variable named x and assigns it the value 10. If you look closely, this whole line of code
	  * is a statement or an instruction for the computer to do something. However, it also contains an expression. The value 10.
	  * Even though 10 itself is a value, in terms of computer interpretation, it would still be considered as an expression which
	  * evaluates to a value 10. Still not clear? Let's look at another example.
	  */
	 const x = 10;

	 /*
 	  * Let's leave aside the fact that we don't know anything about functions. Imagine that there is a piece of code written inside
	  * getMyAge function which gives me back my current age and assigns it to a variable named age. Again, this whole line of code is
	  * a statement. However, getMyAge() is an expression which would evaluate to a single value 30(my age) when this piece of code executes.
	  */
	 const age = getMyAge();

	 /*
	  * Below are valid pieces of code(expressions) which evaluate to a single value 9. But they are pretty useless because we are not using
	  * those evaluated values anywhere. They will get lost once the computer moves over to next statement.
	  * This implies that an expression without being used inside a statement is quite useless.
	  */
	 4 + 5
	 a + b
	 arr[1]
	 [1, 2, 3]
		
	/*
	 * Below are some of the examples of statements which we most commonly used inside JavaScript.
	 * You can clearly see here that these are instructions to the computer which conveys it what we want it to do.
	 */

	console.log(100);
	for (let x = 0; x < 5; x++) {
	  console.log(x);
	}
	if (x > 100) {
	  console.log('Greater than 100');
	} else {
	  console.log('Less than 100');
	}

	 /* 
	  * A nice video explanation for statements vs expressions can also be found here:
	  * https://www.youtube.com/watch?v=WVyCrI1cHi8
	  */
}
