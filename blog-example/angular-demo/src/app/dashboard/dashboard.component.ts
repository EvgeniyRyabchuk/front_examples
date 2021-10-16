import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavigateService} from "../shared/navigate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit{

  @ViewChild(SidebarComponent) sidebar: SidebarComponent;

  constructor(private navigateService: NavigateService, private router: Router) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.navigateService.curPathSubjech.subscribe((res: string) =>
    {
      this.router.navigate([res]);
      console.log(res);
    })
  }
}
