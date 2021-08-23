import { Switch, Route, Router } from "react-router-dom";

import Books from './Pages/Books';
import BookDetails from './Pages/BookDetails';
import Summary from "./Pages/Summary";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/bookdetails" component={BookDetails} />
        <Route exact path="/summary" component={Summary} />
      </Switch>
    </div>
  );
}

export default App;
