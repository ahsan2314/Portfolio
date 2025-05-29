import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  ngAfterViewInit(): void {
    const bars: NodeListOf<HTMLElement> = document.querySelectorAll('.bar');
    const skillsSection = document.querySelector('.skills-section');

    if (!skillsSection) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bars.forEach((bar: HTMLElement) => {
            const percent = bar.getAttribute('data-percent');
            if (percent) {
              bar.style.width = percent;
            }
          });
          observer.unobserve(entry.target); // animate only once
        }
      });
    }, {
      threshold: 0.5, // 50% visible
    });

    observer.observe(skillsSection);
  }
}
