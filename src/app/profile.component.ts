import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector:'app-profile, .app-profile, [app-profile]:not(p)',
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.css'],
    standalone:true,
    imports:[],
    encapsulation:ViewEncapsulation.Emulated
})
export default class ProfileComponent{

}