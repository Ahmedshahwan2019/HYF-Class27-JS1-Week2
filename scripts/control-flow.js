{
	/*
	 * CONTROL FLOW
	 *
	 * In JavaScript, the execution of a statement and bunch of statements goes from left to right and top to bottom respectively.
	 * This is called as Control FLow i.e the order in which a computer executes statements in our sript files.
	 * 
	 * Let's look at below examples to understand this further
	 */

	/*
	 * The order of logs in our console would be 10, 20, 30, 40 describing the top-bottom flow of execution.
	 */
	console.log(10);
	console.log(20);
	console.log(30);
	console.log(40);

	/*
	 * Even though the left to right execution may not be clear from this example, but the way how JavaScript is executed is
	 * (10 + 100) - 50
	 * 110 - 50
	 * 60
	 */
	const sum = 10 + 100 - 50;

	/*
	 * Even though we follow a top-bottom approach in script execution, it can be manipulated by the use of control statements.
	 * A control statement is a statement that determines whether other statements will be executed.
	 * For example, an if-else is a control statement as it determines which section of statements need to be executed based on a condition.
	 */
}