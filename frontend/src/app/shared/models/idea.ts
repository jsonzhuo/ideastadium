export class Idea {
    _id: string;
    name: string;
    summary: string;
    logoUrl: string;
    content: string;
    attachments: string;
    creator: string;
    createtime: string;
    activityId: string;
    constructor() {
        this._id = '';
        this.name = '';
        this.summary = '';
        this.logoUrl = '';
        this.content = '';
        this.attachments = '';
        this.creator = '';
        this.createtime = '';
        this.activityId = '';
    }
}