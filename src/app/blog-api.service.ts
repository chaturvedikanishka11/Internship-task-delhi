import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  constructor(private http: HttpClient) { }



  url1="http://127.0.0.1:8000/api/"

  url2="http://127.0.0.1:8000/api/allData"

  show(id){
   return  this.http.post("http://127.0.0.1:8000/api/show", id)
  }

  getdata(){
    return this.http.get(this.url2)
  }

}
