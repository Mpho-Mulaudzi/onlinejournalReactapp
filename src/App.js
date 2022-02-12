

import Journals from "./journals";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from "./Create";
import Journaldetails from "./journaldetails";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch> 
          <Route exact path="/">
          <Journals/>
          </Route>
          <Route path="/create">
          <Create/>
          </Route>
          <Route path="/journals/:id">
            <Journaldetails/>
          </Route>
       </Switch>
       
      </div>
    </div>
    </Router>
  );
}

export default App;
