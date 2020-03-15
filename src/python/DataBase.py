import pymysql

class DataBase:
    def __init__(self, server, usuar, passw, basedatos):
        self.connection = pymysql.connect(
            host      = server,
            user      = usuar,
            password  = passw,
            database  = basedatos
        )

        self.cursor = self.connection.cursor()
        print(str("Conexion a base de datos exitosa..."))

    def runSentence(self, sql):
        self.cursor.execute(sql)
        return self.cursor

    def closeConnection(self):
        self.connection.close()
        print(str("Base de datos desconectada..."))

    def commit(self):
        self.connection.commit()
        return

    def rollBack(self):
        self.connection.rollBack()
        return