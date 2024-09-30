import { keynameOfLocalStorage } from "../../../data/localstorage-keynames/localStorageKeyNames";

export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem(keynameOfLocalStorage);
  let processedData;
  if (data) {
    processedData = JSON.parse(data);
  } else {
    processedData = {};
    const thingToSave = JSON.stringify(processedData);
    localStorage.setItem(keynameOfLocalStorage, thingToSave);
  }
  return processedData;
};
