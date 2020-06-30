import { Marque } from './marque';
import { Modele } from './modele';

export class Voiture {
   id: number;
   marque: string;
   modele: string;
   carburant: string;
   annee: number;
   nbKM: number;
   prix: number;
   photo: string;
   description: string;

  constructor(id: number = null, marque: string = null, modele: string = null, carburant: string = null, annee: number = null, nbKM: number = null, prix: number = null, photo: string = null, description: string = null) {
    this.id= id;
    this.marque = marque;
    this.modele = modele;
    this.carburant = carburant;
    this.annee = annee;
    this.nbKM = nbKM;
    this.prix = prix;
    this.photo = photo;
    this.description = description;
  }

}
