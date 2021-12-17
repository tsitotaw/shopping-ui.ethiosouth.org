import React, { useEffect, useState } from "react";

import { Alert, Button, Table } from "react-bootstrap";
import { useParams } from "react-router";
import axiosApiHelper from "../../api/axiosApiHelper";

const ProductReview = () => {

    const [items, setItems] = useState([]);
    const params = useParams();

    useEffect(() => {
        axiosApiHelper.findAll("products", true).then(result => {
            setItems(result.data);
        }
        ).catch(err => {
            console.log(err);
        })
    }, [])

    const onProductDelete = (item) => {
       console.log(item);
         axiosApiHelper.remove("products", item.id).then(res => {
             console.log(res);
         }).catch(err => {
             console.log(err);
         })
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PRODUCT NAME</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE</th>
                        <th>SELLER ID</th>
                        <th>CATEGORY ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => {
                            return (<tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.sellerId}</td>
                                <td>{item.category.id}</td>
                                <td>
                                    {
                                        <Button variant="danger" type="button" onClick={() =>onProductDelete(item)}>Delete</Button>
                                    }
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ProductReview;