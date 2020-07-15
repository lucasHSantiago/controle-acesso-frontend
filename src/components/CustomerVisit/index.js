import React, { useState } from 'react';

import { Container } from './styles';
import api from '../../services/api';

const CustomerVisit = props => {
    return (
        <Container>
            <p>Nome: <strong>{props.customer.name}</strong></p>
            <p>Email: <strong>{props.customer.email}</strong></p>
            <p>Telefone: <strong>{props.customer.cellPhone}</strong></p>
        </Container>
    );
}

export default CustomerVisit;