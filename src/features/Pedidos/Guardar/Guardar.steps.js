const login = require("../../../pages/Login/Login.module");
const guardar = require("./Guardar.module");

Given("Ingreso el {string} mi usuario {string} y mi {string}", async function(
  Pais,
  Usuario,
  Password
) {
  login.Constructor();
  login.ValidacionInicialLogin();
  login.IngresarCredenciales(Pais, Usuario, Password);
  login.ClickBotonLogin();
  login.ValidacionFinalLogin();
  await login.SiPopUp_Cerrar();
});

When('Le doy click a "IngresaTuPedido"', function() {
  guardar.IngresarPedido();
});

Then('Agrego el {string} y la {string}', async function(Cuv, Cantidad){
  await guardar.AgregarCuvAndCantidad(Cuv, Cantidad);
});

Then('Selecciona el boton "Agregar"', function() {
  guardar.SeleccionarAgregarPedido();
});

Then('Se muestra el mensaje de {string}', function(mensajeExito) {
  guardar.VerMensajeAgregadoExitoso(mensajeExito);
});

When('Busco el boton "Guardar" y le doy click', function() {
  guardar.OnClickGuardarPedido();
});

Then("Se muestra el mensaje {string} de guardado", function(MsgGuardado) {
  guardar.VerMensajeGuardado(MsgGuardado);
});

