import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { AnimalService } from '../animal.service';

import { Animal } from '../animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
	animal: Animal;
	constructor( private animalService: AnimalService, private route: ActivatedRoute, private location: Location) {}
	ngOnInit ():void {
		this.route.params
    .switchMap((params: Params) => this.animalService.getAnimal(+params['id']))
    .subscribe(animal => this.animal = animal);
	}
	goBack(): void {
  	this.location.back();
	}
}
