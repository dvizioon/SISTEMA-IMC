import sys
sys.path.append(".")

def RouterLink( url , method , function=False):
    
    '''
        @url = equivale ao path da metaLink ex: /home
        @method = equivale ao tipo de processamento ex: [get,post,delete,patch,put]
        @function = função que a rota recebe ex: rende_home
        
        isso Sera o Equivalente há:
                @app.route(</nome_link/>, methods=[</ metodos />])
                    def </nome_function/>:
                        ...
    '''
    
    routes = [
        {'url': url, 'method': method, 'function': function},  # Remova os parênteses de 'function'
    ]
    
    return routes


#Exemplo de uso do retorno
# def Home():
#     print("Bem Vindo Rota /Home")
# RotaHome = RouterLink("/",["GET"],Home)
# print(RotaHome)
