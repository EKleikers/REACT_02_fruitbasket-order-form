import React from "react";
import styles from './Fruit.module.css';

function Fruit({
                        children,
                        button_min_name, clickHandler_min,                   //button min
                        counter_name, counter_value, register,   //display_counter
                        button_plus_name,clickHandler_plus, render_class ,   //button plus
                    }) {

    return (
        <>
        <fieldset
            className="field_fruit"

        >
            <label
                className={styles.fruit}
            >
                {children}
            </label>
            <button
                type="button"
                className={styles.min}
                name={button_min_name}
                onClick={clickHandler_min}
            >
                -
            </button>
            <input
                name={counter_name}
                min="0"
                max="100"
                type="number"
                className={styles.input}
                readOnly
                value={counter_value}
                inputMode="numeric"   //removing arrows from input
                {...register(counter_name, {value: counter_value})}
            />
            <button
                type="button"
                className={render_class}
                name={button_plus_name}
                onClick={clickHandler_plus}
            >
                +
            </button>
        </fieldset>
        </>
    )
}

export default Fruit;
