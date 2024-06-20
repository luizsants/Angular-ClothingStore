import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hoverEffect(event: any) {
    event.target.style.color = '#ff4081';
  }
  get imagePath() {
    return 'assets/ClassicWhiteShirt.jpg';
  }
}