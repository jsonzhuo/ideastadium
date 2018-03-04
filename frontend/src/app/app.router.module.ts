import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login.component';
import { RegisterComponent } from './home/register.component';

const appRoutes: Routes = [
    {
        path: 'activity',
        loadChildren: 'app/activity/activity.module#ActivityModule'
    },
    {
        path: 'idea',
        loadChildren: 'app/idea/idea.module#IdeaModule'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRouterModule { }