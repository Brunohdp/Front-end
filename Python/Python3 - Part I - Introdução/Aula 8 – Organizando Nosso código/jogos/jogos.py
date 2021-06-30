print("*" * 32)
print("* Bem vindo ao Lobby de games! *")
print("*" * 32)

print("-" * 23)
print("| Escolha o seu jogo: |")
print("-" * 23)
print("| (1) Forca           |\n| (2) Adivinhação     |")
jogo = int(input("| R:"))
print("-" * 23)

if (jogo == 1):
    print("-" * 18)
    print("| Jogando Forca! |")
    print("-" * 18)
else:
    print('-' * 24)
    print("| Jogando Adivinhação! |")
    print('-' * 24)

print("fim do jogo")
