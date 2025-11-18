from flask_restx import Namespace, Resource, fields, Model
#from flask_jwt_extended import jwt_required
#from apis.auth import authorizations
from flask import Flask, jsonify, request


def create_api_wishlist(db_manager):
    api: Namespace = Namespace("wishlist", description="wishlist")

    wishlist_model = api.model('OrderModel', {'WishID': fields.Integer, 'price': fields.Integer, 'name': fields.String, 'link': fields.String})

    @api.route("/")
    class Wishlist(Resource):
        
        @api.doc('Get all orders')
        def get(self):
            result = db_manager.wishlist.GetAll()
            return result
        
    return api