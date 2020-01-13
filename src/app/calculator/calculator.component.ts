import { Component, OnInit } from '@angular/core';
import { AlimentsService } from '../aliments.service';
import { FormBuilder } from '@angular/forms';
import { Portion } from '../portion';
import { Aliment } from '../aliment';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  alimentList : Observable<any[]>  = this.alimentsService.getAlimentList();
  aliment;
  addPortionForm;
  alimentPortionlist : Portion [] = this.dataService.getAlimentPortionList();
  portionAliment;
  glyTot : number = this.dataService.getGlyTot();


  constructor(
    private alimentsService: AlimentsService,
    private dataService : DataService,
    private formBuilder: FormBuilder,) { 
      this.addPortionForm = this.formBuilder.group({
        aliment: '',
        portion: '',
      })
    }

    onSubmit(portionData) {
      console.warn('La portion de votre aliment a bien été ajoutée à la liste', portionData);
      this.portionAliment = this.dataService.calcCarbGandGly(portionData);
      this.alimentPortionlist.push(this.portionAliment);
      this.glyTot = this.dataService.calcGlyTot(this.portionAliment);
      this.addPortionForm.reset();
    }

    deleteAliment(portionId) {
      this.glyTot = this.dataService.deleteFromAlimentList(portionId);
    }
 
    ngOnInit() {
    }

}
