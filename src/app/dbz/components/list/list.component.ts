import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDeletedCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characters: Character[] = [
    { name: 'Bulma', power: 0 },
    { name: 'Yamcha', power: 100 },
  ];

  onDeleteCharacter(id?: string) {
    if (!id) return;
    console.log("emitting id to delete from list component", id);
    this.onDeletedCharacter.emit(id);
  }
}
