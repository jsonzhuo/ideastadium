import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user';
import { HOST_URL } from '../config';

@Injectable()
export class UserService {

	constructor(private http: Http) { }

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'server error');
	}

	//根据id获取用户信息
	getUserById(id: string) {
		return this.http.get(HOST_URL + 'user/' + id)
			.map(res => <User>res.json().data)
			.catch(this.handleError);
	}

	getUsers() {
		return this.http.get(HOST_URL + 'user')
			.map(res => <User[]>res.json().data)
			.catch(this.handleError);
	}

	//添加新用户
	addUser(user: User) {
		let body = JSON.stringify(user);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(HOST_URL + 'user/add', body, options)
			.map(res => <User>res.json().data)
			.catch(this.handleError);
	}

	//删除已有用户
	deleteUser(id: string) {
		return this.http.get(HOST_URL + 'user/delete/' + id)
			.map(res => <Object>res.json().data)
			.catch(this.handleError);
	}

	//更新已有用户
	updateUser(user: User) {
		let body = JSON.stringify(user);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(HOST_URL + 'user/update', body, options)
			.map(res => <User>res.json().data)
			.catch(this.handleError);
	}

}