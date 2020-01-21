config = {
  locator: {
    btn_Compartir_Home: {
      xpath: '//*[@id="contentmain"]/div[1]/div[4]/div[4]/div[1]/div[2]/a'
    },

    btn_Compartir_Catalogo: { id: "btnCompartir" },

    btn_Seleccionar_Correo: {
      xpath: '//*[@id="idSection1"]/div[3]/div[2]/div/a[4]/img'
    },

    label_ingresar_correo: { id: "tagCorreo_tag" },

    btn_Enviar_Correo: { id: "btnEnviarCorreo" },

    btn_Seleccionar_WhatsApp: {
      xpath: '//*[@id="idSection1"]/div[3]/div[2]/div/a[1]/img'
    }
  }
};
module.exports.config = config;
module.exports.locator = config.locator;
