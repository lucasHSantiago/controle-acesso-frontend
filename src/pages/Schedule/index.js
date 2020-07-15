import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link, useHistory, Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import { useAlert } from 'react-alert'
import VisitCard from '../../components/VisitCard';
import api from '../../services/api';

const Schedule = props => {
    const alert = useAlert();
    const history = useHistory();

    const actualMonth = new Date().getMonth() + 1;

    const [month, setMonth] = useState(actualMonth);
    const [schedule, setSchedule] = useState([]);
    const [hourStart, setHourStart] = useState();
    const [date, setDate] = useState();
    const [refresh, setRefresh] = useState(0);
    const [availableHours, setAvailableHours] = useState([]);

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
            alert.show('Sua visita foi agendada!');
            setRefresh(refresh + 1);
        }).catch((error, response) => {
            alert.show('Erro: ' + error.response.data.error);
        });
    }
    
    async function getSchedule() {
        let token;

        if (props.admin)
            token = localStorage.getItem('admin-token');
        else
            token = localStorage.getItem('user-token');

        const response = await api.get(`/schedule/${month}`, {
            headers: {
                autorization: `Bearer ${token}` 
            }
        }).then(response => {
            setSchedule(response.data);
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

    useEffect(() => {
        getSchedule();
        
        if (props.admin) {
            history.push(`/admin/agenda/${month}`);
            console.log("a");
        } else {
            history.push(`/agenda/${month}`);
        }
    }, [month, refresh]);

    function nextMonth() {
        if (month <= 11)
            setMonth(month + 1);
    }

    function previousMonth() {
        if (month > 1)
            setMonth(month - 1);
    }

    let monthLabel;

    switch(month) {
        case 1: monthLabel  = "Janeiro"; break;
        case 2: monthLabel  = "Fevereiro"; break;
        case 3: monthLabel  = "Março"; break;
        case 4: monthLabel  = "Abril"; break;
        case 5: monthLabel  = "Maio"; break;
        case 6: monthLabel  = "Junho"; break;
        case 7: monthLabel  = "Julho"; break;
        case 8: monthLabel  = "Agosto"; break;
        case 9: monthLabel  = "Setembro"; break;
        case 10: monthLabel = "Outubro"; break;
        case 11: monthLabel = "Novembro"; break;
        case 12: monthLabel = "Dezembro"; break;
    }

    return (
        <Container>
            <Header admin={props.admin ? true : false}/>
            {!props.admin &&
                <div className="create-visit">
                    <h1>Agendar consulta</h1>
                    <form onSubmit={handleSubmit} method="post">
                        <input type="date" name="date" onChange={e => loadAvailableHours(e.target.value)} />
                        <select onChange={e => setHourStart(e.target.value)}>
                            <option>- Selecione uma opção -</option>
                            {Object.keys(availableHours).map((hour, idx) => (
                                <option key={idx} value={hour}>{hour}:00</option>
                            ))}
                        </select>
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            }
            <div className="month-selector">
                <h1>
                    <FaChevronLeft size={18} onClick={previousMonth} /> {monthLabel} <FaChevronRight size={18} onClick={nextMonth} />
                </h1>
            </div>
            <div className="container">
                <div className="month">
                    {Object.keys(schedule).map((key, idx) => (
                        <div className="day" key={idx}>
                            <h1>{key}</h1>
                            {schedule[key].map((visit, idx) => (
                                <div key={idx}>
                                    {visit.isMine
                                        ? 
                                        <Link className="visit-card" to={`/visita/${visit._id}`}>
                                            <VisitCard
                                                isMine={visit.isMine}
                                                visit={visit}
                                                key={idx}
                                            />
                                        </Link>
                                        : props.admin ?
                                        <Link className="visit-card" to={`/admin/visita/${visit._id}`}>
                                            <VisitCard
                                                isMine={visit.isMine}
                                                visit={visit}
                                                key={idx}
                                            />
                                        </Link>
                                        :
                                        <VisitCard
                                            isMine={visit.isMine}
                                            visit={visit}
                                            key={idx}
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Schedule;