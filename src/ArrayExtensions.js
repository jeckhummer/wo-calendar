// Array.range = function (i, f) {
// 	let func = f === undefined ? (_, i) => i : f;
// 	return Array.apply(null, Array(i)).map((_, i) => func(i));
// };

// Array.prototype.chunk = function (n) {
// 	return Array.from(Array(Math.ceil(this.length / n)), (_, i) => this.slice(i * n, i * n + n));
// };

// Array.prototype.concatAll = function () {
// 	return this.reduce((acc, x) => acc.concat(x), []);
// }