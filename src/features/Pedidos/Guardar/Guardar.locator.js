config = {
  locator: {
    clickPedido: {
      xpath: '//*[@id="contentmain"]/div[1]/div[4]/div[1]/div[3]/a'
    },

    fieldCUV: { id: "txtCUV" },

    inputCantidadItem: {
      xpath:
        '//*[@id="frmInsertPedido"]/div[5]/div/input[@type="text"]'
    },

    btnAgregarPedido: { id: "btnAgregar" },

    labelPopupAgregado: { id: "alertDialogMensajes25seg" },

    clickGuardar: {
      xpath: '//*[@id="btnValidarPROL"]'
    },

    mensajeGuardado: {
      xpath: '//*[@id="msgPedidoGuardado"]'
    }
  }
};
module.exports.config = config;
module.exports.locator = config.locator;
