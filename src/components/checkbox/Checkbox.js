import React from "react";
import styles from './Checkbox.module.css';

function Checkbox({
                           children,
                           input_id, input_type,
                           register, register_name, errors,
                           required_value, required_message,
                       }) {

    return (
        <>

            <label
                className="label_form"
                htmlFor={input_id}
            >
                <input
                    type={input_type}
                    id={input_id}
                    {...register(register_name, {
                        required: {
                            value: required_value,
                            message: required_message
                        },
                    })}
                />
                {children}
                {errors[input_id] && <p className={styles.error_message}>{errors[input_id].message}</p>}
            </label>
        </>
    )
}

export default Checkbox;

