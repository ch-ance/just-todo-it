import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  id = this._route.snapshot.params.id;

  ngOnInit() {
    console.log(this.id);
  }
}
