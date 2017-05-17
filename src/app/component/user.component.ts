import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
	moduleId: module.id,
  	selector: 'user',
  	templateUrl: 'user.component.html',
  	providers : [PostService]
})
export class UserComponent  { 
	name : string;
	email : string;
	address : address;
	hobbies : string[];
	posts : posts;

	constructor(private postService:PostService){
		this.name = 'John Doe';
		this.email = "john@gmail.com";
		this.address ={
			"street" : "S.G.Highway",
			"city" : "Ahmedabad",
			"state" : "Gujarat"
		}
		this.hobbies = ['Music','Movies']
		this.postService.getPost().subscribe(posts => {
			this.posts = posts
		})
	}
	toggleHobbies(){
		alert("its clicked");
	}
	addHobby(hobby){
		console.log(hobby)
		this.hobbies.push(hobby)
	}
	deletHobby(i){
		this.hobbies.splice(i, 1);
	}
}

interface address{
	street : string;
	city : string;
	state : string;
}
interface posts{
	id : number;
	title: string;
	body : string;
}