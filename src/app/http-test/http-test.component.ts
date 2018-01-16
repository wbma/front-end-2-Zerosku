import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData: string = 'hello';
  imageFolder: string = 'http://media.mw.metropolia.fi/wbma/uploads/';
  jsonFolder: string = 'http://media.mw.metropolia.fi/wbma/media';
  imgUrl: string = 'http://placekitten.com/420/300';

  constructor(private http: HttpClient ) {

  }

 getJSON() {
    this.http.get('assets/package.json').subscribe((data) => {
      console.log(data);
      this.someData = data.license;
    });
 }

 getMedia(){
    this.http.get(this.jsonFolder).subscribe( (data) => {
      console.log(data);
      this.imgUrl = this.imageFolder + data[0].filename;
    });
 }


  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
