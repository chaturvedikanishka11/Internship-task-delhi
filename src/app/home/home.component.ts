import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  resData;
  newsdata;
  apidata;
  constructor(private route:Router, private activate:ActivatedRoute, private http:HttpClient,private service:BlogApiService) { }

  godata(){
		this.route.navigate(['blog'], {relativeTo: this.activate}); // navigate to other page
	}

  result : [];
  ngOnInit(): void {
    
    // const url="http://127.0.0.1:8000/api/allData"
    // // this.api.getdata().subscribe(data=>{
    //   this.http.get(url).subscribe(res=>{
    //         console.log(res['user']);
    //       this.newsdata = res['user'];
    //   });


    this.service.getdata().subscribe(
      data=>
      {
            console.log(data);
            this.resData=data;
            this.apidata=this.resData.user;
            console.log(this.apidata);
      }
    )


  }

}
