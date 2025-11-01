export interface Article1 {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
}

export const articles1: Article1[] = [
  {
    id: "1",
    title: "CASO DE EXITO:Reconstrucción desgasificadoras CFE",
    excerpt:
      "Se rehabilitan varias desgasificadoras de aceite para CFE",
    content:
      "Se rehabilitan varias purificadoras de aceite STOKES de los tipos 820-20 y 820-30 practicamente chatarra a valores de nuevas con rigidez final de 60 KV en el aceite.",
    image:
      "https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    author: "Departamento de mantenimiento",
    date: "2025",
    category: "Caso de éxito",
    readTime: 1,
  },
  {
    id: "2",
    title: "Lubricantes Dranmak y la mejora de su producción en aceite dielectrico al 300%, gracias a nuestro servicio de desgasificado",
    excerpt:
      "Desgasificadora equipada, alcanza nuevos niveles de rigidez aumentando asi su producción...",
    content:
      "Gracias a una de nuestras desgasificadoras equipada de 5,000 LPH, esta industria alcanza nuevos niveles de rigidez permitiendole aumentar niveles de calidad en el producto de su lubricante de gran aceptacion entre sus clientes, por mas de 9 años",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    author: "Departamento de filtradoras y desgasificadoras",
    date: "2025",
    category: "Caso de exito",
    readTime: 1,
  },
  {
    id: "3",
    title: "Mejora de tiempo en secados de transformadores",
    excerpt:
      "Una guía para la reducción del tiempo en secado de transformadores, usando bombas de vacio de uso rudo ",
    content:
      "Para secados de transformadores de potencia de gran capacidad(+200 MVA), hemos ofrecido un sistema integrado por bomba de vacio de uso extremo rudo que apoya a un reforzador de lobulos, el cual a diferencia de los acostumbrados STOKES pueden ser arrancados a mayores presiciones disminuyendo el tiempo.",
    image:
      "https://images.unsplash.com/photo-1610891015188-5369212db097?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2129",
    author: "Departamento de detección de fugas",
    date: "2025",
    category: "Especializada",
    readTime: 7,
  },
  {
    id: "4",
    title: "Caso de éxito: Refineria dos bocas, localización de micro y nanofugas de aire y nitrogeno en intercambiadores",
    excerpt:
      "Descubre como nuestro equipo mejoro la hermetización de enormes intercambiadores gracias a la detección de micro/nanofugas, y como tu podrías hacer lo mismo",
    content:
      "El mantenimiento adecuado es crucial para garantizar la longevidad y eficiencia de los intercambiadores de calor. Nuestro equipo de trabajo tuvo la oportunidad de trabajar en refineria dos bocas, ya que habían problemas recurrentes con la hemerticidad de su intercambiadores, lo cual generaba perdida de gas y nitrogeno. Al paso de los años hemos tenido la oportunidad de poder detectar distintas fugas de gases y corregirlas para mejorar la productividad de distintas empresas, en el caso de refineria dos bocas nos pudimos dar cuenta de estas microfugas gracias a nuestro liquido detector de fugas,siendo uno de los primeros pasos para poder corregir el problema. Puedes encontrar a la venta este producto en nuestra empresa, solicita la cotización.",
    image:
      "https://images.unsplash.com/photo-1513828418004-7aa1c7e5c824?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1205",
    author: "Departamento de mantenimiento",
    date: "2025",
    category: "Caso de exito",
    readTime: 9,
  },
  {
    id: "4",
    title: "Secado total de intercambiadores de calor Refineria dos bocas",
    excerpt: "Parte 2- Secado total de intercambiadores de calor en Refineria dos bocas",
    content: "Como te mencionamos en el articulo localización de micro y nanofugas en intercambiadores para CFE, pudimos diagnosticar el problema en estos sistemas gracias a la deteccion de estas micro y nanofugas. En otros intercambiadores de esta refineria, ya se habían realizado pruebas con anterioridad, una de ellas fue por prueba hidrostatica. ¿Cúal es el problema con las pruebas hidrostaticas?,todo tanque que queda probado con agua en prueba hidrostatica, por norma oficial queda contaminado con residuos de esa agua, los cuales deben ser eliminados sin procesos dañinos. Con la aplicación de altos vacio y el proceso adecuado, logramos humedades finales del 0.3% en estos sistemas",
    image: "https://images.unsplash.com/photo-1734104465183-094bd9398584?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1190",
    author: "Departamento de mantenimiento",
    date: "2025",
    category: "Caso de éxito",
    readTime: 9,
  },
  {
    id: "5",
    title: "Terminología del vacío: Terminología y equivalencias",
    excerpt: "Diferencias entre vacío nanométrico y vacío absoluto. Presición y medición.",
    content: `VACÍO NANOMÉTRICO: A nivel práctico, se puede entender como el vacío que se mide desde cero hasta el máximo alcanzado en un punto específico, por ejemplo, al nivel del mar. En ese contexto, se habla comúnmente de 30 pulgadas de mercurio o 700 Torr (milímetros de mercurio). La forma de expresar esta medida puede variar según la ciudad y su altitud, utilizando unidades como pulgadas, centímetros o milímetros de mercurio. Sin embargo, para obtener lecturas más precisas, se recurre a unidades como micrones (milésimas de milímetro) o pascales.

VACÍO ABSOLUTO: Este concepto se refiere al estado en el que no existe presión alguna, es decir, no hay aire atmosférico ni ningún otro tipo de gas. En términos prácticos, se parte de una presión atmosférica estándar de 760 mmHg y se busca alcanzar el cero absoluto. A diferencia del vacío nanométrico, esta medición no depende de la altitud o ubicación geográfica, por lo que un mismo equipo dará la misma lectura tanto al nivel del mar como en la cima de una montaña.

Precisión y medición: El vacío absoluto permite registrar únicamente la cantidad de aire o gases restantes, lo que lo convierte en una referencia ideal para evaluar el rendimiento de bombas o sistemas de vacío. Gracias a los instrumentos electrónicos adecuados, es posible medir con gran precisión en micrones o incluso fracciones de micrones, lo que facilita aplicaciones industriales que requieren altos estándares de control y confiabilidad.`,
    image: "https://images.unsplash.com/photo-1656331797721-b593b8f00297?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    author: "Consultora Ana Silva",
    date: "8 de Noviembre, 2024",
    category: "Aplicaciones",
    readTime: 7,
  }
,
  {
    id: "7",
    title: "Liofilizadoras en el area farmacéutica y alimentaria",
    excerpt:
      "Estrategias para optimizar el consumo energético de sistemas de vacío.",
    content:
      "Las bombas de vacío pueden consumir significativos recursos energéticos. Este artículo explora técnicas de optimización incluyendo velocidad variable, recuperación de calor, aislamiento térmico y selección de equipos de alta eficiencia. Aprende cómo reducir costos operativos sin comprometer el rendimiento.",
    image:
      "https://images.unsplash.com/photo-1669707040789-b39a52afb84c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    author: "Dr. Raúl Mendez",
    date: "3 de Noviembre, 2024",
    category: "Sostenibilidad",
    readTime: 6,
  },
  {
    id: "8",
    title: "Metalizadoras, como funcionan y su función en la industria moderna.",
    excerpt:
      "Sensores y medidores para monitorear presión en sistemas de vacío.",
    content:
      "La medición precisa de presión es vital en cualquier aplicación de vacío. Exploramos diferentes tipos de sensores: manómetros Pirani, ionización, capacitivos y conductores. Cada uno tiene características únicas para diferentes rangos de presión. Aprende cómo seleccionar e instalar sensores para máxima precisión.",
    image:
      "https://images.unsplash.com/photo-1651505943305-3bd598916608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    author: "Esp. Juliana Díaz",
    date: "1 de Noviembre, 2024",
    category: "Instrumentación",
    readTime: 7,
  },
  {
    id: "9",
    title: "Caso de éxito: Optimizacion de producción en Refineria dos bocas con nuestros servicios",
    excerpt:
      "Identificar y prevenir fuentes de contaminación en líneas de vacío.",
    content:
      "La contaminación puede dañar el rendimiento de bombas y equipos conectados. Las fuentes comunes incluyen humedad, contaminantes químicos, partículas y fugas. Este artículo detalla métodos de prevención, sistemas de filtración efectivos y protocolos de purga para mantener sistemas limpios.",
    image:
      "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1103",
    author: "Químico Roberto Castro",
    date: "28 de Octubre, 2024",
    category: "Calidad",
    readTime: 8,
  },
  {
    id: "10",
    title: "Sistemas de secado de transformador de potencia",
    excerpt:
      "Aplicaciones críticas de bombas de vacío en la industria de semiconductores.",
    content:
      "La manufactura de semiconductores depende completamente de sistemas de vacío de ultra-alta calidad. Desde depósitos de películas hasta grabado y litografía, exploraremos cómo las bombas de vacío son fundamentales. Analizamos requisitos específicos, desafíos y soluciones innovadoras en esta industria de alta demanda.",
    image:
      "https://images.unsplash.com/photo-1728808668131-76d40d112271?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686",
    author: "Ing. Patricia Núñez",
    date: "25 de Octubre, 2024",
    category: "Industria",
    readTime: 9,
  },
  {
    id: "11",
    title: "Sobre Refrigeración y aire acondicionado",
    excerpt:
      "Protocolos de seguridad esencial para operadores de bombas de vacío.",
    content:
      "La operación segura es prioritaria al trabajar con sistemas de vacío. Cubrimos equipos de protección personal, procedimientos de operación segura, manejo de fugas, y respuesta ante emergencias. Este artículo proporciona un conjunto completo de directrices basadas en estándares internacionales.",
    image:
      "https://images.unsplash.com/photo-1574334292321-4844f63aefef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    author: "Dir. Seguridad Juan Martín",
    date: "22 de Octubre, 2024",
    category: "Seguridad",
    readTime: 7,
  },
  {
    id: "12",
    title: "¿Como puedo vender mi sistema de vacío usado o darlo a cuenta para uno nuevo?",
    excerpt:
      "Descubre los últimos avances y tendencias en bombas y sistemas de vacío.",
    content:
      "La tecnología de vacío continúa evolucionando con bombas más eficientes, sistemas inteligentes conectados y materiales innovadores. Exploramos desarrollos recientes en bombas magnéticas, control automatizado, y soluciones ecológicas. Conoce qué esperar en el futuro próximo de esta industria.",
    image:
      "https://images.unsplash.com/photo-1617203443096-6f53e130384b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    author: "Prof. Alicia Gómez",
    date: "20 de Octubre, 2024",
    category: "Innovación",
    readTime: 6,
  },
  {
    id: "13",
    title: "Troubleshooting Común en Bombas de Vacío",
    excerpt: "Solución rápida de problemas comunes en sistemas de vacío.",
    content:
      "Cuando algo falla, necesitas soluciones rápidas. Este artículo cubre problemas comunes como pérdida de presión, ruidos anormales, sobrecalentamiento y vibraciones. Para cada problema, proporcionamos causas probables y procedimientos de diagnóstico paso a paso.",
    image:
      "https://images.unsplash.com/photo-1581094488379-6a10d04c0f04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    author: "Técnico Especializado Leonardo Soto",
    date: "18 de Octubre, 2024",
    category: "Soporte",
    readTime: 8,
  },
  {
    id: "14",
    title: "Cálculo del Tamaño de Sistema de Vacío",
    excerpt:
      "Metodología para dimensionar correctamente sistemas de bombeo de vacío.",
    content:
      "Dimensionar correctamente un sistema es crítico para eficiencia. Cubrimos cálculos de velocidad requerida, factor de seguridad, tiempo de evacuación y selección de accesorios. Incluimos ejemplos prácticos y una hoja de cálculo para facilitar el diseño.",
    image:
      "https://plus.unsplash.com/premium_photo-1683141381544-390e29f842fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    author: "Calculista Marcos Díaz",
    date: "15 de Octubre, 2024",
    category: "Diseño",
    readTime: 8,
  },
  {
    id: "15",
    title: "Sostenibilidad Ambiental en Sistemas de Vacío",
    excerpt:
      "Prácticas ecológicas y cumplimiento ambiental en operaciones de vacío.",
    content:
      "La industria de vacío enfrenta presión para reducir su huella ambiental. Exploraremos alternativas a refrigerantes contaminantes, reciclaje de aceites, emisiones reducidas y soluciones sostenibles. Aprende cómo tu operación puede ser ambientalmente responsable sin sacrificar eficiencia.",
    image:
      "https://images.unsplash.com/photo-1472313420546-a46e561861d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    author: "Ambientalista Verde Sofía Reyes",
    date: "12 de Octubre, 2024",
    category: "Sostenibilidad",
    readTime: 7,
  },
];
