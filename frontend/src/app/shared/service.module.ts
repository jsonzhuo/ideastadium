import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UserService } from './services/user.service';
import { ActivityService } from './services/activity.service';
import { IdeaService } from './services/idea.service';
import { CommonService } from './services/common.service';

@NgModule({
    imports: [HttpModule, RouterModule],
    declarations: [],
    providers: [
        UserService,
        ActivityService,
        IdeaService,
        CommonService
    ],
    exports: []
})
export class ServiceModule {
}