import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { slider } from './shared/route-animation/route-animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isShowingFooter = false;

  ngOnInit() {
    setTimeout(() => {
      this.isShowingFooter = true;
    }, 600);
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
