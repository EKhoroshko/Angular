export interface Hero {
  id: number;
  name: string;
}

export class User{
  constructor(public email: string = '', 
    public password: string = ''){}
}