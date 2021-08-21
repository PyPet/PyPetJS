import "./Pet.css";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import { petGetValue } from "./PetData"

function ComponentPet() {
  /* {} */
  console.debug("decive_id: " + petGetValue("decive_id"))
  return (
    <div className="Pet">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <Grid item xs={4}>
          <center>
            <section id="Pet__Photo">
              <img src={dog1} alt="" width="70%"></img>
            </section>
          </center>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          style={{ width: 3, backgroundColor: "#bdc3c7" }}
        />
        <Grid item xs>
          <center>
            <section id="Pet__Data">
              <h2>
                Nombre: <span id="Pet__Data__Name">{petGetValue("name")}</span>
              </h2>
              <h3>
                Peso: <span id="Pet__Data__Weight">{petGetValue("weight")}</span>
                KiloGramos
              </h3>
              <h3>
                Felicidad: <span id="Pet__Data__Happiness">{petGetValue("happiness")}</span>
                Agites de cola(Por Minuto)
              </h3>
            </section>
          </center>
        </Grid>
      </Grid>
      <Divider style={{ height: 3, backgroundColor: "#bdc3c7" }} />
      <section id="Pet__Btns">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button size="large" id="Pet__Btns__Feed">
            Alimentar
          </Button>
          <Button size="large" id="Pet__Btns__Play">
            Jugar
          </Button>
          <Button size="large" id="Pet__Btns__Exercise">
            Hacer Ejercicio
          </Button>
        </ButtonGroup>
      </section>
    </div>
  );
}

export default ComponentPet;
