import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';



@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css'] ,
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('{{delay}}ms 50ms ease-out', 
          keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class CandidatureComponent {
  @ViewChild('sidebar') sidebar!: ElementRef; // Référence pour la sidebar
  @ViewChild('popup') popup!: ElementRef; // Référence pour la popup
  
  // Liste des cartes que nous allons afficher avec l'animation
  cards = [
    { title: '📍Contexte :', content: 'Le marché de l’emploi évolue rapidement, nécessitant des outils numériques pour connecter efficacement recruteurs et candidats. Une plateforme de recrutement doit offrir simplicité, interactivité et rapidité pour répondre aux nouvelles attentes.' },
    { title: '📍Impact :', content: 'Une plateforme bien conçue permet de réduire le temps et les efforts pour trouver le bon profil, tout en améliorant la transparence et le suivi des candidatures. Elle offre une expérience utilisateur engageante, renforçant la confiance et l’engagement des utilisateurs.' },
    { title: '📍Défi :', content: 'Créer une plateforme qui simplifie la gestion des candidatures, propose des outils intuitifs pour les recruteurs et intègre des fonctionnalités interactives pour l’amélioration continue. Elle doit assurer une mise en relation rapide, précise et transparente entre recruteurs et talents.' },
  ];

  // Fonction pour ouvrir et fermer la sidebar
  toggleSidebar(action: string): void {
    if (action === 'open') {
      this.sidebar.nativeElement.classList.add('active');
    } else if (action === 'close') {
      this.sidebar.nativeElement.classList.remove('active');
    }
  }
  
  // Fonction pour ouvrir et fermer la popup
  togglePopup(): void {
    if (this.popup.nativeElement.classList.contains('active')) {
      this.popup.nativeElement.classList.remove('active');
    } else {
      this.popup.nativeElement.classList.add('active');
    }
  }
  
  onVideoEnd(): void {
    console.log('La vidéo est terminée.');
  }
  
  
}
