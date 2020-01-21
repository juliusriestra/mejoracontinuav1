config = {
  locator: {
    btnIngresarPedido: {
      xpath: '//*[@id="contentmain"]/div[1]/div[4]/div[1]/div[3]/a'
    },
    fieldCUV: { id: "txtCUV" },
    btnAgregarPedido: { xpath: '//*[@id="btnAgregar"]' },
    labelPopupAgregado: { id: "alertDialogMensajes25seg" },
    clickEnMas: {
      xpath: '//*[@id="tbobyDetallePedido"]/div[1]/div[2]/div[2]/div/a[1]/img'
    },

    clickEliminar: { xpath: '//*[@id="tbobyDetallePedido"]/div[1]/div[6]/a' },
    clickBtnEliminar: { xpath: '//*[@id="tlpDelete_2_0"]/ul/li[4]/button' },

    labelCarrito: { id: "pCantidadProductosPedido" },

    clickEliminarCompleto: {
      xpath:
        '//*[@id="contentmain"]/div[2]/div[3]/div[6]/div[2]/div[5]/p/span/a'
    },

    buscarNombreBotonSiEliminar: row => {
      return '//ul/li[4]/button[contains(text(),"' + row.toString() + '")]';
    }
  }
};

module.exports.config = config;
module.exports.locator = config.locator;
