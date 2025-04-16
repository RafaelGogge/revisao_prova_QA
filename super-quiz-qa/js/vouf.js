
// Array com as questões, resposta correta, tema de revisão e explicação detalhada.
const baseQuestions = [
    ["A qualidade de software é definida apenas pela conformidade com os requisitos técnicos.", 1, "Qualidade de Software", "A qualidade de software não se limita aos requisitos técnicos. Ela também envolve atributos externos como confiabilidade, usabilidade e satisfação do cliente."],
    ["A qualidade externa de um software inclui atributos como confiabilidade e desempenho.", 0, "Qualidade Externa", "A qualidade externa refere-se a características perceptíveis pelo usuário, como confiabilidade, desempenho e experiência geral do produto."],
    ["Métricas de software são medidas qualitativas do desempenho de um sistema.", 1, "Métricas de Software", "Métricas de software são medidas quantitativas usadas para avaliar aspectos como desempenho e qualidade do sistema."],
    ["A densidade de defeitos é uma métrica usada para avaliar a qualidade do código.", 0, "Métricas de Código", "Essa métrica mede o número de defeitos em relação ao tamanho do código, identificando áreas que podem precisar de melhorias."],
    ["O Manifesto Ágil valoriza mais processos e ferramentas do que indivíduos e interações.", 1, "Manifesto Ágil", "O Manifesto Ágil prioriza indivíduos e interações sobre processos e ferramentas para fomentar colaboração e eficácia no trabalho."],
    ["No Scrum, o trabalho é dividido em sprints curtas, geralmente de 2 a 4 semanas.", 0, "Scrum", "Sprints são ciclos de trabalho com duração fixa que permitem entregas rápidas e frequentes para manter o foco da equipe."],
    ["Testes de software servem apenas para identificar erros no código-fonte.", 1, "Testes de Software", "Testes de software não se limitam a identificar erros. Eles também garantem conformidade com requisitos e melhoram a qualidade geral do sistema."],
    ["O teste de caixa preta avalia o comportamento do software sem considerar seu código-fonte.", 0, "Teste de Caixa Preta", "Esse teste foca nas entradas e saídas do sistema, ignorando sua lógica interna, para garantir o comportamento esperado."],
    ["O teste de unidade verifica a integração entre diferentes partes do sistema.", 1, "Teste de Unidade", "Testes de unidade avaliam partes individuais do código. Para integração, são usados testes específicos de integração."],
    ["O teste de aceitação é validado pelo cliente para garantir que o sistema atende às suas necessidades.", 0, "Teste de Aceitação", "Esse teste é realizado pelo cliente ou representantes para confirmar que o produto está conforme os requisitos definidos."],
    ["O Scrum Master é responsável por definir os requisitos do produto.", 1, "Scrum Roles", "O Scrum Master facilita o processo e remove impedimentos, mas os requisitos são definidos pelo Product Owner."],
    ["A verificação de software foca em garantir que o produto foi construído corretamente.", 0, "Verificação de Software", "Verificação garante que o produto foi construído de acordo com os requisitos, enquanto validação verifica se ele atende às expectativas do cliente."],
    ["O lead time mede o tempo total desde a solicitação de uma funcionalidade até sua entrega.", 0, "Métricas de Lead Time", "Essa métrica ajuda a entender o fluxo de trabalho e identificar gargalos para otimizar o processo."],
    ["Testes de carga avaliam a capacidade do sistema de lidar com um número elevado de usuários.", 0, "Testes de Carga", "Esses testes simulam cenários de alta demanda para garantir que o sistema mantém desempenho sob carga pesada."],
    ["O método T-shirt Sizing classifica tarefas com base no número de desenvolvedores necessários.", 1, "T-shirt Sizing", "Esse método usa tamanhos (P, M, G) para estimar complexidade e esforço, sem detalhar o número de desenvolvedores."],
    ["A velocidade (velocity) em metodologias ágeis mede a quantidade de trabalho concluída por sprint.", 0, "Velocity", "Essa métrica é usada para prever o desempenho e planejar entregas futuras com base no histórico da equipe."],
    ["O throughput mede o número de funcionalidades concluídas dentro de um período de tempo.", 0, "Throughput", "Throughput indica o ritmo de entrega, ajudando a avaliar o desempenho de desenvolvimento ao longo do tempo."],
    ["No Scrum, reuniões diárias de 15 minutos são chamadas de revisões de sprint.", 1, "Scrum Events", "Essas reuniões são conhecidas como Daily Standups, enquanto revisões de sprint ocorrem ao final do ciclo."],
    ["O teste de caixa branca analisa a lógica interna do código do software.", 0, "Teste de Caixa Branca", "Esse teste verifica a lógica interna e estruturas do código para garantir que funcionem conforme esperado."],
    ["A análise de código estática pode detectar problemas de duplicação e estilo de código.", 0, "Análise Estática", "Essa análise é feita sem executar o código, identificando problemas de qualidade, como redundância e estilo."],
    ["No XP (Extreme Programming), a programação em par não é recomendada.", 1, "XP - Programação em Par", "Programação em par é altamente recomendada no XP para melhorar colaboração e qualidade do código produzido."],
    ["O planejamento da qualidade define metas e padrões a serem seguidos no desenvolvimento.", 0, "Planejamento da Qualidade", "Esse planejamento define objetivos claros para garantir a qualidade do produto final durante o processo de desenvolvimento."],
    ["O SonarQube é uma ferramenta usada para gerenciar sprints no Scrum.", 1, "SonarQube", "SonarQube é usado para análise de código e qualidade, não para gerenciamento de sprints no Scrum."],
    ["A retrospectiva do sprint ocorre no início da sprint para definir os objetivos.", 1, "Scrum Retrospectiva", "Retrospectivas são feitas ao final da sprint para refletir e melhorar processos para os próximos ciclos."],
    ["O teste beta é realizado com um grupo maior de usuários em ambiente real.", 0, "Teste Beta", "Testes beta permitem que um grupo seleto de usuários experimente o produto em cenários reais antes do lançamento oficial."],
    ["A garantia de qualidade (QA) se concentra em eliminar produtos que não atendem aos padrões.", 1, "QA vs QC", "QA busca prevenir problemas durante o processo de desenvolvimento, enquanto QC foca em detectar defeitos no produto final."],
    ["A especificação completa de requisitos elimina totalmente ambiguidades no desenvolvimento.", 1, "Especificação de Requisitos", "Mesmo especificações detalhadas podem conter ambiguidades. É importante revisá-las continuamente durante o desenvolvimento."],
    ["O backlog do produto contém todas as funcionalidades desejadas para um software.", 0, "Product Backlog", "Esse backlog é gerenciado pelo Product Owner e prioriza as funcionalidades com base nas necessidades e metas do projeto."],
    ["O Kanban usa um quadro visual para gerenciar o fluxo de trabalho.", 0, "Kanban", "O Kanban utiliza cartões e colunas para visualizar o progresso e garantir que o trabalho flua eficientemente."],
    ["A metodologia ágil favorece ciclos de desenvolvimento longos e detalhados antes da entrega.", 1, "Ciclos Ágeis", "Metodologias ágeis favorecem ciclos curtos com entregas incrementais e frequentes, adaptando-se às mudanças rapidamente."]
];

// Variável global para armazenar as questões embaralhadas usadas no quiz atual
let currentQuestions = [];

// Função para embaralhar elementos de um array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Gera o quiz com as questões embaralhadas e armazena na variável global currentQuestions
function generateQuiz() {
    const numQuestions = parseInt(document.getElementById("numQuestions").value);
    const quizForm = document.getElementById("quizForm");
    quizForm.innerHTML = ""; // Limpa o formulário antes de gerar as novas questões

    // Embaralha as questões e guarda no currentQuestions
    currentQuestions = shuffle([...baseQuestions]);

    for (let i = 0; i < numQuestions; i++) {
        const q = currentQuestions[i];
        const div = document.createElement("div");
        div.className = "question";
        div.id = "q" + i;

        const p = document.createElement("p");
        p.textContent = `${i + 1}. ${q[0]}`;
        div.appendChild(p);

        // Cria os botões de opção para as respostas "Verdadeiro" e "Falso"
        ["Verdadeiro", "Falso"].forEach((choice, index) => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "q" + i;
            input.value = index;
            label.appendChild(input);
            label.append(" " + choice);
            div.appendChild(label);
            div.appendChild(document.createElement("br"));
        });

        quizForm.appendChild(div);
    }
}

// Verifica as respostas e exibe o feedback com explicação para cada pergunta
function checkAnswers() {
    let score = 0;
    const numQuestions = parseInt(document.getElementById("numQuestions").value);

    for (let i = 0; i < numQuestions; i++) {
        const selected = document.querySelector(`input[name='q${i}']:checked`);
        const div = document.getElementById("q" + i);
        const fb = document.createElement("div");
        fb.className = "feedback";

        if (selected && parseInt(selected.value) === currentQuestions[i][1]) {
            score++;
            fb.innerHTML = `<span class='correct'>✔ Correto!</span><br>
                          Explicação: ${currentQuestions[i][3]}`;
        } else {
            fb.innerHTML = `<span class='incorrect'>✘ Errado.</span><br>
                          Resposta correta: <strong>${["Verdadeiro", "Falso"][currentQuestions[i][1]]}</strong><br>
                          🔁 Revise: <em>${currentQuestions[i][2]}</em><br>
                          Explicação: ${currentQuestions[i][3]}`;
        }
        div.appendChild(fb);
    }

    document.getElementById("result").innerHTML = `Você acertou <strong>${score}</strong> de <strong>${numQuestions}</strong> questões.`;
}