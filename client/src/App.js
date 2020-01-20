import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/auth" exact />
              <Route path="/auth" component={AuthPage} />
              <Route path="/bookings" component={BookingsPage} />
              <Route path="/events" component={EventsPage} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
