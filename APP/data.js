
module.exports = function () {
  var data = {
    usuarios: [
      {
        id:1,
		username:"Rengar",
		password:"zzzzzzzzzz",
		email:"emilg29090@gmail.com",
		nombres_usuario:"Emilio",
		apellidos_usuario:"Gonzales Castro",
		fecha_nacimiento:"2001-08-18",
		idalerta:1,
		iddistrito:5,
		idsuscripcion:1
	  },
      {
        id:2,
		username:"Hanzo",
		password:"gaaaaaaaaaa",
		email:"hudosino00@gmail.com",
		nombres_usuario:"Arnold Samir",
		apellidos_usuario:"Torres Rotas",
		fecha_nacimiento:"2000-01-20",
		idalerta:2,
		iddistrito:10,
		idsuscripcion:2
      },
      {
        id:3,
		username:"Hanzo",
		password:"gaaaaaaaaaa",
		email:"hudosino00@gmail.com",
		nombres_usuario:"Arnold Samir",
		apellidos_usuario:"Torres Rotas",
		fecha_nacimiento:"2000-10-10",
		idalerta:3,
		iddistrito:1,
		idsuscripcion:3
      },
    
    ],
	Delitos: [
		{
		  idDelito:1,
		  Hora:"12:30",
		  Fecha:"12 de mayo",
		  Distrito:"Surco",
		  Distrito_idZona:"Parque villaalegre",
		  IdTipoDelitos: "Robo"

		},
		{
		  idDelito:2,
		  Hora:"11:34",
		  Fecha:"17 de mayo",
		  Distrito:"Molina",
		  Distrito_idZona:"Por ahí",
		  IdTipoDelitos: "Robo"
		},

	]
  }
  return data
}