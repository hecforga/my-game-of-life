export const createEmptyBoard = (numberOfRows, numberOfColumns) => ({
  type: 'CREATE_EMPTY_BOARD',
  numberOfRows,
  numberOfColumns,
});