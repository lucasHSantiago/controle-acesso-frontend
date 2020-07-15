import React, { useState } from 'react';

import { Container } from './styles';
import api from '../../services/api';

export default function CreateVisit() {
    const [hourStart, setHourStart] = useState();
    const [date, setDate] = useState();

    function convertDate(date) {
        return date.split('-');
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const reponse = await api.post('/schedule', {
            year: convertDate(date)[0],
            month: convertDate(date)[1],
            day: convertDate(date)[2],
            hourStart,
        }, {
            headers: {
                autorization: `Bearer ${localStorage.getItem('user-token')}`
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} method="post">
                <input type="date" name="date" onChange={e => setDate(e.target.value)} />
                <select onChange={e => setHourStart(e.target.value)}>
                    <option>- Selecione uma opção -</option>
                    <option value="10">10:00</option>
                    <option value="11">11:00</option>
                    <option value="12">12:00</option>
                    <option value="13">13:00</option>
                    <option value="14">14:00</option>
                    <option value="15">15:00</option>
                    <option value="16">16:00</option>
                    <option value="17">17:00</option>
                </select>
                <button type="submit">Salvar</button>
            </form>
        </Container>
    );
}