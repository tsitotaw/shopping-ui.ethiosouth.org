import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import axiosApiHelper from "../../api/axiosApiHelper";
import _ from 'lodash';

const ApproveReview = (props) => {

    const [reviews, setReviews] = useState([]);
    const [refresh, updateRefresh] = useState(false);

    useEffect(() => {
        axiosApiHelper.findAll("productreviews").then((data) => {
            if (_.has(data, 'data')) {
                let reviews = data.data;
                setReviews(reviews);
            }
        });
    }, [refresh]);



    const updateApprovalHandler = (review) => {
        review.buyer = review.buyer.id;
        review.product = review.product.id;
        axiosApiHelper.update(review, "productreviews/review", review.id).then((data) => {
            alert("Approved Successfully");
            updateRefresh(true);
        });
    };
    
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Seller Full Name</th>
                        <th>Is Approved</th>
                        <th>Product</th>
                        <th>Customer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map((review) => {
                            return (<tr>
                                <td>{review.id}</td>
                                <td>{review.description}</td>
                                <td>
                                    <Form.Check type="checkbox" checked={review.isApprovedByAdmin} disabled />
                                </td>
                                <td>{`${review.buyer.firstName} ${review.buyer.lastName}`} </td>
                                <td>{review.product.name} </td>
                                <td>
                                    <Button variant="primary" type="button" onClick={(e) => updateApprovalHandler(review)} disabled={review.isApprovedByAdmin}>
                                        Approve Review
                                    </Button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

        </>
    );
}

export default ApproveReview;