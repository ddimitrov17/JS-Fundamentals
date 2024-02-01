function registerForHereos(array) {
    let heroes = [];
    for (let command of array) {
        let [hero, level, allItems] = command.split(` / `);
        let heroObject = {
            name: hero,
            heroLevel: level,
            heroItems: allItems
        }
        heroes.push(heroObject);
    }
    let sortedByLevel = heroes.sort((a, b) => a.heroLevel - b.heroLevel);
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.heroItems}`);
    }
}

registerForHereos([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])