import React from "react";
import { render } from "react-dom";
import '../scss/style.sass';

import Routes from './routes.jsx';

export { default as Button } from './components/Button.jsx';
export { default as InputBlock } from './components/InputBlock.jsx';

render(<Routes />, document.getElementById("app"));
