import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    this.dataService.getAllProducts().subscribe((response:any)=>{
      console.log(response);
      this.products = response;
    })
  }

}
