import petList from ".petList.txt";
const mongoose = require("mongoose");
mongoose
  .connect(process.env.REACT_APP_PYPET_DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
const petSchema = new mongoose.Schema({
  decive_id: String,
  name: String,
  texture: String,
  weight: Number,
  happiness: Number
});
const Pet = mongoose.model("Pet", kittySchema);
function randomPet() {
  let petListSplitted = petList.split("\n");
  let randomNumber = Math.floor(Math.random() * splitDate.length);
  let line = petListSplitted.splice(randomNumber, 1);
  return line;
}
function petSetup() {
  let randPetGenerated = randomPet();
  console.log("Pet name is: " + randPetGenerated);
  const petDefault = new Pet({
    decive_id: process.env.BALENA_DEVICE_UUID,
    name: randPetGenerated,
    texture: "dog1",
    weight: 10,
    happiness: 10,
  });
  return petDefault.save(function (err, petDefault) {
    if (err) return console.error(err);
    return petDefault
  });
}
function petGetValue(key) {
  let query = Pet.findOne({ decive_id: process.env.BALENA_DEVICE_UUID }).select("decive_id " + key).exec()

  if (query == null) {
    console.info("La mascota '" + process.env.BALENA_DEVICE_UUID + "' no existe. creando una.")
    return petSetup()[key]
  } else {
    return query[key]
  }
}
function petChangeValue(key, value) {
  let query = Pet.updateOne({ decive_id: process.env.BALENA_DEVICE_UUID }, { [key]: value }).exec();

  if (query == null) {
    console.error("La mascota '" + process.env.BALENA_DEVICE_UUID + "' no existe. no se puede crear una.")
    return "ERROR"
  } else {
    return query[key]
  }
}
export { petGetValue, petChangeValue };
