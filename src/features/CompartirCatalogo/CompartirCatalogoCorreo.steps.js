const login = require("../../pages/Login/Login.module");
const CompartirCatalogo = require("./CompartirCatalogoCorreo.module");
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

When("Seleccionar la opcion Comparte tus catalogos", async function() {
  await CompartirCatalogo.SeleccionarOpcionCompartirCatalogo();
});

When("Seleccionar Compartir catalogos", async function() {
  await CompartirCatalogo.SeleccionarOpcionCompartir();
});

Then("seleccionar opcion Compartir por correo", function() {
  CompartirCatalogo.SeleccionarOpcionCompartirPorCorreo();
});

When("Ingresar {string}", function(correo) {
  CompartirCatalogo.IngresarCorreo(correo);
});

Then("Seleccionar enviar", function() {
  CompartirCatalogo.SeleccionarOpcionEnviar();
});

Then("Seleccionar opcion Compartir por WhatsApp", function() {
  CompartirCatalogo.SeleccionarOpcionCompartirPorWhatsApp();
});
