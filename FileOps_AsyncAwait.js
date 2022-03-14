const file = require("fs").promises; //import file module for file operations.
const path = require("path");

const fileOps = async () => {
    try {
        const content = await file.readFile(path.join(__filename, '../DemoFIle3.txt'), 'utf8');
        console.log(content);
        //await file.writeFile(path.join(__filename, '../DemoFIle4.txt', '\n\n Writing in to the file'), content);
        await file.writeFile('./DemoFile4.txt', 'Writing into the file');
        console.log("File written:");

        await file.appendFile('./DemoFile4.txt', '\n Appending to the file');
        console.log("File appended:");

        await file.rename('./DemoFile4.txt', 'FileRenamed.txt');
        console.log("File Renamed:");

    } catch (error) {
        console.log("Error",error);
    }
};

fileOps();
