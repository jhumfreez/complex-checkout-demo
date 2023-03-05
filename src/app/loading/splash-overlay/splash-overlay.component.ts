import { Component, OnInit } from '@angular/core';

/**
 * Large loading view, while waiting for initial data resources to return.
 */

@Component({
  selector: 'app-splash-overlay',
  templateUrl: './splash-overlay.component.html',
  styleUrls: ['./splash-overlay.component.css']
})
export class SplashOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}