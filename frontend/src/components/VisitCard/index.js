import React from 'react';

import { Container } from './styles';

const VisitCard = props => {
    let className = 'other';

    if (props.isMine) {
        className = 'self';
    }

    return (
        <Container className={className}>
            <h1>{props.visit.hourStart}:00 - {props.visit.hourStart + 1}:00</h1>
            <h2>{props.visit.custumers.length}x</h2>
        </Container>
    );
}

export default VisitCard;