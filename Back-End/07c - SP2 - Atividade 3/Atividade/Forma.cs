namespace Atividade
{
        class Forma
        {
            public double base {get; set;}
            public double altura {get; set;}
            public double area {get; set;}
        
            public virtual void CalcularArea()
            {
                    area = base * altura;
            }
        }
}