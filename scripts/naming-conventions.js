{
	/*
	 * NAMING CONVENTIONS
	 *
	 * This is perhaps the most important lesson for today even though you may laugh at me for saying this.
	 * It is of utmost importance that when we write our applications, we use of proper naming conventions
	 * for our variables and functions which we create.
	 * 
	 * It can be further categorized in two:
	 * 1. Using sensible names while creating variables and functions
	 * 2. Following a standard way of writing names of those variables and functions
	 * 
	 * 1.
	 * It's a fact that when you become a developer, more than 50% of your time would be spent in reading someone else's code
	 * rather than writing it. If you don't believe this number, feel free to ask any mentor developer.
	 * 
	 * Now imagine if I was not named Yash Kapila but abc or xxx. That would be really inconvenient for a second person, isn't it?
	 * Similarly, if you wrote your code using variable names such as abc, xxx, qwe or some gibberish, it would be very inconvenient
	 * for someone else to read and understand your code.
	 * 
	 * What makes more sense to you?
	 * 
	 * const x = 30;
	 * 
	 * OR
	 * 
	 * const age = 30;
	 * 
	 * Similarly, what makes more sense here?
	 * 
	 * function xyz(num) {
	 *   return num * num;
	 * }
	 * 
	 * OR
	 * 
	 * function squareNumber(num) {
	 * 	 return num * num;
	 * }
	 * 
	 * 2.
	 * camelCase vs PascalCase vs snake_case vs kebab-case
	 * 
	 * camelCase:
	 * In JavaScript the convention is to spell the names of variables that contain data using camelCase
	 * i.e. the first word in the variable name should start with a lower case letter and each subsequent word with an an upper case letter.
	 * 
	 * const age = 30;
	 * const firstName = 'Yash';
	 * 
	 * PascalCase
	 * This casing is restricted in JavaScript to class names and constructor functions.
	 * 
	 * class Movie {
	 *   // class body
	 * }
	 * 
	 * snake_case
	 * This casing is not generally used in JavaScript except for naming global constants. In this case the variable name should be completely in upper case.
	 * 
	 * const MAX_AGE = 60;
	 * 
	 * kebab-case
	 * This casing is used for class names in css and sometimes for filenames in JavaScript.
	 * You would perhaps never use this kind of casing when writing JavaScript.
	 * 
	 * .page-title { 
	 *	  color: #ff23be.
	 * }
	 * 
	 * <h1 class="page-title">Beautiful Title</h1>
	 * 
	 * Check the naming convention of files I have used in this exercise
	 */
}