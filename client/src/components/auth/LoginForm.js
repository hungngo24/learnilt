import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <>
            <Form>
                <Form.Group controlId="username" as={Row}>
                    <Form.Label className="custom-text-label-color">
                        Username:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
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
                        required
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
