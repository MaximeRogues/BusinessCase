import { Marque } from './marque';

export class Modele {
    id: number;
    nom: string;
    marque: Marque

	constructor(id: number = null, nom: string = null, marque: Marque = null) {
		this.id = id;
        this.nom = nom;
        this.marque = marque;
	}
    

}
