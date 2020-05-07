import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from './input'
import { FormHandles, SubmitHandler } from '@unform/core';

interface FormData {
    email: string;
    password: string
}

export const SignInForm: React.FC = () => {
    const { signIn } = useAuth();

    const formRef = useRef<FormHandles>(null)

    const handleSignin: SubmitHandler<FormData> = async (data, { reset }) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Digite um email valido')
                    .required('O email e obrigatorio'),
                password: Yup.string().required('Password obrigatorio')
            });

            await schema.validate(data, {
                abortEarly: false
            })

            formRef.current?.setFieldError("", "");

            signIn(data.email, data.password);

            reset();
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errorMessages: any = {};

                error.inner.forEach((err: any) => {
                    errorMessages[err.path] = err.message;
                });

                formRef.current?.setErrors(errorMessages);
            }
        }

    }

    return (
        <Form ref={formRef} onSubmit={handleSignin}>
            <Input
                name="email"
                type="email"
                placeholder="Email"
            />
            <div className="signin-password">
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <Link className="forgot-password" to="/reset">forgot password</Link>
            </div>

            <button className="long-button" type="submit">
                <Link to="/dashboard" />
                <span>Sign in</span>
                <div className="liquid"></div>
            </button>

            <Link className="signup-link" to="/signup">sign up</Link>
        </Form>
    )
} 