import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'List Persons';
  persons: Person[] = [
    new Person('Juan', 'Perez'),
    new Person('Laura', 'Juarez'),
    new Person('Carla', 'Lara'),
  ];

  personAdded(person: Person) {
    this.persons.push(person);
  }
}
