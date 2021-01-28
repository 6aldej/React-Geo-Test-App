import React, { Component } from 'react';
import {Button, Form, Label, Input} from 'reactstrap';
import toCamelCase from '../../utils/toCamelCase';
import toPhoneNumber from '../../utils/toPhoneNumber';
import './addForm.css';

import {connect} from 'react-redux';
import { setNameText, setNumberText, resetState } from '../../store/actions/actionForm';

class AddForm extends Component {

    onNameChange(event) {
        this.props.setNameText(event.target.value);
    }

    onNumberChange(event) {
        this.props.setNumberText(event.target.value);
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(toCamelCase(this.props.name), toPhoneNumber(this.props.number));
        this.props.resetState();
    }

    render() {
        console.log('ADD FORM PROPS',this.props);
        return (
            <Form 
                onSubmit={this.onSubmit.bind(this)}
                className="form-user">
                <Label for="nameUser">ФИО</Label>
                <Input
                    type="text"
                    placeholder="Введите имя"
                    className="input-user"
                    onChange={this.onNameChange.bind(this)}
                    value={this.props.name}
                />
                <Label for="phoneUser">Телефон</Label>
                <Input
                    type="text"
                    placeholder="Введите телефон"
                    className="input-user"
                    onChange={this.onNumberChange.bind(this)}
                    value={this.props.number}
                />
                <Button
                    className="btn-save"
                    color="primary"
                    type="submit">
                    Сохранить
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
      name: state.form.name,
      number: state.form.number
    };
}
  
const mapDispatchToProps = {
    setNameText,
    setNumberText,
    resetState
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);