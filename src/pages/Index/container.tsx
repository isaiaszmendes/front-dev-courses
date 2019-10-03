import React from 'react';
// import BemVindo from '../../assets/img/curso.jpg';

export default () => (
  <div className="bg-dark-blue">
    <div>
      <p>
        Bem vindo a Dev-Courses aqui você disfruta dos melhores cursos online
        voltados para Web, com o menor preço e ótima qualidade.
      </p>
      {/* <img src={BemVindo} alt="computador com codigos"/> */}
      <button type="button" className="btn-blue">Inscreva-se</button>
    </div>
    <div>
      <p>
        Esta procurando profissionais capacitados e promissores, procure-os aqui na
        nossa plataforma de recrutadores.
      </p>
      {/* <img src=""/> */}
      <button type="button" className="btn-blue">Saiba mais</button>
    </div>
    <div>
      <p>
        Trabalhe conosco, junte-se aos nossos professores, e seje um tutor da Dev-Courses.
      </p>
      {/* <img src=""/> */}
      <button type="button" className="btn-blue">Saiba mais</button>
    </div>
  </div>
);
