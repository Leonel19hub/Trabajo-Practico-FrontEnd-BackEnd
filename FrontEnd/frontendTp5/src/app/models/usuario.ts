export class Usuario {
  _id!: string;
  username!:string;
  password!:string;
  rol!:string;

  Usuario(_id:string="",username:string="", password:string="", rol:string=""){
    this._id = _id;
    this.username = username;
    this.password = password;
    this.rol = rol;
  }
}
