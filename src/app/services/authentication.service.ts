import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserControllerService } from 'src/api/generated/services';
import { User } from 'src/api/generated/models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<any>;
    public redirectUrl: string;

    constructor(private userService: UserControllerService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(user: User) {
        return this.userService.loginUsingPOST(user)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            },
                (error) => {
                    console.log(error)
                }
            ))
    }

    isAuthorized(allowedRoles: number[]): boolean{
        if (allowedRoles == null || allowedRoles.length === 0){
            return true
        }

        return allowedRoles.includes(this.getCurrentUserRole());
    }

    getCurrentUserRole(){
        return this.currentUserValue.role;
    }

    logout() {
        // remove user from local storage and set current user to null
        this.redirectUrl = null;
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        window.location.reload();
    }
}