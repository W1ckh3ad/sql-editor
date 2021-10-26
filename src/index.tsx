import { render } from "react-dom";
import { defineCustomElements } from "@telekom/scale-components/loader";
import "@telekom/scale-components/dist/scale-components/scale-components.css";
import App from "./App";

defineCustomElements();
const rootElement = document.getElementById("root");
render(<App />, rootElement);
