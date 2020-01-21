@Login
Feature: Realizar el ingreso al portal web somos belcorp
  Como consultora de belcorp deseo ingresar al portal
  para ver mi estado de cuenta, mis ganancias e ingresar mi pedido

@LoginExitoso
Scenario Outline: Login exitoso Consultora
  Given Ingreso el "<Pais>" mi "<Usuario>" y mi "<Password>"
  When Le doy click en el boton "Ingresa a tu cuenta"
  Then Puedo ver mi estado de cuenta, mis ganancias e ingresar mi pedido
  And Cierro la sesion

Examples:
  |   Pais      |  Usuario  | Password  |
  |   Peru      | 045282961 |    1      |

@LoginFallidoUserPassIncorrect
Scenario Outline:  Login Fallido Usuario y Password Incorrecto
  Given Ingreso el "<Pais>" mi "<Usuario>" y mi "<Password>"
  When Le doy click en el boton "Ingresa a tu cuenta"
  Then veo label informativo

Examples:
  |  Pais   |   Usuario         | Password |
  |  Peru    |  usuariopruebape  |   3545   |

@LoginFallidoPassNotInput
Scenario Outline:  Login Fallido Password no Ingresado
  Given Ingreso el "<Pais>" mi "<Usuario>" y mi "<Password>"
  When  Le doy click en el boton "Ingresa a tu cuenta"
  Then  veo mensaje informativo "<Message>"

Examples:
  |  Pais   | Usuario          |Password | Message |
  |   Peru    | usuariopruebape  |         |- Debe ingresar la Clave Secreta.|

@LoginFallidoUserNotInput
Scenario Outline:  Login Fallido Usuario no Ingresado
  Given Ingreso el "<Pais>" mi "<Usuario>" y mi "<Password>"
  When Le doy click en el boton "Ingresa a tu cuenta"
  Then  veo mensaje informativo "<Message>"
Examples:
  |  Pais   |  Usuario  |  Password | Message |
  |   Peru  |           |   3 545   |- Debe ingresar el Usuario.|

@LoginFallidoUserPassNotInput
Scenario Outline:  Login Fallido Usuario y Password no Ingresado
  Given Ingreso el "<Pais>" mi "<Usuario>" y mi "<Password>"
  When  Le doy click en el boton "Ingresa a tu cuenta"
  Then  veo mensaje informativo "<Message>"

Examples:
  |  Pais   |  Usuario  | Password | Message  |
  |         |           |          |- Debe ingresar la Clave |
