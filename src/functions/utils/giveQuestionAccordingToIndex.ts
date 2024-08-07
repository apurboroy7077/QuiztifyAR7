const giveSingleQuestionAccordingToIndex = (
  questionsData: any[],
  index: number
) => {
  let matchedData = null;
  for (let i = 0; i < questionsData.length; i++) {
    const data = questionsData[i];
    const indexOfData = data.index;
    if (index === indexOfData) {
      matchedData = data;
    }
  }
  return matchedData;
};

export default giveSingleQuestionAccordingToIndex;
