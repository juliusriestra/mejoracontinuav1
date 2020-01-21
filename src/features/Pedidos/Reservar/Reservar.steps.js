const login = require("../../../pages/Login/Login.module");
const guardar = require("../../Pedidos/Guardar/Guardar.module");
const Reservar = require("./Reservar.module");

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

When('Busco el boton "Reservar" y le doy click', function() {
  Reservar.OnClickReservarPedido();
});

Then("Se muestra el mensaje {string} de reservado", function(msgReservado) {
  Reservar.VerMensajeReservado(msgReservado);
});

Then('Le doy click al boton "Modificar"', function() {
  Reservar.OnClickModificarPedido();
});

Then('Se muestra el boton {string}', async function(nombreBotonReservado) {
  await Reservar.VerBotonReservado(nombreBotonReservado);
});