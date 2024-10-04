import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, input, Input, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() title?: string;
  @Input() imagePath?: string;
  @Input() videoPath?: string;
  @Input() message?: string;
  @Input() videoCreatorName?: string;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  isModalOpen = false;

  protected oprnMoovie(){
    this.isModalOpen = true;
    setTimeout(() => {
      this.videoPlayer.nativeElement.play();
    }, 100); // モーダルが表示された後に再生するために少し遅延させる
  }

  protected closeModal() {
    this.videoPlayer.nativeElement.pause();
    this.isModalOpen = false;
  }

    // 改行を <br> タグに変換するメソッド
    getFormattedText(): string {
      if (!this.message) {
        return '';
      }
      // 改行を <br> タグに置き換え
      return this.message.replace(/\n/g, '<br>');
    }
}
