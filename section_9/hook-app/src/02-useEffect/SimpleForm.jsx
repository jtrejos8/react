import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Juan',
        email: 'juan@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log({ name, value });
        setFormState({
            ...formState,
            [name]: value
        });
        // console.log(event.target.name);
    };

    useEffect(() => {
        // console.log("useEffect called");
    }, []);

    useEffect(() => {
        // console.log("formState called");
    }, [formState]);

    useEffect(() => {
        // console.log("email called");
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            {
                (username === 'Juan') && <Message /> 
            }
            {/* <Message /> */}

            <input
                type="email"
                className="form-control mt-2"
                placeholder="juan@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />


        </>
    )
};
