import sys
sys.path.append(".")
from Modules.customForm.index import CustomForm
from Modules.customSection.index import CustomSection


def Form_imc():
    fields = [
        {'type': 'number', 'label': 'Altura', 'name': 'altura', 'placeholder': 'Digite sua altura...'},
        {'type': 'number', 'label': 'Peso', 'name': 'peso', 'placeholder': 'Digite sua altura...'},
        {'type': 'select', 'label': 'Método', 'name': 'metodo', 'options': ['Normal','Diferencial','Robusto']},
    ]
    
    custom_styles = {
        'background-color': '#F0F0F0',
        'color': '#333',
        'padding': '30px',
        'border-radius': '15px',
        'width':'100%'
    }

    form = CustomForm("CALCULAR IMC", fields ,"formulario_imc","button","onclick","sendCalculo()","","POST",**custom_styles)
    
    # sectionForm = CustomSection(f"Calcular Imc", form, f"Todo os Calculos São Processados no Back-end",**custom_styles)
    
    return form
