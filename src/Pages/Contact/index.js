import React, { useState } from 'react'

import './style.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="container mt-5">
      <h1 className="text-center my-5">Fale conosco</h1>

      <div className="row justify-content-center my-5">
        <div className="col-12">
          <form action="#" method="post">

            <div className="form-group row">
              <label className="col-12 col-sm-2 col-form-label" htmlFor="name">Nome completo *</label>

              <div className="col-12 col-sm-10">
                <input className="form-control" type="text" name="name" id="name"
                  placeholder="Seu nome completo" onChange={event => setName(event.target.value)} value={name}/>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-12 col-sm-2 col-form-label" htmlFor="email">Email *</label>

              <div className="col-12 col-sm-10">
                <input className="form-control" type="email" name="email" id="email"
                  placeholder="Seu email" onChange={event => setEmail(event.target.value)} value={email}/>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-12 col-sm-2 col-form-label" htmlFor="phone">Telefone *</label>

              <div className="col-12 col-sm-10">
                <input className="form-control" type="text" name="phone" id="phone"
                  placeholder="seu telefone" onChange={event => setPhone(event.target.value)} value={phone}/>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-12 col-sm-2 col-form-label" htmlFor="message">Mensagem *</label>

              <div className="col-12 col-sm-10">
                <textarea className="form-control" name="message" id="message" rows="10"
                  placeholder="O que deseja nos contar?"
                  onChange={event => setMessage(event.target.value)} value={message}>
                </textarea>
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-success" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
