import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {NavigateService} from "../../shared/navigate.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('nav') nav: ElementRef;

  public isMenuOpen = false;
  public curIndex: number = 0;

  public menuLinks =
    [
      { name: 'Home', path: './', icon: 'fas fa-home', isActive: true },
      { name: 'Single Post', path: './dashboard/single-post', icon: 'fas fa-pen', isActive: false },
      { name: 'About Etra', path: './dashboard/about', icon: 'fas fa-users', isActive: false },
      { name: 'Contact Us', path: './dashboard/contacts', icon: 'far fa-comments', isActive: false },
    ]
  constructor(private router: Router, private navigateService: NavigateService) { }

  ngOnInit(): void {
  }

  openSideBar(event: any): void
  {
    if(this.isMenuOpen)
      this.nav.nativeElement.classList.remove('show');
    else
      this.nav.nativeElement.classList.add('show');
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate(url: string):void
  {
    this.menuLinks[this.curIndex].isActive = false;
    let counter:number = 0;
    for (let i in this.menuLinks)
    {
      if(this.menuLinks[i].path == url)
      {
        this.curIndex = counter;
      }
      counter++;
    }
    this.menuLinks[this.curIndex].isActive = true;
    console.log(this.menuLinks[this.curIndex].isActive);
    this.navigateService.curPathSubjech.next(url)
    // this.router.navigate([url]);

  }

}
