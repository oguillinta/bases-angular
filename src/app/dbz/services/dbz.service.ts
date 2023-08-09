import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { name: 'Goku', power: 9500 },
    { name: 'Krilin', power: 1000 },
    { name: 'Vegeta', power: 8000 },
  ];
  constructor() {}

  addCharacter(character: Character): void {
    const newCharacter = {id: uuid(), ...character};
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
