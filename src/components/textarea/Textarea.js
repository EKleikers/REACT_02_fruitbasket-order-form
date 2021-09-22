import React from "react";
import styles from './Textarea.module.css';

function Textarea({
                           children, value,
                           input_id, input_type,
                           rows, cols,
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


            <label className="label_text" htmlFor="area_comments">
                {children}
                <br />
                <textarea
                    className={styles.inputfield}
                    name="comments"
                    id="details-comments"
                    {...register(register_name, {
                        maxLength: {
                            value: maxlength_value,
                            message: maxlength_message,
                        },
                    })}
                    rows={rows}
                    cols={cols}
                />
            </label>
            {errors[input_id] && <p className={styles.error_message}>{errors[input_id].message}</p>}

        </>
    )
}

export default Textarea;

