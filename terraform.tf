# Importar el módulo de Azure
Import-Module Az

# Autenticarse en la cuenta de Azure
Connect-AzAccount

# Definir parámetros
$resourceGroupName = "miGrupoDeRecursos"
$location = "EastUS"
$storageAccountName = "miCuentaDeAlmacenamiento"
$sku = "Standard_LRS"

# Crear el grupo de recursos si no existe
if (-not (Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Crear la cuenta de almacenamiento
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $sku `
                     -Kind StorageV2

Write-Output "Cuenta de almacenamiento '$storageAccountName' creada exitosamente en el grupo de recursos '$resourceGroupName'."