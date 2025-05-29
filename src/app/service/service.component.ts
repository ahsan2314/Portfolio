import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']  // Corrected here
})
export class ServiceComponent implements AfterViewInit {

  @ViewChildren('featureBox') featureBoxes!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            (entry.target as HTMLElement).classList.add('active');
          }, index * 300);
          // observer.unobserve(entry.target); // Optional
        }
      });
    }, { threshold: 0.1 });

    this.featureBoxes.forEach(box => observer.observe(box.nativeElement));
  }
}
