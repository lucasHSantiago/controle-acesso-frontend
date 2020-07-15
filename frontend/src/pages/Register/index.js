import React, { useState } from 'react';

import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Register = props => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCpf] = useState("");
    
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/sessions', {
            name,
            email,
            password,
            phone,
            cpf,
        }).then(response => {
            const { token } = response.data;

            if (token) {
                localStorage.setItem('user-token', token);
                props.history.push("/agenda");
            }
        });

        console.log(response);
    }

    return (
        <Container>
            <div className="register-box">
                <h1>Crie sua conta</h1>
                <form onSubmit={handleSubmit} method="post">
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Nome completo" 
                        required
                        onChange={e => setName(e.target.value)} 
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        required
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Senha" 
                        required
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Confirmar senha" 
                        required
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        name="telephone" 
                        placeholder="Telefone" 
                        required
                        onChange={e => setPhone(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        name="cpf" 
                        placeholder="CPF" 
                        required
                        onChange={e => setCpf(e.target.value)} 
                    />
                    <button type="submit">Registrar</button>
                </form>
                <Link to="/">Voltar para o login</Link>
            </div>
        </Container>
    );
}

export default Register;