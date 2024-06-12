
def CustomTable(headers, rows, **styles):
    # Estilos padrão para a tabela
    default_styles = {
        'border-collapse': 'collapse',
        'width': '100%',
        'margin': '20px 0',
        'font-family': 'Arial, sans-serif',
        'text-align': 'left'
    }
    
    # Atualiza os estilos padrão com os estilos fornecidos
    default_styles.update(styles)
    
    # Converte os estilos em uma string inline
    table_style = '; '.join(f'{k}: {v}' for k, v in default_styles.items())
    
    # Estilos padrão para cabeçalho e células
    th_style = 'background-color: #f2f2f2; border: 1px solid #ddd; padding: 8px;'
    td_style = 'border: 1px solid #ddd; padding: 8px;'
    
    # Gera o HTML do cabeçalho
    thead = '<thead><tr>' + ''.join(f'<th style="{th_style}">{header}</th>' for header in headers) + '</tr></thead>'
    
    # Gera o HTML das linhas
    tbody = '<tbody>'
    for row in rows:
        tbody += '<tr>' + ''.join(f'<td style="{td_style}">{cell}</td>' for cell in row) + '</tr>'
    tbody += '</tbody>'
    
    # Gera o HTML da tabela completa
    table = f"""
        <table style="{table_style}">
            {thead}
            {tbody}
        </table>
    """
    return table
