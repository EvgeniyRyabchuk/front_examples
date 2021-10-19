import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  public curPathSubjech: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public $curPathSubjech = this.curPathSubjech.asObservable();

  constructor(private router: Router) { }

  public navigateTo(url: string)
  {
    this.router.navigate([url]);
  }

}
