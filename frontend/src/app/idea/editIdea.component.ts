import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService } from "../shared/services/idea.service";
import { CommonService } from "../shared/services/common.service";
import { Idea } from "../shared/models/idea";

@Component({
    selector: 'edit-idea',
    templateUrl: './editIdea.component.html',
    styleUrls: ['./editIdea.component.css']
})
export class EditIdeaComponent implements OnInit {
    idea: Idea;
    operateType: string;

    constructor(private actRouter: ActivatedRoute, private router: Router, private ideaService: IdeaService) {
        this.idea = new Idea();
    }

    ngOnInit() {
        /*this.actRouter.queryParams.subscribe(params => {
            if (params["id"] && params["id"] != "") {
                this.queryIdea(params["id"]);
                this.operateType = "编辑";
            }
            else {
                this.operateType = "创建";
            }
        });*/
    }

    queryIdea(id: string) {
        this.ideaService.getIdeaById(id).subscribe(cate => {
            if (cate) {
                console.log(cate);
                this.idea = cate;
            }
        });
    }

    saveIdea() {
        if (this.idea._id === "") {
            this.createIdea();
        }
        else {
            this.updateIdea();
        }
    }

    createIdea() {
        this.ideaService.addIdea(this.idea).subscribe(cate => {
            if (cate) {
                this.redirectToList();
            }
        });
    }

    updateIdea() {
        this.ideaService.updateIdea(this.idea).subscribe(cate => {
            if (cate) {
                this.redirectToList();
            }
        });
    }

    redirectToList() {
        this.router.navigateByUrl("/idea/list");
    }
}
