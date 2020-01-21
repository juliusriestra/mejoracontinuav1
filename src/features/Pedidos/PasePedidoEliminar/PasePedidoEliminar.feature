@EliminarPasePedido
Feature:  Eliminar pedidos desde Pase Pedido
Como Consultora Suscrita Activa quiero eliminar pedidos desde la seccion Pase Pedido
para registrar mis ventas

Scenario Outline: Eliminar pedido desde pase pedido
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  When Selecciona Ingresa tu Pedido
  Then Seleccionar el boton de  Eliminar
  And Seleccionar el boton "<Eliminar>"

Examples:
  | Pais | Usuario | Password |Eliminar|
  | PE   |045282961|     1    |SÍ, ELIMINAR|
