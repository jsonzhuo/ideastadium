import { Component, OnInit } from '@angular/core';
import { ActivityService } from "../shared/services/activity.service";
import { Activity } from "../shared/models/activity";

@Component({
    selector: 'rs-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    ActivityList = [];

    constructor(private activityService: ActivityService) {
    }

    ngOnInit() {
    }

    queryActivityList() {
        this.activityService.getActivitys().subscribe(activitys => {
            if (activitys && activitys.length > 0) {
                this.ActivityList = activitys.map(item => {
                    item.editable = false;
                    return item;
                });
                console.log(this.ActivityList);
            }
        })
    }
}
