import { Injectable } from '@angular/core';
import { ANIMALS } from './mock-data';
import { Animal } from './animal';

@Injectable()
export class AnimalService {
	getAnimals(): Promise<Animal[]> {
		return Promise.resolve(ANIMALS);
	} 
	getAnimal(id: number): Promise<Animal> {
	  return this.getAnimals().then(animals => animals.find(animal => animal.id === id));
	}
}