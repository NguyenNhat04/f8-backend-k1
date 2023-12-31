require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var expressLayouts = require("express-ejs-layouts");
const AuthMiddleware = require("./middlewares/AuthMiddleware");
const GuestMiddleware = require("./middlewares/GuestMiddleware");

var app = express();
const session = require("express-session");
const flash = require("connect-flash");
app.use(
  session({
    secret: "f8",
    resave: true,
    saveUninitialized: false,
  })
);
app.use(flash());

var indexRouter = require("./routes/index");

var usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const registerRouter = require("./routes/register");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", GuestMiddleware, authRouter);
app.use("/register", registerRouter);
app.use(AuthMiddleware);
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
