import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

interface Vehicle {
  id: string;
  title: string;
  src: string;
  alt: string;
  coverages: string[];
}

interface Testimonial {
  text: string;
  author: string;
}

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly vehicles: Vehicle[] = [
    {
      id: 'moto',
      title: 'Sua moto mais segura e protegida',
      src: '/assets/original/moto.png',
      alt: 'Moto protegida pela Guard',
      coverages: ['Roubo e Furto', 'Colisão e Incêndio', 'Assistência 24 horas'],
    },
    {
      id: 'carro',
      title: 'Seu carro mais seguro e protegido',
      src: '/assets/original/carro.png',
      alt: 'Carro protegido pela Guard',
      coverages: ['Roubo e Furto', 'Colisão e Incêndio', 'Fenômenos da Natureza', 'Assistência 24 horas'],
    },
    {
      id: 'van',
      title: 'Sua van mais segura e protegida',
      src: '/assets/original/van.png',
      alt: 'Van protegida pela Guard',
      coverages: ['Roubo e Furto', 'Colisão e Incêndio', 'Fenômenos da Natureza', 'Assistência 24 horas'],
    },
  ];

  readonly testimonials: Testimonial[] = [
    { text: 'Precisei utilizar por conta de um roubo, resolveram meu problema na hora!', author: 'Millenium Peças' },
    { text: 'Excelente atendimento, muito cuidado e atenção com os clientes. Nota 10.', author: 'Celio Oliveira' },
    { text: 'Atendimento diferenciado, muito solícitos e cumprem o acordado.', author: 'Thiago Moises' },
    { text: 'Sou associada há anos e sempre fui muito bem atendida.', author: 'Sara Loren' },
    { text: 'São éticos, profissionais e estão sempre prontos para ajudar.', author: 'Joyce Ferreira' },
  ];

  selectedVehicle = this.vehicles[0];
  testimonialIndex = 0;

  get testimonial(): Testimonial {
    return this.testimonials[this.testimonialIndex];
  }

  selectVehicle(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }

  prevTestimonial(): void {
    this.testimonialIndex = (this.testimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextTestimonial(): void {
    this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
  }

  selectTestimonial(index: number): void {
    this.testimonialIndex = index;
  }
}