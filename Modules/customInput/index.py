def CustomInput(label, input_type='text', name='', value='', placeholder='', **styles):
    # Estilos padrão para o input
    default_styles = {
        'width': '100%',
        'padding': '10px',
        'margin-bottom': '15px',
        'border': '2px solid #ccc',
        'border-radius': '5px',
        'font-family': 'Courier New, monospace',
        'font-size': '1em',
        'background-color': '#f9f9f9',
        'box-shadow': 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
    }
    
    # Atualiza os estilos padrão com os estilos fornecidos
    default_styles.update(styles)
    
    # Converte os estilos em uma string inline
    style = '; '.join(f'{k}: {v}' for k, v in default_styles.items())
    
    # Gera o HTML do input
    input_html = f"""
        <label style="font-size: 1em; margin-bottom: 5px; display: block;">{label}</label>
        <input type="{input_type}" name="{name}" value="{value}" placeholder="{placeholder}" style="{style}">
    """
    return input_html

# # Exemplo de uso:
# print(CustomInput('Nome', input_type='text', name='nome', placeholder='Digite seu nome'))
# print(CustomInput('Email', input_type='email', name='email', placeholder='Digite seu email'))
# print(CustomInput('Senha', input_type='password', name='senha', placeholder='Digite sua senha', background_color='#fffbe6', border='2px solid #e0c29e'))
