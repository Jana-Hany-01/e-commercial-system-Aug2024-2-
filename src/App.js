import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Login from "./components/Login";
import RegisterWithUs from "./components/RegisterWithUI";
import { Provider } from "react-redux";
import { usersStore } from "./Stores/usersStore";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateRoutes from "./components/PrivateRoutes";
import DisplayRegisteredUsers from "./components/DisplayRegisteredUsers";
import DisplayCurentlyLoggedInUsers from "./components/DisplayCurentlyLoggedInUsers";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Provider store={usersStore}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterWithUs />} />

              <Route element={<PrivateRoutes />}>
                <Route
                  path="/registered-users"
                  element={<DisplayRegisteredUsers />}
                />
                <Route
                  path="/logged-in-users"
                  element={<DisplayCurentlyLoggedInUsers />}
                />
              </Route>
            </Routes>
          </Provider>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
