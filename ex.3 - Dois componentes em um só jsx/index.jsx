import React from 'react'
import ReactDOM from 'react-dom'
import { Primeiro, Segundo } from './component'

ReactDOM.render(
    <div>
        <Primeiro nome="Eduardo" />
        <Segundo idade="34" />
    </div>
    , document.getElementById('app'))