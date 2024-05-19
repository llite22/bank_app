import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import "./shared/config/i18n/i18n.ts";
import "@/app/styles/variables/globals.css";
import { PageError } from "@/widgets/PageError";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/app/providers/AuthProvider/AuthProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<PageError />}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  </BrowserRouter>
);
