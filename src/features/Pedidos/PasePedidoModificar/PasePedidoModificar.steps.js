const login = require("./../../../Pages/Login/Login.module");
const ModificarPasePedido = require("./PasePedidoModificar.module");
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
  ModificarPasePedido.SeleccionarIngresarPedidoDos();
});

Then("Ingresa un numero de {string}", function(cuv) {
  ModificarPasePedido.IngresarCuv(cuv);
});

Then(
  "Selecciona el boton  mas para aumentar la cantidad en pase pedido",
  async function() {
    await ModificarPasePedido.SeleccionarModificarCantidadPasePedido();
  }
);

Then("Selecciona el boton Agregar", function() {
  ModificarPasePedido.SeleccionarAgregarPedido();
});

Then(
  "Selecciona el boton mas para aumentar la cantidad de pedido",
  async function() {
    await ModificarPasePedido.SeleccionarModificarCantidad();
  }
);

When("Selecciona el boton {string} sugerido", async function(mensaje) {
  await ModificarPasePedido.BuscarBotonDoyClick(mensaje);
});

Then("Visualizar el popup de confirmacion de agregado", function() {
  ModificarPasePedido.VisualizarPopPupAgregado();
});
