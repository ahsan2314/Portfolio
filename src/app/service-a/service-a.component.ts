import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-service',
  imports:[FooterComponent],
  templateUrl: './service-a.component.html',
  styleUrls: ['./service-a.component.css']  // Corrected here
})
export class ServiceAComponent implements AfterViewInit {

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
