import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-project-a',
  imports: [FooterComponent],
  templateUrl: './project-a.component.html',
  styleUrl: './project-a.component.css'
})
export class ProjectAComponent {
  // app.ts

  ngAfterViewInit(): void {
    const revealCards: NodeListOf<HTMLElement> = document.querySelectorAll('.reveal');

    const observer: IntersectionObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('slide-in');
          obs.unobserve(target);
        }
      });
    }, {
      threshold: 0.3,
    });

    revealCards.forEach(card => {
      observer.observe(card);
    });
  }

}
