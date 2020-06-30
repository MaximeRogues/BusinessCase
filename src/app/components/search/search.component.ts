import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/models/marque';
import { Modele } from 'src/app/models/modele';
import { Voiture } from 'src/app/models/voiture';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
