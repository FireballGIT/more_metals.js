// Lithium
elements.lithium = {
    color: ["#747474ff", "#888787ff", "#989898ff"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    fireColor: ["#cd0000ff", "#de0505ff"], // crimson red
    stateHigh: "molten_lithium",
    tempHigh: 180.5,
    conduct: 1,
    density: 534
}

elements.molten_lithium = {
    color: ["#707070ff", "#535353ff"],
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    stateLow: "lithium",
    tempLow: 180.5,
    density: 512
}

// Chromium
elements.chromium = {
    color: ["#898989ff", "#7a7a7a", "#dbd9d9ff"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    fireColor: ["#ffffff", "#ebebeb"], // white sparks
    stateHigh: "molten_chromium",
    tempHigh: 1907,
    conduct: 1,
    density: 7190
}

elements.molten_chromium = {
    color: ["#eb4300ff", "#f16e03ff", "#f98686ff"],
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    stateLow: "chromium",
    tempLow: 1907,
    density: 6660
}

// Titanium
elements.titanium = {
    color: ["#3e3e3eff", "#7a7a7a", "#777676ff"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    fireColor: ["#ffffff", "#e0e0ff"], // white sparks
    stateHigh: "molten_titanium",
    tempHigh: 1668,
    conduct: 1,
    density: 4510
}

elements.molten_titanium = {
    color: ["#ffbf00ff", "#f16e03ff", "#ff6200ff"],
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    stateLow: "titanium",
    tempLow: 1668,
    density: 3930
}

// Nickel
elements.nickel = {
    color: ["#a5a5a5ff", "#8c8c8cff", "#b0b0b0ff"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    fireColor: ["#66ff66", "#99ff99"], // faint green
    stateHigh: "molten_nickel",
    tempHigh: 1455,
    conduct: 1,
    density: 8900
}

elements.molten_nickel = {
    color: ["#ffaa33", "#ff9933", "#ff8800"],
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    stateLow: "nickel",
    tempLow: 1455,
    density: 7580
}

// Cobalt
elements.cobalt = {
    color: ["#5f5f8aff", "#7373aaff", "#6b6b9fff"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    fireColor: ["#3399ff", "#66ccff"], // faint blue
    stateHigh: "molten_cobalt",
    tempHigh: 1495,
    conduct: 1,
    density: 8900
}

elements.molten_cobalt = {
    color: ["#aabbff", "#99ccff", "#7799ff"],
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    stateLow: "cobalt",
    tempLow: 1495,
    density: 7700
}

// Platinum
elements.platinum = {
    color: ["#dcdcdcff", "#cfcfcfff", "#e0e0e0ff"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    fireColor: ["#ffffff", "#f0f0f0"], // white
    stateHigh: "molten_platinum",
    tempHigh: 1768,
    conduct: 1,
    density: 21450
}

elements.molten_platinum = {
    color: ["#ffeedd", "#ffffff", "#f8f8ff"],
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    stateLow: "platinum",
    tempLow: 1768,
    density: 19300
}
