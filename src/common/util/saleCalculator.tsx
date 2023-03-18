export const saleCalculator = (curPrice: number, oldPrice: number): number => {
  return ((oldPrice - curPrice) / oldPrice) * 100;
};
