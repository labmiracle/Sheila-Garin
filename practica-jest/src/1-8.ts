
// setPrice
export const setPrice = (item: Object, price: number): Object => {
    return { ...item, price };

};

// addToCart
export const addToCart = (cart: Array<any>, item: Object): Array<any> => {
    return [...cart, item];
};
