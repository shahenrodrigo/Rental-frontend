import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,NgFor,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  itemList:any= []; 

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getItems(); 
  }

  getItems(){
    this.http.get("http://localhost:8080/item/get-all").subscribe(
      (data) => {
        this.itemList = data;
      }
      
    );
  }

}
