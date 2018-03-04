import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import { CommonService } from '../shared/services/common.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
    user: User;

    constructor(private userService: UserService, private commonService: CommonService) {
        this.user = new User();
    }

    ngOnInit() {
    }

    Register() {
        this.user.createtime = this.commonService.getTimeStr(null);
        this.userService.addUser(this.user).subscribe(user => {
            console.log(user);
        });
    }
}
