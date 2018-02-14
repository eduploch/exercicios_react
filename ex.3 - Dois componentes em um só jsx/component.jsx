import React from 'react'

const Primeiro = props => (
    <h1>Bem vindo, {props.nome}</h1>
)

const Segundo = props => (
    <h2>Sua idade é {props.idade}</h2>
)

export { Primeiro, Segundo }
