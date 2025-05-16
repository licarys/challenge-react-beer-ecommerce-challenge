export const convertPrice = (price) => {
    return price > 1000 ? `$${(price / 100).toFixed(2)}` : '$0.00';
};
