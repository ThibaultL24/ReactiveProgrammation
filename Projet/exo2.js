function buildingsWestView(heights) {
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        let hasView = true;
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[j] >= heights[i]) {
                hasView = false;
                break;
            }
        }
        if (hasView) {
            count++;
        }
    }

    return count;
}

console.log(buildingsWestView([3, 7, 8, 3, 6, 1])); //  3
console.log(buildingsWestView([1, 4, 5, 8]));       //  1
