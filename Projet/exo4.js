function BuildingsWestView(buildings) {
    let count = 0;              
    let maxHeight = 0;          

    for (let height of buildings) {
        if (height > maxHeight) {
            count++;             // Incrémenter le compteur si le bâtiment a une vue
            maxHeight = height;  // Mettre à jour la hauteur maximale
        }
    }

    return count;  
}

const buildings = [3, 7, 8, 3, 6, 1];
const result = BuildingsWestView(buildings);

console.log(`Nombre de bâtiments avec vue à l'ouest : ${result}`);
