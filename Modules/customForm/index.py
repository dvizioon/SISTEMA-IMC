def CustomForm(title, fields,id=None,buttonType="submit",_onbuttonCallBack=None,callback_type=None, action='#', method='POST', **styles):

    default_styles = {
        'background-color': 'white',  
        'padding': '20px',
        'border': '1px solid #ccc',
        'border-radius': '10px',
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'width': '400px',
        'margin': '20px auto',
        'font-family': 'Arial, sans-serif',
        'text-align': 'left',
        'color': '#333'
    }


    default_styles.update(styles)
    
    style = '; '.join(f'{k}: {v}' for k, v in default_styles.items())

    fields_html = ''
    for field in fields:
        field_type = field.get('type', 'text')
        field_label = field.get('label', '')
        field_name = field.get('name', '')
        field_value = field.get('value', '')
        field_placeholder = field.get('placeholder', '')
        field_options = field.get('options', [])  
        
        if field_type == 'select':
            options_html = ''.join(f'<option value="{opt}">{opt}</option>' for opt in field_options)
            fields_html += f"""
                <label style="display: block; margin-bottom: 5px;">{field_label}</label>
                <select name="{field_name}" id="{field_name}" style="width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;">
                    {options_html}
                </select>
            """
        else:
            fields_html += f"""
                <label style="display: block; margin-bottom: 5px;">{field_label}</label>
                <input type="{field_type}" name="{field_name}" id={field_name} value="{field_value}" placeholder="{field_placeholder}"
                style="width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;">
            """
    
    # Gera o HTML do formulário
    form = f"""
        <div style="{style}">
            <h2 style="font-size: 1.5em; margin-bottom: 20px;">{title}</h2>
            <form id={id} action="{action}" method="{method}">
                {fields_html}
                <button type="{buttonType}" {_onbuttonCallBack}="{callback_type}" style="background-color: #333;color:#fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Enviar</button>
            </form>
        </div>
    """
    return form

# # Exemplo de uso:
# fields = [
#     {'type': 'text', 'label': 'Nome', 'name': 'nome', 'placeholder': 'Digite seu nome'},
#     {'type': 'email', 'label': 'Email', 'name': 'email', 'placeholder': 'Digite seu email'},
#     {'type': 'select', 'label': 'Gênero', 'name': 'genero', 'options': ['Masculino', 'Feminino', 'Outro']},
#     {'type': 'password', 'label': 'Senha', 'name': 'senha', 'placeholder': 'Digite sua senha'}
# ]

# print(CustomForm('Formulário Retro', fields))
