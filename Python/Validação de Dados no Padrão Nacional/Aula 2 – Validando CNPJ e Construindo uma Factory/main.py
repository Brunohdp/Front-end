from cpf_cnpj import CpfCnpj
from validate_docbr import CNPJ

exemplo_cnpj = "35379838000112"
# cnpj = CNPJ()
# print(cnpj.validate(exemplo_cnpj))
documento = CpfCnpj(exemplo_cnpj, 'cnpj')

