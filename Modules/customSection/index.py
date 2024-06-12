def CustomSection(header, body, footer, **styles):

    default_styles = {
        'background-color': 'white',
        'padding': '20px',
        'border': '1px solid #ccc',
        'border-radius': '10px',
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'width': '100%',
        'margin': '20px auto',
        'font-family': 'Arial, sans-serif',
        'text-align': 'left',
        'color': '#333'
    }
    
    default_styles.update(styles)
    style = '; '.join(f'{k}: {v}' for k, v in default_styles.items())
    section = f"""
        <div style="{style}">
            <h2 style="font-size: 1.5em; margin-bottom: 10px;">{header}</h2>
            <p style="font-size: 1em; margin-bottom: 10px;">{body}</p>
            <p style="font-size: 0.9em; color: #777;">{footer}</p>
        </div>
    """
    return section
