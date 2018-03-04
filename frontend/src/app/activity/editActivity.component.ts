import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from "../shared/services/activity.service";
import { CommonService } from "../shared/services/common.service";
import { Activity } from "../shared/models/activity";

@Component({
    selector: 'edit-activity',
    templateUrl: './editActivity.component.html',
    styleUrls: ['./editActivity.component.css']
})
export class EditActivityComponent implements OnInit {
    activity: any;
    constructor(private actRouter: ActivatedRoute, private activityService: ActivityService) {
        this.activity = new Activity();
    }

    ngOnInit() {
        this.actRouter.queryParams.subscribe(params => {
            if (params["id"] && params["id"] != "") {
                this.queryCategory(params["id"]);
            }
        });
    }

    queryCategory(id: string) {
        this.activityService.getActivityById(id).subscribe(res => {
            if (res) {
                console.log(res);
                this.activity = res;
            }
        });
    }
}
