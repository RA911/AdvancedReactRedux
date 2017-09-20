import React from 'react';
import { render } from 'react-dom';

const App = ({ message }) => <div>{message}</div>

render(<App message="Hello World!" />, document.getElementById('app'));
