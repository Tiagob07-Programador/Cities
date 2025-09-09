import { Component } from '@angular/core';
import { City } from '../models/city';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cities-component',
  standalone: false,
  templateUrl: './cities-component.html',
  styleUrl: './cities-component.css'
})
export class CitiesComponent {
  cities: City[] = [];
  formGroupCity: FormGroup;

  states: string[] = [
    'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA',
    'MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN',
    'RS','RO','RR','SC','SP','SE','TO'
  ];

  constructor(private formBuilder:FormBuilder) {
    this.formGroupCity = formBuilder.group({
      id: [''],
      city: [''],
      population: [''],
      country: [''],
      state: ['']
    });
  }
  save() {
    this.cities.push(this.formGroupCity.value);
    this.formGroupCity.reset();
  }
}
