const login = require("../../../pages/Login/Login.module");
const EliminarPasePedido = require("./PasePedidoEliminar.module");
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

When("Selecciona Ingresa tu Pedido", function() {
  EliminarPasePedido.SeleccionarIngresarPedidoTres();
});

Then("Seleccionar el boton de  Eliminar", function() {
  EliminarPasePedido.SeleccionarBotonEliminar();
});

When("Seleccionar el boton {string}", async function(mensaje) {
  await EliminarPasePedido.BuscarBotonSiEliminar(mensaje);
});
