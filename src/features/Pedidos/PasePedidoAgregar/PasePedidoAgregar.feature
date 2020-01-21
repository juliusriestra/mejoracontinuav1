@AgregarPasePedido
Feature:  Agregar pedidos desde Pase Pedido
Como Consultora Suscrita Activa quiero agregar pedidos desde la seccion Pase Pedido
para registrar mis ventas

Scenario Outline: Agregar pedido desde pase pedido
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  When Selecciona Ingresa tu Pedido
  And Ingresa un numero de "<CUV>"
  And Selecciona el boton Agregar
  Then Visualizar el popup de confirmacion de agregado

Examples:
  | Pais | Usuario | Password | CUV |
  | PE   |045282961|     1    | 00006 |
