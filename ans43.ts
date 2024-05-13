let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let papularMagicians = [];
    magicians.forEach(magician => {
        papularMagicians.push(`${magician} the Great`);
    });
    return papularMagicians
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
showMagicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names