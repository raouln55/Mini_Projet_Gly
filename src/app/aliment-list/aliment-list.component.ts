import { Component, OnInit } from '@angular/core';
import { AlimentsService } from '../aliments.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.css']
})
export class AlimentListComponent implements OnInit {
  alimentList: Observable<any[]> = this.alimentsServive.getAlimentList();
  addAlimentForm;


  constructor(
    private alimentsServive: AlimentsService,
    private formBuilder: FormBuilder,
    ) { 
      this.addAlimentForm = this.formBuilder.group({
        name: '',
        ig: '',
        carbs:'',
      })
    }

  onSubmit(alimentData) {
    this.alimentList = this.alimentsServive.addToAlimentList(alimentData);
    console.warn('Votre nouvel aliment a été ajouté à la liste des aliments', alimentData);
    this.addAlimentForm.reset();
  }

  deleteAliment(alimentId) {
    this.alimentList = this.alimentsServive.deleteFromAlimentlist(alimentId);
  }

  ngOnInit() {
  }

}


