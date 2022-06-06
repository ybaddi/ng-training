import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  nom="";
  result="";
  constructor() { }

  ngOnInit(): void {
  }

  direBonjour(){
    console.log("Bonjour");
    this.result=this.nom;
  }

}
