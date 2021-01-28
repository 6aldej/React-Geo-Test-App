import React from 'react';
import UserListItem from '../userListItem';
import { Table } from 'reactstrap';

const UserList = ({users, onDelete}) => {

    const elements = users.map((item => {
        const {id, ...itemProps} = item;
            return (
                <tr key={id}>
                    <UserListItem
                        {...itemProps}
                        onDelete={() => onDelete(id)}/>
                </tr>
            )
        }
    ))

    return (
        <Table dark striped hover>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Номер</th>
                    <th>Удалить</th>
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </Table>
    )
}

export default UserList;