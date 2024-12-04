import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { CustomerManageComponent } from './pages/customer-manage/customer-manage.component';
import { ItemManageComponent } from './pages/item-manage/item-manage.component';
import { RentalManageComponent } from './pages/rental-manage/rental-manage.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,CustomerManageComponent,ItemManageComponent,RentalManageComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-manage-front-end';
}
