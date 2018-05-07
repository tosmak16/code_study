import os

from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from .config import config_map

# instantiate the db
db = SQLAlchemy()


def create_app(script_info=None):

    # instantiate the app
    app = Flask(__name__)

    # set config
    app_environment = os.getenv('APP_ENVIRONMENT')
    app.config.from_object(config_map[app_environment])

    # set up extensions
    db.init_app(app)

    # register blueprints
    from project.api.users import users_blueprint
    app.register_blueprint(users_blueprint)

    # shell context for flask cli
    app.shell_context_processor({'app': app, 'db': db})
    return app