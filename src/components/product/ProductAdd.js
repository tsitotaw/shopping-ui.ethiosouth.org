import { useEffect, useState } from "react";
import { Alert, Badge, Button, Col, Form, Row } from "react-bootstrap";
import axiosApiHelper from "../../api/axiosApiHelper";
import { useNavigate } from "react-router";
import getTokenUser from "../../shared/lib/Util";
const ProductAdd = (props) => {

    const navigator = useNavigate();

    const [categories, setCategories] = useState([]);
    const [productName, setProductName] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productPoint, setProductPoint] = useState(0);
    const [productImg, setProductImg] = useState('');
    const [selectedCategory, setSelectedCategory] = useState({});
    const [operationSuccessful, setOperationSuccessful] = useState(false);

    const onProductNameChange = (event) => {
        setProductName(event.target.value);
    }

    const onProductDescChange = (event) => {
        setProductDesc(event.target.value);
    }

    const onProductPriceChange = (event) => {
        setProductPrice(event.target.value);
    }

    const onProductPointChange = (event) => {
        setProductPoint(event.target.value);
    }

    const onProductImgChange = (event) => {
        setProductImg(event.target.value);
    }

    useEffect(() => {
        axiosApiHelper.findAll("productcategories").then((data) => {
            if(data){
                setCategories(data.data);
            }
        });
    }, []);

    const onCreateProductHandler = (event) => {
        event.preventDefault();
        axiosApiHelper.save({
            "name": productName,
            "description": productDesc,
            "price": productPrice,
            "offeredPoints": productPoint,
            "img": productImg,
            "category": selectedCategory.id,
            "sellerId": getTokenUser.getLoggedInUserId()
        }, "products").then((data) => {
            console.log(data);
            setOperationSuccessful(true);
            setTimeout(() => {
                setOperationSuccessful(false);
                navigator("/");
            }, 2000);
            
        });
    };

    const onCategorySelectedHandler = (event) => {
        let id = event.target.value;
        let category = categories.filter(category => category.id === parseInt(id));
        setSelectedCategory(category[0]);
    };
    return (
        <Form noValidate >
            <h1><Badge bg="secondary">Add New Product</Badge></h1>
            {operationSuccessful && <Alert variant="success"> Product Added Successfully </Alert>}

            <Row className="g-2">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={productName} onChange={onProductNameChange}  />
                    </Form.Group>
                </Col>
                <Col></Col>
            </Row>
            <Row className="g-2">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicLName">
                        <Form.Label> Product Category </Form.Label>
                        <Form.Select aria-label="User Role" name="category" onChange={onCategorySelectedHandler}>
                            {
                                categories.map((category) => {
                                    return <option value={category.id} key={category.id}> {category.name}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                </Col><Col></Col>
            </Row>
            <Row className="g-2">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicLName">
                        <Form.Label> Product Description </Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" value={productDesc} onChange={onProductDescChange} />
                    </Form.Group>
                </Col><Col></Col>
            </Row>
            <Row className="g-2">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicLName">
                        <Form.Label> Product Price </Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" value={productPrice} onChange={onProductPriceChange}/>
                    </Form.Group>
                </Col><Col></Col>
            </Row>
            <Row className="g-2">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicLName">
                        <Form.Label> Offered Points </Form.Label>
                        <Form.Control type="number" placeholder="Enter Points" value={productPoint} onChange={onProductPointChange} />
                    </Form.Group>
                </Col><Col></Col>
            </Row>
            <Row className="g-2">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicLName">
                        <Form.Label> Image Url </Form.Label>
                        <Form.Control type="url" placeholder="Enter Url" value={productImg} onChange={onProductImgChange}/>
                    </Form.Group>
                </Col><Col></Col>
            </Row>
            <Button variant="primary" type="button" onClick={onCreateProductHandler}>
                Create Product
            </Button>
        </Form>
    );
};

export default ProductAdd;