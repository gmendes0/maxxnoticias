import React, { useState, useEffect } from 'react'

import './style.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [validator, setValidator] = useState({})

  useEffect(() => {
    setValidator({})
  }, [name, email, phone, message])

  const hasEmpty = fields => {
    const isEmpty = fields.map(field => field.length === 0)
    return isEmpty.includes(true)
  }

  const validatePhone = phone => /^[0-9]{10,11}$/.test(phone)
  const validateEmail = email => /@[a-zA-z0-9.!#$%*+-]{1,}$/.test(email)

  function validate() {
    if (hasEmpty([name, email, phone, message]))
      return {valid: false, message: `preencha todos os campos.`}
    
    if (!validatePhone(phone.replace(/\D/g, '')))
      return {valid: false, message: `telefone inválido.`}
    
    if (!validateEmail(email))
      return {valid: false, message: `email inválido.`}
    
    return {valid: true, message: `menssagem enviada com sucesso.`}
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validateObject = validate()
    if (validateObject.valid) {
      console.log({ name, email, phone, message })
    }
    setValidator(validateObject)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center my-5">Fale conosco</h1>

      {validator.message && (
        <div className="row justify-content-center">
          <div className={`alert col-11 ${validator.valid ? 'alert-success col-sm-4' : 'alert-danger col-sm-3'}`}>
            <div className="text-center">
              {validator.message}
            </div>
          </div>
        </div>
      )}

      <div className="row justify-content-center my-5">
        <div className="col-12">
          <form method="post">

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
                <input className="form-control" type="text" name="phone" id="phone" maxLength="11"
                  placeholder="seu telefone" onChange={event => setPhone(event.target.value)} value={phone.replace(/\D/g, '')}/>
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
              <button className="btn btn-success" type="submit" onClick={handleSubmit}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
