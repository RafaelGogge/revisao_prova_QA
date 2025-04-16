const questions = [
    {
        question: "O teste de caixa preta avalia:",
        choices: ["A lógica interna do sistema", "O comportamento do sistema sem olhar o código", "O desempenho do hardware"],
        answer: 1,
        topic: "Testes de caixa preta"
    },
    {
        question: "O que representa a 'velocity' em metodologias ágeis?",
        choices: ["Número de bugs resolvidos", "Funcionalidades planejadas por sprint", "Quantidade de trabalho concluído por sprint"],
        answer: 2,
        topic: "Métricas ágeis"
    },
    {
        question: "Scrum valoriza mais processos que pessoas?",
        choices: ["Verdadeiro", "Falso"],
        answer: 1,
        topic: "Princípios do Scrum"
    },
    {
        question: "O teste de aceitação é realizado por quem?",
        choices: ["Pelo Scrum Master", "Pela equipe de desenvolvimento", "Pelo cliente"],
        answer: 2,
        topic: "Testes de aceitação"
    },
    {
        question: "O lead time mede:",
        choices: ["O tempo para compilar o código", "O tempo desde a solicitação até a entrega", "O tempo de execução de um teste"],
        answer: 1,
        topic: "Métricas de fluxo"
    },
    {
        question: "Qual das opções representa uma qualidade externa?",
        choices: ["Manutenibilidade", "Reuso", "Usabilidade"],
        answer: 2,
        topic: "Qualidade de Software"
    },
    {
        question: "O que significa verificar o software?",
        choices: ["Testar se ele atende os requisitos do cliente", "Confirmar se estamos construindo o produto certo", "Garantir que estamos construindo o produto corretamente"],
        answer: 2,
        topic: "Verificação e Validação"
    },
    {
        question: "Qual é a finalidade dos casos de teste?",
        choices: ["Descrever requisitos funcionais", "Simular o uso real do sistema", "Definir um passo a passo e resultado esperado para uma funcionalidade"],
        answer: 2,
        topic: "Casos de Teste"
    },
    {
        question: "O que significa qualidade de software?",
        choices: [
            "Apenas atender aos requisitos técnicos do código",
            "Satisfazer o cliente mesmo que não haja requisitos",
            "Conformidade com requisitos e satisfação do cliente"
        ],
        answer: 2,
        topic: "Qualidade de Software"
    },
    {
        question: "Qual das opções abaixo representa uma qualidade interna do software?",
        choices: [
            "Usabilidade",
            "Desempenho",
            "Manutenibilidade"
        ],
        answer: 2,
        topic: "Qualidade Interna"
    },
    {
        question: "Qual das opções é um exemplo de métrica de software?",
        choices: [
            "Confirmação de histórias de usuário",
            "Tempo médio de resposta",
            "Execução de testes de unidade"
        ],
        answer: 1,
        topic: "Métricas de Software"
    },
    {
        question: "O que o Manifesto Ágil prioriza?",
        choices: [
            "Documentação extensa e processos rigorosos",
            "Indivíduos e interações, software funcionando, colaboração com o cliente",
            "Aderência a planos rígidos e contratos fechados"
        ],
        answer: 1,
        topic: "Abordagens Ágeis"
    },
    {
        question: "Qual das opções NÃO é um método ágil?",
        choices: [
            "XP (Extreme Programming)",
            "Kanban",
            "Waterfall"
        ],
        answer: 2,
        topic: "Abordagens Ágeis"
    },
    {
        question: "Quais são as três partes principais de uma história de usuário?",
        choices: [
            "Documento, requisitos e entrega",
            "Cartão, conversas e confirmação",
            "Sprint, backlog e produto"
        ],
        answer: 1,
        topic: "Histórias de Usuário"
    },
    {
        question: "Qual a diferença entre verificação e validação?",
        choices: [
            "Verificação garante que construímos o produto certo, validação garante que o fizemos corretamente",
            "Verificação testa o produto em produção, validação é feita apenas no início",
            "Verificação é responsabilidade do cliente, validação é do desenvolvedor"
        ],
        answer: 0,
        topic: "Testes de Software"
    },
    {
        question: "O teste de sistema tem como objetivo:",
        choices: [
            "Avaliar pequenas partes do código individualmente",
            "Simular o uso real do sistema",
            "Verificar se o cliente está satisfeito com o produto"
        ],
        answer: 1,
        topic: "Níveis de Teste"
    },
    {
        question: "Qual métrica ágil mede o número de itens entregues por período?",
        choices: [
            "Velocity",
            "Lead Time",
            "Throughput"
        ],
        answer: 2,
        topic: "Métricas Ágeis"
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledQuestions = shuffle([...questions]);
const quizForm = document.getElementById('quizForm');

shuffledQuestions.forEach((q, index) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.id = `question-${index}`;

    const p = document.createElement('p');
    p.textContent = q.question;
    div.appendChild(p);

    q.choices.forEach((choice, i) => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'q' + index;
        radio.value = i;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + choice));
        div.appendChild(label);
        div.appendChild(document.createElement('br'));
    });

    quizForm.appendChild(div);
});

function checkAnswers() {
    let score = 0;

    shuffledQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const questionDiv = document.getElementById(`question-${index}`);
        const feedback = document.createElement('div');
        feedback.classList.add('feedback');

        if (selected && parseInt(selected.value) === q.answer) {
            score++;
            feedback.innerHTML = "<span class='correct'>✔ Correto!</span>";
        } else {
            feedback.innerHTML = `
    <span class='incorrect'>✘ Errado.</span><br>
    Resposta correta: <strong>${q.choices[q.answer]}</strong><br>
    🔁 Revise: <em>${q.topic}</em>
  `;
        }

        questionDiv.appendChild(feedback);
    });

    document.getElementById('result').innerHTML = `Você acertou <strong>${score}</strong> de <strong>${shuffledQuestions.length}</strong> questões.`;
}