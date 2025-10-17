document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para el Menú Lateral Retráctil ---
    const sidebar = document.getElementById('main-sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const mainContent = document.querySelector('.main-content');
    const sidebarStateKey = 'sidebarState';

    const applySidebarState = (state) => {
        if (state === 'active') {
            sidebar.classList.add('is-active');
            toggleBtn.classList.add('is-active');
            toggleBtn.setAttribute('aria-expanded', 'true');
            if (window.innerWidth >= 768) {
                mainContent.classList.add('sidebar-active');
            }
        } else {
            sidebar.classList.remove('is-active');
            toggleBtn.classList.remove('is-active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            if (window.innerWidth >= 768) {
                mainContent.classList.remove('sidebar-active');
            }
        }
    };

    // Cargar estado guardado
    const savedState = localStorage.getItem(sidebarStateKey);
    // Por defecto, expandido en desktop, colapsado en móvil
    const defaultState = window.innerWidth >= 768 ? 'active' : 'collapsed';
    applySidebarState(savedState || defaultState);

    toggleBtn.addEventListener('click', () => {
        const currentState = sidebar.classList.contains('is-active') ? 'active' : 'collapsed';
        const newState = currentState === 'active' ? 'collapsed' : 'active';
        localStorage.setItem(sidebarStateKey, newState);
        applySidebarState(newState);
    });

    // Cerrar menú en móvil al hacer clic en un enlace
    sidebar.addEventListener('click', (e) => {
        if (window.innerWidth < 768 && (e.target.closest('a') || e.target.closest('button'))) {
            localStorage.setItem(sidebarStateKey, 'collapsed');
            applySidebarState('collapsed');
        }
    });
    
    // --- Lógica para el Modal de Prompt Diagnóstico (index.html) ---
    const modalPrompt = document.getElementById('modal-prompt');
    if (modalPrompt) {
        const promptBtn = document.getElementById('prompt-diagnostico-btn');
        const cancelarBtn = document.getElementById('cancelar-btn');
        const cerrarBtn = document.getElementById('cerrar-btn');
        const generarBtn = document.getElementById('generar-btn');
        const copiarBtn = document.getElementById('copiar-btn');
        const inputDiagnostico = document.getElementById('input-diagnostico');
        const resultContainer = document.getElementById('result-container');
        const resultText = document.getElementById('result-text');
        const copyMessage = document.getElementById('copy-message');

        const abrirModal = () => {
            modalPrompt.classList.add('is-visible');
            inputDiagnostico.focus();
        };

        const cerrarModal = () => {
            modalPrompt.classList.remove('is-visible');
            resultContainer.style.display = 'none';
            inputDiagnostico.value = '';
            copyMessage.style.display = 'none';
        };

        promptBtn.addEventListener('click', (e) => {
            e.preventDefault();
            abrirModal();
        });

        cancelarBtn.addEventListener('click', cerrarModal);
        cerrarBtn.addEventListener('click', cerrarModal);

        generarBtn.addEventListener('click', () => {
            const diagnostico = inputDiagnostico.value.trim();
            if (diagnostico === '') {
                alert('Por favor, introduce un diagnóstico.');
                return;
            }
            const textoGenerado = `Asume el rol de un anatomopatológo senior del MD Anderson Cancer Center. Redacta un informe anatomopatológico completo de ${diagnostico}.\n\nEn base al diagnostico proporcionado redacta lo siguiente, informe antomopatologico:\nMacroscopía: un párrafo conciso.\nMicroscopía: un párrafo con los criterios  diagnosticos.\nDiagnóstico: una línea final clara y sin ambigüedad.`;
            resultText.textContent = textoGenerado;
            resultContainer.style.display = 'block';
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        });

        copiarBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(resultText.textContent).then(() => {
                copyMessage.style.display = 'block';
                window.open('https://chat.deepseek.com/', '_blank');
            }).catch(err => {
                console.error('Error al copiar: ', err);
                alert('Error al copiar el texto. Por favor, cópialo manually.');
            });
        });

        window.addEventListener('click', (event) => {
            if (event.target === modalPrompt) {
                cerrarModal();
            }
        });
    }

    // --- Lógica para el Formulario de Reporte (formularioreporteap.html) ---
    const pathologyForm = document.getElementById('pathologyForm');
    if (pathologyForm) {
        pathologyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(pathologyForm);
            const data = Object.fromEntries(formData.entries());

            const promptTextContent = `DATOS DEL PACIENTE:
Edad: ${data.edad || 'No disponible'}
Sexo: ${data.sexo || 'No disponible'}
Tiempo de evolución: ${data.tiempoEvolucion || 'No disponible'}
Localización: ${data.localizacion || 'No disponible'}
Hallazgos clínicos: ${data.hallazgosClinicos || 'No disponible'}

HALLAZGOS PATOLÓGICOS:
Descripción microscópica: ${data.descripcionMicroscopica || 'No disponible'}
Inmunohistoquímica: ${data.inmunohistoquimica || 'No disponible'}
Otros estudios: ${data.otrosEstudios || 'No disponible'}
Antecedentes relevantes: ${data.antecedentesRelevantes || 'No disponible'}

Eres un anatomopatólogo senior del MD Anderson Cancer Center, especializado en dermatopatología. Basándote EXCLUSIVAMENTE en los datos proporcionados, genera un reporte preliminar estructurado que incluya:
Descripción macroscópica en un párrafo y microscópica en un párrafo
Interpretación de hallazgos inmunohistoquímicos (si están disponibles)
Diagnósticos diferenciales priorizados
Estudios complementarios necesarios para confirmar/descartar diagnósticos
Conclusión preliminar y recomendaciones

INSTRUCCIONES ESPECÍFICAS:
Si algún dato marcado como "No disponible" es crítico para el diagnóstico, menciónalo explícitamente en la sección de estudios complementarios.
Estructura el reporte usando los mismos encabezados solicitados.
Mantén un lenguaje técnico apropiado para comunicación entre especialistas.`;

            const resultContainer = document.getElementById('resultContainer');
            const promptTextEl = document.getElementById('promptText');
            promptTextEl.value = promptTextContent;
            resultContainer.style.display = 'block';
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('copyBtn').addEventListener('click', function() {
            const promptText = document.getElementById('promptText');
            navigator.clipboard.writeText(promptText.value).then(() => {
                this.textContent = '¡Copiado!';
                setTimeout(() => { this.textContent = 'Copiar al Portapapeles'; }, 2000);
            });
        });
    }
});