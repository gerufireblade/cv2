import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  @ViewChild('carousel', { static: false }) carousel?: ElementRef;

  scrollToCarousel() {
    this.carousel?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  openGithub() {
    window.open('https://github.com/gerufireblade', '_blank');
  }

  openLinkedIn() {
    window.open(
      'https://www.linkedin.com/in/gianestevez/',
      '_blank'
    );
  }
}