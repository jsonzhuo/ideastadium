import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MyMaterialModule } from './myMaterial.module';

@NgModule({
    imports: [
        HttpModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MyMaterialModule
    ],
    exports:[
        HttpModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MyMaterialModule
    ],
    declarations: []
})
export class SharedModule {
}