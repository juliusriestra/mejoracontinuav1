const I = actor();
const assert = require("assert");
let wait = { retries: 5, minTimeout: 2000 };
const config = require("./Reservar.locator");
let locator = config.locator;
module.exports = {
  /**
   * Método que setea:
   */
  OnClickReservarPedido() {
    I.wait(5);
    I.retry(wait).seeInCurrentUrl("/Pedido");
    I.retry(wait).seeElement(locator.clickReservar);
    I.retry(wait).waitForElement(locator.clickReservar);
    I.retry(wait).click(locator.clickReservar);
    I.retry(wait).dontSeeElement('//*[@id="loadingScreen"]/div[2]');
  },

  VerMensajeReservado(reservadoExitoso) {
    I.retry(wait).seeElement(locator.mensajeReservado);
    I.retry(wait).waitForElement(locator.mensajeReservado);
    I.retry(wait).see(reservadoExitoso);
    I.retry(wait).saveScreenshot("ReservarPedido.png");
    I.addMochawesomeContext("Se Reservo Pedido");
    I.addMochawesomeContext("ReservarPedido.png");
  },

  OnClickModificarPedido() {
    I.retry(wait).waitForElement(locator.clickModificar);;
    I.retry(wait).click(locator.clickModificar);
    I.retry(wait).dontSeeElement('//*[@id="loadingScreen"]/div[2]');
  },

  async VerBotonReservado(nombreBotonEsperado) {
    let nombreBotonObtenido = await I.retry(wait).grabTextFrom(locator.clickReservar);
    assert.equal(nombreBotonEsperado, nombreBotonObtenido);
  }
};

