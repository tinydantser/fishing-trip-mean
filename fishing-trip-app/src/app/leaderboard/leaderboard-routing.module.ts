import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardMainComponent } from './leaderboard-main/leaderboard-main.component';

const routes: Routes = [
  {
    path: '', component: LeaderboardMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardRoutingModule { }
