class Carro
{
      private int velocidade {get; set;}
 
      public virtual void Acelerar()
      {
             velocidade = velocidade + 1;
      }
 
      public void Desacelerar()
      {
             velocidade = velocidade - 1;
      }
}
 
class CarroCorrida : Carro
{
      public override void Acelerar()
      {
             velocidade = velocidade + 10;
      }
}
 
class Program
{
      static void Main(string[] args)
      {
             Carro c = new Carro();
             CarroCorrida cc = new CarroCorrida();
             c.Acelerar();
             Console.WriteLine(c)
             //c.Acelerar();
             //c.Desacelerar();
             //cc.Acelerar();
             //Console.WriteLine(c.velocidade);
      }
}