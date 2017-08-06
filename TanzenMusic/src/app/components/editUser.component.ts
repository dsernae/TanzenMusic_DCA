import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../services/user.service";
import {SongService} from "../services/song.service";
@Component ({
  selector: 'editUser',
  templateUrl: '../html/editUser.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/bootstrap-theme.min.css', '../css/editUser.component.css'],
  providers: [UserService, SongService]
})

export class EditUserComponent implements  OnInit {
  constructor(
  ) {}


  ngOnInit(): void {
  }


}
