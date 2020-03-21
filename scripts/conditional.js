{
	/*
	 * CONDITIONS
	 *
	 * Conditions just like loops is a programming pattern which is used to pick a set of statements to execute based on the result of a condition
	 * 
	 * Imagine a situation where you want to categorise all history books to be tagged in Historical section of a library and all fiction books
	 * be tagged in Fiction section of the library. Or in a banking application, you want to show all credit transactions in green colour while all
	 * debit transactions should be red. Do you see a common pattern in both examples?
	 * 
	 * Both examples above need you to perform different actions based on some condition. And this is where we make use of conditions in JavaScript.
	 * 
	 * There are two ways to achieve this:
	 * 1. if/else/elseif
	 * 2. switch
	 */

	/*
	 * if/else/elseif
	 *
	 * SYNTAX:
	 * 
	 * if(condition) {
	 * 	 // if statements
	 * } else if(second_condition) {
	 * 	 // elseif statements
	 * } else {
	 *   // last option if none of conditions meet
	 * }
	 */

	const size = 'M';

	if (size === 'XL') {
		console.log('Extra Large');
	} else if (size === 'L') {
		console.log('Large');
	} else if (size === 'M') {
		console.log('Medium');
	} else {
		console.log('Small')
	}

	const arr = [1,2,3,4];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			console.log(`${arr[i]} is an even number`);
		} else {
			console.log(`${arr[i]} is an odd number`);
		}
	}


	/*
	 * switch
	 *
	 * SYNTAX:
	 * 
	 * switch(condition) {
	 * 	case 'value1': 
	 * 		// statements
	 * 		// break;
	 * 
	 * 	case 'value2': 
	 * 		// statements
	 * 		// break;
	 * 
	 * 	case 'value3':
	 * 		// statements
	 * 		// break;
	 * 
	 * 	default:
	 * 		// statements
	 * 
	 * }
	 * 
	 * A switch can be a handy replacement if you see yourself using excessive else-if statements in your conditions.
	 */

	// if (color === 'red'){
	// 	//do something
	// } else if (color === 'blue'){
	// 	//do something
	// } else if (color === 'brown'){
	// 	//do something
	// } else if (color === 'black'){
	// 	//do something
	// } else {
	// 	//do something
	// }

	// VS

	// switch (color){
	// 	case 'red':
	// 		//do something
	// 		break;
	// 	case 'blue':
	// 		//do something
	// 		break;
	// 	case 'brown':
	// 		//do something
	// 		break;
	// 	case 'black':
	// 		//do something
	// 		break;
	// 	default:
	// 		//do something
	// }

	/*
	 * Writing break statements in each of case is very crucial. This is because if a break statement is not present,
	 * then the execution continues with the next case WITHOUT any checks.
	 */
	let a = 2 + 2;

	switch (a) {
		case 3:
			console.log( 'Too small' );
		case 4:
			console.log( 'Exactly!' );
		case 5:
			console.log( 'Too big' );
		default:
			console.log( "I don't know such values" );
	}
}