import { useEffect, useState } from 'react';
import { Accordion, Badge, Button, Col, Form, Row } from 'react-bootstrap';
import './SignUp.css';
import axiosApiHelper from './../../api/axiosApiHelper';
import Address from '../address/Address';
import { useNavigate } from 'react-router';
const SignUp = (props) => {

    let navigator = useNavigate();

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSeller, setIsSeller] = useState(false);
    const [selectedRole, setSelectedRole] = useState(false);

    const [roles, setRoles] = useState([]);

    const [invalidFirstName, setInvalidFirstName] = useState(false);
    const [invalidLastName, setInvalidLastName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidEmailFormat, setInvalidEmailFormat] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [passwordNotMatched, setPasswordNotMatched] = useState(false);

    const firstNameChangedHandler = (event) => {
        setFirstName(event.target.value);
    }
    const lastNameChangedHandler = (event) => {
        setLastName(event.target.value);
    }
    const emailChangedHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordChangedHandler = (event) => {
        setPassword(event.target.value);
    }
    const onPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value);
    }
    const onIsSellerChangeHandler = (event) => {
        setIsSeller(event.target.checked);
    }

    useEffect(() => {
        axiosApiHelper.findAll("roles", true).then((data) => {
            if(data){
            setRoles(data.data);
            }
        });
    }, []);

    const onSaveUserHandler = (event) => {
        event.preventDefault();
        resetValidations();

        if (formIsValid()) {
            axiosApiHelper.save({
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password,
                "isSeller": isSeller,
                "isSellerApprovedByAdmin": false,
                "buyerPoints": 0,
                "role": selectedRole.id
            }, "customers").then((data) => {
                console.log(data);
                alert("Successfully Added");
                navigator("/signin");
            });
        }
        return false;

    };

    const resetValidations = () => {
        setInvalidFirstName(false);
        setInvalidLastName(false);
        setInvalidEmail(false);
        setInvalidPassword(false);
        setInvalidEmailFormat(false);
        setPasswordNotMatched(false);
    }

    const formIsValid = () => {
        setInvalidFirstName((firstName.trim() === ""))
        setInvalidLastName((lastName.trim() === ""));
        setInvalidEmail((email.trim() === ""));
        setInvalidPassword((password.trim() === ""));
        setInvalidEmailFormat((invalidEmail && !regex.test(email)));
        if (!invalidPassword) {
            if (confirmPassword.trim() === password.trim()) {
                setPasswordNotMatched(false);
            } else {
                setPasswordNotMatched(true);
            }

        }

        return (invalidEmail || email.trim() === "" || invalidEmailFormat || passwordNotMatched || invalidFirstName || invalidLastName || invalidPassword) ? false : true;
    };

    const onRoleSelectedHandler = (event) => {
        let id = event.target.value;
        let role = roles.filter(role => role.id === parseInt(id));
        setSelectedRole(role[0]);
    };

    return (
        <Form noValidate >
            <h1><Badge bg="secondary">Signup Form</Badge></h1>
            <Row className="g-2">
                <Col md>
                    <Form.Group className="mb-3" controlId="formBasicFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={firstNameChangedHandler} />
                    </Form.Group>
                    {invalidFirstName && <Form.Label className="invalid__message">Please provide First Name - required Field</Form.Label>}
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicLName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={lastNameChangedHandler} />
                            </Form.Group>
                            {invalidLastName && <Form.Label className="invalid__message">Please provide Last Name - required Field</Form.Label>}</Col>
                        <Col >
                            <div class="chkSeller">
                                <Form.Group className="mb-3" controlId="formBasicIsSeller">
                                    <Form.Check type="checkbox" label="Is Seller" checked={isSeller} onChange={onIsSellerChangeHandler} />
                                </Form.Group>
                            </div></Col>
                    </Row>

                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={emailChangedHandler} />
                    </Form.Group>
                    {invalidEmail && <Form.Label className="invalid__message">Please provide Email - required Field</Form.Label>} <br />
                    {invalidEmailFormat && <Form.Label className="invalid__message">Please provide Valid Email</Form.Label>}
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFName">
                        <Form.Label>User Role </Form.Label>
                        <Form.Select aria-label="User Role" name="role" onChange={onRoleSelectedHandler}>
                            {
                                roles.map((role) => {
                                    return <option value={role.id} key={role.id}> {role.name}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={passwordChangedHandler} />
                            </Form.Group>
                            {invalidPassword && <Form.Label className="invalid__message">Please provide Password - required Field</Form.Label>}
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicConfirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={onPasswordChangeHandler} />
                            </Form.Group>
                            {passwordNotMatched && <Form.Label className="invalid__message">Please provide Password - required Field</Form.Label>}</Col>
                    </Row>

                </Col>
            </Row>

            <Row className="g-2">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Billing Address</Accordion.Header>
                        <Accordion.Body>
                            <Address />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Shipping Address</Accordion.Header>
                        <Accordion.Body>
                            <Address />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <Button variant="primary" type="button" onClick={onSaveUserHandler}>
                Sign Up
            </Button>
        </Form>
    );
};

export default SignUp;