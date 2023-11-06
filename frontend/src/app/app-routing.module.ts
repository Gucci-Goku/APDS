import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./auth/login/login/login.component";
import { TaskCreateComponent } from "./task/task-create/task-create.component";
import { TaskDisplayComponent } from "./task/task-display/task-display.component";




const routes: Routes = [
    {path:'', component:TaskDisplayComponent},
    {path:'add', component:TaskCreateComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:LoginComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}