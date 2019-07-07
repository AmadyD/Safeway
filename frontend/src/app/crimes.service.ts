import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrimesService {

  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }


  getCrimes() {
    return this.http.get(this.uri + '/crimes');
  }
  getCrimesBoston2016() {
    return this.http.get(this.uri + '/crimesBoston2016', { responseType : 'text'});
  }
  getCrimesBoston2017() {
    return this.http.get(this.uri + '/crimesBoston2017', { responseType : 'text'});
  }
  getCrimesBoston2018() {
    return this.http.get(this.uri + '/crimesBoston2018', { responseType : 'text'});
  }
  getCrimesLasVegas2016() {
    return this.http.get(this.uri + '/crimesLasVegas2016', { responseType : 'text'});
  }
  getCrimesLasVegas2017() {
    return this.http.get(this.uri + '/crimesLasVegas2017', { responseType : 'text'}) ;
  }
  getCrimesLasVegas2018() {
    return this.http.get(this.uri + '/crimesLasVegas2018', { responseType : 'text'});
  }

  getCrimesBoston() {
    return this.http.get(this.uri + '/crimesBoston', { responseType : 'text'});
  }
  getCrimesLasVegas() {
    return this.http.get(this.uri + '/crimesLasVegas', { responseType : 'text'});
  }
  getDataJanv(ville, annee) {
    return this.http.get(this.uri + '/janvier/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataFev(ville, annee) {
    return this.http.get(this.uri + '/fevrier/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataMars(ville, annee) {
    return this.http.get(this.uri + '/mars/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataAvl(ville, annee) {
    return this.http.get(this.uri + '/avril/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataMai(ville, annee) {
    return this.http.get(this.uri + '/mai/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataJuin(ville, annee) {
    return this.http.get(this.uri + '/juin/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataJul(ville, annee) {
    return this.http.get(this.uri + '/juillet/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataAout(ville, annee) {
    return this.http.get(this.uri + '/aout/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataSept(ville, annee) {
    return this.http.get(this.uri + '/septembre/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataOct(ville, annee) {
    return this.http.get(this.uri + '/octobre/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataNov(ville, annee) {
    return this.http.get(this.uri + '/novembre/' + ville + '/' + annee, { responseType : 'text'});
  }
  getDataDec(ville, annee) {
    return this.http.get(this.uri + '/decembre/' + ville + '/' + annee, { responseType : 'text'});
  }
  getCrimeTotal(ville, annee) {
    return this.http.get(this.uri + '/crimeTotal/' + ville + '/' + annee, { responseType : 'text'});
  }

}
