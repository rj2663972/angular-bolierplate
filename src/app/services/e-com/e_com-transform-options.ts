import { HttpHeaders, HttpResponseBase,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector } from '@angular/core';
import { UtilitiesService } from '../utilities/utilities.service';
import { flatMap } from 'rxjs/operators';
import { SnackBarsService } from 'src/app/ui-controls/snackbars/services/snackbars.service';

export class EcomTransformOptions {

  _utilitiesService: UtilitiesService;
  _snackBarsService: SnackBarsService;

  constructor(
    private _injector: Injector
  ) {
    this._utilitiesService = this._injector.get(UtilitiesService);
    this._snackBarsService = this._injector.get(SnackBarsService);
  }

  protected transformOptions(options: any): Promise<any> {
    // this._utilitiesService.activateLoader();
    options.headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json',
        // 'Authorization': `Bearer ${this._utilitiesService.getTokenUveAvm()}`,
        // 'AuthorizationUveCommon': `${this._utilitiesService.getTokenUveCommon()}`,
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
    });
    return Promise.resolve(options);
}


  protected transformResult(url: string, response: HttpResponseBase, processor: (response: HttpResponseBase) => any): Observable<any> {
    // this._utilitiesService.deactivateLoader();
    if (response.status !== 200) {
      const responseBlob = response instanceof HttpResponse ? response.body : (<any>response).error instanceof Blob ? (<any>response).error : undefined;

      return this.blobToText(responseBlob).pipe(flatMap(_responseText => {
          const jsonParse: ((key: string, value: any) => any) | undefined = undefined;
          let exception = _responseText === "" ? null : JSON.parse(_responseText,  jsonParse);
          let snackBarText = `<b>${exception.message}</b><br/><br/>`;
          snackBarText += "Se ha producido un error al llamar al servidor<br/>";
          snackBarText += `${exception.source}<br/><br/>`;
          this._snackBarsService.openSnackBarError(snackBarText);
          return processor(response);
        }));
  }
  return processor(response);
}

private blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
      if (!blob) {
          observer.next("");
          observer.complete();
      } else {
          let reader = new FileReader();
          reader.onload = function() {
              observer.next(this.result);
              observer.complete();
          }
          reader.readAsText(blob);
      }
  });
}


}


