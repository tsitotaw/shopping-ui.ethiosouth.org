import { Col, Form, Row } from "react-bootstrap";

const Address = () => {
    return (
        <>
        <Row className="g-2">
                <Col md>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address 1</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFName">
                        <Form.Label>City  </Form.Label>
                        <Form.Control type="text" placeholder="Enter City" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>State</Form.Label>
                        <Form.Select aria-label="State" >
                            <option> Iowa</option>
                            <option> OHIO</option>
                            <option> CHICAGO </option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFName">
                        <Form.Label>Country  </Form.Label>
                        <Form.Select aria-label="Country" >
                            <option> USA</option>
                            <option> Brazil</option>
                            <option> Afganistan </option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFName">
                        <Form.Label>Zip  </Form.Label>
                        <Form.Control type="text" placeholder="Enter zip" />
                    </Form.Group>
                </Col>
            </Row>
            </>
    );
}

export default Address;