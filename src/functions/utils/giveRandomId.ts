type giveRandomIdType = () => string;

const giveRandomId: giveRandomIdType = () => {
  const num1 = Math.random() * 10000000000;
  const num2 = Math.random() * 10000000000;
  const numberId = Math.floor(num1 * num2);
  const stringId = numberId.toString();
  return stringId;
};

export default giveRandomId;
