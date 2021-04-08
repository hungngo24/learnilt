import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";

import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext);

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });
    const { username, password } = loginForm;
    const onChangeLoginForm = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };
    const login = async (event) => {
        event.preventDefault();
        try {
            const loginData = await loginUser(loginForm);
            console.log(loginData);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Form onSubmit={login}>
                <Form.Group controlId="username" as={Row}>
                    <Form.Label className="custom-text-label-color">
                        Username:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onChangeLoginForm}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password" as={Row}>
                    <Form.Label className="custom-text-label-color">
                        Password:
                    </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChangeLoginForm}
                        required
                        autoComplete="off"
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Login
                </Button>
            </Form>
            <p style={{ color: "#d0d7dee6" }}>
                Dont't have an account ?<Link to="/register"> Register</Link>
            </p>
        </>
    );
};

export default LoginForm;
