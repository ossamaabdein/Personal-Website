import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
NgxSpinnerService
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private _NgxSpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this._NgxSpinnerService.show()
    setTimeout(() => {
      this._NgxSpinnerService.hide();
    }, 400);
  }


}
