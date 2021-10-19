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
      { name: 'Home', path: '/dashboard', icon: 'fas fa-home', isActive: true },
      { name: 'Single Post', path: '/dashboard/single-post', icon: 'fas fa-pen', isActive: false },
      { name: 'About Etra', path: '/dashboard/about', icon: 'fas fa-users', isActive: false },
      { name: 'Contact Us', path: '/dashboard/contacts', icon: 'far fa-comments', isActive: false },
    ]
  constructor(private router: Router, private navigateService: NavigateService) { }

  ngOnInit(): void {
    console.log(this.router.url);
    for (let i of this.menuLinks)
    {
      if(i.path == this.router.url) {
        this.menuLinks[this.curIndex].isActive = false;
        i.isActive = true;
        this.curIndex = this.menuLinks.indexOf(i);
      }
    }
  }

  openSideBar(event: any): void
  {
    if(this.isMenuOpen)
      this.nav.nativeElement.classList.remove('show');
    else
      this.nav.nativeElement.classList.add('show');
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate(obj: any):void
  {
    this.menuLinks[this.curIndex].isActive = false;
    this.curIndex = this.menuLinks.indexOf(obj);
    this.navigateService.navigateTo(obj.path);
  }

}
