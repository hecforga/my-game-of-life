export const updateItemAtPosition = (array, pos, newItem) => {
  return array.map((item, index) => {
    if(index !== pos) {
      return item;
    }

    return newItem;
  });
};