import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {SongService} from "../services/song.service";
import {Song} from "../models/Song";
import {UserService} from "../services/user.service";
@Component ({
  selector: 'explorar',
  templateUrl: '../html/explorar.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/style.css', '../css/table.css', '../css/bootstrap-theme.min.css'],
  providers: [SongService, UserService]
})

export class ExplorarComponent implements OnInit {
  private featuredAndRecentSongs: Song[];
  constructor(private songService:SongService,private userService:UserService, private router: Router) {
  this.songService.getAllSongs().then(res=>{
    this.featuredAndRecentSongs=res;
  });
    this.userService.getLogUserInfo().then(res=>{
      if(res.status.toString().indexOf("200")!=-1){
        document.getElementById("boton").textContent="Perfil";
      }
    })
  }


  goto(){
    this.userService.getLogUserInfo().then(res=>{
      if(res.status.toString().indexOf("200")==-1){
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/home']);
      }
    })
  }

  search(searchTerm:string):void{
    this.songService.searchSongByTitle(searchTerm).then(res=>{
      this.featuredAndRecentSongs=res;
    })
  }


  ngOnInit(): void {
  }


}
