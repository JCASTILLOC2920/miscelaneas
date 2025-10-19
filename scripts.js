const App = {
    // --- MÓDULO DE PLANTILLAS HTML ---
    templates: {
        sidebar: `
            <div class="sidebar-header">
                <a href="index.html" class="sidebar-brand">
                    <span class="sidebar-brand-icon">AP</span>
                    <span class="sidebar-brand-text">Protocolos AP</span>
                </a>
            </div>
            <nav class="sidebar-nav">
                <ul>
                    <li><a href="index.html" data-page="index.html" title="Inicio"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></span><span class="sidebar-text">Inicio</span></a></li>
                    <li><a href="Improntas.html" data-page="Improntas.html" title="Tinción para Improntas"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 2c1.11 0 2 .89 2 2s-.89 2-2 2-2-.89-2-2 .89-2 2-2z"/></svg></span><span class="sidebar-text">Tinción para Improntas</span></a></li>
                    <li><a href="Papanicolaou.html" data-page="Papanicolaou.html" title="Papanicolaou Modificado"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/></svg></span><span class="sidebar-text">Papanicolaou Modificado</span></a></li>
                    <li><a href="papanicolauclasico.html" data-page="papanicolauclasico.html" title="Papanicolaou Clásico"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/></svg></span><span class="sidebar-text">Papanicolaou Clásico</span></a></li>
                    <li><a href="he-congelacion.html" data-page="he-congelacion.html" title="H&E para Congelación"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg></span><span class="sidebar-text">H&E para Congelación</span></a></li>
                    <li><a href="he-congelacion-seguro.html" data-page="he-congelacion-seguro.html" title="H&E Segura (sin Xileno)"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg></span><span class="sidebar-text">H&E Segura (sin Xileno)</span></a></li>
                    <li><a href="improntas-sin-xilol.html" data-page="improntas-sin-xilol.html" title="Improntas sin Xilol"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 2c1.11 0 2 .89 2 2s-.89 2-2 2-2-.89-2-2 .89-2 2-2z"/></svg></span><span class="sidebar-text">Improntas sin Xilol</span></a></li>
                    <li><a href="papanicolau-sin-xilol.html" data-page="papanicolau-sin-xilol.html" title="Papanicolaou sin Xilol"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/></svg></span><span class="sidebar-text">Papanicolaou sin Xilol</span></a></li>
                    <li><a href="formato-reporte-caso.html" data-page="formato-reporte-caso.html" title="Formato Reporte de Caso"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></span><span class="sidebar-text">Formato Reporte de Caso</span></a></li>
                    <li><a href="formularioreporteap.html" data-page="formularioreporteap.html" title="Generador de Prompts"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 11H6V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/></svg></span><span class="sidebar-text">Generador de Prompts</span></a></li>
                    <li><a href="mecanografia.html" data-page="mecanografia.html" title="Mecanografia"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm-1-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/></svg></span><span class="sidebar-text">Mecanografia</span></a></li>
                    <li><button id="prompt-diagnostico-btn" title="Generar Plantilla"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg></span><span class="sidebar-text">Generar Plantilla</span></button></li>
                </ul>
            </nav>
        `,
        modal: `
            <div id="modal-prompt" class="modal">
                <div class="modal-content">
                    <h2>Colocar Diagnóstico</h2>
                    <label for="input-diagnostico">Introduce el diagnóstico:</label>
                    <input type="text" id="input-diagnostico" placeholder="Ej: adenocarcinoma de pulmón">
                    <div class="modal-buttons">
                        <button id="cancelar-btn" class="btn btn-secondary">Cancelar</button>
                        <button id="generar-btn" class="btn btn-primary">Generar</button>
                    </div>
                    <div class="result-container" id="result-container">
                        <p class="copy-message" id="copy-message">¡Texto copiado al portapapeles!</p>
                        <div class="result-text" id="result-text"></div>
                        <div class="modal-buttons">
                            <button id="copiar-btn" class="btn btn-primary">Copiar y Abrir DeepSeek</button>
                            <button id="cerrar-btn" class="btn btn-secondary">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // --- MÓDULO DE INTERFAZ DE USUARIO (UI) ---
    UI: {
        initSidebar: () => {
            const sidebarContainer = document.getElementById('main-sidebar');
            if (!sidebarContainer) return;

            // 1. Inyectar HTML
            sidebarContainer.innerHTML = App.templates.sidebar;

            // 2. Marcar enlace activo
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const activeLink = sidebarContainer.querySelector(`.sidebar-nav a[data-page="${currentPage}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // 3. Lógica del Toggle
            const sidebar = document.getElementById('main-sidebar');
            const toggleBtn = document.querySelector('.sidebar-toggle');
            const mainContent = document.querySelector('.main-content');
            const sidebarStateKey = 'sidebarState';

            const applySidebarState = (state) => {
                const isActive = state === 'active';
                sidebar.classList.toggle('is-active', isActive);
                toggleBtn.classList.toggle('is-active', isActive);
                toggleBtn.setAttribute('aria-expanded', isActive.toString());
                mainContent.classList.toggle('sidebar-active', isActive && window.innerWidth >= 768);
            };

            const savedState = localStorage.getItem(sidebarStateKey);
            const defaultState = window.innerWidth >= 768 ? 'active' : 'collapsed';
            applySidebarState(savedState || defaultState);

            toggleBtn.addEventListener('click', () => {
                const newState = sidebar.classList.contains('is-active') ? 'collapsed' : 'active';
                localStorage.setItem(sidebarStateKey, newState);
                applySidebarState(newState);
            });

            sidebar.addEventListener('click', (e) => {
                if (window.innerWidth < 768 && (e.target.closest('a') || e.target.closest('button'))) {
                    localStorage.setItem(sidebarStateKey, 'collapsed');
                    applySidebarState('collapsed');
                }
            });
        },

        initModal: () => {
            // 1. Inyectar HTML
            document.body.insertAdjacentHTML('beforeend', App.templates.modal);

            // 2. Obtener elementos del DOM
            const modalPrompt = document.getElementById('modal-prompt');
            const promptBtn = document.getElementById('prompt-diagnostico-btn');
            const cancelarBtn = document.getElementById('cancelar-btn');
            const cerrarBtn = document.getElementById('cerrar-btn');
            const generarBtn = document.getElementById('generar-btn');
            const copiarBtn = document.getElementById('copiar-btn');
            const inputDiagnostico = document.getElementById('input-diagnostico');
            const resultContainer = document.getElementById('result-container');
            const resultText = document.getElementById('result-text');
            const copyMessage = document.getElementById('copy-message');

            if (!promptBtn || !modalPrompt) {
                console.warn('Elementos del modal no encontrados.');
                return;
            }

            // 3. Lógica de apertura y cierre
            const openModal = () => {
                modalPrompt.classList.add('is-visible');
                inputDiagnostico.focus();
            };

            const closeModal = () => {
                modalPrompt.classList.remove('is-visible');
                resultContainer.style.display = 'none';
                inputDiagnostico.value = '';
                copyMessage.style.display = 'none';
            };

            promptBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });

            cancelarBtn.addEventListener('click', closeModal);
            cerrarBtn.addEventListener('click', closeModal);
            window.addEventListener('click', (event) => {
                if (event.target === modalPrompt) {
                    closeModal();
                }
            });

            // 4. Lógica de generación y copiado
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
                    alert('Error al copiar el texto. Por favor, cópialo manualmente.');
                });
            });
        },

        initDraggableTables: () => {
            const containers = document.querySelectorAll('.table-container');

            containers.forEach(container => {
                let isDown = false;
                let startX;
                let scrollLeft;

                container.addEventListener('mousedown', (e) => {
                    isDown = true;
                    container.classList.add('active-drag');
                    startX = e.pageX - container.offsetLeft;
                    scrollLeft = container.scrollLeft;
                });

                container.addEventListener('mouseleave', () => {
                    isDown = false;
                    container.classList.remove('active-drag');
                });

                container.addEventListener('mouseup', () => {
                    isDown = false;
                    container.classList.remove('active-drag');
                });

                container.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - container.offsetLeft;
                    const walk = (x - startX) * 2; // El multiplicador * 2 hace el scroll más rápido
                    container.scrollLeft = scrollLeft - walk;
                });
            });
        }
    },

    // --- MÓDULO DE FORMULARIOS ---
    Form: {
        initPathologyReport: () => {
            const pathologyForm = document.getElementById('pathologyForm');
            if (!pathologyForm) return;

            pathologyForm.addEventListener('submit', (e) => {
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

            const copyBtn = document.getElementById('copyBtn');
            if (copyBtn) {
                copyBtn.addEventListener('click', function() {
                    const promptText = document.getElementById('promptText');
                    navigator.clipboard.writeText(promptText.value).then(() => {
                        this.textContent = '¡Copiado!';
                        setTimeout(() => { this.textContent = 'Copiar al Portapapeles'; }, 2000);
                    });
                });
            }
        }
    },

    // --- PUNTO DE ENTRADA PRINCIPAL ---
    init: () => {
        document.addEventListener('DOMContentLoaded', () => {
            App.UI.initSidebar();
            App.UI.initModal();
            App.Form.initPathologyReport();
            App.UI.initDraggableTables();
        });
    }
};

App.init();