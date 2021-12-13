import { Button, Form } from 'react-bootstrap';


const SignUp = (props) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicFName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" /> 
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit s
            </Button>
        </Form>
    );
};

export default SignUp;