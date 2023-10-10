import { Component } from '@angular/core';

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
  changeName() {
    this.name = 'Ana';
  }
  onScroll(event: Event) {
    const Evento = event.target as HTMLElement;
    console.log(Evento.scrollTop);
  }
}
