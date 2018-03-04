import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './activityList.component';
import { EditActivityComponent } from './editActivity.component';
import { ActivityRouterModule } from './activity.router.module';


@NgModule({
    declarations: [
        ActivityListComponent,
        EditActivityComponent
    ],
    imports: [
        CommonModule,
        ActivityRouterModule
    ],
    providers: [

    ]
})
export class ActivityModule { }
