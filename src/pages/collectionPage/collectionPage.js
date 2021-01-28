import React from 'react';
import UserList from '../../components/userList';

const CollectionPage = (props) => {
    if (props.users.length === 0) {
        return (
            <h4>Коллекция пуста. Добавьте пользователя через форму!</h4>
        ) 
    } else {
        return (
            <div className="colliection-page">
                <UserList users={props.users} onDelete={props.onDelete}/>
            </div>
        )
    }
}

export default CollectionPage;