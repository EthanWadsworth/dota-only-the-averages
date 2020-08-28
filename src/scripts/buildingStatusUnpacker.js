function barracksStatus(val) {
    // val: 8 bit unsigned integer
    const botRanged = val & 32
    const botMelee = val & 16
    const midRanged = val & 8
    const midMelee = val & 4
    const topRanged = val & 2
    const topMelee = val & 1
    return {botRanged, botMelee, midRanged, midMelee, topRanged, topMelee}
}

function buildingStatus(val) {
    // val: 16 bit unsigned integer
    const ancientTop = val & 1024
    const ancientBot = val & 512
    const botT3 = val & 256
    const botT2 = val & 128
    const botT1 = val & 64
    const midT3 = val & 32
    const midT2 = val & 16
    const midT1 = val & 8
    const topT3 = val & 4
    const topT2 = val & 2
    const topT1 = val & 1
    return {ancientTop, ancientBot, botT3, botT2, botT1, midT3, midT2, midT1, topT3, topT2, topT1}
}

console.log(barracksStatus(48))
console.log(buildingStatus(1974))