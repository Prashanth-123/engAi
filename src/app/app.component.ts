import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data: any;
  display: any;
  data1: any;

  constructor(private https:FetchService){}

  // Periodically (every 10 seconds) poll for new posts from  API
  ngOnInit(): void {
    setInterval(time=>{this.getData()},10000);
    this.getData();
  }
  getData(){
    this.https.fetch().subscribe(res=>{
    this.data=res['hits'];
  })
  }
  // Modal logic
  row(r){
    if(!this.display){
      this.display="true";
      this.data1=JSON.stringify(r);
      this.data1=r;
    }else {
      this.display ="false";
    }
  }
}
