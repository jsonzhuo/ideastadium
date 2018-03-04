export class Role {
    id: number;  //普通用户为0
    name: string;
    description: string;
    creator: string;
    createtime: string;
    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.createtime = '';
        this.creator = '';
    }
}