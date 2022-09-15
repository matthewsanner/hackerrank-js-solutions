//Determines the amount of potions a hurdle jumper would need to take to jump a series of hurdles of particular heights, 1 potion increases max jump height by 1 unit for the whole run

function hurdleRace(k, height) {
    let potions=Math.max(...height)-k;
    if (potions<0){
        potions=0;
    }
    return potions;
}