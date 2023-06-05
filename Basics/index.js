const str = "quick brown fox jumps over the lazy dog";
const capitalized = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log("Capitalized String:", capitalized);
