import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './colorOption.module.css';

const ColorOption = props => {
    const { color, filterApi, group, item, onApply } = props;
    const { addItem, removeGroup } = filterApi;

    const classes = useStyle(defaultClasses, props.classes);
    const itemColor = color.split('_')[0];

    const changeColorFilterHandler = () => {
        removeGroup({group})
        addItem({ group, item });
        onApply({ group, item });
    };

    return (
        <div
            onClick={changeColorFilterHandler}
            className={classes.colorFilterOption}
            style={{ backgroundColor: itemColor }}
        />
    );
};
export default ColorOption;
