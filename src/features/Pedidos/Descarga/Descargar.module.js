const I = actor();
const assert = require("assert");
let wait = { retries: 5, minTimeout: 2000 };
const config = require("./Descargar.locator");
let locator = config.locator;

module.exports = {
  Constructor() {
    this.locator = config.locator;
  },

  async IngresoVentanaAdmSac(admSacEsperado) {
    let admSacObtenido = await I.retry(wait).grabTextFrom(
      locator.msgAccesosAdmSac
    );
    assert.equal(admSacEsperado, admSacObtenido);
  },

  async BuscarPestanaSac(pestanaEsperada) {
    await I.retry(wait).click(locator.buscoPestanaAdmSac(pestanaEsperada));
  },

  ClickLinkCargarPedido(linkCargarPedido) {
    I.retry(wait).click(locator.buscoLinkCargarPedido(linkCargarPedido));
    I.retry(wait).dontSeeElement('//*[@id="loadingScreen"]/div[2]');
  },

  AccesoCargaPedidos(msgEsperado) {
    I.retry(wait).seeInCurrentUrl("/DescargaPedidos/DescargarPedidos");
    I.retry(wait).see(msgEsperado);
  },

  ClickarDataPicker() {
    I.retry(wait).seeElement(locator.imgCalendar);
    I.retry(wait).click(locator.imgCalendar);
  },

  async BuscarIngresarFecha(fechaEsperada) {
    await I.retry(wait).click(locator.buscarFecha(fechaEsperada));
  },

  async SeleccionarTipoProceso(tipoProceso) {
    I.retry(wait).waitForElement(locator.selectTipoProceso);
    await I.retry(wait).selectOption(locator.selectTipoProceso, tipoProceso);
    I.retry(wait).saveScreenshot("DescargarPedido.png");
    I.addMochawesomeContext("Se Descarga Pedido");
    I.addMochawesomeContext("DescargarPedido.png");
  },

  clickBotonDescargar() {
    I.retry(wait).waitForElement(locator.botonDescargar);
    I.retry(wait).click(locator.botonDescargar);
    I.retry(wait).saveScreenshot("DescargarPedido.png");
    I.addMochawesomeContext("Se Descarga Pedido");
    I.addMochawesomeContext("DescargarPedido.png");
  }
};
