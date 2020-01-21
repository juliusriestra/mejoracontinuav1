const login = require("../../../pages/Login/Login.module");
const pedidosDescargar = require("../Descarga/Descargar.module");

Given("Ingreso el {string} mi {string} y mi {string} a admsac", async function(
  Pais,
  Usuario,
  Password
) {
  login.Constructor();
  login.IngresarCredenciales(Pais, Usuario, Password);
  login.ClickBotonLogin();
});

Then("Accedo como usuario {string}", async function(AdmSac) {
  await pedidosDescargar.IngresoVentanaAdmSac(AdmSac);
});

When("Le doy click a la pestana {string}", async function(Sac) {
  await pedidosDescargar.BuscarPestanaSac(Sac);
});

Then("Busco {string} y le doy click", function(CargarPedido) {
  pedidosDescargar.ClickLinkCargarPedido(CargarPedido);
});

When("Accedo a la seccion {string}", function(VentanaCargaDePedidos) {
  pedidosDescargar.AccesoCargaPedidos(VentanaCargaDePedidos);
});

Then('Le doy click al "datapcicker"', function() {
  pedidosDescargar.ClickarDataPicker();
});

Then("Selecciono la {string} de facturacion", async function(Fecha) {
  await pedidosDescargar.BuscarIngresarFecha(Fecha);
});

Then("Eligo el {string} de proceso", async function(tipoProceso) {
  await pedidosDescargar.SeleccionarTipoProceso(tipoProceso);
});

Then('Le doy click a boton "Descargar"', async function() {
  //await pedidosDescargar.clickBotonDescargar();
});
