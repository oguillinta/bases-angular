import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = [
    'Ironman',
    'Hulk',
    'She Hulk',
    'Captain America',
    'Thor',
  ];
  public deletedHero?: string = "";

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    console.log(this.deletedHero);
    
  }
}
