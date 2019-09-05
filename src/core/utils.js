export const getRandomId = () => {
  let rand = 99 + Math.random() * 99999;
  return Math.round(rand);
};
