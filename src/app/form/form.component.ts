import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() personCreated = new EventEmitter<Person>();
  // txtName: string = '';
  // txtLastname: string = '';

  // addPerson(): void {
  //   let person: Person = new Person(this.txtName, this.txtLastname);
  //   this.personCreated.emit(person);
  // }
  @ViewChild('txtNameRef') name: ElementRef;
  @ViewChild('txtLastnameRef') lastname: ElementRef;

  addPerson() {
    let person = new Person(
      this.name.nativeElement.value,
      this.lastname.nativeElement.value
    );
    this.personCreated.emit(person);
  }
}
