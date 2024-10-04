import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-images.component.html',
  styleUrl: './top-images.component.css'
})
export class TopImagesComponent implements OnInit, OnDestroy{
  images: string[] = [
    'assets/images/SlidePhoto1.jpg',
    'assets/images/SlidePhoto2.jpg',
    'assets/images/SlidePhoto3.jpg',
    'assets/images/SlidePhoto4.jpg',
    'assets/images/SlidePhoto5.jpg',
    'assets/images/SlidePhoto6.jpg',
    'assets/images/SlidePhoto7.jpg',
    'assets/images/SlidePhoto8.jpg',
    'assets/images/SlidePhoto9.jpg',
    'assets/images/SlidePhoto10.jpg'
  ];
  
  currentImageIndex: number = 0;
  intervalId: any;

  ngOnInit() {
    // 3秒ごとに次の画像に切り替える
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  ngOnDestroy() {
    // コンポーネントが破棄される際に、インターバルをクリアする
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  get currentImage(): string {
    return this.images[this.currentImageIndex];
  }
}
