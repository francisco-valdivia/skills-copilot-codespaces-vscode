# Crear una red virtual en Azure Portal

## Introducción
En este documento, aprenderás a crear una red virtual en Azure Portal. Una red virtual es fundamental para la infraestructura de red en la nube, permitiendo la comunicación segura entre recursos de Azure.

## Pasos para crear una red virtual

### 1. Iniciar sesión en Azure Portal
1. Abre [Azure Portal](https://portal.azure.com/).
2. Inicia sesión con tu cuenta de Azure.

### 2. Crear una nueva red virtual
1. En el menú de la izquierda, selecciona **Crear un recurso**.
2. En la barra de búsqueda, escribe **Red virtual** y selecciona **Red virtual** en los resultados.
3. Haz clic en **Crear**.

### 3. Configurar la red virtual
1. **Detalles del proyecto**:
    - **Suscripción**: Selecciona tu suscripción de Azure.
    - **Grupo de recursos**: Crea un nuevo grupo de recursos o selecciona uno existente.

2. **Detalles de la instancia**:
    - **Nombre**: Introduce un nombre para la red virtual.
    - **Región**: Selecciona la región donde deseas crear la red virtual.

3. **Direcciones IP**:
    - **Espacio de direcciones IPv4**: Introduce un rango de direcciones IP (por ejemplo, `10.0.0.0/16`).
    - **Subredes**: Añade una subred con un nombre y un rango de direcciones IP (por ejemplo, `10.0.0.0/24`).

4. **Etiquetas** (opcional):
    - Añade etiquetas para organizar tus recursos.

5. Revisa y crea:
    - Haz clic en **Revisar y crear**.
    - Revisa la configuración y haz clic en **Crear**.

### 4. Verificar la red virtual
1. Una vez creada, ve a **Todos los recursos**.
2. Busca y selecciona tu red virtual para ver sus detalles y configuraciones.

## Conclusión
Has creado exitosamente una red virtual en Azure Portal. Ahora puedes usar esta red para conectar y gestionar tus recursos de Azure de manera segura.
