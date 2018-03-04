export class Milestone {
    _id: string;
    name: string;
    description: string;
    type: number;    //里程碑类型，0普通，1评审点
    creator: string;
    createtime: string;
    activityId: string;
    constructor() {
        this._id = '';
        this.name = '';
        this.description = '';
        this.type = 0;
        this.creator = '';
        this.createtime = '';
        this.activityId = '';
    }
}