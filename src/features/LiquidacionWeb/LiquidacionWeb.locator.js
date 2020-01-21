config = {
  locator: {
    clickMiNegocio: { id: "lnk-pri-mi-negocio" },
    clickIngresaTuPedido: {
      xpath: '//*[@id="contentmain"]/div[1]/div[2]/div[1]/div[3]/a'
    },

    windowPopUP: { id: "hdEventoIDShowRoomVenta" },
    clickCerrarPopUp: { xpath: '//*[@id="PopShowroomVenta"]/div/a' },

    productoLiquidacionHome: row => {
      return (
        '//*[@id="divCarruselLiquidaciones"]/div/div/div/div/div[2]/p/b[contains(text(),"' +
        row.toString() +
        '")]'
      );
    },

    inputCantidadItemHome: {
      xpath:
        '//*[@id="divCarruselLiquidaciones"]/div/div/div[1]/div/div[2]/div/input[@type="text"]'
    },

    clickAgregaloProductoHome: {
      xpath: '//*[@id="divCarruselLiquidaciones"]/div/div/div[1]/div/div[2]/a'
    },

    clickVerMas: { xpath: '//*[@id="seccionMiAcademiaLiquidacion"]/div[5]/a' },

    productoLliquidacionLanding: row => {
      return (
        '//*[@id="htmlListado"]/div/div/div/p[contains(text(),"' +
        row.toString() +
        '")]'
      );
    },

    stockInicial: row => {
      return `//*[@id="htmlListado"]/div[${row}]/div/div/p[2]/span`;
    },

    inputCantidadItemLanding: {
      xpath:
        '//html/body/div/div[2]/div[3]/div/div/div/div/div[4]/input[@type="text"]'
    },

    clickAgregarProductoLiquidacion: {
      xpath: '//*[@id="htmlListado"]/div[1]/div/div/a'
    },

    clickOpcionLiquidacionWeb: {
      xpath: '//*[@id="seccionMiAcademiaLiquidacion"]/div[5]/a'
    },

    clickFlechaNext: {
      xpath: '//*[@id="seccionMiAcademiaLiquidacion"]/div[5]/div[3]/a[2]/img'
    },

    clickBotonMas: {
      xpath:
        '//*[@id="divCarruselLiquidaciones"]/div/div/div[1]/div/div[2]/div[3]/div/a[1]/img'
    },

    clickAgregar: row => {
      return `//*[@id="htmlListado"]/div[${row}]/div/div/a`;
    },

    NombreProductoHome: {
      xpath: '//*[@id="divCarruselLiquidaciones"]/div/div/div[2]/div/div[2]/p/b'
    },

    NombreProductoCarrito: { xpath: '//*[@id="carrito_items"]/div[2]/div[2]' },
    ClickCarrito: { id: "pCantidadProductosPedido" }
  }
};

module.exports.config = config;
module.exports.locator = config.locator;
