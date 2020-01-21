const login = require("../../../Pages/Login/Login.module");
const AgregarPasePedido = require("./PasePedidoAgregar.module");
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

Given("Selecciona Ingresa tu Pedido", function() {
  AgregarPasePedido.SeleccionarIngresarPedidoUno();
});

Then("Ingresa un numero de {string}", function(cuv) {
  AgregarPasePedido.IngresarCuv(cuv);
});

Then("Selecciona el boton Agregar", function() {
  AgregarPasePedido.SeleccionarAgregarPedido();
});

Then("Visualizar el popup de confirmacion de agregado", function() {
  AgregarPasePedido.VisualizarPopPupAgregado();
});
