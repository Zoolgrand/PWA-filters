import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import defaultClasses from './priceSlider.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import Button from '@magento/venia-ui/lib/components/Button';
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
            <div className={classes.sliderWrap}>
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

                <Range
                    min={0}
                    max={200}
                    defaultValue={price}
                    value={price}
                    onChange={rangeChangeHandler}
                />
            </div>
            <Button type='button' onClick={priceAplyHandler}>
                <FontAwesomeIcon height={16} icon={faRefresh} width={16} />
            </Button>
        </div>
    );
};
export default PriceSlider;
