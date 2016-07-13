import {Component} from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import './rxjs-operators';

@Injectable()
@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})
export class AppComponent {  
  public origin : string;
  private dataUrl : string = 'http://httpbin.org/ip';
  constructor (private http: Http) { }
  ngOnInit() {
    this.getItems()
        .subscribe(
          ipdata => this.origin = ipdata.origin
        );
  }  
  getItems(): Observable<IPData> {    
        return this.http.get(this.dataUrl)
                        .map(this.extractData);
  }
  extractData(res: Response) {
    return res.json();
  }
}
class IPData {
  public origin : string;
}