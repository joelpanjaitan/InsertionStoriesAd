// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Stack, Grid } from "@mui/material";
function App() {
  return (
    <div className="App">
      <div className="Grey-bg">
        <h1>Original movies</h1>
        <Button varian="contained">Stories here</Button>

        <Grid item sm={12} style={{ display: "flex" }} xs={12} sx={{ mb: 12 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <div className="circle">
              <p class="text">Circle here</p>
            </div>
            <div className="circle">
              <p class="text">Circle here</p>
            </div>
          </Stack>
        </Grid>
        <Grid item sm={12} xs={12} sx={{ mb: 2, mt: 1 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <p>Home</p>
            <p>Liveevent</p>
            <p>Livetv</p>
            <p>Library</p>
            <p>Account</p>
          </Stack>
        </Grid>
        <Routes>
          <Route path="/progress" element={<Progress />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
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
