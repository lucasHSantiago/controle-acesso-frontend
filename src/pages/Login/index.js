import React, { useState } from 'react';

import { Container } from './styles';
import { Link, useHistory, Redirect } from 'react-router-dom';
import api from '../../services/api';
import AdminConfig from '../AdminConfig';
import { useAlert } from 'react-alert';


const Login = props => {
    const alert = useAlert();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        let endpoint  = '/authenticate';
        let tokenName = 'user-token';
        let loginRedirect = '/agenda';

        if (props.admin) {
            endpoint  = '/authenticateAdmin';
            tokenName = 'admin-token';
            loginRedirect = '/admin/agenda';
        }

        api.post(endpoint, {
            email,
            password,
        }).then(response => {
            const { token } = response.data;

            if (token) {
                localStorage.removeItem('user-token');
                localStorage.setItem(tokenName, token);
                history.push(loginRedirect);
            }
        }).catch(error => {
            alert.show('Erro: ' + error.response.data.error);
        });
    }
    
    return (
        <Container>
            <div className="login-box">
                {!props.admin && <h2>Faça login para continuar</h2>}
                {props.admin && <h2>Entrar com conta administrativa</h2>}
                <form onSubmit={handleSubmit} method="post">
                    <input
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Senha" 
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <button type="submit">ACESSAR</button>
                </form>
                {!props.admin && <Link to="/cadastro">Não possui uma conta? Registre-se agora!</Link>}
            </div>
        </Container>
    );
}

export default Login;