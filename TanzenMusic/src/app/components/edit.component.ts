import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../services/user.service";
import {SongService} from "../services/song.service";
@Component ({
  selector: 'edit',
  templateUrl: '../html/edit.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/bootstrap-theme.min.css', '../css/edit.component.css'],
  providers: [UserService, SongService]
})

export class EditComponent implements  OnInit {
  constructor(
  ) {}


  ngOnInit(): void {
  }


}
