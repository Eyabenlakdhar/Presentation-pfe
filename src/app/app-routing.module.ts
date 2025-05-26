import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';


import { CvComponent } from './cv/cv.component';


import { CandidatComponent } from './candidat/candidat.component';

import { DashboardIngComponent } from './dashboard-ing/dashboard-ing.component';


import { AffectationComponent } from './affectation/affectation.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { CandidatsarchivesComponent } from './candidatsarchives/candidatsarchives.component';
import { DashboardIngArchivesComponent } from './dashboard-ing-archives/dashboard-ing-archives.component';

import { CvadminComponent } from './cvadmin/cvadmin.component';
import { CvarchivesadminComponent } from './cvarchivesadmin/cvarchivesadmin.component';
import { ReclamationadminComponent } from './reclamationadmin/reclamationadmin.component';
import { ReclamationarchivesadminComponent } from './reclamationarchivesadmin/reclamationarchivesadmin.component';

import { welcomepageingenieurComponent } from './welcomepageingenieur/welcomepageingenieur.component';
import { creationMissionComponent } from './creationMission/creationMission.component';
import { competencecandidatComponent } from './competencecandidat/competencecandidat.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { QuestionsproblematiqueComponent } from './questionsproblematique/questionsproblematique.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { SprintComponent } from './sprint/sprint.component';



const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'competencecandidat', component: competencecandidatComponent },
  { path: 'cv', component: CvComponent  },
 { path: 'welcomepageingenieur', component: welcomepageingenieurComponent },
  { path: 'creationMission', component: creationMissionComponent  },
  { path: 'affectation', component: AffectationComponent },
  { path: 'candidature', component: CandidatureComponent },
    { path: 'candidatsarchives', component: CandidatsarchivesComponent },
      { path: 'dashboard_ing_archives', component: DashboardIngArchivesComponent },
          { path: 'cvadmin', component: CvadminComponent  },
            { path: 'cvarchivesadmin', component: CvarchivesadminComponent },
              { path: 'reclamationadmin', component: ReclamationadminComponent },
                { path: 'reclamationarchivesadmin', component: ReclamationarchivesadminComponent },
                   { path: 'candidat', component: CandidatComponent  },
                     { path: 'dashboard_ing', component: DashboardIngComponent},
                     { path: 'feedbacks', component: FeedbacksComponent},
                     { path: 'questionsproblematique', component: QuestionsproblematiqueComponent},
                     { path: 'objectif', component: ObjectifComponent},
                     { path: 'sprint', component: SprintComponent},


                     { path: '**', redirectTo: 'accueil', pathMatch: 'full' }
                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
