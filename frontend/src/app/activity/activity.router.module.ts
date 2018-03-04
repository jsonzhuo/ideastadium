import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activityList.component';
import { EditActivityComponent } from './editActivity.component';

const projectsRoutes: Routes = [
    {
        path: 'list',
        component: ActivityListComponent,
    },
    {
        path: 'edit',
        component: EditActivityComponent
    },
    { path: '', redirectTo: '/activity/list', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(projectsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ActivityRouterModule { }