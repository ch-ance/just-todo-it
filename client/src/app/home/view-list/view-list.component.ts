import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _ListsService: ListsService
  ) {}

  id = this._route.snapshot.params.id;

  ngOnInit() {
    console.log(this.id);
    this._ListsService.fetchList(this.id);
  }
}
