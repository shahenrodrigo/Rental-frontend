import { Routes } from '@angular/router';
import { CustomerManageComponent } from './pages/customer-manage/customer-manage.component';
import { ItemManageComponent } from './pages/item-manage/item-manage.component';
import { RentalManageComponent } from './pages/rental-manage/rental-manage.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"customer-manage",
        component:CustomerManageComponent
    },
    {
        path:"item-manage",
        component:ItemManageComponent
    },
    {
        path:"rental-manage",
        component:RentalManageComponent
    }
];
