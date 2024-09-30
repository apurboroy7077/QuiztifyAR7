import { keynameOfLocalStorage } from "../../../data/localstorage-keynames/localStorageKeyNames";

export const saveDataToLocalStorage = (data: any) => {
  const processedData = JSON.stringify(data);
  localStorage.setItem(keynameOfLocalStorage, processedData);
};
