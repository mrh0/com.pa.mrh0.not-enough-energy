var newBuild = {
    "/pa/units/land/titan_energy_plant/titan_energy_plant.json": ["utility", 0, { row: 0, column: 7, titans: true }],
    "/pa/units/land/energy_plant_adv/energy_plant_adv.json": ["utility", 0, { row: 1, column: 7, titans: true }],
    "/pa/units/land/energy_plant_improved/energy_plant_improved.json": ["utility", 0, { row: 0, column: 3, titans: true }],
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}