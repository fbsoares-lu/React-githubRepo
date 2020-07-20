import React from 'react';
import { FiChevronRight} from 'react-icons/fi'

import logo from '../../assets/Logo.svg'
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {  
    return (
        <>
            <img src={logo} alt='Github Explorer' />
            <Title>Explore repositórios no GitHub.</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </ Form>

            <Repositories>
                <a href="/">
                    <img 
                        src="https://avatars1.githubusercontent.com/u/38812286?s=460&u=958ecb66379d41fd3fbbb8f2f411e73d3449db9e&v=4"
                        alt="Lucas Soares"
                    />
                    <div>
                        <strong>React-githubRepo</strong>
                        <p>Aplicação React com API de repositórios do GitHub.</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="/">
                    <img 
                        src="https://avatars1.githubusercontent.com/u/38812286?s=460&u=958ecb66379d41fd3fbbb8f2f411e73d3449db9e&v=4"
                        alt="Lucas Soares"
                    />
                    <div>
                        <strong>React-githubRepo</strong>
                        <p>Aplicação React com API de repositórios do GitHub.</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="/">
                    <img 
                        src="https://avatars1.githubusercontent.com/u/38812286?s=460&u=958ecb66379d41fd3fbbb8f2f411e73d3449db9e&v=4"
                        alt="Lucas Soares"
                    />
                    <div>
                        <strong>React-githubRepo</strong>
                        <p>Aplicação React com API de repositórios do GitHub.</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </ Repositories>
        </>
    );
};

export default Dashboard;