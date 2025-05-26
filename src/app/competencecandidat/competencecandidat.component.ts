import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';


@Component({
  selector: 'app-competencecandidat',
  templateUrl: './competencecandidat.component.html',
  styleUrls: ['./competencecandidat.component.css']
})
export class competencecandidatComponent  {
  
  @ViewChild('sidebar') sidebar!: ElementRef; // Référence pour la sidebar
  @ViewChild('popupIntroduction') popupIntroduction!: ElementRef;
  @ViewChild('popupArchitecture') popupArchitecture!: ElementRef;

  toggleSidebar(action: string): void {
    if (action === 'open') {
      this.sidebar.nativeElement.classList.add('active');
    } else if (action === 'close') {
      this.sidebar.nativeElement.classList.remove('active');
    }
  }

  togglePopup(popupType: string): void {
    const introductionPopup = this.popupIntroduction.nativeElement;
    const architecturePopup = this.popupArchitecture.nativeElement;

    // Fermer toutes les popups avant d'en ouvrir une autre
    introductionPopup.classList.remove('active');
    architecturePopup.classList.remove('active');

    // Ouvrir la popup correspondant au type
    if (popupType === 'introduction') {
      introductionPopup.classList.add('active');
    } else if (popupType === 'architecture') {
      architecturePopup.classList.add('active');
    }
  }

}  

