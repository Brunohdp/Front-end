class Filme:
    def __init__(self, nome, ano, duracao):
        self.nome = nome.title()
        self.ano = ano
        self.duracao = duracao
        self.likes = 0

    def dar_like(self):
        self.likes += 1

class Series:
    def __init__(self, nome, ano, temporadas):
        self.nome = nome.title()
        self.ano = ano
        self.temporadas = temporadas
        self.likes = 0

    def dar_like(self):
        self.likes += 1


vingadores = Filme('Vingadores - guerra infinita', 2018, 160)
print(f'Nome: {vingadores.nome}. Ano: {vingadores.ano}. '
      f'Duração: {vingadores.duracao}. Likes: {vingadores.likes}')


atlanta = Series('Atlanta', 2018, 2)
atlanta.dar_like()
atlanta.dar_like()
print(f'Nome: {atlanta.nome}. Ano: {atlanta.ano}. '
      f'Temporadas: {atlanta.temporadas}. Likes: {atlanta.likes}')
