import { readFile, rm } from "node:fs/promises";
import { resolve } from "node:path";

let myFile =
    "/home/jonathan/Documents/web_development/projects/posts/src/myFile.txt";
let myFile2 = "src/myFile2.txt";

let filePath = resolve(myFile2);

rm(filePath)
    .then((err) => console.log("ok"))
    .catch((err) => console.log(err));

console.log(resolve(myFile2));

/*
    readFile(myFile, { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
*/
