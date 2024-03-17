namespace Atividade
{
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
}