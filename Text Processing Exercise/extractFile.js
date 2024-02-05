function extractFile(fileInfo) {
    let a=fileInfo.split(`\\`).pop();
    let lastDot=a.lastIndexOf(`.`);
    let name=a.slice(0,lastDot);
    let extension=a.slice(lastDot+1);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')