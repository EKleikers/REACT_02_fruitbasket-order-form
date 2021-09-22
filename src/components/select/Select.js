
import React from "react";
import styles from './Select.module.css';

 function Select({
                        children, value, text, label, options,
                        input_id, input_type, input_name,
                        register, register_name, errors,
                        required_value, required_message,
                        pattern_value, pattern_message,
                        minlength_value, minlength_message,
                        maxlength_value, maxlength_message,
                        min_value, min_message,
                        max_value, max_message,
                    }) {

    return (
        <>
            <label
                className="label_form"
                htmlFor={input_id}
            >
                {children}
                <select
                    name={input_name}
                    id={input_id}
                    className={styles.inputfield}
                    {...register(register_name, {
                        required: {
                            value: required_value,
                            message: required_message
                        },
                    })}
                    value = {value}
                    label = {label}
                    options = {options}

                >
                    {children}

                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}

                </select>
                {/*{errors[input_id] && <p className={styles.error_message}>{errors[input_id].message}</p>}*/}
            </label>

        </>
    )
}


 export default Select;
