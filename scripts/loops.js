{
	/*
	* LOOPS
	*
	* A loop is a programming pattern which is used to perform a repetitive action. Often (but not always) the repetitive action involves accessing or manipulating the individual elements of an array.
	*
	* Imagine that you have 100s of books stored inside a variable and you want to find out the titles of all those books.
	* One way would be to print the titles individually for all those stored books using 100s of console.log statements.
	* 
	* Or imagine that you are creating a banking application and want to print all transactions of a user in HTML. Would you prefer to create 100s of para elements
	* and attach them to HTML individually? That's going to be hard, isn't it? But computers are there to make our lives easier, aren't they?. :wink:
	* 
	* These exact same tasks can be achieved easily in just a few lines of code using loops.
	* 
	* In JavaScript, we have different ways of writing loops:
	* 1. while
	* 2. do-while
	* 3. for
	* 4. for-of
	* 5. for-in(loop over objects)
	*
	* In order to learn about these different loops, we will take an example array of books and find out the title and number of pages for each book.
	*/

	// This data structure is an array of objects. It's probably going to be the most common data structure you would use from now on.
	const books = [{
		title: 'Siddhartha',
		pages: 152,
	}, {
		title: 'The Book Thief',
		pages: 554,
	}, {
		title: 'Life of Pi',
		pages: 352,
	}, {
		title: 'The Xenophobe\'s Guide to the Dutch',
		pages: 92,
	}];

	/*
	* while loop
	*
	* SYNTAX:
	* while(condition) {
	*   // loop body
	* }
	*/

	// let index = 0
	
	// while(index < books.length) {
	// 	console.log('Title', books[index].title);
	// 	console.log('Pages', books[index].pages);

	// 	index++;
	// }

	/*
	* do-while loop
	*
	* SYNTAX:
	* do {
	*   // loop body
	* } while(condition)
	* 
	* A big difference between while and do-while loop is that the latter will get executed always ATLEAST once.
	* This is why it's not always desirable to use do-while loops and you wouldn't see it being used a lot.
	*/

	// let index = 0;

	// do {
	// 	console.log('Title', books[index].title);
	// 	console.log('Pages', books[index].pages);

	// 	index++;
	// } while(index < books.length)

	/*
	* for loop
	*
	* SYNTAX:
	* for ([initialization]; [condition]; [final - expression]) {
	*   // loop body
	* }
	*/

	// for (let index = 0; index < books.length; index++) {
	// 	console.log('Title', books[index].title);
	// 	console.log('Pages', books[index].pages);
	// } 

	/*
	* for-of loop
	*
	* SYNTAX:
	* for (variable of iterable) {
	*   // loop body
	* }
	*/

	// for (const book of books) {
	// 	console.log('Title', book.title);
	// 	console.log('Pages', book.pages);
	// }

	/*
	* for-in loop
	*
	* SYNTAX:
	* for (variable in iterable) {
	*   // loop body
	* }
	* 
	* This loop construct is available in JavaScript to be iterated over objects only. Having said that, in JavaScript even arrays are considered as objects.
	* Thus, we can potentially use this loop to iterate over our books array but it isn't a good practice. We should use it only for iterating over objects.
	* 
	* There is another catch to this loop which you would discover when you get to JavaScript inheritance in JS3. But if you are keen to find out what the difference is,
	* feel free to Google search for difference between for-in and using Object.keys()
	*/

	/* Not the best use */
	//  for (const index in books) {
	// 	console.log('Title', books[index].title);
	// 	console.log('Pages', books[index].pages);
	//  }

	//  const obj = {
	// 	 a: 10,
	// 	 b: 20,
	//  };

	//  /* More common usage */
	//  for (const key in obj) {
	// 	console.log(obj[key]);
	//  }
}