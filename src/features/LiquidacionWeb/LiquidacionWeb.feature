@LiquidacionWeb
Feature: Agregar pedido de Liquidación Web
  Como Consultora quiero agregar pedidos de Liquidación Web

@DesdeHome
Scenario Outline: Agregar pedido de Liquidacion Web desde el Home
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  When Busco el "<Producto>" requerido
  And Adiciono "<Cantidad>" unidades
  Then Presino el boton "Agregalo" con Liquidacion Web
  And Visualizo el popup de "<Confirmacion>" de agregado
  And Ingreso al carrito y verifico que se haya agregado el "<ProductoCarrito>" al carrito.

Examples:
  | Pais |  Usuario   | Password |             Producto      | Cantidad |             Confirmacion                 | ProductoCarrito |
  |  PE  |  041383488 |    1     | Colonia Paradisso Bahía Energy 200ml | 2 | ¡Listo! Agregaste con éxito a tu pedido. |  Colonia Paradisso Bahía Energy 200ml |

@DesdeLanding
Scenario Outline: Agregar pedido de Liquidacion Web desde el Landing
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  When Le doy click al link "VERMAS"
  Then Se accede a la ventana OfertasLiquidacion
  And Se busca el "<Producto>" la <UbicacionStockFinal>
  And Se agrega la <Cantidad> requerida
  And Se Preciona el boton "Agregar"
  And Visualizo el popup de "<Confirmacion>" de agregado
  And Se muestra la <UbicacionStockFinal> del producto

Examples:
  | Pais |  Usuario  | Password |          Producto           | UbicacionStockActual | Cantidad | Confirmacion | UbicacionStockFinal |
  | PE   | 041383488 |     1    | Colonia Paradisso Bahía Energy 200ml | 1  | 2   | ¡Listo! Agregaste con éxito a tu pedido. | 1 |
