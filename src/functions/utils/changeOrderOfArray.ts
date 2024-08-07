const changeOrderOfArray = (arrayAR7: any[]) => {
  const processedArray = [] as any;
  for (let i = 0; i < 999999; i++) {
    const arrayIndex = Math.floor(Math.random() * arrayAR7.length);
    const singleArrayElement = arrayAR7[arrayIndex];
    // check duplicate
    let isDuplicate = false;
    for (let i = 0; i < processedArray.length; i++) {
      const processedSingleElement = processedArray[i];
      if (singleArrayElement === processedSingleElement) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      processedArray.push(singleArrayElement);
    }
    if (processedArray.length === arrayAR7.length) {
      break;
    }
  }
  return processedArray;
};

export default changeOrderOfArray;
