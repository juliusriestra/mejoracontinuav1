const I = actor();
let wait = { retries: 5, minTimeout: 2000 };
const config = require("./PasePedidoModificar.locator");
let locator = config.locator;
const assert = require("assert");

module.exports = {
  SeleccionarIngresarPedidoDos() {
    I.wait(5);
    I.retry(wait).click(locator.btnIngresarPedido);
    I.retry(wait).dontSeeElement('//*[@id="loadingScreen"]/div[2]');
  },

  IngresarCuv(CUV) {
    I.retry(wait).fillField(locator.fieldCUV, CUV);
    I.retry(wait).saveScreenshot("Ingresó Cuv_1.png");
    I.addMochawesomeContext("Se ingresó el CUV correctamente");
    I.addMochawesomeContext("Ingresó Cuv_1.png");
  },
  SeleccionarAgregarPedido() {
    I.retry(wait).click(locator.btnAgregarPedido);
    I.wait(5);
    I.retry(wait).saveScreenshot("Agrega.png");
    I.addMochawesomeContext("Se agrega el pedido correctamente");
    I.addMochawesomeContext("Agrega.png");
  },

  async BuscarBotonDoyClick(nombreBotonEsperado) {
    await I.retry(wait).click(locator.buscarNombreBoton(nombreBotonEsperado));
  },

  VisualizarPopPupAgregado() {
    I.wait(5);
    if (I.retry(2).waitForElement(locator.labelPopupAgregado)) {
      I.addMochawesomeContext("Si logro ver elEmento");
      I.retry(wait).saveScreenshot("AgregarPedido_2.png");
      I.addMochawesomeContext("Se agregó el pedido correctamente");
      I.addMochawesomeContext("AgregarPedido_2.png");
    } else {
      I.addMochawesomeContext("No se logro ver");
    }
  },

  async SeleccionarModificarCantidadPasePedido() {
    I.wait(5);
    I.retry(wait).click(locator.clickEnMasPedido);
    I.wait(10);
    await I.retry(wait).saveScreenshot("ModificarCantidad_1.png");
    I.addMochawesomeContext("Se modificó el pedido correctamente");
    I.addMochawesomeContext("ModificarCantidad_1.png");
  },

  async SeleccionarModificarCantidad() {
    I.wait(5);
    I.retry(wait).click(locator.clickEnMas);

    I.wait(10);
    I.retry(wait).click(locator.labelCarrito);

    await I.retry(wait).saveScreenshot("ModificarCantidad_1.png");
    I.addMochawesomeContext("Se modificó el pedido correctamente");
    I.addMochawesomeContext("ModificarCantidad_1.png");
  }
};
