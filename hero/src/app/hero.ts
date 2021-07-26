export class User {
  constructor(public email: string = '', public password: string = '') {}
}

export interface RedackUser {
  name: string,
  job: string,
}