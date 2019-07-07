import mongoose, { Schema } from 'mongoose';
const schema = mongoose.schema;

let data4 = new Schema({
 Numero:{
   type: String
 },
 Date:{
    type: Date
 },
 Type_De_Crime:{
    type: String
 },
 Adresse:{
    type: String
 },
 Latitude:{
    type:String
 },
 Longitude:{
    type:String
 },
Annee:{
   type: Number
 },
 Ville:{
   type: String
 },
 Mois:{
    type: Number
}
});


export default mongoose.model('data5',data4);