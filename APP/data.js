module.exports = function () {
  var data = {
    pets: [
      {
        id:1,
        nameDistrito: "Abancay",
        nameProvincia: "Pomacocha",
      },
      {
        id:2,
        nameDistrito: "Huamanga",
        nameProvincia: "Pacaycasa",
      },
      {
        id:3,
        nameDistrito: "Sucre",
        nameProvincia: "Querobamba",
      },
      {
        id:4,
        nameDistrito: "Chota",
        nameProvincia: "Cochabamba",
      }
    ],
    distritos:[
      {
        id: 1,
        descriptionDistritos: "Distrito01",
	    observationDistrito: "Nombre",
        dateProvincia: "Provincia01",
        distrito:
        {
          id:1,
          nameDistrito: "Abancay",
          nameProvincia: "Pomacocha",
        }
      },
    ]
  }
  return data
}
