import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClubMasterSharedModule } from 'app/shared/shared.module';
import { EventComponent } from './event.component';
import { EventDetailComponent } from './event-detail.component';
import { EventUpdateComponent } from './event-update.component';
import { EventDeleteDialogComponent } from './event-delete-dialog.component';
import { eventRoute } from './event.route';

@NgModule({
  imports: [ClubMasterSharedModule, RouterModule.forChild(eventRoute)],
  declarations: [EventComponent, EventDetailComponent, EventUpdateComponent, EventDeleteDialogComponent],
  entryComponents: [EventDeleteDialogComponent]
})
export class ClubMasterEventModule {}
