import re

padrao = ".*@[a-z]{3,10}.com(.br)?"
email = "bruno.h.depaula@hotmail.com"
resposta = re.search(padrao, email)
print(resposta)
