export class Vote {
    id: string;
    type: number;   //0不赞同，1赞同
    ideaId: string;
    creator: string;
    createtime: string;
    constructor() {
        this.id = '';
        this.type = 0;
        this.ideaId = '';
        this.creator = '';
        this.createtime = '';
    }
}