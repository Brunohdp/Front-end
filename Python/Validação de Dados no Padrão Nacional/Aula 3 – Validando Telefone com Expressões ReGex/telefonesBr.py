import re

class TelefonesBr:
    def __init__(self, telefone):
        if self.valida_telefone(telefone):
            self.numero = telefone
        else:
            raise ValueError("Número de Telefone inválido!")

    def valida_telefone(self, telefone):
        padrao = "(\+\d{2,3})?(\d{2})?\d{4,5}-?\d{4}"
        resposta = re.findall(padrao, telefone)
        if resposta:
            return True
        else:
            return False

    def __str__(self):
        return self.numero
