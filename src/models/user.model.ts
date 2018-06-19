export class User {

    public $key: string;

    constructor(
        public nome: string,
        public username: string,
        public email: string,
        public photo: string
    ) {}

}