// export const calculatorsCategory = 'banicaCalculators';
export const calculatorsCategory = 'pancakesCalculators';

setInitialLocalStorage();

// Local Storage functions
function setInitialLocalStorage() {
  const storageItem = localStorage.getItem(calculatorsCategory);

  if (storageItem === null) {
    localStorage.setItem(calculatorsCategory, JSON.stringify({}));
  }

}