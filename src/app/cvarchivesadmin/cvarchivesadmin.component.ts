import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-cvarchivesadmin',
  templateUrl: './cvarchivesadmin.component.html',
  styleUrls:[ './cvarchivesadmin.component.css']
})
export class CvarchivesadminComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebar') sidebar!: ElementRef; // Référence pour la sidebar
  carousel: any;

  constructor() {}

  ngOnInit() {
    // Animation initiale après le chargement de la page
    setTimeout(() => {
      this.animateElements();
    }, 300);
  }

  ngAfterViewInit() {
    // Initialiser le carrousel avec Bootstrap
    try {
      const carouselElement = document.getElementById('carouselExampleIndicators');
      if (carouselElement) {
        this.carousel = new bootstrap.Carousel(carouselElement, {
          interval: 5000,
          wrap: true,
          touch: true
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du carrousel:', error);
    }
  }

  toggleSidebar(action: string): void {
    if (action === 'open') {
      this.sidebar.nativeElement.classList.add('active');
    } else if (action === 'close') {
      this.sidebar.nativeElement.classList.remove('active');
    }
  }
  
  // Méthode pour animer les éléments de la page
  animateElements(): void {
    // Animation du titre
    const title = document.querySelector('.left-title');
    if (title) {
      (title as HTMLElement).style.opacity = '0';
      (title as HTMLElement).style.transform = 'translateX(-20px)';
      
      setTimeout(() => {
        (title as HTMLElement).style.transition = 'all 0.5s ease';
        (title as HTMLElement).style.opacity = '1';
        (title as HTMLElement).style.transform = 'translateX(0)';
      }, 300);
    }
    
    // Animation du carrousel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      (carousel as HTMLElement).style.opacity = '0';
      (carousel as HTMLElement).style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        (carousel as HTMLElement).style.transition = 'all 0.8s ease';
        (carousel as HTMLElement).style.opacity = '1';
        (carousel as HTMLElement).style.transform = 'translateY(0)';
      }, 500);
    }
  }
  
  // Méthode pour passer à la diapositive suivante
  nextSlide(): void {
    if (this.carousel) {
      this.carousel.next();
    }
  }
  
  // Méthode pour passer à la diapositive précédente
  prevSlide(): void {
    if (this.carousel) {
      this.carousel.prev();
    }
  }
  
  // Méthode pour aller à une diapositive spécifique
  goToSlide(slideIndex: number): void {
    if (this.carousel) {
      this.carousel.to(slideIndex);
    }
  }
  
  // Méthode pour mettre en pause le carrousel
  pauseCarousel(): void {
    if (this.carousel) {
      this.carousel.pause();
    }
  }
  
  // Méthode pour reprendre le défilement du carrousel
  cycleCarousel(): void {
    if (this.carousel) {
      this.carousel.cycle();
    }
  }
}
