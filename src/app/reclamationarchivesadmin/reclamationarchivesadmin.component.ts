import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';


@Component({
  selector: 'app-reclamationarchivesadmin',
  templateUrl: './reclamationarchivesadmin.component.html',
  styleUrls: ['./reclamationarchivesadmin.component.css']
})
export class ReclamationarchivesadminComponent {
  
  @ViewChild('sidebar') sidebar!: ElementRef;

  toggleSidebar(action: string): void {
    if (action === 'open') {
      this.sidebar.nativeElement.classList.add('active');
    } else {
      this.sidebar.nativeElement.classList.remove('active');
    }
  }
}
