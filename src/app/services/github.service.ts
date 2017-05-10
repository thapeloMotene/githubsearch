import { Injectable } from "@angular/core";
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username: string;
    private client_id ='bca8d3c7adcb435ab186';
    private client_secret ='c40d68c4f0734b84df833c3690239899fa6e75f1';


    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username= 'thapeloMotene';
    }


    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id +'&client_secret='+this.client_secret).map(res => res.json());
    }

       getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id +'&client_secret='+this.client_secret).map(res => res.json());
    }

    updateUser(username:string){
            this.username=username;
    }
}