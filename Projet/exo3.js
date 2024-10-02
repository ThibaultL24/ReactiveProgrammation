function findPairsSum(arr, k) {
    const seen = new Set();  // Ensemble pour stocker les éléments déjà rencontrés
    const pairs = [];  // Tableau pour stocker les paires trouvées

    for (let num of arr) {
        const difference = k - num; 

        if (seen.has(difference)) {
            pairs.push([difference, num]); 
        }

        seen.add(num); 
    }

    return pairs; 
}

const numbers = [10, 15, 3, 7];
const k = 17;

const pairs = findPairsSum(numbers, k);

if (pairs.length > 0) {
    console.log(`Paires avec somme ${k}: ${pairs.length} trouvées - ${pairs.map(pair => `(${pair[0]}, ${pair[1]})`).join(', ')}`);
} else {
    console.log(`Paires avec somme ${k}: aucune trouvée`);
}
