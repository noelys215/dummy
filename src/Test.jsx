export const Test = () => {
	function twoSumHashMap(nums, target) {
		const storage = {}; // Initialize an empty object to act as a hash map

		// Loop through each element in the array
		for (let i = 0; i < nums.length; i++) {
			// Calculate the difference needed to reach the target
			const diff = target - nums[i];

			// Check if the difference has already been seen (exists in storage)
			if (diff in storage) {
				// If it exists, return an array containing the index of the
				// previously seen number and the current index
				return [storage[diff], i];
			}

			// If the current number does not help reach the target with any of the previously
			// seen numbers, add it to the hash map with its index as the value
			storage[nums[i]] = i;
		}
		// If no solution is found, this point in the code would typically return an indication of failure;
	}

	// Example usage
	const nums = [2, 7, 11, 15];
	const target = 9;
	console.log(twoSumHashMap(nums, target));

	const twoSum = (nums, target) => {
		let storage = new Map();

		for (let i = 0; i < nums.length; i++) {
			// get first number
			let num1 = nums[i];
			// subtract target by the fist number
			let num2 = target - num1;
			// If storage has the diff
			if (storage.has(num2)) {
				// get index from num2 and index of current number
				return [storage.get(num2), i];
			} else {
				// if not in storage, place it in storage
				storage.set(num1, i);
			}
		}
	};

	twoSum();

	return (
		<div>
			<h1>Nums: {nums}</h1>
			<h2>Target: {target}</h2>
		</div>
	);
};
