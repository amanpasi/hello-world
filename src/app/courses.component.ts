import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
  selector:'courses',
  template:
  // `
  //     <h2>{{ title }}</h2>
  //     <ul>
  //       <li *ngFor="let course of courses">
  //         {{ course }}
  //       </li>
  //     </ul>
  //     <img [src]="imageUrl" />
  //     <table>
  //         <tr>
  //             <td [attr.colspan]="colSpan"></td>
  //         </tr>
  //     </table>
  //     <button class="btn btn-primary" [class.active]="isActive" >Save</button>
  //     <button (click)="onSave()">Color</button>

  //     <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
  //     <br/>
  //     <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  //   `
  `
    {{ text | summary:10 }} <br />

    {{ course.title | uppercase}} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number:'1.1-1' }} <br />
    {{ course.price | currency:'INR':true:'3.2-2' }} <br />
    {{ course.releaseDate | date:'shortDate'}} <br />
  `
})
export class CoursesComponent{
  // title = "List of courses";
  // courses;
  // email="me@ex.com";
  // isActive =true;
  // colSpan =2
  // imageUrl="";
  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }
  // onSave(){
  //   console.log("Button was clicked");
  // }
  // onKeyUp(){
  //   console.log(this.email);
  // }

  text = ` Lorem Ipsum is simply dummy text of the printing and typset`

  course = {
    title:"The Complete Angular",
    rating: 4.9456,
    students: 30145,
    price:190.58,
    releaseDate: new Date(2016,3,1)
  }
}
