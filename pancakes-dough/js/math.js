// ##### Math [Start] #####
export function calculate_fMain(inputDataObj) {
  // Input fields >>> ["eggsWeightAvailable","flourPercent","milkPercent","saltPercent"]

  const d = inputDataObj;

  const eggsWeight = Number(d.eggsWeightAvailable);
  const flourWeight = eggsWeight * (Number(d.flourPercent) / 100);
  const milkWeight = flourWeight * (Number(d.milkPercent) / 100);
  const saltWeight = flourWeight * (Number(d.saltPercent) / 100);
  const batterHydration = ((eggsWeight + milkWeight) / flourWeight) * 100;
  const batterWeight = eggsWeight + flourWeight + milkWeight + saltWeight;

  const output = { eggsWeight, flourWeight, milkWeight, saltWeight, batterHydration, batterWeight };
  return output;
}

// IMPORTS
import { outputTagElementsObj_fMain } from './elements.js';


// ##### Math [End] #####
// ##### Math [End] ##### >>> Revisited
