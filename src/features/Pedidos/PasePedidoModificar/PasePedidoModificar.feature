@Modificar
Feature:  Modificar pedidos desde Pase Pedido
Como Consultora Suscrita Activa quiero agregar pedidos desde la seccion Pase Pedido
para registrar mis ventas

@ModificarPasePedido
Scenario Outline: Modificar pedido desde pase pedido
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  When Selecciona Ingresa tu Pedido
  And Ingresa un numero de "<CUV>"
  And Selecciona el boton  mas para aumentar la cantidad en pase pedido
  And Selecciona el boton Agregar
  Then Visualizar el popup de confirmacion de agregado

Examples:
  | Pais | Usuario | Password | CUV |
  | PE   |045282961|     1    | 00006 |

@ModificarDetallePasePedido
Scenario Outline: Modificar pedido desde detalle pase pedido
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  And Selecciona Ingresa tu Pedido
  When Selecciona el boton mas para aumentar la cantidad de pedido
  Then Visualizar el popup de confirmacion de agregado

Examples:
  | Pais | Usuario | Password |
  | PE   |045282961|     1    |
