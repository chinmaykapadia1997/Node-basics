const files = require("fs");

//To create the directory:-
if (!files.existsSync("./newDIR")) {
  files.mkdir("./newDIR", function (err) {
    if (err) throw err;
    console.log("Directory created:-");
  });
}
else{
    console.log("Directory already exists");
}

//To remove the directory:-
if(files.existsSync('./newDIR')){
    files.rmdir('./newDIR', function (err) {
        if (err) throw err;
        console.log("Directory Removed");
    })
}