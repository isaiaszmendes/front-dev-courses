import React from 'react';
import { Link } from 'react-router-dom';
import LogoMarca from '../../assets/img/logo.png';

// Routes
import FrontEndRoutes from '../../config/front-end-routes';

export default () => (
  <section className="login-container bg-dark">
    <div className="login">
      <h1>Acessar Dev Upgrade</h1>
      <img className="logo-login" src={LogoMarca} alt="logo marca" />
      <input id="email" type="email" placeholder="Digite seu e-mail" />
      <input id="senha" type="password" placeholder="Digite sua senha" />
      <button className="btn-blue" type="button">Entrar</button>
      <div className="links">
        <Link to={FrontEndRoutes.FORGOT}>Esqueci a senha</Link>
        <div className="barra"><p /></div>
        <Link to={FrontEndRoutes.REGISTER}>Cadastre-se</Link>
      </div>
    </div>
  </section>
);
