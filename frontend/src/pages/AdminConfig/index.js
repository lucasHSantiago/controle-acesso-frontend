import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

const AdminConfig = () => {
    const [config, setConfig] = useState();
    const [maxVisits, setMaxVisits] = useState();
    const [permanenceTime, setPermanenceTime] = useState();
    const [startHour, setStartHour] = useState();
    const [endHour, setEndHour] = useState();

    async function loadConfigs() {
        const response = await api.get('/mestre', {
            headers: {
                autorization: `Bearer ${localStorage.getItem('admin-token')}` 
            }
        }).then(response => {
            setMaxVisits(response.data.maximoPessoas);
            setPermanenceTime(response.data.tempoPermanencia);
            setStartHour(response.data.horarioInicialFuncionamento);
            setEndHour(response.data.horarioFinalFuncionamento);
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await api.put('/mestre', {
            maximoPessoas: maxVisits,
            tempoPermanencia: permanenceTime,
            horarioFinalFuncionamento: endHour,
            horarioInicialFuncionamento: startHour,
        }, {
            headers: {
                autorization: `Bearer ${localStorage.getItem('admin-token')}` 
            }
        })
    }

    useEffect(() => {
        loadConfigs();
        
    }, []);

    return (
        <>
            <Header admin={true} />
            <Container>
                <h1>Configurações</h1>
                <form onSubmit={handleSubmit} method="post">
                    <label>Máximo de visitas por hora</label>
                    <input 
                        type="number" 
                        name="maxVisits" 
                        placeholder="Máximo de visitas por hora" 
                        value={maxVisits}
                        onChange={e => setMaxVisits(e.target.value)}
                    />
                    <label>Tempo máximo por dia</label>
                    <input 
                        type="number" 
                        name="permanenceTime" 
                        placeholder="Tempo máximo por dia"
                        value={permanenceTime} 
                        onChange={e => setPermanenceTime(e.target.value)} 
                    />
                    <label>Horário de início do funcionamento</label>
                    <input 
                        type="number" 
                        name="startHour" 
                        placeholder="Horário de início do funcionamento" 
                        value={startHour}
                        onChange={e => setStartHour(e.target.value)} 
                    />
                    <label>Horário final do funcionamento</label>
                    <input 
                        type="number" 
                        name="endHour" 
                        placeholder="Horário final do funcionamento" 
                        value={endHour}
                        onChange={e => setEndHour(e.target.value)} 
                    />
                    <button type="submit">Salvar</button>
                </form>
            </Container>
        </>
    );
}

export default AdminConfig;