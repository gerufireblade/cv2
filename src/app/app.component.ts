import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  signal
} from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly isExpanded = signal(false);
  readonly isMobile = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.updateScreenSize();
  }

  // ---------- Navigation ----------

  openGithub() {
    window.open('https://github.com/gerufireblade', '_blank');
  }

  openLinkedIn() {
    window.open(
      'https://www.linkedin.com/in/gianestevez/',
      '_blank'
    );
  }

  // ---------- Responsive logic ----------

  @HostListener('window:resize')
  onResize() {
    this.updateScreenSize();
  }

  private updateScreenSize() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isMobile.set(window.innerWidth < 960);

    // Close menu automatically when switching to desktop
    if (!this.isMobile()) {
      this.isExpanded.set(false);
    }
  }

  toggleMenu() {
    this.isExpanded.update(v => !v);
  }
}