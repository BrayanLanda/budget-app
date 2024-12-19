import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
}
