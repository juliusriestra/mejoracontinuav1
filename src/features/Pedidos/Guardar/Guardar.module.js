const I = actor();
const assert = require("assert");
let wait = { retries: 5, minTimeout: 2000 };
const config = require("./Guardar.locator");
let locator = config.locator;
module.exports = {
  /**
   * Método que setea:
   */
  IngresarPedido() {
    I.wait(5);
    I.retry(wait).seeInCurrentUrl("/Bienvenida");
    I.retry(wait).seeElement(locator.clickPedido);
    I.retry(wait).waitForElement(locator.clickPedido);
    I.retry(wait).click(locator.clickPedido);
    I.retry(wait).dontSeeElement('//*[@id="loadingScreen"]/div[2]');
  },

  async AgregarCuvAndCantidad(CUV, Cantidad) {
    I.retry(wait).waitForElement(locator.fieldCUV);
    await I.retry(wait).fillField(locator.fieldCUV, CUV);
    //I.retry(wait).dontSeeElement('//*[@id="loadingScreen"]/div[2]');
    I.wait(5);
    I.retry(wait).waitForElement(locator.inputCantidadItem);
    await I.retry(wait).fillField(locator.inputCantidadItem, Cantidad);
  },

  SeleccionarAgregarPedido() {
    //I.wait(5);
    I.retry(wait).seeElement(locator.btnAgregarPedido);
    I.retry(wait).waitForElement(locator.btnAgregarPedido);
    I.retry(wait).click(locator.btnAgregarPedido);
    I.retry(wait).saveScreenshot("AgregarPedido_1.png");
    I.addMochawesomeContext("Se agregó el pedido correctamente");
    I.addMochawesomeContext("AgregarPedido_1.png");
  },

  VerMensajeAgregadoExitoso() {
    I.retry(wait).seeElement(locator.labelPopupAgregado);
    if (I.retry(wait).waitForElement(locator.labelPopupAgregado)) {
      I.addMochawesomeContext("Si logro ver elEmento");
      I.retry(wait).saveScreenshot("AgregarPedido_2.png");
      I.addMochawesomeContext("Se agregó el pedido correctamente");
      I.addMochawesomeContext("AgregarPedido_2.png");
    } else {
      I.addMochawesomeContext("No se logro ver");
    }
  },

  OnClickGuardarPedido() {
    I.wait(5);
    I.retry(wait).seeInCurrentUrl("/Pedido");
    I.retry(wait).seeElement(locator.clickGuardar);
    I.retry(wait).waitForElement(locator.clickGuardar);
    I.retry(wait).click(locator.clickGuardar);
    I.retry(wait).dontSeeElement('//*[@id="loadingScreen"]/div[2]');
  },

  VerMensajeGuardado(guardadoExitoso) {
    I.retry(wait).seeElement(locator.mensajeGuardado);
    I.retry(wait).waitForElement(locator.mensajeReservado);
    I.retry(wait).see(guardadoExitoso);
    I.retry(wait).saveScreenshot("GuardarPedido.png");
    I.addMochawesomeContext("Se Guardo Pedido");
    I.addMochawesomeContext("GuardarPedido.png");
  }
};
