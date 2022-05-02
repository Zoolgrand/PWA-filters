import React, { useState } from 'react';

export const usePriceSlider = (props = {}) => {
    const { filterApi, name, onApply, group } = props;

    const { addItem } = filterApi;
    const [price, setPrice] = useState([15, 120]);

    const itemPriceRange = {
        title: `${price[0]}-${price[1]}`,
        value: `${price[0]}_${price[1]}`
    };

    const changeMinPriceHabdler = e => {
        if (e.target.value < 0) {
            return;
        }
        setPrice(prevState => [e.target.value, prevState[1]]);
    };

    const changeMaxPriceHandler = e => {
        setPrice(prevState => [prevState[0], e.target.value]);
    };

    const rangeChangeHandler = price => {
        setPrice(price);
    };

    const priceAplyHandler = () => {
        addItem({
            group,
            item: {
                title: `${price[0]}-${price[1]}`,
                value: `${price[0]}_${price[1]}`
            }
        });
        if (typeof onApply === 'function') {
            onApply(group, {
                title: `${price[0]}-${price[1]}`,
                value: `${price[0]}_${price[1]}`
            });
        }
    };

    return {
        changeMinPriceHabdler,
        changeMaxPriceHandler,
        rangeChangeHandler,
        priceAplyHandler,
        price
    };
};
