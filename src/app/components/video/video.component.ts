import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ⬅️ IMPORTAR ESTO
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, FormsModule, SafeUrlPipe], // ⬅️ AÑADIR FormsModule AQUÍ
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  videoUrl: string = '';
  embedUrl: string = '';

  actualizarVideo() {
    const videoId = this.extraerIdDeYoutube(this.videoUrl);
    if (videoId) {
      this.embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else {
      this.embedUrl = '';
    }
  }

  extraerIdDeYoutube(url: string): string | null {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
}
