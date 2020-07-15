import React, { useState } from 'react';

import { Container } from './styles';
import api from '../../services/api';

const CustomerVisit = props => {
    return (
        <Container>
            <p>Nome: {props.customer.name}</p>
            <p>Email: {props.customer.email}</p>
            <p>Telefone: {props.customer.cellPhone}</p>
        </Container>
    );
}

export default CustomerVisit;