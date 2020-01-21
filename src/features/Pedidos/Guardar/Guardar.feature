@PedidosGuardar
Feature: Guardar pedido
  Como Consultora quiero guardar pedido para
  registrarlo y poder obtener ganancias

Scenario Outline: Guardar pedido con productos y monto minimo requerido
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  When Le doy click a "IngresaTuPedido"
  Then Agrego el "<CUV>" y la "<Cantidad>"
  And Selecciona el boton "Agregar"
  And Se muestra el mensaje de "<ExitoAgregado>"
  And Busco el boton "Guardar" y le doy click
  Then Se muestra el mensaje "<MsgGuardado>" de guardado

Examples:
  | Pais |  Usuario  | Password |  CUV  | Cantidad |   ExitoAgregado       |       MsgGuardado          |
  |  PE  | 045282961 |    1     | 00006 |    5     |  ¡Listo! Agregaste con éxito a tu pedido. | ¡Guardaste tu pedido con éxito! |

