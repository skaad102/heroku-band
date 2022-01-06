class UtilsBand {
  constructor() {
    this.bands = [];
  }

  /* Crud */

  addBand(band = new Band()) {
    this.bands.push(band);
  }

  getBands() {
    return this.bands;
  }

  upBand(id){
    this.bands = this.bands.map(band =>{
        if(band.id === id){
            band.vote++
            return band
        }else{
            return band
        }
    });
  }

  delBand(id){
    this.bands = this.bands.filter(band => band.id !== id); 
    return this.bands;
  }
}


module.exports = UtilsBand