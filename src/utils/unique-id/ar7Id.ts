const ar7Id = () => {
  const id1 = Math.random().toString();
  const id2 = Math.random().toString();
  const uniqueId = id1 + id2;
  return uniqueId;
};

export default ar7Id;
