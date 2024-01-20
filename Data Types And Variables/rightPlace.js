function rightPlace(string1,char,match) {
    let res=string1.replace(`_`,char);
    let output=res===match ? `Matched` : `Not Matched`;
    console.log(output);
}

rightPlace('Str_ng', 'I',

'Strong')