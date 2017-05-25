import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	animals: Animal[] = [];
  constructor(private animalService: AnimalService) { }
  ngOnInit(): void {
    this.animalService.getAnimals()
      .then(animals => this.animals = [animals[0], animals[4], animals[5], animals[10]]);
  }

}
