import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-contact-a',
  imports: [FooterComponent],
  templateUrl: './contact-a.component.html',
  styleUrl: './contact-a.component.css'
})
export class ContactAComponent {
 ngOnInit(): void {
  emailjs.init('jTthspFDJ4NpkErvK');
}
 sendMail(event: Event): void {
  event.preventDefault(); // Stop the form from reloading the page

  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const messageInput = document.getElementById("message") as HTMLTextAreaElement;

  const params = {
    title: "Bin Yousuf Solution Provider",
    name: nameInput.value,
    time: new Date().toLocaleString(),
    email: emailInput.value,// static value
    message: messageInput.value
  };

  emailjs.send("service_09s4iu9", "template_i61qvsl", params)
    .then(() => {
      alert("Your message has been sent successfully! 😊");
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

    })
    .catch((error: any) => {
      alert("Oops! Something went wrong. Please try again later.");
      console.error("EmailJS Error:", error);
    });
}
gmail="ahsanakhtar802@gmail.com"
}
