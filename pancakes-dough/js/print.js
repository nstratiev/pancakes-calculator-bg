// ##### Print [Start] #####
export function printOutputResults_formMain(resultsData) {
  const data = resultsData;
  const elemObj = outputTagElementsObj_fMain;

  for (const key in elemObj) {

    if (key === 'batterHydration') {
      printResult(data[key], elemObj[key], 0, { prefix: '', postfix: ' %' }, 'normal');
      continue;
    } else if (key === 'batterWeight') {
      printResult(data[key], elemObj[key], 0, { prefix: '', postfix: ' g' }, 'normal');
    } else {
      printResult(data[key], elemObj[key], 0);
    }

  }
}

function printResult(value, resultElem, toFixedIndex, additionalTextObj, fontWeight = 'bold') {
  // additionalTextObj = {prefix: '', postfix: ''};
  let result;

  if (value) {
    if (additionalTextObj) {
      result = `${additionalTextObj.prefix}${value.toFixed(toFixedIndex)}${additionalTextObj.postfix}`;
    } else {
      result = `${value.toFixed(toFixedIndex)}`;
    }
  } else {
    result = '';
  }

  resultElem.style.fontWeight = fontWeight;
  resultElem.textContent = result;
}

// IMPORTS
import { outputTagElementsObj_fMain } from './elements.js';

// ##### Print [End] #####
// ##### Print [End] ##### >>> Revisited
