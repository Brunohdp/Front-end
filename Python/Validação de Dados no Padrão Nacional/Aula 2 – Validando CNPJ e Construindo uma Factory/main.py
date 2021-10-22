from cpf_cnpj import CpfCnpj

exemplo_cnpj = "35379838000112"
exemplo_cpf = "46789082859"

documento1 = CpfCnpj(exemplo_cpf, 'cpf')
documento2 = CpfCnpj(exemplo_cnpj, 'cnpj')
print(f'{documento1}\n{documento2}')
