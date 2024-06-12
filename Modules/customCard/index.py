def CustomCard(header, body, footer, **styles):
    # Estilos padrão para o cartão
    default_styles = {
        'background-color': 'white',
        'padding': '20px',
        'border': '1px solid #ccc',
        'border-radius': '10px',
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'width': '300px',
        'margin': '20px auto',
        'font-family': 'Arial, sans-serif',
        'text-align': 'left',
        'color': '#333'
    }
    
    # Atualiza os estilos padrão com os estilos fornecidos
    default_styles.update(styles)
    
    # Converte os estilos em uma string inline
    style = '; '.join(f'{k}: {v}' for k, v in default_styles.items())
    
    # Gera o HTML do cartão
    card = f"""
        <div style="{style}">
            <h1 style="font-size: 1.5em; margin-bottom: 10px;">{header}</h1>
            <p style="font-size: 1em; margin-bottom: 10px;">{body}</p>
            <p style="font-size: 0.9em; color: #777;">{footer}</p>
        </div>
    """
    return card
