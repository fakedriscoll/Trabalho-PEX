  const allQuestions = [
      {
        question: "O que é phishing?",
        answers: ["Backup", "VPN", "Firewall", "Engenharia social" ],
        correct: 3,
        difficulty: "fácil"
      },
      {
        question: "Qual é uma boa prática para senhas?",
        answers: ["Usar '123456'", "Mesma senha em tudo", "Senha longa e única", "Data de nascimento"],
        correct: 2,
        difficulty: "fácil"
      },
      {
        question: "O que é um ransomware?",
        answers: ["Antivírus", "Backup automático", "Malware que exige resgate", "Sistema de autenticação"],
        correct: 2,
        difficulty: "médio"
      },
      {
        question: "HTTPS é importante porque...",
        answers: ["É mais rápido", "Criptografa dados", "Evita pop-ups", "É obrigatório"],
        correct: 1,
        difficulty: "fácil"
      },
      {
        question: "Qual software detecta vírus?",
        answers: ["Firewall", "Navegador", "Antivírus", "Editor de texto"],
        correct: 2,
        difficulty: "fácil"
      },
      {
        question: "Atualizações de software servem para...",
        answers: ["Apagar arquivos", "Deixar mais lento", "Mudar o design", "Corrigir falhas de segurança" ],
        correct: 3,
        difficulty: "fácil" 
      },
      {
        question: "VPN é usada para...",
        answers: ["Velocidade de internet", "Ocultar IP e tráfego", "Hackear redes", "Formatar disco"],
        correct: 1,
        difficulty: "fácil"
      },
      {
        question: "Engenharia social é...",
        answers: ["Técnica de manipulação", "Sistema de segurança", "Aplicativo de rede", "Acesso físico a servidores"],
        correct: 0,
        difficulty: "fácil"
      },
      {
        question: "Firewall serve para...",
        answers: ["Salvar senhas", "Melhorar o Wi-Fi", "Apagar vírus", "Bloquear acessos indesejados"],
        correct: 3,
        difficulty: "fácil"
      },
      {
        question: "Backup deve ser feito...",
        answers: ["Regularmente", "Nunca", "Somente quando der erro", "Quando o HD encher"],
        correct: 0,
        difficulty: "fácil"
      },
      {
        question: "O que é autenticação de dois fatores (2FA)?",
        answers: ["Autenticação com biometria", "Login com dois dispositivos", "Verificação extra além da senha", "Senha escrita duas vezes"],
        correct: 2,
        difficulty: "fácil"
      },
      {
        question: "Qual dessas é uma ameaça interna?",
        answers: ["Phishing", "Ransomware", "Ataque DDoS", "Funcionário mal-intencionado" ],
        correct: 3,
        difficulty: "médio"
      },
      {
        question: "Malware é...",
        answers: ["Software legítimo", "Software malicioso", "Sistema operacional", "Firewall"],
        correct: 1,
        difficulty: "fácil"
      },
      {
        question: "O que é spoofing?",
        answers: ["Cópia de backups", "Atualização forçada", "Abertura de portas no firewall", "Falsificação de identidade digital"],
        correct: 3,
        difficulty: "fácil" 
      },
      {
        question: "Spyware faz o quê?",
        answers: ["Protege dados", "Espiona o usuário", "Remove vírus", "Encripta arquivos"],
        correct: 1,
        difficulty: "fácil"
      },
      {
        question: "Qual prática aumenta a segurança?",
        answers: ["Clicar em links desconhecidos", "Ignorar atualizações", "Usar 2FA", "Desligar o antivírus"],
        correct: 2,
        difficulty: "fácil"
      },
      {
        question: "Um site confiável geralmente tem:",
        answers: ["http://", "domínio .xyz", "popup de sorteio", "https://"],
        correct: 3,
        difficulty: "fácil"
      },
      {
        question: "Qual é a principal função de um antivírus?",
        answers: ["Melhorar o desempenho do computador", "Bloquear acessos não autorizados à rede", "Organizar arquivos e pastas do sistema", "Detectar, prevenir e remover malwares"],
        correct: 3,
        difficulty: "difícil"
      },
      {
        question: "O que é uma VPN e por que é importante?",
        answers: ["Uma VPN é um sistema de backup de dados que impede que arquivos sejam corrompidos", "Uma VPN é uma rede privada virtual que oculta seu IP e protege a sua privacidade online", "Uma VPN é uma ferramenta para otimizar a velocidade da sua internet", "Uma VPN é um software que monitora sua atividade na internet e a compartilha com terceiros"],
        correct: 1,
        difficulty: "difícil"
      },
      {
        question: "Por que senhas fortes são importantes?",
        answers: ["São bonitas", "Dificultam o acesso não autorizado", "Facilitam o login", "Permitem acesso mais rápido"],
        correct: 1,
        difficulty: "fácil"
      },
      {
        question: "Como o malware pode se espalhar?",
        answers: ["Apenas por meio de downloads de programas maliciosos", "Exclusivamente por redes Wi-Fi públicas", "Através de arquivos de texto infectados enviados por mensagens", "Por e-mails de phishing, downloads inseguros e dispositivos infectados"],
        correct: 3,
        difficulty: "difícil"
      },
      {
        question: "Wi-Fi público é...",
        answers: ["Seguro para todos os usos", "Recomendado para transações bancárias", "Inseguro sem VPN", "Mais rápido"],
        correct: 2,
        difficulty: "médio"
      },
      {
        question: "Antivírus deve ser...",
        answers: ["Desativado para jogos", "Atualizado regularmente", "Usado só uma vez", "Ignorado se o PC for novo"],
        correct: 1,
        difficulty: "médio"
      },
      {
        question: "O que significa a sigla VPN?",
        answers: ["Visual Protection Network", "Video Processing Net", "Voice Protocol Node", "Virtual Private Network"],
        correct: 3,
        difficulty: "médio"
      },
      {
        question: "Qual o risco de clicar em links desconhecidos?",
        answers: ["Ganhar prêmios", "Ser redirecionado para sites maliciosos", "Melhorar o navegador", "Acelerar a internet"],
        correct: 1,
        difficulty: "médio"
      },
      {
        question: "O que são patches de segurança?",
        answers: ["Partes de hardware", "Peças físicas de proteção", "Correções para vulnerabilidades", "Novos programas"],
        correct: 2,
        difficulty: "médio"
      },
      {
        question: "O que é um ataque brute force?",
        answers: ["Invasão por força física", "Tentativas automatizadas de senha", "Derrubar a internet", "Vírus em pen drives"],
        correct: 1,
        difficulty: "difícil"
      },
      {
        question: "Quais são bons hábitos de cibersegurança?",
        answers: ["Compartilhar senhas", "Desligar o antivírus", "Atualizar sistemas", "Usar softwares piratas"],
        correct: 2,
        difficulty: "médio"
      },
      {
        question: "O que é uma botnet?",
        answers: ["Rede de robôs de segurança", "Rede de dispositivos infectados", "Rede de proteção", "Antivírus baseado na nuvem"],
        correct: 1,
        difficulty: "difícil"
      },
      {
        question: "Por que não se deve usar a mesma senha em todos os sites?",
        answers: ["É mais bonito", "É difícil de lembrar", "Requer internet rápida", "Um vazamento afeta todos"],
        correct: 3,
        difficulty: "médio"
      },
      {
        question: "O que é criptografia?",
        answers: ["Exclusão de dados", "Organização de arquivos", "Transformação de dados em códigos seguros", "Formato de backup"],
        correct: 2,
        difficulty: "médio"
      },
      {
        question: "O que é spear phishing?",
        answers: ["Phishing em massa", "Um antivírus", "Spam comum", "Phishing direcionado"],
        correct: 3,
        difficulty: "difícil"
      },
      {
        question: "Um certificado digital garante:",
        answers: ["Conexão segura", "Acesso remoto", "Download rápido", "Desempenho de rede"],
        correct: 0,
        difficulty: "difícil"
      },
      {
        question: "Cookies de rastreamento servem para:",
        answers: ["Salvar vírus", "Rastrear atividades online", "Melhorar segurança", "Criptografar dados"],
        correct: 1,
        difficulty: "difícil"
      },
      {
        question: "O que é um ataque zero-day?",
        answers: ["Sem impacto", "Explora falhas ainda não corrigidas", "Erro de hardware", "Bug visual"],
        correct: 1,
        difficulty: "difícil"
      },
      {
        question: "Qual destas ações é segura?",
        answers: ["Clicar em spam", "Baixar apps piratas", "Compartilhar dados bancários", "Atualizar sistema"],
        correct: 3,
        difficulty: "médio"
      },
      {
        question: "O que é autenticação biométrica?",
        answers: ["Reconhecimento por digital, face ou íris", "Login com código", "Login em dois dispositivos", "Senha com letras e números"],
        correct: 0,
        difficulty: "difícil"
      },
      {
        question: "Firewall impede:",
        answers: ["Atualizações", "Acessos não autorizados", "Impressão de documentos", "Uso de webcam"],
        correct: 1,
        difficulty: "médio"
      },
      {
        question: "Quais destes são tipos de malware?",
        answers: ["Firewall, cookie e 2FA", "Backup, HTTPS e VPN", "PDF, MP3 e DOC", "Ransomware, trojan e spyware"],
        correct: 3,
        difficulty: "difícil"
      },
      {
        question: "A principal função da VPN é:",
        answers: ["Bloquear pop-ups", "Criar redes domésticas", "Ocultar dados e IPs", "Apagar históricos"],
        correct: 2,
        difficulty: "médio"
      },
      {
        question: "Spam pode conter:",
        answers: ["Ofertas legítimas", "Links maliciosos", "Atualizações do sistema", "Notícias seguras"],
        correct: 1,
        difficulty: "médio"
      },
      {
        question: "Qual prática pode evitar roubo de identidade?",
        answers: ["Usar Wi-Fi público sem proteção", "Desativar o antivírus", "Usar softwares piratas", "Evitar compartilhar dados pessoais"],
        correct: 3,
        difficulty: "médio"
      },
      {
        question: "A navegação anônima do navegador:",
        answers: ["Impede rastreamento total", "Não salva histórico local", "Bloqueia vírus", "Desativa firewall"],
        correct: 1,
        difficulty: "difícil"
      },
      {
        question: "O que é um trojan?",
        answers: ["Cavalo de Tróia digital", "Antivírus", "Firewall físico", "Extensão do navegador"],
        correct: 0,
        difficulty: "médio"
      },
      {
        question: "Ataques de engenharia social exploram:",
        answers: ["Falhas em cabos", "Desatenção humana", "Erros de código", "Velocidade da internet"],
        correct: 1,
        difficulty: "difícil"
      },
      {
        question: "Senhas devem conter:",
        answers: ["Letras, números e símbolos", "Só letras minúsculas", "Apenas números", "Palavras simples"],
        correct: 0,
        difficulty: "médio"
      },
      {
        question: "Softwares originais são mais seguros porque:",
        answers: ["São gratuitos", "Não funcionam", "Recebem suporte e atualizações", "Não precisam de senha"],
        correct: 2,
        difficulty: "médio"
      },
      {
        question: "O que é social engineering baiting?",
        answers: ["Invasão por hardware", "Enganar com algo atrativo, como um pen drive", "Erro de software", "Criação de senhas"],
        correct: 1,
        difficulty: "difícil"
      },
      {
        question:"O que é engenharia social?",
        answers: ["Exploração de vulnerabilidades físicas em sistemas de segurança", "Manipulação psicológica para obter informações confidenciais", "Programação de vírus e malwares para infectar computadores", "Uso de criptografia para proteger dados sensíveis"],
        correct: 1,
        difficulty: "médio"
      }
    ];

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    let questions = shuffle(allQuestions).slice(0, 50);
    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-button");
    const scoreContainer = document.getElementById("score-container");
    const scoreText = document.getElementById("score");
    const loginScreen = document.getElementById("login-screen");

    function showQuestion() {
      resetState();
      const question = questions[currentQuestionIndex];
      questionElement.textContent = `Pergunta ${currentQuestionIndex + 1}: ${question.question}`;
      const letras = ["A", "B", "C", "D"];

      question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = `${letras[index]}. ${answer}`;
        button.classList.add("answer-button");
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
      });
    }

    function resetState() {
      answersElement.innerHTML = "";
      nextButton.classList.add("hidden");
    }

    function selectAnswer(selectedIndex) {
      const question = questions[currentQuestionIndex];
      const isCorrect = selectedIndex === question.correct;

      if (isCorrect) score++;

      const buttons = document.querySelectorAll(".answer-button");
      buttons.forEach((button, i) => {
        button.disabled = true;
        if (i === question.correct) {
          button.style.backgroundColor = "#c8e6c9";
        } else if (i === selectedIndex) {
          button.style.backgroundColor = "#ffcdd2";
        }
      });

      nextButton.classList.remove("hidden");
    }

    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    });

    function showScore() {
      document.getElementById("quiz").classList.add("hidden");
      scoreContainer.classList.remove("hidden");
      scoreText.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
    }

    // Modo administrador
    const adminPanel = document.getElementById("admin-panel");
    const adminModeButton = document.getElementById("admin-mode-button");
    const saveButton = document.getElementById("save-question");
    const exitButton = document.getElementById("exit-admin");

    adminModeButton.addEventListener("click", () => {
      const senha = prompt("Digite a senha para acessar o modo administrador:");
      if (senha === "./User!@#") {
        loginScreen.classList.add("hidden");
        adminPanel.classList.remove("hidden");
      } else if (senha !== null) {
        alert("Senha incorreta!");
      }
    });

    exitButton.addEventListener("click", () => {
      adminPanel.classList.add("hidden");
      loginScreen.classList.remove("hidden");
    });

    saveButton.addEventListener("click", () => {
      const questionText = document.getElementById("new-question").value;
      const options = [
        document.getElementById("optionA").value,
        document.getElementById("optionB").value,
        document.getElementById("optionC").value,
        document.getElementById("optionD").value,
      ];
      const correct = parseInt(document.getElementById("correct-answer").value);

      if (questionText && options.every(opt => opt !== "")) {
        allQuestions.push({ question: questionText, answers: options, correct });
        alert("Pergunta adicionada com sucesso!");
        questions = shuffle(allQuestions).slice(0, 50);
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById("new-question").value = "";
        document.getElementById("optionA").value = "";
        document.getElementById("optionB").value = "";
        document.getElementById("optionC").value = "";
        document.getElementById("optionD").value = "";
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });

    // Tela de login
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", () => {
      const selectedLevel = document.getElementById("difficulty-select").value;
      questions = getQuestionsBySelectedDifficulty(selectedLevel); // ou getQuestionsByDifficulty() se for fixo
      currentQuestionIndex = 0;
      score = 0;
      loginScreen.classList.add("hidden");
      document.getElementById("quiz").classList.remove("hidden");
      showQuestion();
    });


    // Recomeçar (voltar à tela de login)
    const restartButton = document.getElementById("restart-button");

    restartButton.addEventListener("click", () => {
      questions = shuffle(allQuestions).slice(0, 50);
      currentQuestionIndex = 0;
      score = 0;
      scoreContainer.classList.add("hidden");
      loginScreen.classList.remove("hidden");
    });

    function getQuestionsBySelectedDifficulty(level) {
      if (level === "todas") {
        return shuffle(allQuestions).slice(0, 50); // Retorna todas as perguntas aleatoriamente
      }
      return shuffle(allQuestions.filter(q => q.difficulty === level)).slice(0, 50);
    }

    // Após o login, mostrar o quiz e desabilitar o seletor de dificuldade
    document.getElementById('login-button').addEventListener('click', function() {
      // Esconde a tela de login
      document.getElementById('login-screen').classList.add('hidden');
      
      // Exibe a tela do quiz
      document.getElementById('quiz').classList.remove('hidden');
      
      // Desabilita o seletor de dificuldade ao iniciar o quiz
      document.getElementById('difficulty-select').disabled = true;
    });

    function showScore() {
      document.getElementById("quiz").classList.add("hidden");
      scoreContainer.classList.remove("hidden");
      scoreText.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;

      // Definir o feedback com base na pontuação
      let feedback = "";

      if (score === questions.length) {
        feedback = "Excelente! Você acertou todas as perguntas!";
      } else if (score >= questions.length * 0.8) {
        feedback = "Ótimo trabalho! Você tem um bom conhecimento em cibersegurança.";
      } else if (score >= questions.length * 0.5) {
        feedback = "Bom trabalho! Mas ainda há algumas áreas para melhorar.";
      } else {
        feedback = "Precisa melhorar um pouco mais. Continue praticando!";
      }

      // Criar o elemento de feedback e adicionar na tela
      const feedbackElement = document.createElement("p");
      feedbackElement.textContent = feedback;
      feedbackElement.classList.add("feedback");  // Adicione uma classe para estilizar
      scoreContainer.appendChild(feedbackElement);
    }

    function getQuestionsBySelectedDifficulty(difficulty) {
      let filteredQuestions;
    
      if (difficulty === "todas") {
        filteredQuestions = [...allQuestions]; // copia todas
      } else {
        filteredQuestions = allQuestions.filter(q => q.difficulty === difficulty);
      }
    
      // Embaralha e pega até 50 questões (ou menos, se não houver tantas)
      return shuffle(filteredQuestions).slice(0, 50);
    }

    // Seleciona o botão de alternância de tema
  const themeToggleButton = document.getElementById('theme-toggle');

  // Verifica se o tema escuro está ativado, se sim, aplica o tema escuro ao carregar a página
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Alterna entre o tema escuro e o tema claro quando o botão é clicado
  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Salva a preferência do usuário no localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
  });

  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score-container").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("restart-button").classList.add("hidden");

    // Reabilita o seletor de dificuldade
    document.getElementById("difficulty-select").disabled = false;

    // Se quiser redefinir a dificuldade selecionada:
    // document.getElementById("difficulty-select").value = "";

    loadQuestion();
  }
