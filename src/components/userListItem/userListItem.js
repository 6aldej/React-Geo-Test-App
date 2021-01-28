import React from 'react';
import './userListItem.css';
import { Button } from 'reactstrap';

const UserListItem = ({names, phone, onDelete}) => {

    return (
        <>
            <td>
                {names}
            </td>
            <td>
                {phone}
            </td>
            <td>
                <Button
                    color="danger"
                    onClick={onDelete}>
                X
                </Button>
            </td>

        </>

        )
}

export default UserListItem;