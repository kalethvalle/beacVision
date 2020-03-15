import sys
from DataBase import DataBase

class ObtenerParams():
    def __init__(self, nombre, apellido, email, clave):
        self.__nombre = nombre
        self.__apellido = apellido
        self.__email = email
        self.__clave = clave

    def getNombre(self):
        return self.__nombre

    def setNombre(self, nombre):
        self.__nombre = nombre

    def getApellido(self):
        return self.__apellido

    def setApellido(self, apellido):
        self.__apellido = apellido

    def getEmail(self):
        return self.__email

    def setEmail(self, email):
        self.__email = email

    def getClave(self):
        return self.__clave

    def setClave(self, clave):
        self.__clave = clave

    def __str__(self):
        return '{"nombre": "' + self.__nombre + '", "apellido": "' + self.__apellido + '", "email": "' + self.__email + '", "clave": "' + self.__clave + '"}'

def conexion(nombre, apellido, email, clave):
  try:
    db = DataBase('localhost', 'phpmyadmin', 'kaleth02', 'phpmyadmin')
    sql = "INSERT INTO usuarios(firstName, lastName, email, password) values('" + nombre + "', '" + apellido + "', '" + email + "', '" + clave + "')"
    db.runSentence(sql)
    db.commit()
    print(str('{"status": "0"}'))

  except Exception as e:
    db.rollBack()
    print(str(e))

  finally:
    db.closeConnection()

def main():
  # ******Obtiene parametros de Front-End******** #
    Params = ObtenerParams(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
  # ********************************************* #

  # **********Conexion DataBase PyMySQL********** #
    conexion(Params.getNombre(), Params.getApellido(), Params.getEmail(), Params.getClave())
  # ********************************************* #

  # ******* Envia Respuesta del Back-End ********* #
    # print(str(Params))
  # ********************************************* #

if __name__ == "__main__":
    main()