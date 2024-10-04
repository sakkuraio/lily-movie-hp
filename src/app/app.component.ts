import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopImagesComponent } from './top-images/top-images.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopImagesComponent, MovieCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  messageInformationList: {
    title: string;
    imagePath: string;
    videoPath: string;
    videoCreatorName: string;
    text: string;
  }[] = [
    {
      title: '9月動画💕',
      imagePath: 'assets/images/thumbnail_24_9.jpg',
      videoPath: 'assets/videos/movie_24_9.mp4',
      videoCreatorName: 'Amber',
      text: `行ってらっしゃい！🛫
      キュンです🫶`,
    },
    {
      title: '10月動画🚲',
      imagePath: 'assets/images/thumbnail_24_10.jpg',
      videoPath: 'assets/videos/movie_24_10.mp4',
      videoCreatorName: '尚道',
      text: `転職しました。
      がんばれ！！`,
    },
  ];
}
