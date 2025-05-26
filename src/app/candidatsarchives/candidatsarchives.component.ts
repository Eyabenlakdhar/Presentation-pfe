import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-candidatsarchives',
  templateUrl: './candidatsarchives.component.html',
  styleUrls: ['./candidatsarchives.component.css']
})
export class CandidatsarchivesComponent {

  @ViewChild('sidebar') sidebar!: ElementRef; // Référence pour la sidebar
  @ViewChild('popup') popup!: ElementRef; // Référence pour la popup
  showImage = true; // Contrôle l'affichage de l'image
  
    toggleSidebar(action: string): void {
      if (action === 'open') {
        this.sidebar.nativeElement.classList.add('active');
      } else if (action === 'close') {
        this.sidebar.nativeElement.classList.remove('active');
      }
    }
    
    

    // Méthode appelée au clic sur l'image
    onImageClick(): void {
      this.showImage = false; // Cache l'image et affiche le texte
    }
  

  
  
  }



