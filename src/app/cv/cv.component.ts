import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('popup') popup!: ElementRef;

  ngOnInit() {
    // Animation d'entrée pour les conteneurs
    setTimeout(() => {
      this.animateContainers();
    }, 300);
  }

  animateContainers() {
    const containers = document.querySelectorAll('.container-content');
    containers.forEach((container, index) => {
      setTimeout(() => {
        (container as HTMLElement).style.opacity = '1';
        (container as HTMLElement).style.transform = 'translateY(0)';
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
    if (this.popup && this.popup.nativeElement) {
      if (this.popup.nativeElement.classList.contains('active')) {
        this.popup.nativeElement.classList.remove('active');
      } else {
        this.popup.nativeElement.classList.add('active');
      }
    }
  }
}
