import logoGithub from '../assets/github-logo.png';
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from '../components/Button';
import { api } from '../services/api';

function App() {
    const [currentRepo, setcurrentRepo] = useState('');
    const [repos, setRepos] = useState([]);

    const handleSearchRepo = async () => {
        const { data } = await api.get(`repos/${currentRepo}`);

        if (data.id) {
            const isExist = repos.find((repo) => repo.id === data.id);

            if (!isExist) {
                setRepos((prev) => [...prev, data]);
                setcurrentRepo('');
                return;
            }
        }
    };

    const handleRemoveRepo = (id) => {
        console.log(id);
        setRepos((prev) => prev.filter((repo) => repo.id !== id));
    };

    return (
        <div className="App">
            <Container>
                <img src={logoGithub} width={72} height={72} alt="Logo" />
                <Input value={currentRepo} onChange={(e) => setcurrentRepo(e.target.value)} />
                <Button onClick={handleSearchRepo} />
                {repos.map((repo) => (
                    <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />
                ))}
            </Container>
        </div>
    );
}

export default App;
