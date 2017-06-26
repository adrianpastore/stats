function Conta(saque,historico,saldo,deposito,depositocheque){
  this.saldo = 500;
  if(saldo<500){
    throw i = "Saldo inicial inválido";
  }
  if (saldo>500) {
    this.saldo = (saldo);
  }
  this.historico = [];
  this.historico.push("abertura: +"+this.saldo)
}
Conta.prototype.sacar = function (saque) {
  this.saque = (saque);
  if((this.saque>=5)&&(this.saque<=this.saldo)){
    this.saldo = (this.saldo) - (this.saque);
    this.historico.push("saque: -"+this.saque);
    return true;
  }else{
    return false;
  }
};
Conta.prototype.depositarDinheiro = function (deposito){
  this.deposito = (deposito);
  if((this.deposito>0)&&(this.deposito<=1000)){
    this.saldo = (this.saldo) + (this.deposito);
    this.historico.push("deposito dinheiro: +"+this.deposito);
    return true;
  }else{
    return false;
  }
};
Conta.prototype.depositarCheque = function (depositocheque) {
  this.depositocheque = (depositocheque);
  if((this.depositocheque>0)&&(this.depositocheque<=10000)){
    this.saldo = (this.saldo) + (this.depositocheque);
    this.historico.push("deposito cheque: +"+this.depositocheque);
    return true;
  }else{
    return false;
  }
};
