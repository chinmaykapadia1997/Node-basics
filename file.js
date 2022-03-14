const file = require("fs"); //import file module for file operations.
const path = require("path");

file.readFile("./DemoTextFile.txt", "utf-8", (err, data) => {
  // if(err) throw err;
  console.log(data);
});

//To write file path another way:-
file.readFile(
  path.join(__filename, "../DemoTextFile2.txt"),
  "utf-8",
  (err, data) => {
    console.log("File 2 data:-", data);
  }
);

console.log("Hello file operations:");

//Write to a file.
file.writeFile(
  path.join(__filename, "../DemoTextFile.txt"),
  "Testing the write to file function.",
  (err, data) => {}
);

//Append to a file.
file.appendFile(
  path.join(__filename, "../DemoTextFile.txt"),
  "Append also done.",
  (err, data) => {
    if (err) {
      return err;
    }
  }
);
