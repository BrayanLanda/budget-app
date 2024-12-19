import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
    <router-outlet />
    </div>
  </div>
  `,
  styles: `
    .hero-section {
    position: relative;
    height: 100vh;
    background-image: url('https://cdn.pixabay.com/photo/2019/10/18/19/51/financial-4560047_1280.jpg');
    background-size: cover;
    background-position: center;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    width: 80%;
    max-width: 800px;
}
  `
})
export default class LayoutComponent {

}
