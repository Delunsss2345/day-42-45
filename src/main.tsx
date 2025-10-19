import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import { persist, store } from "./store/store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PersistGate persistor={persist}>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </PersistGate>
    </BrowserRouter>
  </StrictMode>
);
