export const Test = () => {
	// Define a function that calculates and dispenses change
	function dispenseChange(price, amountGiven) {
		// Define an array of objects for each denomination, from largest to smallest
		const denominations = [
			{ name: '$20 bills', value: 20 },
			{ name: '$10 bills', value: 10 },
			{ name: '$5 bills', value: 5 },
			{ name: '$1 bills', value: 1 },
			{ name: 'Quarters', value: 0.25 },
			{ name: 'Dimes', value: 0.1 },
			{ name: 'Nickels', value: 0.05 },
			{ name: 'Pennies', value: 0.01 },
		];

		// Calculate the total change required by subtracting the price from the amount given
		let changeRequired = amountGiven - price;

		// Check if the amount given is less than the price
		if (changeRequired < 0) {
			// If not enough money is provided, inform the user how much more is needed
			console.log(
				`Not enough money provided. Please provide an additional $${Math.abs(
					changeRequired
				).toFixed(2)}.`
			);
			return; // Exit the function
		}

		// Log the total change that needs to be dispensed
		console.log(`Total change to dispense: $${changeRequired.toFixed(2)}`);

		// Use the reduce function to iterate over each denomination
		let changeDispensed = denominations.reduce((acc, denom) => {
			// Determine how many of the current denomination are needed
			let count = Math.floor(changeRequired / denom.value);
			if (count > 0) {
				// If at least one of the current denomination is needed, add it to the accumulator
				acc.push(`${count} x ${denom.name}`);
				// Subtract the value of the dispensed denomination from the total change required
				changeRequired -= count * denom.value;
			}
			return acc; // Return the accumulator for the next iteration
		}, []);

		// Check if any change has been dispensed
		if (changeDispensed.length === 0) {
			// If no change is needed, inform the user
			console.log('No change required.');
		} else {
			// Otherwise, log the denominations of change to be dispensed
			console.log('Change dispensed:', changeDispensed.join(', '));
		}
	}

	// Example usage of the function
	dispenseChange(50, 57); // Expected output: "Change dispensed: 7 x $1 bills"
	dispenseChange(50, 30); // Expected output: "Not enough money provided. Please provide an additional $20."

	return (
		<div>
			{/* <h1>Nums: {nums}</h1> */}
			{/* <h2>Target: {target}</h2> */}
		</div>
	);
};
