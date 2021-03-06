import { useEffect, useState } from "react";
import { Alert, Button, Form, Table } from "react-bootstrap";
import axiosApiHelper from "../../api/axiosApiHelper";
import _ from 'lodash';

const FollowSeller = (props) => {

    const [sellers, setSellers] = useState([]);
    const [operationSuccessful, setOperationSuccessful] = useState(false);

    useEffect(() => {
        axiosApiHelper.findAll("customers").then((data) => {
            if (_.has(data, 'data')) {
                let customers = data.data;
                let sellers = _.filter(customers, { isSeller: true });
                setSellers(sellers);
            }
        });
    }, []);



    const updateApprovalHandler = (seller) => {
        seller.billingAddress = seller.billingAddress.id;
        seller.role = seller.role.id;
        seller.shippingAddress = seller.shippingAddress.id;
        axiosApiHelper.update(seller, "customers/approve", seller.id).then((data) => {
            setOperationSuccessful(true);
            setTimeout(() => {
                setOperationSuccessful(false);
            }, 2000);
        });
    };

    const onChangeHandler = (seller) => {
        let ss = _.map(sellers, (s) => {
            if (s.id == seller.id) {
                s.isSellerApprovedByAdmin = !seller.isSellerApprovedByAdmin;
            }
            return s;
        });
        setSellers(ss);
    };
    return (
        <>
        {operationSuccessful && <Alert variant="success">Change Successfully Made</Alert>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Seller Full Name</th>
                        <th>Is Following</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller) => {
                            return (<tr>
                                <td>{seller.id}</td>
                                <td>{`${seller.firstName} ${seller.lastName}`}</td>
                                <td>
                                    <Form.Check type="checkbox" checked={seller.isSellerApprovedByAdmin} onChange={(e) => onChangeHandler(seller)} />
                                </td>
                                <td>
                                    <Button variant="primary" type="button" onClick={(e) => updateApprovalHandler(seller)}>
                                        Follow / Unfollow
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

export default FollowSeller;