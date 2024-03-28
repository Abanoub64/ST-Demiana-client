import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";
import ClassProvider from "./context/ClassContext.jsx";

let queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ClassProvider>
      <Router>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Router>
    </ClassProvider>
  </AuthContextProvider>
);
