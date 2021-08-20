import Database from "./DataBase";
import petList from ".petList.txt";
const petSchema = new mongoose.Schema({
  decive_id : Number,
  name : String,
  texture : String,
  weight : Number,
  happiness : Number,
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
    decive_id : process.env.BALENA_DEVICE_UUID,
    name : randPetGenerated,
    texture : "dog1",
    weight : 10,
    happiness : 10,
  });
  petDefault.save(function(err, petDefault) {
    if (err)
      return console.error(err);
  });
}
function petGetValue(key) {
  Pet.findOne({decive_id : process.env.BALENA_DEVICE_UUID});

  query.select("decive_id " + key);

  return query.exec(function(err, person) {
    if (err)
      return err;
    return person[key];
  });
}
function petChangeValue(key, value) {
  const query = Pet.updateOne({decive_id : process.env.BALENA_DEVICE_UUID},
                              {[key] : value});

  return query.exec(function(err, person) {
    if (err)
      return err;
    return "done"
  });
}
export {petSchema, petSetup, petGetValue, petChangeValue};
