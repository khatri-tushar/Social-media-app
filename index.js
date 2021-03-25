const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
//used for auth and session cookie
const session = require('express-session')
const passport = require('passport')
const passportLocal = require('./config/passport-local-strategy')
const MongoStore = require('connect-mongo').default;
const flash = require('connect-flash')
const customMware = require('./config/middleware')
const sassMiddleware = require('node-sass-middleware')



app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}))

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('assets'));
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//mongo store is used to store the session cookie in the db 
app.use(session({
    name: 'Khapitar',
    //TODO change the secret before deployment in production mode
    secret: "something",
    saveUninitialized: false, //when user has not logged in i don't want to save extra deta
    resave: false, //baar baar save nahi krna merko isiliye
    cookie: {
        maxAge: (1000 * 100 * 60)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/khapitar_db',
        autoRemove: 'disabled'
    })

}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser)

app.use(flash());
app.use(customMware.setFlash)

//use express routes
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if (err) {
        console.log(`Error in running the server: ${err} `)
    }
    console.log(`Server is running on port :${port}`)
})


//app.use mai positions ka boht dhyaan rkhna pdega bkc 2 ghente se mrwa rha tha app.use(express.static) ko view engine set krne ke baad use krna hota hai,  mai phele kr rha tha😭😭