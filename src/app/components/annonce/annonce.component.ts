import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { Marque } from 'src/app/models/marque';
import { Modele } from 'src/app/models/modele';
import { VoituresService } from 'src/app/services/voitures.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  listeVoitures: Voiture[];

  constructor(private voitureService: VoituresService) { }

  ngOnInit(): void {
    this.voitureService.getAllVoitures().subscribe((data: Voiture[]) => {
      this.listeVoitures = data;
    })
  }

  deleteVoiture(id: number) {
    const nomvoiture = this.listeVoitures.find(voiture => voiture.id === id).modele
    this.voitureService.deleteVoiture(id).subscribe(then => {
      this.voitureService.getAllVoitures().subscribe((data: Voiture []) => {
        this.listeVoitures = data;
      })
    });

    
  }

}
