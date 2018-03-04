import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Activity } from '../models/activity';
import { HOST_URL } from '../config';

@Injectable()
export class ActivityService {

	constructor(private http:Http) { }

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'server error');
	}

	//根据id获取活动信息
	getActivityById(id: string) {
		return this.http.get(HOST_URL + 'activity/' + id)
                    .map(res => <Activity>res.json().data)
                    .catch(this.handleError);
	}

	getActivitys() {
		return this.http.get(HOST_URL + 'activity')
						.map(res => <Activity[]>res.json().data)
						.catch(this.handleError);
	}

	//添加新活动
	addActivity(activity:Activity) {
		let body = JSON.stringify(activity);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(HOST_URL + 'activity/add', body, options)
					.map(res => <Activity>res.json().data)
					.catch(this.handleError);	
	}
    
	//删除已有活动
	deleteActivity(id: string) {
		return this.http.get(HOST_URL + 'activity/delete/' + id)
					.map(res => <Object>res.json().data)
					.catch(this.handleError);
	}

	//更新已有活动
	updateActivity(activity:Activity) {
		let body = JSON.stringify(activity);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(HOST_URL + 'activity/update', body, options)
		.map(res => <Activity>res.json().data)
		.catch(this.handleError);
	}

}