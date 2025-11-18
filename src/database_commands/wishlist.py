import mysql.connector

class WishlistModel:
    def __init__(self,db):
        self.db = db
    
    def GetAll(self):
        try:
            conn = self.db.get_connection()
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM wishlist")

                myresult = cursor.fetchall()
                wishlist = []
                for wish in myresult:
                    wishlist.append(self._totuple(wish))
        
            return wishlist
        except Exception as e:
            print("Error getting all wishes:", e)
            return False
        finally:
            if conn is not None:
                conn.close()


    

    def _totuple(self, myresult):
        result = {
                "wishID": myresult[0],
                "price": myresult[1],
                "name": myresult[2],
                "link": myresult[3]
            }
        return result
    