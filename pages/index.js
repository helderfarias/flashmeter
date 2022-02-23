import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "../src/Copyright";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { textAlign } from "@mui/system";

const camera = (stop) => {
  const camera = new Map();
  camera.set("1.4", ["1.6", "1.8", "2.0"]);
  camera.set("2.0", ["2.2", "2.5", "2.8"]);
  camera.set("2.8", ["3.2", "3.5", "4.0"]);
  camera.set("4.0", ["4.5", "5.0", "5.6"]);
  camera.set("5.6", ["6.3", "7.1", "8.0"]);
  camera.set("8.0", ["9.0", "10.0", "11.0"]);
  camera.set("11.0", ["13.0", "14.0", "16.0"]);
  camera.set("16.0", ["18.0", "20.0", "22.0"]);
  camera.set("22.0", ["22.0", "22.0", "22.0"]);

  return (scale) => {
    if (scale >= 3 && scale <= 5) {
      return camera.get(stop)[0];
    }

    if (scale > 5 && scale <= 8) {
      return camera.get(stop)[1];
    }

    if (scale > 8) {
      return camera.get(stop)[2];
    }

    return stop;
  };
};

export default function Index() {
  const [stop, setStop] = React.useState(0);
  const [scale, setScale] = React.useState(0);

  const handleChangeStop = (event) => {
    setStop(event.target.value);
  };

  const handleChangeScale = (event) => {
    setScale(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Grid container justifyContent={"center"}>
          <Typography variant="h4" component="h1" gutterBottom>
            Flash Meter to DSLR
          </Typography>
        </Grid>

        <br />

        <Grid container justifyContent={"center"}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">f/stop</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={stop}
              label="f/stop"
              onChange={handleChangeStop}
            >
              <MenuItem value="0">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"1.4"}>1.4</MenuItem>
              <MenuItem value={"2.0"}>2</MenuItem>
              <MenuItem value={"2.8"}>2.8</MenuItem>
              <MenuItem value={"4.0"}>4</MenuItem>
              <MenuItem value={"5.6"}>5.6</MenuItem>
              <MenuItem value={"8.0"}>8</MenuItem>
              <MenuItem value={"11.0"}>11</MenuItem>
              <MenuItem value={"16.0"}>16</MenuItem>
              <MenuItem value={"22.0"}>22</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="demo-simple-select-filled-label">step</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={scale}
              onChange={handleChangeScale}
              label="step"
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid container justifyContent={"center"}>
          <Box
            component="span"
            sx={{ p: 2, border: "1px dashed grey", minWidth: 235 }}
          >
            <p style={{ textAlign: "center" }}>
              Camera <b style={{ fontFamily: "Alegreya" }}>f</b>/
              <b style={{ fontSize: 20 }}>{camera(stop)(scale)}</b>
            </p>
          </Box>
        </Grid>

        <br />
        <br />

        <Copyright />
      </Box>
    </Container>
  );
}
