// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Stack, Grid } from "@mui/material";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <h1>Hello World</h1>
      <Button varian="contained">Hello World</Button>
      {/* </header> */}
      <Grid item sm={12} xs={12} sx={{ mb: 2, mt: 1 }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <h2>Home</h2>
          <h2>Liveevent</h2>
          <h2>Livetv</h2>
        </Stack>
      </Grid>
      <Routes>
        <Route path="/progress" element={<Progress />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function Progress() {
  return (
    <>
      <main>
        <h2>Homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>About?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
export default App;
