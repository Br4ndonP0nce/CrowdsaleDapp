import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { CrowdSale } from "../pages/CrowdSale";

export const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/crowdsale" component={CrowdSale} />

          <Redirect to="/crowdsale" />
        </Switch>
      </Layout>
    </Router>
  );
};
