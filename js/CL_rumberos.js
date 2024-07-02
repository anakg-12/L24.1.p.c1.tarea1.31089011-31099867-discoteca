export default class CL_rumberos{
    constructor(ced, n, e, s){
        this._cedula = ced;
        this._nombre = n;
        this._edad = e;
        this._sexo = s;
    }
    setcedula (ced){
        this._cedula = ced; }
    setnombre (n){
      this._nombre = n; }
     setedad (e){
        this._edad = e; }
    setsexo (s){
        this._sexo = s; }

    getcedula (){
        return this._cedula;
    }
    getnombre (){
        return this._nombre;
    }
    getedad (){
        return this._edad;
    }     
    getsexo (){
        return this._sexo;
    }
    pagoentrada () {
        if (this._sexo == "M")
        return 25;
    else 
    return 25-(25*0.25)
    }

} 