(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_tsx"],{

/***/ "./resources/js/Pages/Home.tsx":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Layout_1 = __importDefault(__webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.tsx"));

var Home = function Home(_a) {
  var posts = _a.posts; // const Home = () => {
  // const { posts } = usePage().props;

  console.log(posts); // ok

  return react_1["default"].createElement(Layout_1["default"], {
    title: "Home kk"
  }, react_1["default"].createElement("div", {
    className: "container"
  }, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("h3", {
    className: "col-md-12 text-success font-italic py-4"
  }, "This is the home page. See below all posts."), react_1["default"].createElement("div", {
    className: "col-md-12 content-page"
  }, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-md-6 blog-post"
  }, react_1["default"].createElement("div", {
    className: "post-title"
  }, react_1["default"].createElement("a", {
    href: "pages/single.php"
  }, react_1["default"].createElement("h1", null, "How to make your company website based on bootstrap framework on localhost?"))), react_1["default"].createElement("div", {
    className: "post-info"
  }, react_1["default"].createElement("span", null, "November 23, 2016 / by ", react_1["default"].createElement("a", {
    href: "https://www.free-css.com/free-css-templates"
  }, "Alex Parker"))), react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ut ratione similique temporibus tempora dicta soluta? Qui hic, voluptatem nemo quo corporis dignissimos voluptatum debitis cumque fugiat mollitia quasi quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ut ratione similique."), react_1["default"].createElement("a", {
    href: "pages/single.php",
    className: "button button-style button-anim fa fa-long-arrow-right"
  }, react_1["default"].createElement("span", null, "Read More"))))))));
}; // Home.layout = page => <Layout children={page} title="Welcome fiii" />


exports.default = Home;

/***/ }),

/***/ "./resources/js/Shared/Footer.tsx":
/*!****************************************!*\
  !*** ./resources/js/Shared/Footer.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Footer = function Footer() {
  return react_1["default"].createElement("footer", {
    className: "text-center text-secondary py-3"
  }, react_1["default"].createElement("p", {
    className: "mb-0"
  }, "Becode \xA9 2021 \uFF5C ", react_1["default"].createElement("a", {
    href: "https://github.com/Shticrina",
    className: "text-light"
  }, "cristina")));
};

exports.default = Footer;

/***/ }),

/***/ "./resources/js/Shared/Header.tsx":
/*!****************************************!*\
  !*** ./resources/js/Shared/Header.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js"); // const Header:React.FC<Props> = ({ pagetitle, appName, user }) => {


var Header = function Header(_a) {
  // const { user } = usePage().props;
  // console.log(user); // ok
  // console.log(usePage().props); // ok
  var pagetitle = _a.pagetitle;
  return react_1["default"].createElement("nav", {
    className: "navbar navbar-expand-md navbar-light bg-white shadow-sm"
  }, react_1["default"].createElement("div", {
    className: "container-fluid"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/homepage",
    className: "navbar-brand"
  }, "appName / ", pagetitle), react_1["default"].createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": ""
  }, react_1["default"].createElement("span", {
    className: "navbar-toggler-icon"
  })), react_1["default"].createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, react_1["default"].createElement("ul", {
    className: "navbar-nav mr-auto"
  }, react_1["default"].createElement("li", {
    className: "nav-item px-3"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/homepage"
  }, "Home")), react_1["default"].createElement("li", {
    className: "nav-item px-3"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/posts"
  }, "Posts"))), react_1["default"].createElement("ul", {
    className: "navbar-nav ml-auto"
  }, react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/login",
    className: "nav-link"
  }, "Login")), react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/register",
    className: "nav-link"
  }, "Register")), react_1["default"].createElement("li", {
    className: "nav-item dropdown"
  }, react_1["default"].createElement("a", {
    id: "navbarDropdown",
    className: "nav-link dropdown-toggle",
    href: "#",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "username"), react_1["default"].createElement("div", {
    className: "dropdown-menu dropdown-menu-right",
    "aria-labelledby": "navbarDropdown"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/logout",
    className: "dropdown-item"
  }, "Logout")))))));
};

exports.default = Header;

/***/ }),

/***/ "./resources/js/Shared/Layout.tsx":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Header_1 = __importDefault(__webpack_require__(/*! ./Header */ "./resources/js/Shared/Header.tsx"));

var Footer_1 = __importDefault(__webpack_require__(/*! ./Footer */ "./resources/js/Shared/Footer.tsx"));

var Layout = function Layout(_a) {
  /*useEffect(() => {
      document.title = title;
  }, [title]);*/
  var title = _a.title,
      children = _a.children;
  return react_1["default"].createElement("main", null, react_1["default"].createElement(Header_1["default"], {
    pagetitle: title
  }), react_1["default"].createElement("article", null, children), react_1["default"].createElement(Footer_1["default"], null));
};

exports.default = Layout;

/***/ })

}]);