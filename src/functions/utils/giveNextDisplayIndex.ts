const giveNextDisplayIndexData = (
  currentDisplayIndexData: displayQuestionIndexDataType
) => {
  const newTo = currentDisplayIndexData.to + 5;
  const newFrom = currentDisplayIndexData.from + 5;
  const newDisplayIndexData: displayQuestionIndexDataType = {
    from: newFrom,
    to: newTo,
  };
  return newDisplayIndexData;
};

export default giveNextDisplayIndexData;
