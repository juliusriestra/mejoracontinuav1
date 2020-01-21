@PedidosDescarga
Feature: Realizar la descarga desde admsac
  Como Consultora quiero realizar la descarga desde admsac de manera satisfactoria

Scenario Outline: Descarga exitosa
  Given Ingreso el "<Pais>" mi "<Usuario>" y mi "<Password>" a admsac
  Then Accedo como usuario "<AdmSac>"
  When Le doy click a la pestana "<Sac>"
  And Busco "<CargarPedidos>" y le doy click
  And Accedo a la seccion "<VentanaCargaDePedidos>"
  Then Le doy click al "datapcicker"
  And Selecciono la "<Fecha>" de facturacion
  And Eligo el "<TipoProceso>" de proceso
  And Le doy click a boton "Descargar"

Examples:
  | Pais |  Usuario  | Password |    AdmSac    | Sac |   CargarPedidos   | VentanaCargaDePedidos | Fecha  | TipoProceso |
  | Peru |   admsac  |    1     | HOLA, ADMSAC | SAC |  Carga de Pedidos |    Carga de Pedidos   |   6   |    Regular  |
  #| Peru |   admsac  |    1     | HOLA, ADMSAC | SAC |  Carga de Pedidos |    Carga de Pedidos   |   29   |   Demanda Anticipada  |
  #| Peru |   admsac  |    1     | HOLA, ADMSAC | SAC |  Carga de Pedidos |    Carga de Pedidos   |   30   |    Demanda Anticipada PRD  |
