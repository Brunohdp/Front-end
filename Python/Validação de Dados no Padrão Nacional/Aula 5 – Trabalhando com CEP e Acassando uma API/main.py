import requests
from acesso_cep import BuscaEndereco
cep = 18606020

objecto_cep = BuscaEndereco(cep)
a = objecto_cep.acessa_via_cep()
print(type(a))
print(dir(a))
# r = requests.get("https://viacep.com.br/ws/01001000/json/")
# print(r.text)
