//12 is used as magic number as we set only 12 cards in each round;
export function shuffleArrayN (array, score, maxScore) {
	const tempArray = shuffleArray(array);
	const newArray = [];

	let numSeen, numUnseen;
	if (score < 6) {
		numSeen = score;
		numUnseen = 12 - numSeen;
	} else if ((maxScore - score) < 6) {
		numUnseen = maxScore - score;
		numSeen = 12 - numSeen;
	} else {
		numUnseen = 6;
		numSeen = 6;
	}

	let currSeen = 0;
	let currUnseen = 0;
	for (let i = tempArray.length - 1; i > 0; i--) {
		if (currUnseen === numUnseen && currSeen === numSeen) {
			break;
		}
		if (tempArray[i].seen === 'F') {
			if (currUnseen === numUnseen) {
				continue;
			}
			currUnseen++;
		} 
		if (tempArray[i].seen === 'T') {
			if (currSeen === numSeen) {
				continue;
			}
			currSeen++;
		}
		newArray.push(tempArray[i]);
	}
	return newArray;
}

function shuffleArray(array) {
	const newArray = array.slice(0);
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}
