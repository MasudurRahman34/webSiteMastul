import { Component, OnInit } from '@angular/core';
import { ChildController } from '../child-controller';
import { ChildServiceService } from '../child-service.service';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {
	childs : ChildController;

  error: {};

  constructor(
  	private childServiceService: ChildServiceService

  	) { }

  ngOnInit() {
  	this.childServiceService.getchild().subscribe((data: ChildController) => (console.log(this.childs = data)),
      error => this.error = error
    );

  }

}
