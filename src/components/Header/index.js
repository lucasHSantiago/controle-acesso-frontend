import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <Container>
            <h1>Bazar - São Simeão</h1>
            <nav>
            {props.admin &&
                <>
                    <Link to={'/admin/agenda'}>
                        <p>Agendamentos</p>
                    </Link>
                    <Link to={'/admin/config'}>
                        <p>Configurações</p>
                    </Link>
                </>
            }
            {!props.admin &&
                <Link to={'/agenda'}>
                    <p>Agendamentos</p>
                </Link>
            }
            <Link to={''}>
                <p onClick={() => {localStorage.removeItem('user-token'); localStorage.removeItem('admin-token'); }}>Sair</p>
            </Link>
            </nav>
        </Container>
    );
}

export default Header;