Login = {
  locator: {
    selectPais: { name: "CodigoISO" },
    fieldUsuario: { id: "txtUsuario" },
    fieldPassword: { id: "txtContrasenia" },
    clickLogin: { id: "btnLogin" },
    btnLoginFB: { xpath: "//*[@id='btnLoginFB']" },
    popupShowRoom: { xpath: "//div[@class='saludo_consultora_showroom']" },
    fieldIdShowRoomVenta: { id: "hdEventoIDShowRoomVenta" },
    clickCerrarPopup: { xpath: '//*[@id="PopShowroomVenta"]/div/a' },
    clickLogout: { id: "lnk-sup-cerrar-sesion" },
    labelMessage: { xpath: "//*[@id='ErrorTextLabel']" },
    clickIngresaFacebook: { id: "btnLoginFB" },
    clickOlvidasteContrasena: { id: "loginanterior" },
    clickIngresarPedido: {
      xpath: '//*[@id="contentmain"]/div[1]/div[2]/div[1]/div[3]'
    }
  }
};
module.exports.login = Login;
module.exports.locator = Login.locator;
