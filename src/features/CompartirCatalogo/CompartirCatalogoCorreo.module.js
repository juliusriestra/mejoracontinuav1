const I = actor();
let wait = { retries: 5, minTimeout: 2000 };
const config = require("./CompartirCatalogoCorreo.locator");
let locator = config.locator;
const assert = require("assert");

module.exports = {
  SeleccionarOpcionCompartirCatalogo() {
    I.wait(5);
    I.retry(wait).seeElement(locator.btn_Compartir_Home);
    I.retry(wait).click(locator.btn_Compartir_Home);
  },

  SeleccionarOpcionCompartir() {
    I.wait(5);
    I.retry(wait).seeElement(locator.btn_Compartir_Catalogo);
    I.retry(wait).click(locator.btn_Compartir_Catalogo);
    I.retry(wait).saveScreenshot("Ingresó opcion de compartir catalago.png");
    I.addMochawesomeContext("Se dio clic al boton de compartir");
    I.addMochawesomeContext("Ingresó opcion de compartir catalago.png");
  
  },

  SeleccionarOpcionCompartirPorCorreo() {
    I.retry(wait).seeElement(locator.btn_Seleccionar_Correo);
    I.retry(wait).click(locator.btn_Seleccionar_Correo);
    I.wait(5);
    I.retry(wait).saveScreenshot("Selecciono el correo.png");
    I.addMochawesomeContext("Se dio clic al boton seleccionar correo");
    I.addMochawesomeContext("Selecciono el correo.png");
  },

  IngresarCorreo(correo) {
    I.retry(wait).fillField(locator.label_ingresar_correo, correo);
    I.wait(5);
    I.retry(wait).saveScreenshot("Ingrese correo.png");
    I.addMochawesomeContext("Ingresar correo");
    I.addMochawesomeContext("Ingrese correo.png");
  },

  SeleccionarOpcionEnviar() {
    I.retry(wait).click(locator.btn_Enviar_Correo);
    I.wait(5);
    I.retry(wait).saveScreenshot("Ingrese correo.png");
    I.addMochawesomeContext("Ingresar correo");
    I.addMochawesomeContext("Ingrese correo.png");
  },

  SeleccionarOpcionCompartirPorWhatsApp() {
    I.wait(5);
    I.retry(wait).seeElement(locator.btn_Seleccionar_WhatsApp);
    I.retry(wait).click(locator.btn_Seleccionar_WhatsApp);
    I.wait(5);
    I.retry(wait).saveScreenshot("SELECCIONAR WATASAP.png");
    I.addMochawesomeContext("SELECCIONAR WATASAP");
    I.addMochawesomeContext("SELECCIONAR WATASAP.png");
  }
};
