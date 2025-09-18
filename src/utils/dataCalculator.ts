export const numberWithCommas = (input: number) => {
  if (isNaN(input)) return input;
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
