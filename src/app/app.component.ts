import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const googleLogoURL = "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { }
  title = 'tiendaWeb';

  ngOnInit() {
    this.createIconsSvg();
  }

  createIconsSvg() {
    this.matIconRegistry.addSvgIcon("logoGoogle", this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
  }
}
