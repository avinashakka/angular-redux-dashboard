import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  constructor(
    private router: Router
  ) {}

  public navSelection(category) {
    this.router.navigate([category.path]);
  }
}
