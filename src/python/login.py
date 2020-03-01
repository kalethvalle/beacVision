import sys
import pymysql

class DataBase:
  def __init__(self):
    self.connection = pymysql.connect(
      host      = 'localhost',
      user      = 'phpmyadmin',
      password  = 'kaleth02',
      database  = 'phpmyadmin'
    )

    self.cursor = self.connection.cursor()
    self.__usuario = ''
    self.__password = ''

  def select_user(self, id):
    sql = 'SELECT id, firstName, password FROM usuarios WHERE id = {}'.format(id)

    try:
      self.cursor.execute(sql)
      user = self.cursor.fetchone()

      self.__usuario = user[1]
      self.__password = user[2]

    except expression as e:
      raise

  def __gtUser__(self):
    return self.__usuario

  def __gtPass__(self):
    return self.__password

  def __str__(self):
    return '{"DB": "conexion establecida con exito...", "usuario": "' + self.__usuario + '", "email": "' + self.__password +'" }'

  def closeConnection(self):
    self.connection.close()

class ObtenerParams():
  def __init__(self, user, clave, ):
    self.__user = user
    self.__clave = clave

  def __gtUser__(self):
    return self.__user

  def __gtPass__(self):
    return self.__clave

  def __str__(self):
    # """El método __str__ necesita ser sobreescrito para cambiar la representación como String del objeto."""
    return '{"user": "' + self.__user + '", "pass": "' + self.__clave + '" }'
    
class String():
  def __init__(self, cadena):
    self.__cadena = cadena

  def __str__(self):
    return '{"Status": "' + self.__cadena + '"}'

def main():
  # **********Conexion DataBase PyMySQL********** #
   database = DataBase()
   database.select_user(1)
  #  print(str(database))
   database.closeConnection()
  # ********************************************* #

  # ******Obtiene parametros de Front-End******** #
   Params = ObtenerParams(sys.argv[1], sys.argv[2])
  #  print(str(Params))
  # ********************************************* #

  # *********Valida Login inicio sesion********** #
   if Params.__gtUser__() == database.__gtUser__() and Params.__gtPass__() == database.__gtPass__():
     Cdn = String("0")
   else:
     Cdn = String("1")
      
   print(str(Cdn))
  # ********************************************* #
  
if __name__ == '__main__':
  main()

# sys.stdout.flush()

