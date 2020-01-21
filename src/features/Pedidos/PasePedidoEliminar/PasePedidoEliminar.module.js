const I = actor();
let wait = { retries: 5, minTimeout: 2000 };
const config = require("../PasePedidoEliminar/PasePedidoEliminar.locator");
let locator = config.locator;
const assert = require("assert");

module.exports = {
  SeleccionarIngresarPedidoTres() {
    I.wait(5);
    I.retry(wait).click(locator.btnIngresarPedido);
    I.retry(wait).dontSeeElement('//*[@id="loadingScreen"]/div[2]');
  },

  SeleccionarBotonEliminar() {
    I.wait(5);
    I.retry(wait).click(locator.clickEliminar);
    I.wait(5);
    I.retry(wait).saveScreenshot("Eliminar_1.png");
    I.addMochawesomeContext("Se eliminó el pedido correctamente");
    I.addMochawesomeContext("Eliminar_1.png");
  },

  async BuscarBotonSiEliminar(nombreBotonEsperado) {
    await I.retry(wait).click(
      locator.buscarNombreBotonSiEliminar(nombreBotonEsperado)
    );
  },

  SeleccionarBotonSiEliminar() {
    I.wait(5);
    I.retry(wait).click(locator.clickBtnEliminar);
    I.wait(10);
    I.retry(wait).saveScreenshot("Eliminar_2.png");
    I.addMochawesomeContext("Se eliminó el pedido correctamente");
    I.addMochawesomeContext("Eliminar_2.png");
    I.wait(10);
  }
};
