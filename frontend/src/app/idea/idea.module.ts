import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaListComponent } from './ideaList.component';
import { EditIdeaComponent } from './editIdea.component';
import { IdeaRouterModule } from './idea.router.module';


@NgModule({
    declarations: [
        IdeaListComponent,
        EditIdeaComponent
    ],
    imports: [
        CommonModule,
        IdeaRouterModule
    ],
    providers: [

    ]
})
export class IdeaModule { }
