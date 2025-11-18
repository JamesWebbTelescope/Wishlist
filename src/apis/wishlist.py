from flask_restx import Namespace, Resource, fields, Model
#from flask_jwt_extended import jwt_required
#from apis.auth import authorizations
from flask import Flask, jsonify, request


def create_api_wishlist(db_manager):
    api: Namespace = Namespace("wishlist", description="wishlist")

    wishlist_model = api.model('OrderModel', {'price': fields.Integer, 'name': fields.String, 'link': fields.String})

    @api.route("/")
    class Wishlist(Resource):
        
        @api.doc('Get all orders')
        def get(self):
            result = db_manager.wishlist.GetAll()
            return result
        
    
        @api.doc('Receive a new wish')
        @api.expect(wishlist_model)
        def post(self):
            name = api.payload['name']
            price = api.payload['price']
            link = api.payload['link']
            result = db_manager.wishlist.Insert(name, price, link)
            #orders_list.append({'id': {orderID}, 'produktID': {produktID}, 'warelist': {warelist}, 'total': {total}})
            return result
        
    return api