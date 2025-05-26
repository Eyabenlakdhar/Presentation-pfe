import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-ing-archives',
  templateUrl: './dashboard-ing-archives.component.html',
  styleUrls: ['./dashboard-ing-archives.component.css']
})
export class DashboardIngArchivesComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef; // Référence pour la sidebar
  @ViewChild('popup') popup!: ElementRef; // Référence pour la popup

  ngOnInit() {
    // Animation d'entrée pour les cartes de méthodologie
    setTimeout(() => {
      this.animateMethodologyCards();
    }, 300);
  }

  animateMethodologyCards() {
    const cards = document.querySelectorAll('.methodology-item');
    cards.forEach((card, index) => {
      setTimeout(() => {
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.transform = 'translateY(0)';
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
