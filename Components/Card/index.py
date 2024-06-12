import sys
sys.path.append(".")

from Modules.customCard.index import CustomCard
from Modules.customButton.index import CustomButton

def function(_fun):
    return _fun

# Botões estilizados e pontilhados
botao_calcular = CustomButton('Calcular','button','onclick','calcularIMC()')
botao_doar = CustomButton('Doar', 'button','onclick', 'doar()',)

def card_infomation():
    header = """
        <h1 class="text-xl font-semibold text-gray-800 mb-2">Calcular IMC 🫵</h1>
    """
    body = f"""
        <p>Aqui você pode calcular o seu Índice de Massa Corporal (IMC).</p>
        <hr>
        <h2 class="text-xl font-semibold text-gray-800 mb-2" >Notas do Projeto 📦</h2>
        <p class="text-gray-500 dark:text-gray-400"><a href="#" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Abrir Notas do Projeto &nbsp;
        <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a></p>
        <div style="display:flex;align-items:center; flex-direction:row; gap:1rem; margin-top:0.5rem;">
            {botao_calcular} {botao_doar}
        </div>
    """
    footer = "© 2024 Dvizioon"

    styles = {
        'background-color': '#EEEEEE',
        'color': '#373A40',
        'width':'100%'
    }

    card_html = CustomCard(header, body, footer, **styles)
    
    return card_html

# print(card_infomation())
