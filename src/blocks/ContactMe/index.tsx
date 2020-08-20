import React, { useState, FormEvent } from 'react';
import './styles.scss';

import { FaEnvelope, FaUser,FaWhatsapp } from 'react-icons/fa';
import api from '../../services/api';

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [statusMessage, setStatusMessage] = useState('Não irei enviar span ao seu email, somente será usado para enviar uma resposta.');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const status = document.querySelector('#status-message');

    if(name === '' || email === '' || text === '') {
      status?.classList.remove('status-error');
      status?.classList.remove('status-success');
      status?.classList.add('status-warning');
      return setStatusMessage("Dados do formulário estão vazios");
    }

    const ring = document.querySelector('.ring-block');

    const data = {
      name,
      subject: "Proposta de Emprego - Portfolio Diego Rocha",
      replyTo: email,
      text,
    }

    ring?.classList.add('sending');

    setTimeout(() => {
      ring?.classList.remove('sending');
      status?.classList.remove('status-success');
      status?.classList.remove('status-warning');
      status?.classList.add('status-error');
      return setStatusMessage("Servidor de email não está respondendo! Reinicie o site.");
    }, (1000 * 60) * 5); // 5 minutes

    api.post('sendmail', data).then(() => {
      ring?.classList.remove('sending');

      setName('');
      setEmail('');
      setText('');

      status?.classList.remove('status-warning');
      status?.classList.remove('status-error');
      status?.classList.add('status-success');

      return setStatusMessage("Email enviado com sucesso! Aguarde resposta.");
    }).catch((error) => {
      console.log(error);
      status?.classList.remove('status-success');
      status?.classList.remove('status-warning');
      status?.classList.add('status-error');
      return setStatusMessage("Ocorreu um erro ao enviar o email! Tente novamente mais tarde.")
    });
  }

  return (
    <div id="contactme" className="contactme" data-block="contactme">
      <div className="ring-block">
        <div className="content">
          <div className="ring">
            Enviando...
            <span></span>
          </div>
        </div>
      </div>

        <h1 className="block-name">Fale Comigo</h1>

        <form className="form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="input-name">
              <label htmlFor="name"><FaUser color="#252627" size={24}/></label>
              <input 
                type="text" 
                id="name" 
                placeholder="Digite seu nome..."
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="input-email">
              <label htmlFor="email"><FaEnvelope color="#252627" size={24} /></label>
              <input 
                type="email" 
                id="email" 
                placeholder="Digite seu email..."
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-message">
            <textarea 
              id="message" 
              rows={10} 
              placeholder="Digite sua mensagem aqui..." 
              style={{
                resize: "vertical", 
                minHeight: "120px"
              }}
              value={text}
              onChange={e => setText(e.target.value)}
            ></textarea>
          </div>

          <div className="input-submit">
            <span className="status-message status-warning" id="status-message">
              {statusMessage}
            </span>

            <button className="button" type="submit">Enviar</button>
          </div>
          
          
        </form>
        <button className="whatsapp-container">
          <a 
            href={`https://wa.me/5562992604763?text=${text}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp color="#ddd" size={48} className="zap-icon"/>
          </a>
      </button>
    </div>
  );
}

export default ContactMe;