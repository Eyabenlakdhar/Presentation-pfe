import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';



@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent  {
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