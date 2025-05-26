import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

declare var AOS: any;

@Component({
  selector: 'app-dashboard-ing',
  templateUrl: './dashboard-ing.component.html',
  styleUrls: ['./dashboard-ing.component.css']
})
export class DashboardIngComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('popupIntroduction') popupIntroduction!: ElementRef;
  @ViewChild('popupArchitecture') popupArchitecture!: ElementRef;

  constructor() {}

  ngOnInit() {
    // Initialisation des animations
    setTimeout(() => {
      this.initAnimations();
    }, 100);
  }

  ngAfterViewInit() {
    // Initialisation de la bibliothèque AOS pour les animations au défilement
    try {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: false,
          mirror: false
        });
      }
    } catch (error) {
      console.warn('AOS library not loaded', error);
    }
    
    // Ajouter des effets d'animation manuels si AOS n'est pas disponible
    this.addManualAnimations();
  }

  toggleSidebar(action: string): void {
    if (action === 'open') {
      this.sidebar.nativeElement.classList.add('active');
    } else if (action === 'close') {
      this.sidebar.nativeElement.classList.remove('active');
    }
  }

  togglePopup(popupId: string): void {
    console.log(`Toggling popup: ${popupId}`);
    let popup: ElementRef | null = null;
  
    if (popupId === 'introduction') {
      popup = this.popupIntroduction;
    } else if (popupId === 'architecture') {
      popup = this.popupArchitecture;
    }
  
    if (popup) {
      const popupElement = popup.nativeElement;
      console.log(popupElement);
      popupElement.classList.toggle('active');
    }
  }

  // Initialisation des animations personnalisées
  initAnimations(): void {
    // Animation de l'introduction
    const introCard = document.querySelector('.introduction-card');
    if (introCard) {
      introCard.classList.add('animated');
    }

    // Animation séquentielle des cartes
    this.animateCardsSequentially();
  }

  // Animation séquentielle des cartes
  animateCardsSequentially(): void {
    const leftCards = document.querySelectorAll('.left-cards .card-container');
    const rightCards = document.querySelectorAll('.right-cards .card-container');
    const centerImage = document.querySelector('.center-image');

    // Animation des cartes de gauche
    leftCards.forEach((card, index) => {
      setTimeout(() => {
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.transform = 'translateX(0)';
      }, 300 + (index * 200));
    });

    // Animation des cartes de droite
    rightCards.forEach((card, index) => {
      setTimeout(() => {
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.transform = 'translateX(0)';
      }, 400 + (index * 200));
    });

    // Animation de l'image centrale
    if (centerImage) {
      setTimeout(() => {
        (centerImage as HTMLElement).style.opacity = '1';
        (centerImage as HTMLElement).style.transform = 'scale(1)';
      }, 800);
    }
  }

  // Ajout d'animations manuelles si AOS n'est pas disponible
  addManualAnimations(): void {
    if (typeof AOS === 'undefined') {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        (card as HTMLElement).style.opacity = '0';
        (card as HTMLElement).style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          (card as HTMLElement).style.transition = 'all 0.5s ease';
          (card as HTMLElement).style.opacity = '1';
          (card as HTMLElement).style.transform = 'translateY(0)';
        }, 300 + (index * 150));
      });
    }
  }

  // Méthode pour animer les icônes au survol
  animateIcon(event: MouseEvent): void {
    const icon = event.target as HTMLElement;
    icon.style.animation = 'none';
    setTimeout(() => {
      icon.style.animation = 'iconPulse 1s';
    }, 10);
  }
}
