export class Comment {
    _id: string;
    content: string;
    ideaId: string;
    creator: string;
    createtime: string;
    constructor() {
        this._id = '';
        this.content = '';
        this.ideaId = '';
        this.creator = '';
        this.createtime = '';
    }
}