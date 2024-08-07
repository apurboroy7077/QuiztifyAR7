const giveQuestionsAccordingToIndex = (questionsData: any, indexData: any) => {
  const processedData = [] as any;
  for (let i = 0; i < questionsData.length; i++) {
    const singleQuestionData = questionsData[i];
    if (
      singleQuestionData.index >= indexData.from &&
      singleQuestionData.index <= indexData.to
    ) {
      processedData.push(singleQuestionData);
    }
  }
  return processedData;
};

export default giveQuestionsAccordingToIndex;
