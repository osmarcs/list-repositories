import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Title, Form, SubmitButton, List } from './styles';
import Container from '../../elements/Container';
import api from '../../services/api';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const handleChange = e => {
    setNewRepo(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await api.get(`/repos/${newRepo}`);
    const data = {
      name: response.data.full_name,
    };
    const newRepositories = [...repositories, data];
    setRepositories(newRepositories);
    setNewRepo('');
    setLoading(false);
    localStorage.setItem('repositories', JSON.stringify(newRepositories));
  };

  useEffect(() => {
    const stringRepositories = localStorage.getItem('repositories') || '[]';
    const repositoriesJson = JSON.parse(stringRepositories);
    setRepositories(repositoriesJson);
  }, []);

  return (
    <Container>
      <Title>
        <FaGithubAlt />
        Hello World
      </Title>

      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Adicionar Repositorio"
          value={newRepo}
          onChange={handleChange}
        />
        <SubmitButton isLoading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>
      <List>
        {repositories.map(repository => (
          <li key={repository.name}>
            {repository.name}
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
              detalhes
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
