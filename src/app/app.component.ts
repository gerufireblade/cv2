/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    FormsModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cv';
  isExpanded = false;
  isMobile = false;
  isReady = true;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.updateScreenSize();
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isReady = true;
      });
    }
  }

  redirectTo(url: string) {
    window.open(url, '_blank'); 
  }

  @HostListener('window:resize')
onResize() {
  if (isPlatformBrowser(this.platformId)) {
    this.updateScreenSize();
  }
}

  private updateScreenSize() {
    this.isMobile = window.innerWidth < 960;
  }

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}

