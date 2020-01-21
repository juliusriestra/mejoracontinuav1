@CompartirCatalago
Feature:  compartir catalago por Correo desde Somos Belcorp
Como Consultora quiero compartir catalogo por Correo desde Home
para obtener mas ventas.

@Correo
Scenario Outline: CompartirCatalogoCorreo
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  When Seleccionar la opcion Comparte tus catalogos
  And  Seleccionar Compartir catalogos
  Then seleccionar opcion Compartir por correo
  When Ingresar "<correo>"
  And Seleccionar enviar

Examples:
  | Pais | Usuario | Password |correo|
  |  PE  |041383488| 1  |aleyumy@gmail.com|

@WhatsApp
Scenario Outline: CompartirCatalogoWhatsApp
  Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
  When Seleccionar la opcion Comparte tus catalogos
  And  Seleccionar Compartir catalogos
  Then Seleccionar opcion Compartir por WhatsApp

Examples:
  | Pais | Usuario | Password |
  | PE |041383488| 1  |
