let inciales = (nombre, apellido) => nombre[0] + apellido[0];

let saludar = (nombre, apellido, callback) => '¡hola ' + callback(nombre, apellido) + '!'

saludar('silvana', 'casas', inciales)
