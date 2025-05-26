import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-questionsproblematique',
  templateUrl: './questionsproblematique.component.html',
  styleUrl: './questionsproblematique.component.css'
})
export class QuestionsproblematiqueComponent {
@ViewChild('sidebar') sidebar!: ElementRef; // Référence pour la sidebar
  @ViewChild('popup') popup!: ElementRef; // Référence pour la popup

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
   }
 }
}
