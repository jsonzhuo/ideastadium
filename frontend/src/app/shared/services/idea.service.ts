import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Idea } from '../models/idea';
import { HOST_URL } from '../config';

@Injectable()
export class IdeaService {

	constructor(private http:Http) { }

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'server error');
	}

	//根据id获取创意信息
	getIdeaById(id: string) {
		return this.http.get(HOST_URL + 'idea/' + id)
                    .map(res => <Idea>res.json().data)
                    .catch(this.handleError);
	}

	getIdeas() {
		return this.http.get(HOST_URL + 'idea')
						.map(res => <Idea[]>res.json().data)
						.catch(this.handleError);
	}

	//添加新创意
	addIdea(idea:Idea) {
		let body = JSON.stringify(idea);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(HOST_URL + 'idea/add', body, options)
					.map(res => <Idea>res.json().data)
					.catch(this.handleError);	
	}
    
	//删除已有创意
	deleteIdea(id: string) {
		return this.http.get(HOST_URL + 'idea/delete/' + id)
					.map(res => <Object>res.json().data)
					.catch(this.handleError);
	}

	//更新已有创意
	updateIdea(idea:Idea) {
		let body = JSON.stringify(idea);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(HOST_URL + 'idea/update', body, options)
		.map(res => <Idea>res.json().data)
		.catch(this.handleError);
	}

}