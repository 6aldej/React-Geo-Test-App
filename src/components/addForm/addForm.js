import React, { Component } from 'react';
import {Button, Form, Label, Input} from 'reactstrap';
import toCamelCase from '../../utils/toCamelCase';
import toPhoneNumber from '../../utils/toPhoneNumber';
import './addForm.css';

export default class AddForm extends Component {
    state = {
        name: '',
        number: ''
    }

    onNameChange(event) {
        let enter = event.target.value;
        this.setState({
            name: enter,
        })
    }

    onNumberChange(event) {
        let enter = event.target.value;
        this.setState({
            number: enter,
        })
    }

    onSubmit(event){
        event.preventDefault();
        let {name, number} = this.state
        this.props.onAdd(toCamelCase(name), toPhoneNumber(number));
        this.setState({
            name: '',
            number: ''
        });
    }

    render() {
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
                    value={this.state.name}
                />
                <Label for="phoneUser">Телефон</Label>
                <Input
                    type="text"
                    placeholder="Введите телефон"
                    className="input-user"
                    onChange={this.onNumberChange.bind(this)}
                    value={this.state.number}
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