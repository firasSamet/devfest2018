import { Component, OnInit } from '@angular/core';
import { TableOlive } from './tables.service';
import { TableOliveService } from './tables.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
public res : TableOlive[];
headers :string[];

  constructor(private tableOliveService : TableOliveService, ) { }

  ngOnInit() {

  }

}
