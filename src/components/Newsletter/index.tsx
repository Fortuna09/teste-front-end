import { useState } from 'react';
import './Newsletter.scss';

export const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter:', { name, email, acceptTerms });
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__info">
          <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
          <p className="newsletter__text">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
            da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__inputs">
            <input
              type="text"
              placeholder="Digite seu nome"
              className="newsletter__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="newsletter__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter__button">
              INSCREVER
            </button>
          </div>
          
          <label className="newsletter__checkbox">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  );
};
