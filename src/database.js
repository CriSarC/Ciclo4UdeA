const mongoose=require("mongoose")
const mongoAtlasUri ="mongodb+srv://admin:mintic2021@cluster0.jvnw2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Estamos conectadisimos a BD Mongo en Atlas a través de Mongoose")
    );

  } catch (e) {
    console.log("Error en conexion :(");
  }