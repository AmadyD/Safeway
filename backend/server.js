import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import data4 from './models/crimes';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://192.168.56.101:27017/crime');
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('mongoDb database connection established succesfully');
});



router.route('/crimes').get((req,res)=>{
    data4.find({Ville: 'Boston',Annee: 2016},{Lat:1,Long:1},(err,listCrimes)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(listCrimes);
            console.log(listCrimes);
        }
    });
});

router.route('/crimesBoston2016').get((req,res)=> {
    var collection=data4.find({Ville: 'Boston',Annee: 2016});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});


    router.route('/crimesLasVegas2016').get((req,res)=> {
        var collection=data4.find({Ville: 'Las Vegas',Annee: 2016});
        collection.count((err,values)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(values);
                res.json(values);
            }
        });
});


router.route('/crimesBoston2017').get((req,res)=> {
    var collection=data4.find({Ville: 'Boston',Annee: 2017});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});

router.route('/crimesLasVegas2017').get((req,res)=> {
    var collection=data4.find({Ville: 'Las Vegas',Annee: 2017});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});


router.route('/crimesBoston2018').get((req,res)=> {
    var collection=data4.find({Ville: 'Boston',Annee: 2018});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});


router.route('/crimesLasVegas2018').get((req,res)=> {
    var collection=data4.find({Ville: 'Las Vegas',Annee: 2018});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});

router.route('/crimesLasVegas').get((req,res)=> {
    var collection=data4.find({Ville: 'Las Vegas'});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});

router.route('/crimesBoston').get((req,res)=> {
    var collection=data4.find({Ville: 'Boston'});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/janvier/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:1});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/fevrier/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:2});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/mars/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:3});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/avril/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:4});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/mai/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:5});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/juin/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:6});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/juillet/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:7});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/aout/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:8});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/septembre/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:9});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/octobre/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:10});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/novembre/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:11});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});
router.route('/decembre/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee, Mois:12});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});

router.route('/crimeTotal/:ville/:annee').get((req,res)=> {
    var collection=data4.find({Ville: req.params.ville, Annee: req.params.annee});
    collection.count((err,values)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(values);
            res.json(values);
        }
    });
});


app.use('/',router);

app.listen(4000,()=> console.log("Express server running on port 4000"));