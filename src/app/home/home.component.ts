import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _NgxSpinnerService: NgxSpinnerService) { 

  }

  ngOnInit(): void {
    this._NgxSpinnerService.show()
    setTimeout(() => {
      this._NgxSpinnerService.hide();
    }, 700);
  }


}
