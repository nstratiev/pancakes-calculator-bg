// ##### Storage [Start] #####
const calculatorName = 'calcPancakes';

export function setLocalStorage(dataObj, formName) {
  const calculatorData = JSON.parse(localStorage.getItem(calculatorsCategory));

  calculatorData[calculatorName] = {
    [formName]: dataObj
  };

  const jsonData = JSON.stringify(calculatorData);
  localStorage.setItem(calculatorsCategory, jsonData);
}

function getFormLocalStorage(formName) {
  const calculatorData = JSON.parse(localStorage.getItem(calculatorsCategory));

  console.log("getFormLocalStorage() >>> ", calculatorData);

  return calculatorData[calculatorName][formName];
}

export function clearLocalStorageGlobal() {
  localStorage.removeItem(calculatorName);
  // localStorage.clear();
}

export function populateLocaleStorageData(formsArr) {

  for (const formElem of formsArr) {
    const localStorageObj = getFormLocalStorage(formElem.name);

    if (localStorageObj === null) {
      console.info('No localStorage for this form ...');
      return null;
    }

    for (const key in localStorageObj) {
      const target = formElem[key];
      // const target = formElem.querySelector(`input[name=${key}]`);
      target.value = localStorageObj[key];
    }

  }

}

// IMPORTS
import { calculatorsCategory } from '../../global/js/storage.js';
// ##### Storage [End] #####
