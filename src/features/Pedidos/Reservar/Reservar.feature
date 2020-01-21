@PedidosReservar
Feature: Reservar pedido
  Como Consultora quiero guardar pedido para
  registrarlo y poder obtener ganancias

@PedidosClickReservar
Scenario Outline: Reservar pedido con productos y monto minimo requerido
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  When Le doy click a "IngresaTuPedido"
  Then Agrego el "<CUV>" y la "<Cantidad>"
  And Selecciona el boton "Agregar"
  And Se muestra el mensaje de "<ExitoAgregado>"
  Then Busco el boton "Reservar" y le doy click
  And Se muestra el mensaje "<MsgReservado>" de reservado
  
Examples:
  | Pais |  Usuario  | Password |  CUV  | Cantidad |   ExitoAgregado       |  MsgReservado                    |
  |  PE  | 006392849 |    1     | 00006 |    5     |  ¡Listo! Agregaste con éxito a tu pedido. |¡Lo lograste! Tu pedido fue reservado con éxito. |

@PedidosClickModificar
Scenario Outline: Reservar pedido con productos y monto minimo requerido
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  When Le doy click a "IngresaTuPedido"
  And Le doy click al boton "Modificar"
  Then Se muestra el boton "<ReservarPedidos>"

Examples:
  | Pais |  Usuario  | Password |  ReservarPedidos  |
  |  PE  | 006392849 |    1     | Reserva tu pedido |
