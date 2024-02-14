import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { SecureconnectionInterceptor } from "./secure-connection.interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: SecureconnectionInterceptor, multi: true }
]
