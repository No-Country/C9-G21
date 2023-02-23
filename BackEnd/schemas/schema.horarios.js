import mongoose from "mongoose";
const availabilitySchema = new mongoose.Schema({
  isActive: Boolean,
  horaInicio: String,
  horaFinal: String,
});
export default availabilitySchema;
