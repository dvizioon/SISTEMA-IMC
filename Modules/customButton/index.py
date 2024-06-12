def CustomButton(text,type="button", _onCallback=None, callback_type=None, url=None, **styles):

    default_styles = {
        'background-color': '#ccc',  
        'border': 'none',
        'color': 'white',
        'padding': '15px 32px',
        'text-align': 'center',
        'text-decoration': 'none',
        'display': 'inline-block',
        'font-size': '16px',
        'margin': '4px 2px',
        'color':'#333',
        'cursor': 'pointer'
    }
    
    

    default_styles.update(styles)
    
    style = '; '.join(f'{k}: {v}' for k, v in default_styles.items())
    
    if url:
        button = f"""
            <a href="{url}">
                <button style="{style}" {_onCallback}="{callback_type}">{text}</button>
            </a>
        """
    else:
        button = f"""
            <button style="{style}" type="{type}" {_onCallback}="{callback_type}">{text}</button>
        """
    return button
