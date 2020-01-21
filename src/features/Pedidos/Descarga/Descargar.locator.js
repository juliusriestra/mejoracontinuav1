config = {
  locator: {
    msgAccesosAdmSac: { xpath: '//*[@id="header_tsmv"]/div[1]/div[1]/span' },

    buscoPestanaAdmSac: row => {
      return (
        '//div/div/div[2]/div[2]/ul/li[2]/div/a[contains(text(),"' +
        row.toString() +
        '")]'
      );
    },

    buscoLinkCargarPedido: row => {
      return (
        '//div/div[2]/div[2]/ul/li/ul/li[10]/a[contains(text(),"' +
        row.toString() +
        '")]'
      );
    },

    msgCargarPedido: {
      xpath: '//*[@id="cont_contenido"]/div[2]/div[1]/div/div/div/h1'
    },

    imgCalendar: {
      xpath:
        '//*[@id="cont_contenido"]/div[2]/div[2]/div/div/div[1]/div[2]/div/img'
    },

    buscarFecha: row => {
      return (
        '//div/table/tbody/tr/td/a[contains(text(),"' + row.toString() + '")]'
      );
    },

    selectTipoProceso: { id: "cboTipoCronograma" },

    botonDescargar: { id: "btnDescargar" }
  }
};

module.exports.config = config;
module.exports.locator = config.locator;
