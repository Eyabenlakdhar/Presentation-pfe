import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrl: './sprint.component.css'
})
export class SprintComponent implements OnInit {
 @ViewChild('sidebar') sidebar!: ElementRef; // Référence pour la sidebar
  @ViewChild('popup') popup!: ElementRef; // Référence pour la popup

  ngOnInit() {
    // Animation d'entrée pour les cartes de sprint
    setTimeout(() => {
      this.animateSprintItems();
    }, 300);
  }

  animateSprintItems() {
    const sprintItems = document.querySelectorAll('.sprint-item');
    sprintItems.forEach((item, index) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = '1';
        (item as HTMLElement).style.transform = 'translateY(0)';
      }, index * 200);
    });
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
   }
 }
}
