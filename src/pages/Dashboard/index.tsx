import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.svg'
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {  
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storeagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if (storeagedRepositories) {
            return JSON.parse(storeagedRepositories)
        } 

        return [];
    });

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories]);

    async function handleAddRepository (event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório.');
            return;
        }

        try {
            const response = await api.get<Repository>(`/repos/${newRepo}`);

            const repository = response.data; 

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Error na busca desse repositório')
        }
    }

    return (
        <>
            <img src={logo} alt='Github Explorer' />
            <Title>Explore repositórios no GitHub.</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input 
                value={newRepo}
                onChange={e => setNewRepo(e.target.value)}
                placeholder="Digite o nome do repositório" 
                />
                <button type="submit">Pesquisar</button>
            </ Form>

            {inputError && <Error>{ inputError }</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <Link key={repository.full_name} to={`repository/${repository.full_name}`}>
                        <img 
                            src={repository.owner.avatar_url}
                            alt="Lucas Soares"
                        />
                        <div>
                            <strong>{repository.owner.login}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </ Repositories>
        </>
    );
};

export default Dashboard;