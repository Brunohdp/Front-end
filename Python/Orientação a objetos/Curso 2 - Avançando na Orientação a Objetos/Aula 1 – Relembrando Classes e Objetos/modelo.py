class Filme:
    def __init__(self, nome, ano, duracao):
        self.nome = nome
        self.ano = ano
        self.duracao = duracao

class Series:
    def __init__(self, nome, ano, temporadas):
        self.nome = nome
        self.ano = ano
        self.temporadas = temporadas

vingadores = Filme('Vingadores - guerra infinita', 2018, 160)
print(f'Nome: {vingadores.nome}.\nAno: {vingadores.ano}.\nDuração: {vingadores.duracao}.')


atlanta = Series('Atlanta', 2018, 2)
print(f'Nome: {atlanta.nome}.\nAno: {atlanta.ano}.\nTemporadas: {atlanta.temporadas}.')
