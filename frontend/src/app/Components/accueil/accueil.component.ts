import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  selectedVille = 'Choisissez une ville';
  selectedYear = 'Choisissez une Année';
 getOption() {
   if (this.selectedVille === 'Choisissez une ville' || this.selectedYear === 'Choisissez une Année' ) {
   alert('Veuillez choisir une ville et une année SVP !');
   } else {
    console.log(this.selectedVille);
    this.router.navigate(['InfosVille', this.selectedVille, this.selectedYear]);
   }
 }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
