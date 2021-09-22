
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import './App.css';
import Fruit from "./components/fruit/Fruit.js";

import Input from "./components/input/Input";
import Checkbox from "./components/checkbox/Checkbox";
import Textarea from "./components/textarea/Textarea";
import Select from "./components/select/Select"


function App() {

    const {
        handleSubmit,
        register,
        formState: { errors },
        watch
        //reset
    } = useForm({
        mode: 'all',
    });

    const selectedFrequency = watch('frequency');
    const c_selectedFrequency = watch('c_frequency');

    const [countS, setCountS] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countA, setCountA] = useState(0);
    const [countK, setCountK] = useState(0);

    function S_min(e) {
        if (countS === 0) {
            setCountS(countS);
        } else {
            setCountS(countS - 1);
        }
    }

    function B_min(e) {
        if (countB === 0) {
            setCountB(countB);
        } else {
            setCountB(countB - 1);
        }
    }

    function A_min(e) {
        if (countA === 0) {
            setCountA(countA);
        } else {
            setCountA(countA - 1);
        }
    }

    function K_min(e) {
        if (countK === 0) {
            setCountK(countK);
        } else {
            setCountK(countK - 1);
        }
    }

    function S_plus(e) {
        setCountS(countS + 1)
    }

    function B_plus(e) {
        setCountB(countB + 1)
    }

    function A_plus(e) {
        setCountA(countA + 1)
    }

    function K_plus(e) {
        setCountK(countK + 1)
    }

    function onFormSubmit(data) {
        console.log(data);
        //console.log("frequency: " + data.frequency);
        // setMessage(`Bedankt ${data.name} voor uw bestelling`);
        //reset()
    }

    return (
        <>




            <fieldset className="field_header">
                <h1>Fruitmand bezorgservice</h1>
                <h3>Je mag toch niet naar buiten</h3>
            </fieldset>
            <br/>
            <form
                className="form_fruit"
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <Fruit
                    clickHandler_min={S_min}
                    counter_name="order-strawberries"
                    counter_value={countS}
                    counter_id="input_strawberries"
                    register={register}
                    clickHandler_plus={S_plus}
                    render_class={countS !== 0 ? 'plusborder' : 'plus'}
                >
                    🍓
                    Aardbeien
                </Fruit>
                <Fruit
                    clickHandler_min={B_min}
                    counter_name="order-bananas"
                    counter_value={countB}
                    counter_id="input_bananas"
                    register={register}
                    clickHandler_plus={B_plus}
                    render_class={countB !== 0 ? 'plusborder' : 'plus'}
                >
                    🍌
                    Bananen
                </Fruit>
                <Fruit
                    clickHandler_min={A_min}
                    counter_name="order-apples"
                    counter_value={countA}
                    counter_id="input_apples"
                    register={register}
                    clickHandler_plus={A_plus}
                    render_class={countA !== 0 ? 'plusborder' : 'plus'}
                >
                    🍏
                    Appels
                </Fruit>
                <Fruit
                    clickHandler_min={K_min}
                    counter_name="order-kiwis"
                    counter_value={countK}
                    counter_id="input_kiwis"
                    register={register}
                    clickHandler_plus={K_plus}
                    render_class={countK !== 0 ? 'plusborder' : 'plus'}
                >
                    🥝
                    Kiwi's
                </Fruit>

                <button
                    type="button"
                    className="reset"
                    onClick={(e) =>
                        setCountS(0) +
                        setCountB(0) +
                        setCountA(0) +
                        setCountK(0)
                    }
                >
                    Reset
                </button>

                <fieldset
                    className="field_customer"
                >
                    <br /><br />
                    <Input
                        input_type="text"
                        register_name="firstname"
                        register={register}
                        required_value={true}
                        required_message="Voornaam is een verplicht veld"
                        pattern_value={/^[a-zA-Z]*$/}
                        pattern_message="Voer en geldige naam in"
                        minlength_value={2}
                        minlength_message="Voer een geldige naam in"
                        input_id="firstname"
                        errors={errors}
                    >
                        Voornaam:
                    </Input>
                    <br /><br />
                    <Input
                        input_type="text"
                        register_name="lastname"
                        register={register}
                        required_value={true}
                        required_message="Achternaam is een verplicht veld"
                        pattern_value={/^[a-zA-Z]*$/}
                        pattern_message="Voer en geldige naam in"
                        minlength_value={2}
                        minlength_message="Voer een geldige naam in"
                        input_id="lastname"
                        errors={errors}
                    >
                        Achternaam:
                    </Input>
                    <br /><br />
                    <Input
                        input_type="number"
                        register_name="age"
                        register={register}
                        required_value={true}
                        required_message="Leeftijd is een verplicht veld"
                        min_value={18}
                        min_message="Minimale leeftijd is 18 jaar"
                        input_id="age"
                        errors={errors}
                    >
                        Leeftijd:
                    </Input>
                    <br /><br />
                    <Input
                        input_type="text"
                        register_name="zipcode"
                        register={register}
                        required_value={true}
                        required_message="Postcode is een verplicht veld"
                        pattern_value={/[0-9]{4}[a-zA-Z]{2}/g}
                        pattern_message="aub geldige postcode invullen"
                        maxlength_value={6}
                        maxlength_message="maximaal 6 karakters"
                        input_id="zipcode"
                        errors={errors}
                    >
                        Postcode:
                    </Input>
                    <br /><br />
                    <Input
                        input_type="text"
                        register_name="email"
                        register={register}
                        required_value={true}
                        required_message="Email is een verplicht veld"
                        pattern_value={/^\S+@\S+\.\S+$/}  //checking @ and .
                        pattern_message="aub geldig email adres invullen"
                        input_id="email"
                        errors={errors}
                    >
                        Email:
                    </Input>
                    <br/> <br/>
                    <label className="label_form" htmlFor="referrer">Bezorgfrequentie:
                        <select
                            name="frequency"
                            className="select"
                            //react-hook-form:verplicht, met opties: iedere week, om de week, iedere maand, anders
                            id="input_frequency"
                            {...register("frequency", {
                                required: "Selecteer een bezorgfrequentie",
                            })}
                        >
                            <option value=""></option>
                            <option value="weekly">iedere week</option>
                            <option value="biweekly">om de week</option>
                            <option value="monthly">iedere maand</option>
                            <option value="other">anders</option>
                        </select>
                    </label>
                    {errors.frequency && <p className='error_message'>{errors.frequency.message}</p>}


                    {/*react-hook-form: alleen tonen indien "anders" geselecteerd wordt*/}
                    {selectedFrequency === "other" &&
                    <input
                        type='text'
                        className="inputfield"
                        name="other"
                        placeholder="Anders...."
                        {...register("other")}
                    />
                    }
                    <br /><br />
                    <Select
                        input_name = "c_frequency"
                        register_name = "c_frequency"
                        register={register}
                        required_value={true}
                        required_message="Selecteer frequentie van bezorgen"
                        input_id = "c_frequency"

                        options={[
                            { value: "empty", label: "" },
                            { value: "weekly", label: "iedere week" },
                            { value: "biweekly", label: "om de week" },
                            { value: "monthly", label: "iedere maand" },
                            { value: "other", label: "anders " },
                        ]}
                    >
                        Select Component:

                    </Select>


                    <br /><br />
                    <Input
                        input_type="radio"
                        register_name="time"
                        value="day"
                        register={register}
                        input_id="time"
                        errors={errors}
                    >
                        Overdag:
                    </Input>

                    <Input
                        input_type="radio"
                        register_name="time"
                        value="night"
                        register={register}
                        input_id="time"
                        errors={errors}
                    >
                        's Avonds:
                    </Input>
                    <br/> <br/>
                    <Textarea
                        register_name="comments"
                        register={register}
                        maxlength_value={50}
                        maxlength_message="maximaal 50 karakters"
                        input_id="comments"
                        errors={errors}
                        rows="3"
                        cols="28"
                    >
                        Opmerkingen:
                    </Textarea>
                    <br /> <br />
                    <Checkbox
                        input_type="checkbox"
                        register_name="agree"
                        register={register}
                        required_value={true}
                        required_message="Akkoord met voorwaarden is verplicht"
                        input_id="agree"
                        errors={errors}
                    >
                        Ik ga akkoord met de voorwaarden:
                    </Checkbox>
                    <br/> <br/> <br/>
                    <button
                        className="button_submit"
                        type="submit"
                    >
                        Verzend
                    </button>
                </fieldset>
            </form>
        </>
    );
}

export default App;



