const os = require("os");
const path = require("path");
const { add, subtract } = require("./math");

console.log("Sum is:-", add(10, 12));
console.log("SUbtraction is:-", subtract(10, 12));

console.log("Type of OS:-->", os.type());
console.log("Version of OS:-->", os.version());

console.log("Path Name:-", path.dirname(__filename));
console.log("Current File Name:-", path.basename(__filename));
console.log("Extension of the file:-", path.extname(__filename));

console.log("Object of path:-", path.parse(__filename));

console.log("Hello Nodemon");
