const I = actor();
const assert = require("assert");
let wait = { retries: 5, minTimeout: 2000 };
const config = require("./LiquidacionWeb.locator");
let locator = config.locator;
var ProductoStockInicial = 0;
var CantidadaIngresada = 0;

module.exports = {
  Constructor() {},

  async BuscarProductoEnLiquidacionHome(productoEsperado) {
    I.retry(wait).waitForElement(
      locator.productoLiquidacionHome(productoEsperado)
    );
    let productoObtenido = await I.retry(wait).grabTextFrom(
      locator.productoLiquidacionHome(productoEsperado)
    );
    assert.equal(productoEsperado, productoObtenido);
  },

  async AgregarCantidadProductoHome(cantidadItem) {
    I.wait(5);
    I.retry(wait).waitForElement(locator.inputCantidadItemHome);
    await I.retry(wait).fillField(locator.inputCantidadItemHome, cantidadItem);
  },

  ClickAgregarProductoHome() {
    I.retry(wait).waitForElement(locator.clickAgregaloProductoHome);
    I.retry(wait).click(locator.clickAgregaloProductoHome);
  },

  VisualizarMensajeConfirmaAgregado(msgConfirmacion) {
    I.retry(wait).waitForElement(locator.clickAgregaloProductoHome);
    I.retry(wait).see(msgConfirmacion);
    I.wait(5);
  },

  VisualizarMensajeNoConfirmaAgregado(msgConfirmacion) {
    I.retry(wait).waitForElement(locator.clickAgregaloProductoHome);
    I.retry(wait).see(msgConfirmacion);
    I.wait(5);
  },

  async VerificarAgregadoCarrito(productoEsperado) {
    I.retry(wait).waitForElement(locator.ClickCarrito);
    I.retry(wait).click(locator.ClickCarrito);
    let productoHome = await I.retry(wait).grabTextFrom(
      locator.productoLiquidacionHome(productoEsperado)
    );
    let productoCarrito = await I.grabTextFrom(locator.NombreProductoCarrito);
    assert.equal(productoHome, productoCarrito.trim());
    I.addMochawesomeContext("Se Verifica Agregado a Carrito");
    I.retry(wait).saveScreenshot("AgregadoCarrito.png");
    I.addMochawesomeContext("AgregarProducto.png");
  },

  async IngresarVerMas() {
    I.wait(5);
    I.retry(wait).seeElement(locator.clickVerMas);
    I.retry(wait).waitForElement(locator.clickVerMas);
    I.retry(wait).click(locator.clickVerMas);
  },

  async ValidarAccesoAOfertasLiquidacion() {
    I.retry(wait).say("Accediendo la ventana de OfertasLiquidacion");
    I.retry(wait).seeInCurrentUrl("/OfertasLiquidacion");
    //I.wait(5);
    I.retry(wait).saveScreenshot("OfertasLiquidacion.png");
    I.addMochawesomeContext("Se accede a OfertasLiquidacion");
    I.addMochawesomeContext("OfertasLiquidacion.png");
  },

  async ObtenerProductoAndStockInicial(productoLanding, UbicacionStock) {
    //I.wait(5);
    await this.BuscarProductoEnLiquidacionLanding(productoLanding);
    await this.BuscarUbicacionStockInicial(UbicacionStock);
  },

  async BuscarProductoEnLiquidacionLanding(productoEsperado) {
    //I.wait(5);
    let productoObtenido = await I.retry(wait).grabTextFrom(
      locator.productoLliquidacionLanding(productoEsperado)
    );
    assert.equal(productoEsperado, productoObtenido);
  },
  
  async BuscarUbicacionStockInicial(UbicacionStock) {
    //I.wait(5);
    ProductoStockInicial = await I.retry(wait).grabTextFrom(locator.stockInicial(UbicacionStock));
  },

  async AgregarCantidadProductoLanding(cantidadItem) {
    //I.wait(5);
    I.retry(wait).waitForElement(locator.inputCantidadItemLanding);
    await I.retry(wait).fillField(locator.inputCantidadItemLanding,cantidadItem);
    CantidadaIngresada = cantidadItem;
  },

  ClickAgregarProductoLanding() {
    //I.wait(5);
    I.retry(wait).waitForElement(locator.clickAgregarProductoLiquidacion);
    I.retry(wait).click(locator.clickAgregarProductoLiquidacion);
  },

  async ObtenerCajaStockFinal(UbicacionStock) {  
    let StockFinal1 = ProductoStockInicial - CantidadaIngresada;
    var StockActual = await I.retry(wait).grabTextFrom(locator.stockInicial(UbicacionStock));
    assert.equal(StockFinal1, StockActual);
  }

};
