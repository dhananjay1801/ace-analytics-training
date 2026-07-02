function pattern(n) {
    const totalRows = 2 * n;

    for (let i = 1; i <= totalRows; i++) {
        let str = "";

        let row = i <= n ? i : totalRows - i + 1;

        if (row <= 4) {
            let leadingSpaces = (4 - row) * 2;
            
            str += " ".repeat(leadingSpaces) + "* ".repeat(2 * row - 1);
        } 
        else if (row === n) {
            str += "* ".repeat(7);
        } 
        else {
            let borderStarsCount = row - 4; 
            let outerStars = "* ".repeat(borderStarsCount);
            
            let hollowSpacesCount = (7 - (2 * borderStarsCount)) * 2;

            str += outerStars + " ".repeat(hollowSpacesCount) + outerStars;
        }

        console.log(str.trimEnd());
    }
}

pattern(8);