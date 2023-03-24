import { useState, useRef } from 'react';
import PinCodeInput from './PinCodeInput';

const initDigits = ['', '', '', ''];

function FormCodeInput() {
    const [digits, setDigits] = useState(initDigits);
    const firstInputRef = useRef();
    const clear = (event) => {
        event.preventDefault();
        setDigits(initDigits);
        firstInputRef.current.focus();
    }


    return (
        <form>
            <PinCodeInput 
            digits={digits} 
            changeHandler={setDigits} 
            ref={firstInputRef}
            />
            {/* <button onClick={event => clear(event)}>Очистить</button> */}
        </form>
    );
}

export default FormCodeInput;