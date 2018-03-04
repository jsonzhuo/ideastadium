export class Activity {
    _id: string;
    name: string;    //活动名
    summary: string;   //简介
    logoUrl: string;
    content: string;
    creator: string;
    attachment: string;  //附件
    createtime: string;   //添加时间
    constructor() {
        this._id = '';
        this.name = '';
        this.summary = '';
        this.logoUrl = '';
        this.content = '';
        this.creator = '';
        this.attachment = '';
        this.createtime = '';
    }
}