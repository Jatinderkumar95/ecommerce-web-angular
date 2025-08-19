import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PasswordHashInterceptor implements HttpInterceptor {

    constructor(private readonly httpClient: HttpClient) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('PasswordHashInterceptor: Intercepting request', req);
        if (req.url.includes('sign') || req.url.includes('Login')) {
            const reqClone = req.clone({
                body: {
                    ...req.body,
                    password: this.hashPassword(req.body.password)
                }
            });
            return next.handle(reqClone);
        }
        return next.handle(req);
    }

    private hashPassword(password: string): string {
        let hashPassword: string = '';
        this.httpClient.get<string>('https://localhost:7080/api/User/GenerateHashCode/GenerateHashCodeForLoginPassword',
            {
                params: {
                    'password': password
                }
            }).subscribe(res => {
                hashPassword = res;
            });
        return hashPassword;
    }
    // Implement your hashing logic here
    // For example, using a simple hash function or a library like bcrypt
    //return btoa(password); // Example using base64 encoding for simplicity

}

export const customHeaderInterceptor: HttpInterceptorFn = (request, next) => {
    let modifiedRequest = request.clone({
        setHeaders: {
            'custom-header': '123'
        }
    });
    return next(modifiedRequest);
}