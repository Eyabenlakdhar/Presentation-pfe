import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reclamationadmin',
  templateUrl: './reclamationadmin.component.html',
  styleUrls: ['./reclamationadmin.component.css']
})
export class ReclamationadminComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('popup') popup!: ElementRef;
  
  particles: HTMLElement[] = [];
  
  ngOnInit() {
    // Initialisation des animations
    setTimeout(() => {
      this.createParticles();
    }, 500);
  }
  
  ngAfterViewInit() {
    // Animation des conteneurs au chargement
    this.animateContainers();
  }

  toggleSidebar(action: string): void {
    if (action === 'open') {
      this.sidebar.nativeElement.classList.add('active');
    } else if (action === 'close') {
      this.sidebar.nativeElement.classList.remove('active');
    }
  }
   
  togglePopup(): void {
    if (this.popup && this.popup.nativeElement) {
      if (this.popup.nativeElement.classList.contains('active')) {
        this.popup.nativeElement.classList.remove('active');
      } else {
        this.popup.nativeElement.classList.add('active');
      }
    }
  }
  
  // Création de particules dorées flottantes
  createParticles(): void {
    const body = document.querySelector('body');
    if (!body) return;
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Position aléatoire
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      
      // Taille aléatoire
      const size = Math.random() * 6 + 2;
      
      // Style
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Délai d'animation aléatoire
      const delay = Math.random() * 10;
      particle.style.animationDelay = `${delay}s`;
      
      // Durée d'animation aléatoire
      const duration = Math.random() * 10 + 10;
      particle.style.animationDuration = `${duration}s`;
      
      body.appendChild(particle);
      this.particles.push(particle);
    }
  }
  
  // Animation des conteneurs
  animateContainers(): void {
    const containers = document.querySelectorAll('.container-content');
    containers.forEach((container, index) => {
      setTimeout(() => {
        (container as HTMLElement).style.opacity = '1';
        (container as HTMLElement).style.transform = 'translateY(0)';
      }, 300 + (index * 200));
    });
  }
  
  // Nettoyage des particules lors de la destruction du composant
  ngOnDestroy(): void {
    this.particles.forEach(particle => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    });
  }
}
