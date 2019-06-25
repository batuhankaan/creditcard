import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'
import Installment from './Installment'
import '../App.css'

export class Form extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
            <Input className="credicart-number" placeholder='Kart Numarası' />
            <Input className="creditcard-ns" placeholder='Son Kullanma Tarihi' />
            <Input className="creditcard-ns" placeholder='CVV' />
            <Input className="creditcard-name" placeholder='Kart Sahibinin Adı' />
            <Installment/>
            </div>
        )
    }
}

export default Form;
