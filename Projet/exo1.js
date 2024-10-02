class PairSum {
    constructor(array) {
        this.array = array;
    }

    hasPairWithSum(k) {
        let n = this.array.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (this.array[i] + this.array[j] === k) {
                    return true;
                }
            }
        }

        return false;
    }
}

function result() {
    const numbers = [10, 15, 3, 7];
    const k = 17;

    const pairSum = new PairSum(numbers);

    const hasPair = pairSum.hasPairWithSum(k);
    if (hasPair) {
        console.log(`Il existe deux nombres dont la somme est égale à ${k}.`);
    } else {
        console.log(`Aucune paire de nombres n'a une somme égale à ${k}.`);
    }
}

result();
