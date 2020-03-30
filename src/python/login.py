import sys
import pymysql

class DataBase:
  def __init__(self):
    self.connection = pymysql.connect(
      host      = 'localhost',
      user      = 'root',
      password  = '',
      database  = 'phpmyadmin'
    )

    self.cursor = self.connection.cursor()

  def selectUser(self):
    sql = "SELECT id, firstName, password FROM usuarios"

    try:
      self.cursor.execute(sql)
      self.datos = self.cursor.fetchall()

    except Exception as e:
      raise

  def getDatos(self):
    return self.datos

  def __str__(self):
    return '{"DB": "conexion establecida con exito..."}'

  def closeConnection(self):
    self.connection.close()

class ObtenerParams():
  def __init__(self, user, clave, ):
    self.__user = user
    self.__clave = clave

  def getUser(self):
    return self.__user

  def getPass(self):
    return self.__clave

  def __str__(self):
    # """El método __str__ necesita ser sobreescrito para cambiar la representación como String del objeto."""
    return '{"user": "' + self.__user + '", "pass": "' + self.__clave + '" }'
    
class String():
  def __init__(self, cadena):
    self.__cadena = cadena

  def __str__(self):
    return '{"status": "' + self.__cadena + '"}'

def main():
  # ******Obtiene parametros de Front-End******** #
   Params = ObtenerParams(sys.argv[1], sys.argv[2])
  # ********************************************* #

  # **********Conexion DataBase PyMySQL********** #
   database = DataBase()
   database.selectUser()
   datos = database.getDatos()

   database.closeConnection()
  # ********************************************* #

  # ******* Envia Respuesta del Back-End ******** #
   print(str(database))
   print(str(Params))  
  # ********************************************* #

  # *********Valida Login inicio sesion********** #
   Cdn = String("1")
   for data in range(len(datos)):
     if Params.getUser() == datos[data][1] and Params.getPass() == datos[data][2]:
       Cdn = String("0")

   print(str(Cdn))
  # ********************************************* #
  
if __name__ == '__main__':
  main()

# sys.stdout.flush()

