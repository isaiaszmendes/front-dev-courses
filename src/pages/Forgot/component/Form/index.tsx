import React from 'react';

interface Props {
  onFormSubmit(): void
}


export default ({ email, handleChange, onFormSubmit }: any) => (
  <form onSubmit={onFormSubmit}>
    <input
      type="email"
      name="email"
      value={email}
      onChange={handleChange}
      placeholder="Digite seu email"
    />
    <button className="btn-blue" type="submit" id="btnForgot">Recuperar</button>
  </form>
);
