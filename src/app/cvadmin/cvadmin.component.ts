import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cvadmin',
  templateUrl: './cvadmin.component.html',
  styleUrls: ['./cvadmin.component.css']
})
export class CvadminComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;

  ngOnInit() {
    // Animation initiale après le chargement de la page
    setTimeout(() => {
      this.animateElements();
    }, 300);
  }

  toggleSidebar(action: string): void {
    if (action === 'open') {
      this.sidebar.nativeElement.classList.add('active');
    } else if (action === 'close') {
      this.sidebar.nativeElement.classList.remove('active');
    }
  }
  
  // Méthode pour animer les éléments de la page
  animateElements(): void {
    // Réinitialiser les animations des cartes
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.classList.remove('animated');
      void (card as HTMLElement).offsetWidth; // Force reflow
      card.classList.add('animated');
    });
    
    // Réinitialiser les animations des éléments de liste
    const listItems = document.querySelectorAll('.card ul li');
    listItems.forEach((item) => {
      (item as HTMLElement).style.opacity = '0';
      (item as HTMLElement).style.transform = 'translateX(-20px)';
      void (item as HTMLElement).offsetWidth; // Force reflow
    });    
    // Réappliquer les animations avec délai
    setTimeout(() => {
      listItems.forEach((item, index) => {
        setTimeout(() => {
          (item as HTMLElement).style.opacity = '1';
          (item as HTMLElement).style.transform = 'translateX(0)';
        }, index * 100);
      });
    }, 500);
  }
}