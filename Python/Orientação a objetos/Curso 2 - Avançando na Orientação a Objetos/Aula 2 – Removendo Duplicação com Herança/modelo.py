class Programa:
    def __init__(self, nome, ano):
        self._nome = nome.title()
        self.ano = ano
        self._likes = 0

    @property
    def likes(self):
        return self._likes

    @property
    def nome(self):
        return self._nome

    def dar_like(self):
        self._likes += 1

    @nome.setter
    def nome(self, novo_nome):
        self._nome = novo_nome.title()


class Filme(Programa):
    def __init__(self, nome, ano, duracao):
        super().__init__(nome, ano)
        self.duracao = duracao


class Series(Programa):
    def __init__(self, nome, ano, temporadas):
        super().__init__(nome, ano)
        self.temporadas = temporadas
        



vingadores = Filme('Vingadores - guerra infinita', 2018, 160)
print(f'Nome: {vingadores.nome}. Ano: {vingadores.ano}. '
      f'Duração: {vingadores.duracao}. Likes: {vingadores.likes}')


atlanta = Series('Atlanta', 2018, 2)
atlanta.dar_like()
atlanta.dar_like()
print(f'Nome: {atlanta.nome}. Ano: {atlanta.ano}. '
      f'Temporadas: {atlanta.temporadas}. Likes: {atlanta.likes}')
