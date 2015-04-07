var reds = "";
var blacks = "";
var size = 8;

//for (y = 0; y < size/2; y++) {

for (x = 0; x < size; x++) {
	if (x % 2 != 0) {
		reds += " ";
		blacks += "#"
	} else {
		reds += "#";
		blacks += " ";
	}
}
for (y = 0; y < size/2; y++) {
	console.log(reds);
	console.log(blacks);
//}
}
/*for (x = 0; x <= 7; x++) {
	if (x % 2 != 0) {
		blacks += " ";
	} else {
		blacks += "#";
	}
}
console.log(blacks);
*/
