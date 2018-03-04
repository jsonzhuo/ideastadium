import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IdeaService } from '../shared/services/idea.service';
import { CommonService } from '../shared/services/common.service';
import { Idea } from '../shared/models/idea';

@Component({
    selector: 'idea-list',
    templateUrl: './ideaList.component.html',
    styleUrls: ['./ideaList.component.css']
})
export class IdeaListComponent implements OnInit {
    displayedColumns = ['name', 'summary', 'description', 'id'];
    IdeaList: any;

    constructor(private ideaService: IdeaService) {
        this.IdeaList = new MatTableDataSource();
    }

    ngOnInit() {
        //this.queryIdeaList();
    }

    queryIdeaList() {
        this.ideaService.getIdeas().subscribe(ideas => {
            if (ideas && ideas.length > 0) {
                this.IdeaList = new MatTableDataSource(ideas);
            }
        })
    }
}
