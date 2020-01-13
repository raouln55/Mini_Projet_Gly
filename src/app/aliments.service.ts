import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Aliment } from './aliment';
import { Portion } from './portion';

@Injectable({
  providedIn: 'root'
})
export class AlimentsService {

  aliments : Aliment[] = [];
  spliceAliment;
  //alimentPortionList:Portion[] = [];
  //portionData:Portion[] = [];

  constructor(private http: HttpClient,) { }

  addToAlimentList(aliment){
    this.aliments.push(aliment);
    return of(this.aliments.slice());
  }

  deleteFromAlimentlist(alimentId){
    console.warn('L aliment a été supprimé de la liste', this.aliments[alimentId]);
    this.aliments.splice(alimentId, 1);
    return this.getAlimentList();
  }

  getAlimentList() {
    if (this.aliments.length > 0) {
      return of(this.aliments.slice());
    } else { 
      return this.http.get<Aliment[]>('/assets/aliments.json').pipe(
        tap(aliments => this.aliments = aliments)
      );
    }
  }
}
