import React from 'react';
import './index.css';
//

export default props => (
    <section className="container"> 
        <div className="informacao">
            <div className="video">
                
            </div>
            <div className="description">   
                <header>
                    <h3>JavaScript</h3>
                </header>

                <p className="aprender">Vocẽ aprenderá: O JavaScript não foi criado pelo W3C, como muitos pensam. Na verdade ele foi criado por um cara chamado Brendan Eich na Netscape (um dos precursores dos navegadores web).
                </p>
                <p><strong>Prof:</strong> Isaías Mendes</p>
                <p><strong>Duração:</strong> 00:00</p>
                <p><strong>Status:</strong> <span> Gravando...</span></p>

                <div className="value">
                    <p><span>R$</span>20,00</p>
                    <button>Adquira</button>
                </div>
            </div>
        </div>

        <div className="modulo"></div>
        <div className="modulo"></div>
        <div className="modulo"></div>
        <div className="modulo"></div>
        <div className="modulo"></div>
    </section>
)

