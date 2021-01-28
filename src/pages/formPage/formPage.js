import React from 'react';
import AddForm from '../../components/addForm';

const FormPage = (props) => {

        return (
            <div className="form-page">
                <AddForm onAdd={props.onAdd}/>
            </div>
        )
}

export default FormPage;