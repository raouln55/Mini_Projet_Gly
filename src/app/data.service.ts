import { Injectable } from '@angular/core';
import { Aliment } from './aliment';
import { Portion } from './portion';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

alimentPortions : Portion [];
glyTot:number = 0;
alimentPortionlist : Portion [] = [];

  constructor() { }



deleteFromAlimentList(portionId) {
  this.glyTot = this.glyTot - this.alimentPortionlist[portionId].gly;
  this.alimentPortionlist.splice(portionId, 1);
  console.warn('La portion d aliment a été supprimé de la liste');
  return this.glyTot;
}

calcCarbGandGly(portionData){
  
  const ig = portionData.aliment.ig;
  const carbs = portionData.aliment.carbs;
  const name = portionData.aliment.name;
  const portion = portionData.portion;
  const carbG = carbs*portion/100;
  const gly = ig*carbG/100;

  return {name: name, ig : ig, carbG : carbG, gly: gly};
}

addToAlimentPortionList(alimentPortion){
  this.alimentPortions.push(alimentPortion);
}

getAlimentPortionList() {
  return this.alimentPortionlist;
}

getGlyTot () {
  return this.glyTot;
}

calcGlyTot(portionAliment){
  this.glyTot = this.glyTot + portionAliment.gly;
  return this.glyTot;
}

}
