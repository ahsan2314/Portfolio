import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  onSubmit(event: Event): void {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const elements = target.elements as typeof target.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      message: HTMLTextAreaElement;
    };

    elements.name.value = '';
    elements.email.value = '';
    elements.message.value = '';
  }

}
