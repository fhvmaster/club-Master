import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'member',
        loadChildren: () => import('./member/member.module').then(m => m.ClubMasterMemberModule)
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then(m => m.ClubMasterAddressModule)
      },
      {
        path: 'club',
        loadChildren: () => import('./club/club.module').then(m => m.ClubMasterClubModule)
      },
      {
        path: 'event',
        loadChildren: () => import('./event/event.module').then(m => m.ClubMasterEventModule)
      },
      {
        path: 'membership-fee',
        loadChildren: () => import('./membership-fee/membership-fee.module').then(m => m.ClubMasterMembershipFeeModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class ClubMasterEntityModule {}
