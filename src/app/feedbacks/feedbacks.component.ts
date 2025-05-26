import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {

  @ViewChild('sidebar') sidebar!: ElementRef; // Référence pour la sidebar
    @ViewChild('popup') popup!: ElementRef; // Référence pour la popup
  
    toggleSidebar(action: string): void {
      if (action === 'open') {
        this.sidebar.nativeElement.classList.add('active');
      } else if (action === 'close') {
        this.sidebar.nativeElement.classList.remove('active');
      }
    }
 // Méthode pour afficher un message FAQ
 showFAQ(): void {
  alert('Si vous avez des questions, n’hésitez pas à nous les poser !');
}
}
