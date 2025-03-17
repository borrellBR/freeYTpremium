import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video/video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VideoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
