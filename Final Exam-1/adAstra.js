function adAstra(input) {
    let str=input.shift();
    let pattern=/([#|])(?<item>[A-za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;
    let totalKcal=0;
    let products=[];
    let matches=str.matchAll(pattern);
    for (let match of matches) {
        let { item,expdate,kcal }=match.groups;
        totalKcal+=Number(kcal);
        products.push({item,expdate,kcal});
    }
    let days=Math.floor(totalKcal/2000);
    console.log(`You have food to last you for: ${days} days!`);
    for (let product of products) {
        console.log(`Item: ${product.item}, Best before: ${product.expdate}, Nutrition: ${product.kcal}`);
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )