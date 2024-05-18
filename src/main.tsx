import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import "./shared/config/i18n/i18n.ts";
import "@/app/styles/variables/globals.css";
import { PageError } from "@/widgets/PageError";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError />}>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);
