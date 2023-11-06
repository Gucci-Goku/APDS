import { Injectable } from "@angular/core";
import{
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import { AuthServiceService} from "./auth-service.service";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    /**
     *
     */
    constructor(private authservice: AuthServiceService) {
            
    }
    intercept(req: HttpRequest<unknown>, next: HttpHandler) {
        const authToken = this.authservice.getToken();
        const authRequest = 

        req.clone({headers:req.headers.set("Authorization", "Bearer"+ authToken)});
        return next.handle(authRequest);
    }

}
    
