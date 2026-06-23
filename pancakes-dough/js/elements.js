// ##### Elements [Start] #####
export const versionHeaderElem = document.querySelector('#version-header');
export const versionLegendElem = document.querySelector('#version-legend');

// -- Forms
export const formMain = document.querySelector('#form-main');

// -- Elements - fMain
const inputs_fMain = getFormElementsByTag(formMain, 'INPUT');
const outputs_fMain = getFormElementsByTag(formMain, 'OUTPUT');

export const inputTagElementsArr_fMain = inputs_fMain.arr;
export const inputTagElementsObj_fMain = inputs_fMain.obj;

export const outputTagElementsArr_fMain = outputs_fMain.arr;
export const outputTagElementsObj_fMain = outputs_fMain.obj;

// Buttons
export const btnPredefinedValues = document.querySelector('.btn-predefined-values');

// Buttons (Global)
export const btnsGlobal = document.querySelector('.btns-global');
export const btnToTop = document.querySelector('#btn-to-top');
export const btnToTopContainer = btnToTop.parentElement;
export const btnGlobalReset = document.querySelector('#btn-reset-global ');
export const btnGlobalSave = document.querySelector('#btn-save-global');

// -- Functions
function getFormElementsByTag(formElem, targetTagString) {
  const arr = Array.from(formElem.elements).filter(el => el.tagName === targetTagString.toUpperCase());
  const obj = {};

  arr.forEach(el => {
    obj[el.name] = el;
  });

  return { arr, obj };
}

// Static objects
export const predefinedData_fMain = {
  "eggsWeightAvailable": "110",
  "flourPercent": "100",
  "milkPercent": "250",
  "saltPercent": "1.7"
};


// ##### Elements [End] #####
// ##### Elements [End] ##### >>> Revisited
