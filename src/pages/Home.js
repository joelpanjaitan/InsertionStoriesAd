import "../App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Stack, Grid } from "@mui/material";
// import Storyone from "./Storyone";
function Home() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/progress");
  }
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
            <div className="circle" onClick={handleClick}>
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
      </div>
    </div>
  );
}
export default Home;
