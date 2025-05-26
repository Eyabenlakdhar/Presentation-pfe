import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebar!: ElementRef; // Référence pour la sidebar
  @ViewChild('objectif1') objectif1!: ElementRef;
  @ViewChild('objectif2') objectif2!: ElementRef;
  @ViewChild('objectif3') objectif3!: ElementRef;
  @ViewChild('objectif4') objectif4!: ElementRef;
  @ViewChild('rightImage') rightImage!: ElementRef;

  // Fonction de défilement fluide vers une section spécifique
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleSidebar(action: string): void {
    if (action === 'open') {
      this.sidebar.nativeElement.classList.add('active');
    } else if (action === 'close') {
      this.sidebar.nativeElement.classList.remove('active');
    }
  }
  
  ngAfterViewInit() {
    // Animation d'entrée séquentielle pour les objectifs
    setTimeout(() => {
      this.animateElement(this.objectif1.nativeElement);
    }, 300);
    
    setTimeout(() => {
      this.animateElement(this.objectif2.nativeElement);
    }, 600);
    
    setTimeout(() => {
      this.animateElement(this.objectif3.nativeElement);
    }, 900);
    
    setTimeout(() => {
      this.animateElement(this.objectif4.nativeElement);
    }, 1200);
    
    setTimeout(() => {
      this.animateElement(this.rightImage.nativeElement);
    }, 1500);
  }
  
  animateElement(element: HTMLElement) {
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }
}
