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

    labelCarrito: { id: "pCantidadProductosPedido" },

    buscarNombreBoton: row => {
      return (
        '//*[@id="divCarruselSugerido"]/div/div/div/div/div[4]/a[contains(text(),"' +
        row.toString() +
        '")]'
      );
    }
  }
};

module.exports.config = config;
module.exports.locator = config.locator;
