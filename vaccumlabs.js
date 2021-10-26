let synonyms = [
    ['big', 'large', 'huge', 'tall']
    // ,
    // ['small', 'little'],
    // ['wood', 'forest', 'lumber'],
    // ['meadow', 'prairie']
];

let input = [
    ['small', 'large']
    // ,
    // ['large', 'huge'],
    // ['small', 'little'],
    // ['apple', 'banana'],
    // ['same', 'same'],
    // ['big', 'huge'],
    // ['huge', 'big'],
    // ['apple', 'peach'],
    // ['big', 'tall'],
    // ['peach', 'PEACH'],
    // ['wood', 'FORest'],
    // ['meadoW', 'PrAirIe'],
    // ['WOOD', 'Lumber'],
    // ['lumber', 'forest'],
    // ['lumber', 'forest'],
    // ['wood', 'LUMBER'],
    // ['mEADOw', 'fire']
];

for (let synonymsArrIndex = 0; synonymsArrIndex < synonyms.length; synonymsArrIndex++) {
        
        // console.log(synonyms[synonymsArrIndex]);
        // ouput is ['big', 'large', 'huge', 'tall']

        let inputArrIndex = 0;
        let inputArrItem = 0;

        for (let synonymsArrItem = 0; synonymsArrItem < synonyms[synonymsArrIndex].length; synonymsArrItem++) {

        // console.log(synonyms[synonymsArrIndex].length);
        // output is 4

        // console.log(synonyms[synonymsArrIndex][synonymsArrItem]);
        // output is big

        // console.log(input[inputArrIndex][inputArrItem]);
        // output is small
        
        // console.log(inputArrItem);
        // 0

        // console.log(input[inputArrIndex].length-1);
        // 1

            if (inputArrItem <= input[inputArrIndex].length-1) {
                if (synonyms[synonymsArrIndex][synonymsArrItem] == input[inputArrIndex][inputArrItem]) {
                    inputArrIndex++;
                    
                    inputArrItem++;

                    console.log('first_item_is_similar');
                } else {
                    inputArrIndex++;
                    
                    inputArrItem++;

                    console.log('first_item_is_not_similar');
                }
            } else {
                console.log('done lopping input');
            }
        }
}

// Use the following rules to decide:
// If the pair of words is declared synonymous in the input, then they are synonyms.
// Being synonyms doesn’t depend on order, e.g. if big is a synonym for large then large is a synonym for big.
// We can derive the synonymous relationship indirectly: if big is a synonym for large and large is a synonym for huge then big is a synonym for huge.
// If two words differ only by case, they are synonyms, e.g. same is a synonym for both SAmE, SAME and also same (itself).
// If none of the above rules can be used to decide whether two words are synonyms, then they are not.