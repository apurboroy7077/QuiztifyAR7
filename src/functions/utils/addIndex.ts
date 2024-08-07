const addIndex = (arrayAR7: any[]) => {
  for (let i = 0; i < arrayAR7.length; i++) {
    arrayAR7[i].index = i + 1;
  }
  return arrayAR7;
};

export default addIndex;
