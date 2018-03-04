import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeaListComponent } from './ideaList.component';
import { EditIdeaComponent } from './editIdea.component';

const projectsRoutes: Routes = [
    {
        path: 'list',
        component: IdeaListComponent,
    },
    {
        path: 'edit',
        component: EditIdeaComponent
    },
    { path: '', redirectTo: '/idea/list', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(projectsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class IdeaRouterModule { }