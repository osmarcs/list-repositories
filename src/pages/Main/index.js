import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Title, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <Title>
        <FaGithubAlt />
        Hello World
      </Title>

      <Form>
        <input placeholder="Adicionar Repositorio" />
        <SubmitButton>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
