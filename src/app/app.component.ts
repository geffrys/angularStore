import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title = 'MyStore';
  private name = 'Max';
  private age = 30;
  private isDisabled = true;
  private names: string[] = [];
  private products: Product[] = [
    {
      name: 'Camisa',
      price: 15.99,
      image: 'assets/images/camisa.jpg'
    },
    {
      name: 'Pantalon',
      price: 19.99,
      image: 'assets/images/pantalon.jpg'
    }
  ]
  get getNames() {
    return this.names;
  }
  get getTitle() {
    return this.title;
  }
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getIsDisabled() {
    return this.isDisabled;
  }
  set setName(name: string) {
    this.name = name;
  }
  set setAge(age: number) {
    this.age = age;
  }
  changeName() {
    this.name = 'Ana';
  }
  onScroll(event: Event) {
    const Evento = event.target as HTMLElement;
    console.log(Evento.scrollTop);
  }
  addName() {
    this.names.push(this.name);
    this.name = '';
  }
  removeName(index: number) {
    this.names.splice(index, 1);
  }
}
