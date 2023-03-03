import React, {useState} from "react";
import EmailInput from "../inputs/email_input";
import PasswordInput from "../inputs/password_input";
import {Link} from "react-router-dom";

async function loginUser(credentials) {
    return await fetch('https://pets.сделай.site/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json()).catch(error => console.log('error', error));
}

const AuthForm = (props) => {
    let [input, setInput] = useState({email: "", password: ""});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const tokenData = await loginUser({email: input.email, password: input.password});
        if (tokenData.error) {
            document.getElementById('auth-error').style.display = 'block';
        } else if (tokenData.data) {
            props.setToken(tokenData.data.token);
            document.getElementById('auth-form').style.display = 'none';
            document.getElementById('auth-success').style.display = 'block';
        }
    }

    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className="p-3">
            <div id="auth-success" className="alert alert-success mb-3 text-center" role="alert"
                 style={{display: "none"}}>
                Вы успешно авторизировались!
            </div>
            <form id="auth-form" onSubmit={handleSubmit} className="animal-width300 w-50 m-auto border p-3">
                <EmailInput onChange={onInputChange}/>
                <PasswordInput onChange={onInputChange}/>
                <span id="auth-error" className="text-danger" style={{display: 'none'}}>Почта или пароль неверны</span>
                <div className="text-center">
                    <Link to={'/signup'}>Не зарегистрированы?</Link>
                    <input type="submit" className="btn btn-primary mt-2 w-100"
                           value="Войти"/>
                </div>
            </form>
        </div>
    );
}


export default AuthForm;