import Movies from "./Movies";

function App() {
  return <div>{/*{code here}*/}</div>;
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>

        <Route exact path="/directors">
          <Directors />
        </Route>

        <Route exact path="/actors">
          <Actors />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </div>
    );
}

export default App;
  25