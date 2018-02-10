import { Component, OnInit } from "@angular/core";
import { CarService } from "../cars/shared/car.service";
import { RouterExtensions } from "nativescript-angular/router";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "home", loadChildren: "./home/home.module#HomeModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    private email: string;
    private userfind: boolean = false;
    private passwd: string;
    private profilData: Object;
    constructor(
        private _carService: CarService,
        private _routerExtensions: RouterExtensions
    ) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        this.email = "ahmandiaye@outlook.com";
        this.passwd = "passer@1";
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/

        this._carService.getuser()
            .then((result) => {
                this.userfind = true;
                this.profilData = result;
                // alert({
                //     title: "User conncté",
                //     message: "user: " + JSON.stringify(result),
                //     okButtonText: "Nice!"
                // })
                console.log(JSON.stringify(result));
            },
            (errorMessage) => {
                this.userfind = false;
            }
            );
    }

    signup(): void {
        this._carService.signup(this.email, this.passwd)
            .then((result) => {
                // alert({
                //     title: "User created",
                //     message: "userid: " + result,
                //     okButtonText: "Nice!"
                // })
                this.userfind = true;
                this.profilData = result;
                this._routerExtensions.navigate(["/cars"],
                    {
                        animated: true,
                        transition: {
                            name: "slide",
                            duration: 200,
                            curve: "ease"
                        }
                    });
            },
            (errorMessage) => {
                this.userfind = false;
                alert({
                    title: "Impossible",
                    message: errorMessage,
                    okButtonText: "OK!"
                })
            }
            );

    }

    signinMail(): void {
        this._carService.signinMail(this.email, this.passwd)
            .then((result) => {
                // alert({
                //     title: "User created",
                //     message: "userid: " + result,
                //     okButtonText: "Nice!"
                // })
                this.userfind = true;
                this.profilData = result;
                this._routerExtensions.navigate(["/cars"],
                    {
                        animated: true,
                        transition: {
                            name: "slide",
                            duration: 200,
                            curve: "ease"
                        }
                    });
            },
            (errorMessage) => {
                this.userfind = false;
                alert({
                    title: "No user created",
                    message: errorMessage,
                    okButtonText: "OK, got it"
                })
            }
            );

    }

    signinFck(): void {
        this._carService.signinFacebook()
            .then((result) => {
                this.userfind = true;
                this.profilData = result;
                this._routerExtensions.navigate(["/cars"],
                    {
                        animated: true,
                        transition: {
                            name: "slide",
                            duration: 200,
                            curve: "ease"
                        }
                    });
            },
            (errorMessage) => {
                this.userfind = false;
                alert({
                    title: "No user created",
                    message: errorMessage,
                    okButtonText: "OK, got it"
                })
            }
            );

    }


    signout(): void {
        this._carService.signout()
            .then((result) => {
                this.userfind = false;
            },
            (errorMessage) => {
                this.userfind = true;
            }
            );

    }
}
