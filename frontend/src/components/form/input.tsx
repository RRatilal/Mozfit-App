import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

interface Props {
    name: string;
    placeholder: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, placeholder, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField, error]);

    return (
        <input className={error ? "input-error" : ""} ref={inputRef} defaultValue={defaultValue} {...rest} placeholder={error ? error : placeholder} />
    )
}

export default Input;