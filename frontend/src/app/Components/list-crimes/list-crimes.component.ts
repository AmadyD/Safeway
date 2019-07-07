import { Component, OnInit } from '@angular/core';
import {CrimesService} from '../../crimes.service';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { promise } from 'protractor';
import { callbackify, error } from 'util';
import { Observable, from } from 'rxjs';
import { resolve } from 'q';
import { async } from '@angular/core/testing';
import {Crimes} from '../../Crimes';

@Component({
  selector: 'app-list-crimes',
  templateUrl: './list-crimes.component.html',
  styleUrls: ['./list-crimes.component.css']
})
export class ListCrimesComponent implements OnInit {
  dataJson = {};
  boston2016 = 0;
  boston2017 = 0;
  boston2018 = 0;
  LV2016 = 0;
  LV2017 = 0;
  LV2018 = 0;
  cambriolages = 0;
  nbBoston2016 = {};
  nbBoston2017 = {};
  nbBoston2018 = {};
  nbLV2016 = {};
  nbLV2017 = {};
  nbLV2018 = {};
  crimes: Crimes[];
  nbCrimes ;
  i;
  loaderLV2018;
  loaderLV2017;
  loaderLV2016;
  loaderBos2018;
  loaderBos2017;
  loaderBos2016;
  loaderBos;
  loaderLasVegas;
 t = {};

 public doughnutChartLabels = ['Boston', 'Las Vegas'];
 public doughnutChartData = [, ];
 public doughnutChartType = 'doughnut';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2016', '2017', '2018'];
  public barChartType = 'bar';
  public barChartLegend = true;

  crime: string;
  dead = this.toPromise(Promise);
// tslint:disable-next-line:radix
num = parseInt(this.crime);


  public barChartData = [
    {data: [, , ], label: 'Boston'},
    {data: [, , ], label: 'Las Vegas'}
  ];




  constructor( private crimeService: CrimesService) {
  }

  getData() {
    let b = '';
    this.crimeService.getCrimesLasVegas2018().subscribe(
     (data) => {
     b = data;
     console.log(b);
     localStorage.setItem('nombre crimes ', b);
  });
  console.log(b);
}

 getNumero() {
   // LV 2018
   this.crimeService.getCrimesLasVegas2018().subscribe(
      (data) => {
       this.i =  data;
       // tslint:disable-next-line:radix
       this.barChartData[1].data[2] = parseInt(data);
       this.loaderLV2018 = 1;
      }
    );
// LV 2017
     this.crimeService.getCrimesLasVegas2017().subscribe((data) => {
      // tslint:disable-next-line:radix
      this.barChartData[1].data[1] = parseInt(data);
      this.loaderLV2017 = 1;
    });
// LV 2016
this.crimeService.getCrimesLasVegas2016().subscribe((data) => {
  // tslint:disable-next-line:radix
  this.barChartData[1].data[0] = parseInt(data);
  this.loaderLV2016 = 1;
});
// Boston 2018
this.crimeService.getCrimesBoston2018().subscribe((data) => {
 // tslint:disable-next-line:radix
 this.barChartData[0].data[2] = parseInt(data);
 this.loaderBos2018 = 1;
});
// Boston 2017
this.crimeService.getCrimesBoston2017().subscribe((data) => {
  // tslint:disable-next-line:radix
  this.barChartData[0].data[1] = parseInt(data);
  this.loaderBos2017 = 1;
 });
 // Boston 2016
 this.crimeService.getCrimesBoston2016().subscribe((data) => {
  // tslint:disable-next-line:radix
  this.barChartData[0].data[0] = parseInt(data);
  this.loaderBos2016 = 1;
 });
 // Total Boston
 this.crimeService.getCrimesBoston().subscribe((data) => {
  // tslint:disable-next-line:radix
  this.doughnutChartData[0] = parseInt(data);
  this.loaderBos = 1;
 });
 // Total Las Vegas
 this.crimeService.getCrimesLasVegas().subscribe((data) => {
  // tslint:disable-next-line:radix
  this.doughnutChartData[1] = parseInt(data);
  this.loaderLasVegas = 1;
 });
}



async toPromise(ctor) {
  // tslint:disable-next-line:no-shadowed-variable
  return new ctor((resolve, reject) => {
    let value;
    this.crimeService.getCrimesLasVegas2018().subscribe(
      v => value = v,
      e => reject(e),
      () => resolve(value)
  );
});
}
  ngOnInit() {
  this.getNumero();
   }

}
