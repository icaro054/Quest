const perguntas = [
    {
      pergunta: 'Geografia: Em relação à distribuição populacional mundial, assinale a alternativa correta:',
      resposta: [
        'A maior parte da população mundial vive em áreas urbanas de países desenvolvidos.',
        'A Ásia abriga a maior parte da população mundial, concentrada principalmente em áreas rurais.',
        'A América do Norte possui a menor densidade populacional entre todos os continentes.',
        'A África apresenta uma distribuição populacional uniforme em todo o seu território.',
        'A Europa é o continente com o menor crescimento populacional nas últimas décadas.'
      ],
      correta: 1
    },
    {
      pergunta: 'História: Sobre a Revolução Industrial, é correto afirmar que:',
      resposta: [
        'Iniciou-se no século XVII na Inglaterra, com a mecanização da produção têxtil.',
        'Aumentou significativamente a mão de obra escrava em países colonizados.',
        'Foi um fenômeno exclusivamente europeu, sem impacto significativo em outras regiões.',
        'Resultou em uma diminuição do fosso econômico entre países industrializados e não industrializados.',
        'Causou uma migração em massa do campo para as cidades.'
      ],
      correta: 0
    },
    {
      pergunta: 'Biologia: Qual a função do sistema respiratório humano?',
      resposta: [
        'Produzir hormônios essenciais para o crescimento.',
        'Realizar a troca gasosa entre o organismo e o meio ambiente.',
        'Eliminar resíduos nitrogenados do corpo.',
        'Regular a temperatura corporal.',
        'Transportar oxigênio e nutrientes para as células.'
      ],
      correta: 1
    },
    {
      pergunta: 'Português: Qual o sentido da expressão "bater as botas"?',
      resposta: [
        'Comprar novos sapatos.',
        'Morrer.',
        'Praticar esportes radicais.',
        'Dormir.',
        'Quebrar algo.'
      ],
      correta: 1
    },
    {
      pergunta: 'História: Qual evento marcou o início da Idade Média na Europa Ocidental?',
      resposta: [
        'A queda do Império Romano do Ocidente.',
        'A assinatura da Magna Carta.',
        'A Revolução Francesa.',
        'A chegada de Cristóvão Colombo às Américas.',
        'A fundação de Constantinopla.'
      ],
      correta: 0
    },
    {
      pergunta: 'Geografia: O que são fatores naturais de um ambiente?',
      resposta: [
        'Elementos produzidos pela intervenção humana.',
        'Conjunto de elementos físicos e biológicos do meio ambiente.',
        'Aspectos culturais de uma região.',
        'Processos econômicos que influenciam a paisagem.',
        'Elementos políticos que definem a divisão territorial.'
      ],
      correta: 1
    },
    {
      pergunta: 'História: Qual foi o evento que marcou o fim da Idade Média na Europa?',
      resposta: [
        'A descoberta do Novo Mundo por Cristóvão Colombo.',
        'A assinatura da Magna Carta.',
        'A Revolução Francesa.',
        'A Guerra dos Cem Anos.',
        'A Reforma Protestante.'
      ],
      correta: 4
    },
    {
      pergunta: 'Português: Qual é o tema principal do livro "Dom Casmurro" de Machado de Assis?',
      resposta: [
        'A luta de classes no Brasil.',
        'A colonização portuguesa.',
        'O processo de independência do Brasil.',
        'O ciúme e a paranoia.',
        'A vida de um rei medieval.'
      ],
      correta: 3
    },
    {
      pergunta: 'História: Qual foi o tratado que encerrou a Primeira Guerra Mundial?',
      resposta: [
        'Tratado de Versalhes.',
        'Tratado de Tordesilhas.',
        'Tratado de Nanquim.',
        'Tratado de Westfália.',
        'Pacto Molotov-Ribbentrop.'
      ],
      correta: 0
    },
    {
      pergunta: 'Biologia: O que é mitose?',
      resposta: [
        'Um tipo de reprodução sexuada.',
        'Um processo de divisão celular que produz células-filhas com metade do número de cromossomos da célula-mãe.',
        'Um processo de divisão celular que produz células-filhas geneticamente idênticas à célula-mãe.',
        'Um tipo de reprodução assexuada.',
        'Um processo exclusivo de células vegetais.'
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('nome', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      } 
     
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)  
  }