import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent  {
	etudiants:Array<any>;
  constructor() {
  this.etudiants=[{nom:'elabadli',
 				 moyenne:'10',
  					admis:true
  					},
  					{nom:'demo',
  					moyenne:'8',
  					admis:false
  					},
  					{nom:'ait',
  					moyenne:'12',
  					admis:true
  					},
  					{
  					nom:'manon',
  					moyenne:'5',
  					admis:false
  					}
  					];
   }

  ngOnInit() {
  }

}

