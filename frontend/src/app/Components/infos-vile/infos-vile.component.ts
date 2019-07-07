import { Component, OnInit } from '@angular/core';
import {Crimes} from '../../Crimes';
import {CrimesService} from '../../crimes.service';
import * as L from 'leaflet';
import {Chart} from 'chart.js';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-infos-vile',
  templateUrl: './infos-vile.component.html',
  styleUrls: ['./infos-vile.component.css']
})
export class InfosVileComponent implements OnInit {
  crimes: Crimes;

  Message: any[];
 LineChart = [];
 tre;
 ville = '';
 annee ;
 text;
 janv;
 fev;
 mars;
 avrl;
 mai;
 juin;
 juillet;
 aout;
 sept;
 oct;
 nov;
 dec;
 bool;
 selectedVille = 'Choisissez une ville';
 selectedYear = 'Choisissez une Année';
// lineChart
public lineChartData: Array<any> = [
  {data: [, , , , , , , , , , , ], label: ''}
];
public lineChartLabels: Array<any> = ['Janv', 'Fév', 'Mar', 'Avrl', 'Mai', 'Juin', 'Jul', 'Aou',
'Sep', 'Oct', 'Nov', 'Déc'];
public lineChartOptions: any = {
  responsive: true
};
public lineChartColors: Array<any> = [
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];
// tslint:disable-next-line:no-inferrable-types
public lineChartLegend: boolean = true;
public lineChartType: String = 'line';

public randomize(): void {
  // tslint:disable-next-line:prefer-const
  let _lineChartData: Array<any> = new Array(this.lineChartData.length);
  for (let i = 0; i < this.lineChartData.length; i++) {
    _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    for (let j = 0; j < this.lineChartData[i].data.length; j++) {
      _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    }
  }
  this.lineChartData = _lineChartData;
}

// events
public chartClicked(e: any): void {
  console.log(e);
}

public chartHovered(e: any): void {
  console.log(e);
}

  constructor(private crimeService: CrimesService,
    private route: ActivatedRoute,private router: Router) { }
    load(){
      if(this.bool!=1){
        this.bool=1;
      }else{
        this.bool=0;
      }
      if (this.selectedVille === 'Choisissez une ville' || this.selectedYear === 'Choisissez une Année' ) {
        alert('Veuillez choisir une ville et une année SVP !');
        } else {
         console.log(this.selectedVille);
         this.router.navigate(['InfosVille', this.selectedVille, this.selectedYear]);
         this.ville = this.selectedVille;
         if(this.ville ==='Boston'){
          this.lineChartData[0].label = 'Boston';
        }
        else{
          this.lineChartData[0].label = 'Las Vegas';
        }
         this.annee = parseInt(this.selectedYear);
         this.annee = parseInt(this.annee);
    this.crimeService.getDataJanv(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[0] = data;
      console.log(data);
      if(this.bool!=2){
        this.janv=2;
      }else{
        this.janv=1;
      }
    });
    this.crimeService.getDataFev(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[1]= data;
      console.log(data);
      if(this.fev!=2){
        this.fev=2;
      }else{
        this.fev=1;
      }
    });
    this.crimeService.getDataMars(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[2]= data;
      console.log(data);
      if(this.mars!=2){
        this.mars=2;
      }else{
        this.mars=1;
      }
    });
    this.crimeService.getDataAvl(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[3]=data;
      console.log(data);
      if(this.avrl!=2){
        this.avrl=2;
      }else{
        this.avrl=1;
      }
    });
    this.crimeService.getDataMai(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[4]= data;
      console.log(data);
      if(this.mai!=2){
        this.mai=2;
      }else{
        this.mai=1;
      }
    });
    this.crimeService.getDataJuin(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[5]= data;
      console.log(data);
      if(this.juin!=2){
        this.juin=2;
      }else{
        this.juin=1;
      }
    });
    this.crimeService.getDataJul(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[6]= data;
      console.log(data);
      if(this.juillet!=2){
        this.juillet=2;
      }else{
        this.juillet=1;
      }
    });
    this.crimeService.getDataAout(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[7]= data;
      console.log(data);
      if(this.aout!=2){
        this.aout=2;
      }else{
        this.aout=1;
      }
    });
    this.crimeService.getDataSept(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[8]= data;
      console.log(data);
      if(this.sept!=2){
        this.sept=2;
      }else{
        this.sept=1;
      }
    });
    this.crimeService.getDataOct(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[9]= data;
      console.log(data);
      if(this.oct!=2){
        this.oct=2;
      }else{
        this.oct=1;
      }
    });
    this.crimeService.getDataNov(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[10]= data;
      console.log(data);
      if(this.nov!=2){
        this.nov=2;
      }else{
        this.nov=1;
      }
    });
    this.crimeService.getDataDec(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[11] = data;
      console.log(data);
      if(this.dec!=2){
        this.dec=2;
      }else{
        this.dec=1;
      }
    });
        }
    }
  getData() {
    if(this.ville ==='Boston'){
      this.lineChartData[0].label = 'Boston';
    }
    else{
      this.lineChartData[0].label = 'Las Vegas';
    }
    this.annee = parseInt(this.annee);
    this.bool=0;
    this.crimeService.getDataJanv(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[0] = data;
      console.log(data);
      this.janv=1;
    });
    this.crimeService.getDataFev(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[1]= data;
      console.log(data);
      this.fev=1;
    });
    this.crimeService.getDataMars(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[2]= data;
      console.log(data);
      this.mars=1;
    });
    this.crimeService.getDataAvl(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[3]=data;
      console.log(data);
      this.avrl=1;
    });
    this.crimeService.getDataMai(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[4]= data;
      console.log(data);
      this.mai=1;
    });
    this.crimeService.getDataJuin(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[5]= data;
      console.log(data);
      this.juin=1;
    });
    this.crimeService.getDataJul(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[6]= data;
      console.log(data);
      this.juillet=1;
    });
    this.crimeService.getDataAout(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[7]= data;
      console.log(data);
      this.aout=1;
    });
    this.crimeService.getDataSept(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[8]= data;
      console.log(data);
      this.sept=1;
    });
    this.crimeService.getDataOct(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[9]= data;
      console.log(data);
      this.oct=1;
    });
    this.crimeService.getDataNov(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[10]= data;
      console.log(data);
      this.nov=1
    });
    this.crimeService.getDataDec(this.ville, this.annee).subscribe((data) => {
      this.lineChartData[0].data[11] = data;
      console.log(data);
      this.dec=1;
    });
  }

  ngOnInit() {

    this.ville = this.route.snapshot.params['ville'];
    this.annee = this.route.snapshot.params['annee'];
    if(this.ville ==='Boston'){
      const myfrugalmap = L.map('frugalmap').setView([42.3600825, -71.0588801], 10);
      const myIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });
      L.marker([42.3600825,-71.0588801 ], {icon: myIcon}).bindPopup(this.text).addTo(myfrugalmap).openPopup();

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Frugal Map'
      }).addTo(myfrugalmap);
    } else {
      const myfrugalmap = L.map('frugalmap').setView([36.169941, -115.139830], 10);
      const myIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });
      L.marker([36.169941, -115.139830], {icon: myIcon}).bindPopup(this.text).addTo(myfrugalmap).openPopup();

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Frugal Map'
      }).addTo(myfrugalmap);
    }
    // tslint:disable-next-line:radix
    this.getData();
    console.log(this.ville + ' ' + this.annee);
    console.log(typeof(this.annee));
      // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.

  this.crimeService.getCrimes().subscribe(
    (data) => {
      this.tre = data;
    }
  );

  this.LineChart = new Chart('lineChart', {
    type: 'line',
  data: {
   labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
   datasets: [{
       label: 'Number of Items Sold in Months',
       data: [9, 7 , 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
       fill: false,
       lineTension: 0.2,
       borderColor: 'red' ,
       borderWidth: 1
   }]
  },
  options: {
   title: {
       text: 'Line Chart',
       display: true
   },
   scales: {
       yAxes: [{
           ticks: {
               beginAtZero: true
           }
       }]
   }
  }
  });
}
}

