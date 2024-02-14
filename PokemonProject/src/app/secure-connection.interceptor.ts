import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class SecureconnectionInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const secureRequest = request.clone(
      { url: request.url.replace('http://', 'https://') }
    )
    return next.handle(secureRequest);
  }
}
