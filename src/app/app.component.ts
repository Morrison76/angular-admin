import { Component, OnInit } from '@angular/core';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'angular-admin';

  
constructor(private router: Router) {
}

breadcrumbs:string[] = [];


  ngOnInit(): void {
    this.breadcrumbs = [
      'dashboard',
      'users',
      'user'
    ]
  }

  redirectTo(breadCrumb: string): void{
    this.router.navigateByUrl(breadCrumb);
  }

}
