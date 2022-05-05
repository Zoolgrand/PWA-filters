import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import defaultClasses from './priceSlider.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

import { usePriceSlider } from './usePriceSlider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const PriceSlider = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const { filterApi, name, group, onApply } = props;

    const talonProps = usePriceSlider({
        filterApi,
        name,
        onApply,
        group
    });

    const {
        changeMinPriceHabdler,
        changeMaxPriceHandler,
        rangeChangeHandler,
        priceAplyHandler,
        price
    } = talonProps;

    return (
        <div className={classes.priceSlider}>
            <div className={classes.priceControll}>
                <div className={classes.priceInput}>
                    <input
                        type="number"
                        onChange={changeMinPriceHabdler}
                        value={price[0]}
                    />
                    <input
                        type="number"
                        onChange={changeMaxPriceHandler}
                        value={price[1]}
                    />
                </div>
                <button type="button" onClick={priceAplyHandler}>
                    <FontAwesomeIcon
                        icon={faArrowRotateRight}
                        height={14.5}
                        width={14.5}
                    />
                </button>
            </div>

            <div className={classes.priceRangeContainer}>
                <Range
                    min={0}
                    max={200}
                    defaultValue={price}
                    value={price}
                    onChange={rangeChangeHandler}
                    handleStyle={{
                        height: '38px',
                        width: '38px',
                        backgroundColor: 'rgb(32, 13, 69)',
                        marginTop: '-19px',
                        border: 'none'
                    }}
                    railStyle={{
                        backgroundColor: 'rgb(109, 108, 110)',
                        height: '2px'
                    }}
                    trackStyle={[
                        { backgroundColor: 'rgb(203, 104, 82)', height: '2px' }
                    ]}
                />
                <div className={classes.rangeContainerCurrency}>SR</div>
            </div>
        </div>
    );
};
export default PriceSlider;
