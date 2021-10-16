import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  public curPathSubjech: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public $curPathSubjech = this.curPathSubjech.asObservable();

  constructor() { }


}
