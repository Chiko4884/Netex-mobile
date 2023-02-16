import { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { useForm, NavLink } from 'react-hook-form'; 
import './pinCodeInput.scss'

const inputStyle = {
    border: '1px solid #000',
    width: 64.5,
    height: 16,
    fontSize: 16,
    textAlign: 'center',
    margin: 16,
};

function PinCodeInput(props, refer) {
    const { register, handleSubmit, formState: { errors, isValid }, formState}=useForm({
        mode: 'onBlur'
})
    const {
        digits,
        changeHandler,
        firstInputRef
    } = props;

    const length = digits.length;
    // здесь будут ссылки на input-элементы
    const inputRefs = useRef([]);

    useImperativeHandle(refer, () => ({
        focus: () => inputRefs.current[0].focus(),
        style: inputRefs.current[0].style
    }));

    useEffect(() => {
        inputRefs.current[0].focus();
    }, []);


    useEffect(() => {
        digits.forEach((value, index) => {
            if (value.match(/^[0-9]$/)) {
                // inputRefs.current[index].style.backgroundColor = '#dfd';
            } else {
                // inputRefs.current[index].style.backgroundColor = '#fdd';
            }
        });
    }, [digits]);

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace') {
            event.preventDefault();
            if (digits[index].match(/^[0-9]$/)) {
                // если элемент массива digits содержит цифру, то при нажатии клавиши
                // вызываем callback-функцию родителя, чтобы записать пустую строку
                const newDigits = [...digits]; // копия digits
                newDigits[index] = '';
                changeHandler(newDigits);
            } else {
                // элемент массива digits пустой, удалять нечего — так что надо сместить
                // фокус на предыдущее поле input — при условии, что это не первое поле
                if (index > 0) inputRefs.current[index - 1].focus();
            }
        }
    }

    const handleChange = (index, newValue) => {
        const oldDigit = digits[index];
        // старую цифру из поля ввода убираем, оставляя только новую
        const newDigit = newValue.trim().replace(oldDigit, '');
        // если это не цифра, ничего не делаем, пока не будет цифры
        if (newDigit < '0' || newDigit > '9') return;
        // теперь вызываем callback родителя, чтобы обовить digits
        const newDigits = [...digits]; // копия digits
        newDigits[index] = newDigit;
        changeHandler(newDigits);
        if (index < 3) inputRefs.current[index + 1].focus();
    }

    return (
        <form className='pin_code_div' >
            {digits.map((digit, index) => (
                <input  
                    className='pin_code_inp'
                    placeholder = '0'
                    key={index}
                    // style={inputStyle}
                    value={digit}
                    onChange={event => handleChange(index, event.target.value)}
                    onKeyDown={event => handleKeyDown(index, event)}
                    ref={element => inputRefs.current[index] = element}
                />
            ))}
        </form>
    );

}
export default forwardRef(PinCodeInput);