
const express = require( 'express' );
//const sql = require( 'sql' );
const bodyParser = require( 'body-parser' );
const [ User, sms ] = require( './../services_model/db_service' );
const [ appConnect, appSession ] = require( './../services_model/app_service' );
const [ SessionManager ] = require( './../services_model/passwd_service' );
//const PasswordManager = require( './../services_model/passwd_service' );
const session = require( 'express-session' );
var MongoStore = require( 'connect-mongo' )( session );
const router = express.Router();
const cors = require( 'express-cors' );
