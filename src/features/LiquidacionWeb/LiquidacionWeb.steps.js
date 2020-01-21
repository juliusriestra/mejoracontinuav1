const login = require("../../pages/Login/Login.module");
const liquidacionWeb = require("./LiquidacionWeb.module");

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

When("Busco el {string} requerido", async function(Producto) {
  await liquidacionWeb.BuscarProductoEnLiquidacionHome(Producto);
});

Then("Adiciono {string} unidades", async function(Item) {
  await liquidacionWeb.AgregarCantidadProductoHome(Item);
});

Then('Presino el boton "Agregalo" con Liquidacion Web', function() {
  liquidacionWeb.ClickAgregarProductoHome();
});
    
Then("Visualizo el popup de {string} de agregado", function(Confirmacion) {
  liquidacionWeb.VisualizarMensajeConfirmaAgregado(Confirmacion);
});

Then(
  "Ingreso al carrito y verifico que se haya agregado el {string} al carrito.",
  async function(ProductoCarrito) {
    await liquidacionWeb.VerificarAgregadoCarrito(ProductoCarrito);
  }
);

When('Le doy click al link "VERMAS"', async function() {
  await liquidacionWeb.IngresarVerMas();
});

Then("Se accede a la ventana OfertasLiquidacion", async function() {
  await liquidacionWeb.ValidarAccesoAOfertasLiquidacion();
});
  
Then("Se busca el {string} la {int}", async function(Producto, UbicacionStock) {
  await liquidacionWeb.ObtenerProductoAndStockInicial(Producto, UbicacionStock);
});

Then("Se agrega la {int} requerida", async function(Cantidad) {
  await liquidacionWeb.AgregarCantidadProductoLanding(Cantidad);
});
      
Then('Se Preciona el boton "Agregar"', function() {
  liquidacionWeb.ClickAgregarProductoLanding();
});
      
Then("Se muestra la {int} del producto", async function(UbicacionStockFinal) {
  await liquidacionWeb.ObtenerCajaStockFinal(UbicacionStockFinal);
});
