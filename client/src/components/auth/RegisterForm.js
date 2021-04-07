import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";

const RegisterForm = () => {
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
                        size="sm"
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
                        size="sm"
                    />
                </Form.Group>
                <Form.Group controlId="ConfirmPassword" as={Row}>
                    <Form.Label className="custom-text-label-color">
                        Confirm Password:
                    </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="confirmPassword"
                        required
                        size="sm"
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Register
                </Button>
            </Form>
            <p style={{ color: "#d0d7dee6" }}>
                Already have an account ?<Link to="/login">Login</Link>
            </p>
        </>
    );
};

export default RegisterForm;
