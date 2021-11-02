from datetime import datetime, timedelta

class DatasBr:
    def __init__(self):
        self.momento_cadastro = datetime.today()

    def mes_cadastro(self):
        meses_do_ano = [
            'Janeiro', 'Fevereiro', 'Março',
            'Abril', 'Maio', 'Junho', 'Julho',
            'Agosto', 'Setembro', 'Outubro',
            'Novembro', 'Dezembro'
        ]
        mes_cadastro = self.momento_cadastro.month
        return meses_do_ano[mes_cadastro - 1]

    def dia_semana(self):
        dia_semana = [
            'Segunda', 'Terça', 'Quarta',
            'Quinta', 'Sexta', 'Sábado', 'Domingo'
        ]
        dia_cadastro = self.momento_cadastro.weekday()
        return dia_semana[dia_cadastro]
