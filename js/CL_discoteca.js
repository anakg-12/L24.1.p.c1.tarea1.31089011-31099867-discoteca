export default class CL_discoteca {
    constructor (){
        this.acumpagos = 0; 
        this.contF = 0;
        this.contM = 0;
        this.contMayorF = 0;    
    }
  procesarrumberos (rum) {
    this.acumpagos+=rum.pagoentrada();
      if (rum._sexo == "F") {
          this.contF++;
          if(rum._edad > 21) 
              this.contMayorF++;

          }
      if(rum._sexo== "M")
        this.contM++;
  }
  mayorasis(){
        if (this.contF>this.contM) 
            return "más Rumberas";
        else 
        if(this.contF<this.contM)
            return "más Rumberos";
          else
          return "rumberos y rumberas";
          }
  porcentajeF(){
    return (this.contMayorF*100)/ this.contF;
  }

}