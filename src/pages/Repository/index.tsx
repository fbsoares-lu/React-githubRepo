import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import imgLogo from '../../assets/Logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={imgLogo} alt='Github explorer' />
                <Link to="/dashboard">
                    <FiChevronLeft size={20} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src='https://avatars3.githubusercontent.com/u/69631?v=4' alt='Avatar' />
                    <div>
                        <strong>facebook/react</strong>
                        <p>descricao do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to='dsdsdsd'>
                    <div>
                        <strong>sdsddsdsdsdsd</strong>
                        <p>sdsdsds</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    )
}

export default Repository;