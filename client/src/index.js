import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<div>Server is up!</div>, document.getElementById("root"));

serviceWorker.unregister();
