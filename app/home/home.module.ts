import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms"

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { CarService } from "../cars/shared/car.service";

@NgModule({
    imports: [
        NativeScriptModule,
        HomeRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        CarService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }

