export const pickRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const deformatName = (name) => {
  return name.toLowerCase().replace(" ", "-");
};
