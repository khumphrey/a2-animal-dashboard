import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent implements OnInit {
  selectedAnimal: Animal;
  animals: Animal[];

	constructor (private animalService: AnimalService, private router: Router) { };
	
	ngOnInit () : void {
		this.getAnimals();
	}
	getAnimals () : void {
		this.animalService.getAnimals().then(animals => this.animals = animals);
	}
  onSelect(animal: Animal): void {
  	this.selectedAnimal = animal;
	}
	goToDetail():void{
		  this.router.navigate(['/detail', this.selectedAnimal.id]);
	}
}

