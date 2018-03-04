export class Review {
    _id: string;
    creator: string;
    ideaId: string;
    opinion: string;
    score: number;
    createtime: string;
    constructor() {
        this._id = '';
        this.creator = '';
        this.ideaId = '';
        this.opinion = '';
        this.score = 0;
        this.createtime = '';
    }
}
