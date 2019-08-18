import React from 'react';
import { Link } from 'react-router-dom';

// Routes
import FrontEndRoutes from '../../config/front-end-routes.ts';

export default () => (
  <section className="loginContainer">
    <div className="login">
      <h1>Acessar DevCourses</h1>
      <input id="email" type="email" placeholder="Digite seu e-mail"></input>
      <input id="senha" type="password" placeholder="Digite sua senha"></input>
      <button>Entrar</button>
      <div className="links">
        <Link to={FrontEndRoutes.FORGOT}>Esqueci a senha</Link>
        <Link to={FrontEndRoutes.REGISTER}>Cadastre-se</Link>
      </div>
    </div> 
  </section>
);
