
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = '☀️';
        this.style.transform = 'rotate(360deg)';
    } else {
        this.textContent = '🌙';
        this.style.transform = 'rotate(0deg)';
    }
    
    setTimeout(() => {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    }, 300);
});

const analisarBtn = document.getElementById('analisarBtn');
const notaInput = document.getElementById('notaInput');
const resultadoArea = document.getElementById('resultadoArea');

const recomendacoes = {
    'excelente': {
        icon: '🌟',
        nivel: 'Excelente!',
        cor: 'result-success',
        mensagem: 'Parabéns! Você está com um desempenho excepcional. Recomendamos conteúdos avançados para continuar evoluindo:',
        conteudo: '📚 Algoritmos Avançados, 🧠 Redes Neurais Profundas, 🤖 Robótica Educacional'
    },
    'bom': {
        icon: '👍',
        nivel: 'Bom desempenho!',
        cor: 'result-success',
        mensagem: 'Você está no caminho certo. Continue praticando e explorando novos conceitos:',
        conteudo: '📊 Análise de Dados, 💻 Programação Orientada a Objetos, 🔍 Estruturas de Dados'
    },
    'regular': {
        icon: '📈',
        nivel: 'Desempenho regular',
        cor: 'result-warning',
        mensagem: 'Identificamos algumas áreas que precisam de mais atenção. Sugerimos revisar:',
        conteudo: '📝 Lógica de Programação, 🧮 Matemática Aplicada, 📖 Leitura Complementar'
    },
    'baixo': {
        icon: '🔄',
        nivel: 'Precisa de atenção',
        cor: 'result-danger',
        mensagem: 'Não se preocupe! Todos temos dificuldades. Recomendamos um plano de estudos focado em:',
        conteudo: '📘 Conceitos Básicos, 🎯 Exercícios Práticos, 🤝 Aulas de Reforço'
    }
};

function analisarDesempenho(nota) {
      let resultado;
    
    if (nota >= 9) {
        resultado = 'excelente';
    } else if (nota >= 7) {
        resultado = 'bom';
    } else if (nota >= 5) {
        resultado = 'regular';
    } else {
        resultado = 'baixo';
    }
    
    return resultado;
}

analisarBtn.addEventListener('click', function() {
    const nota = parseFloat(notaInput.value);
  
    if (isNaN(nota) || nota < 0 || nota > 10) {
        resultadoArea.innerHTML = `
            <p style="color: #e74c3c; font-weight: 600;">⚠️ Por favor, digite uma nota válida entre 0 e 10!</p>
        `;
        return;
    }
   
    const resultado = analisarDesempenho(nota);
    const data = recomendacoes[resultado];
    

    resultadoArea.innerHTML = `
        <p>⏳ Processando com IA...</p>
    `;
    resultadoArea.style.opacity = '0.5';
    
    setTimeout(() => {
        resultadoArea.innerHTML = `
            <div class="${data.cor}" style="text-align: left;">
                <p style="font-size: 1.8rem; margin-bottom: 10px;">${data.icon}</p>
                <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 10px;">${data.nivel}</p>
                <p style="margin-bottom: 10px;">${data.mensagem}</p>
                <p style="background: rgba(102, 126, 234, 0.1); padding: 12px; border-radius: 8px; margin-top: 10px;">
                    <strong>📌 Recomendações:</strong><br>
                    ${data.conteudo}
                </p>
                <p style="margin-top: 15px; font-size: 0.85rem; color: #888;">
                    🤖 Análise baseada em Machine Learning
                </p>
            </div>
        `;
        resultadoArea.style.opacity = '1';
    }, 800);
});

notaInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        analisarBtn.click();
    }
});


const sections = document.querySelectorAll('.section-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});


console.log('🤖 IA Educacional - Mapeando Ideias e Prototipando Soluções');
console.log('🚀 Projeto desenvolvido com HTML, CSS e JavaScript');
console.log('📚 Use o protótipo para simular a análise da IA!');

const titulo = document.querySelector('.header-content h1');
const textoOriginal = titulo.textContent;
titulo.textContent = '';

let i = 0;
function digitarTitulo() {
    if (i < textoOriginal.length) {
        titulo.textContent += textoOriginal.charAt(i);
        i++;
        setTimeout(digitarTitulo, 50);
    }
}


setTimeout(digitarTitulo, 500);
