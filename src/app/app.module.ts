import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Utilisation de BrowserAnimationsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { competencecandidatComponent } from './competencecandidat/competencecandidat.component';
import { welcomepageingenieurComponent } from './welcomepageingenieur/welcomepageingenieur.component';
import { creationMissionComponent } from './creationMission/creationMission.component';
import { CvComponent } from './cv/cv.component';
import { CandidatComponent } from './candidat/candidat.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardIngComponent } from './dashboard-ing/dashboard-ing.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AffectationComponent } from './affectation/affectation.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { RouterModule } from '@angular/router';
import { CandidatsarchivesComponent } from './candidatsarchives/candidatsarchives.component';
import { DashboardIngArchivesComponent } from './dashboard-ing-archives/dashboard-ing-archives.component';
import { CvadminComponent } from './cvadmin/cvadmin.component';
import { CvarchivesadminComponent } from './cvarchivesadmin/cvarchivesadmin.component';
import { ReclamationadminComponent } from './reclamationadmin/reclamationadmin.component';
import { ReclamationarchivesadminComponent } from './reclamationarchivesadmin/reclamationarchivesadmin.component';
import { MatDialogModule } from '@angular/material/dialog'; // Pour les modales
import { MatButtonModule } from '@angular/material/button';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { QuestionsproblematiqueComponent } from './questionsproblematique/questionsproblematique.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { SprintComponent } from './sprint/sprint.component';







@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    competencecandidatComponent,
    welcomepageingenieurComponent,
    creationMissionComponent,
    CvComponent,
    CandidatComponent,
    DashboardIngComponent,
    AffectationComponent,
    CandidatureComponent,
    CandidatsarchivesComponent,
    DashboardIngArchivesComponent,
    CvadminComponent,
    CvarchivesadminComponent,
    ReclamationadminComponent,
    ReclamationarchivesadminComponent,
    FeedbacksComponent,
    QuestionsproblematiqueComponent,
    ObjectifComponent,
    SprintComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    RouterModule ,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule
  
  ],
  exports: [RouterModule] ,
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
