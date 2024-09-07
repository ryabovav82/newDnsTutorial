import React, {FormEvent} from "react";
import styles from './SignIn.module.css';

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
}
const SignIn = () => {
    return (
        <div>
            Авторизация
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <label htmlFor='login'>
                        <span className={styles.spanText}>login </span>
                        <input name='login' type='text'/>
                    </label>
                </div>
                <div>
                    <label htmlFor='password'>
                        <span>password </span>
                        <input name='password' type='password'/>
                    </label>
                </div>
                <div>
                    <button>send</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;