import React from 'react';
import { Link } from 'react-router-dom';

// Component
import Form from './component/Form';

// Routes
import FrontEndRoutes from '../../config/front-end-routes';

interface Props {
  onFormSubmit(): void
}

export default ({ email, handleChange, onFormSubmit }: any) => (
  <section className="bg-dark">
    <div className="forgot-container">
      <header>
        <h1>Recuperar Senha</h1>
      </header>
      <Form
        email={email}
        handleChange={handleChange}
        onFormSubmit={onFormSubmit}
      />
      <Link className="return-login" to={FrontEndRoutes.LOGIN}>Voltar</Link>
    </div>
  </section>
);
