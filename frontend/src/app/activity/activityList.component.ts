import { Component, OnInit } from '@angular/core';
import { ActivityService } from "../shared/services/activity.service";
import { CommonService } from "../shared/services/common.service";
import { Activity } from "../shared/models/activity";

@Component({
    selector: 'activity-list',
    templateUrl: './activityList.component.html',
    styleUrls: ['./activityList.component.css']
})
export class ActivityListComponent implements OnInit {

    ActivityList = [];
    ActivityTemp: any;

    constructor(private activityService: ActivityService) {
        this.ActivityTemp = new Activity();
    }

    ngOnInit() {

    }

}
