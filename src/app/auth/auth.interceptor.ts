import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";

import { UserService } from "../User/user.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public userService : UserService, private router : Router){}

    intercept(req : HttpRequest<any>, next: HttpHandler){
        if (req.headers.get('noauth')){
            return next.handle(req.clone());
        }
        else{
            const cloneReq = req.clone({
                headers : req.headers.set("token", this.userService.getToken())
            });
            return next.handle(cloneReq).pipe(
                tap(
                    event => {},
                    err => {
                        if (err.error.auth == false){
                            this.router.navigateByUrl('/login');
                        }
                    }
                )
            );

        }
    }

}