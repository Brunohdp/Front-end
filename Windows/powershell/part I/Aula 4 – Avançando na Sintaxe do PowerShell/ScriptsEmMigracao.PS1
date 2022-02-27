$ErrorActionPreference = "Stop"

<#
	Vários
	Comentários
	Em várias
	Linhas separadas
#>



# Comentário 1
$nameExpr = @{
	Label = "Nome";
	Expression = { $_.Name }
}

# Comentário 2
$lengthExpr = @{
	Label = "Tamanho";
	Expression = { "{0:N2}KB" -f ($_.Length/1KB) }
}

$params = $nameExpr, $lengthExpr

$resultado =
	gci -Recurse -File |
	 ? Name -like "*_migrando_*" |
	 Select `
	      $params

$resultado