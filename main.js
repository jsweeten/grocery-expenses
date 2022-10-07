/* Update the code to calculate your average monthly grocery expenses for the five months' worth of expenses that have been recorded already in the array. */

const monthlyExpenses = [ 201.43, 189.22, 132.09,  238.85, 195.41 ]
let totalExpense = 0

for (const dailyExpense of monthlyExpenses) {
	totalExpense += dailyExpense
}

// Calculate your average monthly food costs
const averageExpense = totalExpense / monthlyExpenses.length;

// Make sure you use backticks for multi-line string output
console.log(`On average, I spend ${averageExpense} dollars on groceries per month.`)
console.log(`So far this year, I have spent ${totalExpense} dollars on groceries.`)