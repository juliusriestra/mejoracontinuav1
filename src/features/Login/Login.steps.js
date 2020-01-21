const login = require("../../pages/Login/Login.module");
let wait = { retries: 10, minTimeout: 3000 };

const I = actor();

Given("Ingreso el {string} mi {string} y mi {string}", async function(
  Pais,
  Usuario,
  Password
) {
  login.Constructor();
  login.ValidacionInicialLogin();
  login.IngresarCredenciales(Pais, Usuario, Password);
});

When('Le doy click en el boton "Ingresa a tu cuenta"', function() {
  login.ClickBotonLogin();
});

Then(
  "Puedo ver mi estado de cuenta, mis ganancias e ingresar mi pedido",
  async function() {
    login.ValidacionFinalLogin();
    await login.SiPopUp_Cerrar();
  }
);

Then("Cierro la sesion", function() {
  login.CerrarSesion();
});

Then("veo mensaje informativo {string}", function(message) {
  login.OnVerMensaje(message);
});

Then("veo label informativo", function() {
  login.OnShowMessage();
});

Then("veo popup informativo", function() {
  login.OnShowMessagePopup();
});
