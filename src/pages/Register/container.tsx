import React from 'react';
import { Link } from 'react-router-dom';

// Routes
import FrontEndRoutes from '../../config/front-end-routes';

export default () => (
  <section className="bg-dark">
    <div className="register-container">
      <header>
        <h1>Juntar a Dev Upgrade</h1>
      </header>
      <form id="data">
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Digite seu e-mail" />
        <input placeholder="Nome usuário" />
        <input type="password" placeholder="Senha" />
        <button type="button" className="btn-blue">
          Registrar-se
        </button>
        <div className="go-forgot">
          <Link className="go-forgot-link" to={FrontEndRoutes.LOGIN}>Já tenho uma conta</Link>
        </div>        
      </form>
    </div>
  </section>
);
