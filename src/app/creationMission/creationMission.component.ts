import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-creationMission',
  templateUrl: './creationMission.component.html',
  styleUrls: ['./creationMission.component.css']
})
export class creationMissionComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef; // Référence pour la sidebar
  @ViewChild('popup') popup!: ElementRef; // Référence pour la popup

  ngOnInit() {
    // Animation d'entrée pour les cartes de solution
    setTimeout(() => {
      this.animateSolutionCards();
    }, 500);
  }

  toggleSidebar(action: string): void {
    if (action === 'open') {
      this.sidebar.nativeElement.classList.add('active');
    } else if (action === 'close') {
      this.sidebar.nativeElement.classList.remove('active');
    }
  }
  
  togglePopup(): void {
    if (this.popup.nativeElement.classList.contains('active')) {
      this.popup.nativeElement.classList.remove('active');
    } else {
      this.popup.nativeElement.classList.add('active');
      this.launchConfetti(); // Lance les confettis à l'ouverture
    }
  }

  launchConfetti(): void {
    const duration = 5 * 1000; // Durée totale (5 secondes)
    const end = Date.now() + duration;

    const colors = ['#bb0000', '#ffffff', '#775b18', '#ffbb00']; // Couleurs des confettis

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        },
        colors: colors
      });
    }, 250); // Intervalle entre les vagues (250 ms)
  }

  // Nouvelle méthode pour animer les cartes de solution
  animateSolutionCards(): void {
    // Sélectionner toutes les cartes de solution
    const cards = document.querySelectorAll('.solution-card');
    
    // Animer chaque carte avec un délai progressif
    cards.forEach((card, index) => {
      setTimeout(() => {
        (card as HTMLElement).style.opacity = '0';
        (card as HTMLElement).style.transform = 'translateX(-20px)';
        
        // Forcer un reflow pour que la transition fonctionne
        void (card as HTMLElement).offsetWidth;
        
        // Appliquer l'animation
        (card as HTMLElement).style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.transform = 'translateX(0)';
      }, 200 * index); // Délai progressif pour chaque carte
    });
    
    // Animer le conteneur du logo
    const logoContainer = document.querySelector('.left-image-container');
    if (logoContainer) {
      (logoContainer as HTMLElement).style.opacity = '0';
      
      setTimeout(() => {
        (logoContainer as HTMLElement).style.transition = 'opacity 0.8s ease';
        (logoContainer as HTMLElement).style.opacity = '1';
      }, 600);
    }
  }
}
