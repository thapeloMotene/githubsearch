import { Component, OnInit } from '@angular/core';
import {GithubService } from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any
  repos: any[];
  username: string;

  constructor(private _githubservice: GithubService) { 
    this.user = false;

    this._githubservice.getUser().subscribe( user=> {
     this.user = user;
    });

      this._githubservice.getRepos().subscribe( repos=> {
     this.repos = repos;
    });

  }
  
  searchUser(){
    this._githubservice.updateUser(this.username);
       this._githubservice.getUser().subscribe( user=> {
     this.user = user;
    });

      this._githubservice.getRepos().subscribe( repos=> {
     this.repos = repos;
    });

  }
  
  ngOnInit() {
  }

}
