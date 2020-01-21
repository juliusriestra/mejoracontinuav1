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
    
    clickReservar: {
      xpath: '//*[@id="btnValidarPROL"]'
    },
  
    clickModificar: { 
      xpath: '//*[@id="contentmain"]/div[2]/div[3]/div[6]/div[2]/div[3]/div[2]/div[2]/div[3]/button'
    },

    mensajeAgregado: { xpath: '//*[@id="alertDialogMensajes25seg"]/div/div[2]'},
    
    mensajeReservado: {
      xpath: '//*[@id="banner-odd"]/div[6]/div'
    }
  }
};
module.exports.config = config;
module.exports.locator = config.locator;
