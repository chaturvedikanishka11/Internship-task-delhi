import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  apidata;
  resData;
  constructor(private show:BlogApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.queryParams;
    console.log(id);

    this.show.show(id).subscribe((data)=>{
        this.apidata=data['user'];
        data=>
        {
             this.resData=data;
              this.apidata=this.resData.user;
              console.log(this.apidata);
        }
      });


  }

}
