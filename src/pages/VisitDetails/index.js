import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import CustomerVisit from '../../components/CustomerVisit';
import { useParams, useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert'


const VisitDetails = props => {
    const { id } = useParams();
    const alert = useAlert();

    const history = useHistory();

    const [visit, setVisit] = useState({});
    const [customers, setCustomers] = useState([]);
    const [date, setDate] = useState();
    const [hourStart, setHourStart] = useState();
    const [availableHours, setAvailableHours] = useState({});

    function convertDate(date) {
        return date.split('-');
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.put('/rescheduling', {
            oldDateId: id,
            new: {
                year: convertDate(date)[0],
                month: convertDate(date)[1],
                day: convertDate(date)[2],
                hourStart,
            }
        }, {
            headers: {
                autorization: `Bearer ${localStorage.getItem('user-token')}`,
            }
        }).then(reponse => {
            history.push('/agenda');
        }).catch(error => {
            alert.show('Erro: ' +error.response.data.item);
        });
    }

    async function loadAvailableHours(date) {
        setDate(date);

        const response = await api.get('/availableHours', {
            headers: {
                year: convertDate(date)[0],
                month: convertDate(date)[1],
                day: convertDate(date)[2],
                autorization: `Bearer ${localStorage.getItem('user-token')}`,
            }
        }).then(response => {
            console.log(response.data);
            setAvailableHours(response.data);
        });
    }

    async function loadVisit() {
        let token;

        if (props.admin)
            token = localStorage.getItem('admin-token');
        else
            token = localStorage.getItem('user-token');

        const reponse = await api.get(`/visit/${id}`, {
            headers: {
                autorization: `Bearer ${token}`
            }
        }).then(response => {
            console.log(response.data);
            setVisit(response.data);
            setCustomers(response.data.custumers);
        });
    }

    useEffect(() => {
        loadVisit();
    }, []);

    return (
        <>  
            <Header admin={props.admin ? true : false} />
            <Container>
                <h1>Editar visita</h1>
                <p>Horario de inicio: <strong>{visit.hourStart}:00</strong></p>
                <p>Horario final: <strong>{visit.hourEnd}:00</strong></p>
                <p>Data: <strong>{visit.day > 9 ? visit.day : `0${visit.day}`}/{visit.month > 9 ? visit.month : `0${visit.month}`}/{visit.year}</strong></p>
                {!props.admin &&
                    <form className="create-visit" onSubmit={handleSubmit} method="post">
                        <input type="date" name="date" onChange={e => {loadAvailableHours(e.target.value); setDate(e.target.value)}} />
                        <select onChange={e => setHourStart(e.target.value)}>
                            <option>- Selecione uma opção -</option>
                            {Object.keys(availableHours).map((hour, idx) => (
                                <option key={idx} value={hour}>{hour}:00</option>
                                ))}
                        </select>
                        <button type="submit">Salvar</button>
                    </form>
                }
                {props.admin &&
                    customers.map((customer, idx) => (
                        <div className="customer">
                            <CustomerVisit customer={customer} key={idx} />
                        </div>
                    )
                )}
            </Container>
        </>
    );
}

export default VisitDetails;