webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SigninPage.prototype.verification = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__verification_verification__["a" /* VerificationPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/signin/signin.html"*/`<!--\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'sign_in\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n-->\n\n<ion-content class="bg-theme">\n    <div class="logo-box " text-center>\n        <img src="assets/imgs/logo2.png" class="animated zoomIn delay_3">\n    </div>\n\n    <div class="form">\n        <ion-list no-lines class="animated slideInUp delay_3">\n            <ion-item class="">\n                <h2 text-center item-start>+86</h2>\n                <ion-input type="text" placeholder="{{\'enter_phone_number\' | translate}}"></ion-input>\n                <button item-end ion-button round class="btn" (click)="verification()">{{\'next\' | translate}}</button>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videocall_videocall__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voicecall_voicecall__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profileinfo_profileinfo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notificationsetting_notificationsetting__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChattingPage = /** @class */ (function () {
    function ChattingPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ChattingPage.prototype.setViewType = function (vt) {
        this.viewType = vt;
    };
    ChattingPage.prototype.profileinfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profileinfo_profileinfo__["a" /* ProfileinfoPage */]);
    };
    ChattingPage.prototype.videocall = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__videocall_videocall__["a" /* VideocallPage */]);
        modal.present();
    };
    ChattingPage.prototype.voicecall = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__voicecall_voicecall__["a" /* VoicecallPage */]);
        modal.present();
    };
    ChattingPage.prototype.orderinfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notificationsetting_notificationsetting__["a" /* NotificationsettingPage */]);
    };
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/chatting/chatting.html"*/`<ion-header class="">\n    <ion-navbar>\n        <ion-title class="active">\n            <!-- <div class="profile d-flex" (click)="profileinfo()">\n                <div class="profile_img_box" item-start>\n                    <div class="profile_img">\n                        <img src="assets/imgs/1.png">\n                    </div>\n                </div>\n                <h2 class="text-white">Luicy Williams</h2>\n            </div> -->\n            <h2 class="text-white">小学五年级数学.pdf</h2>\n            <!-- <span class="end">\n                <ion-icon class="material-icons" (click)="videocall()">videocam</ion-icon>\n                <ion-icon class="material-icons" (click)="voicecall()">phone</ion-icon>\n                <ion-icon class="material-icons">more_vert</ion-icon>\n            </span> -->\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="chat_container">\n        <!-- <div class="chat-box d-flex received">\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h2>Hello, There?</h2>\n                </div>\n            </div>\n            <p>12:01 pm</p>\n        </div>\n\n        <div class="chat-box d-flex received">\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h2>Hope you remember me.</h2>\n                </div>\n            </div>\n            <p>12:01 pm</p>\n        </div>\n\n\n        <div class="chat-box d-flex send">\n            <p>12:07 pm</p>\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h2>Hey, Hi Samantha.</h2>\n                </div>\n            </div>\n        </div>\n\n        <div class="chat-box d-flex send">\n            <p>12:07 pm</p>\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h2>Ofcourse I remember you.</h2>\n                </div>\n            </div>\n        </div>\n\n        <div class="chat-box d-flex received">\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h2>Can you send me a contact of Tonny?</h2>\n                </div>\n            </div>\n            <p>12:08 pm</p>\n        </div>\n\n        <div class="chat-box d-flex received contact">\n            <p>12:08 pm</p>\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h2>Tonny Jackson</h2>\n                </div>\n                <div class="contact_box">\n                    <ion-icon class="material-icons">person_add</ion-icon>\n                    <ion-icon class="material-icons border_left">message</ion-icon>\n                </div>\n            </div>\n        </div> -->\n        <img src="assets/imgs/preview.png">\n\n        <!-- <div class="chat-box d-flex send video">\n            <p>12:08 pm</p>\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h2>This video for you</h2>\n                </div>\n                <div class="video_box">\n                    <img src="assets/imgs/m2.png">\n                    <ion-icon class="material-icons">play_circle_outline</ion-icon>\n                </div>\n            </div>\n        </div>\n\n        <div class="chat-box d-flex received images location">\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h2>This location for rich us</h2>\n                </div>\n                <div class="map">\n                    <img src="assets/imgs/map.png">\n                    <ion-icon class="material-icons text-theme">location_on</ion-icon>\n                </div>\n            </div>\n            <p>12:08 pm</p>\n        </div>\n\n        <div class="chat-box d-flex send images">\n            <p>12:08 pm</p>\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h2>This is for you</h2>\n                </div>\n                <div class="img_box">\n                    <img src="assets/imgs/m5.png">\n                </div>\n            </div>\n        </div> -->\n    </div>\n</ion-content>\n<ion-footer class="form animated slideInUp delay_3">\n    <ion-list no-lines [ngClass]="viewType == \'active\' ? \'list active\':\'list\'">\n        <div class="option bg-theme d-flex">\n            <ion-icon class="material-icons text-white">description</ion-icon>\n            <ion-icon class="material-icons text-white">headset_mic</ion-icon>\n            <ion-icon class="material-icons text-white">perm_contact_calendar</ion-icon>\n            <ion-icon class="material-icons text-white">location_on</ion-icon>\n            <ion-icon class="material-icons text-white">photo</ion-icon>\n            <ion-icon class="material-icons text-white">photo_camera</ion-icon>\n            <ion-icon class="material-icons text-white" (click)="setViewType(null)">close</ion-icon>\n        </div>\n        <!-- <ion-item>\n            <ion-icon class=" material-icons " item-start>insert_emoticon</ion-icon>\n            <ion-input type="text " placeholder="{{ \'type_your_message\' | translate}} "></ion-input>\n            <div class=" " item-end>\n                <ion-icon class="material-icons" (click)="setViewType(\'active\')">attach_file</ion-icon>\n                <ion-icon class="material-icons text-theme">mic</ion-icon>\n            </div>\n        </ion-item> -->\n    </ion-list>\n    <ion-fab class="fab_btn" bottom right (click)="orderinfo()">\n        <button bottom ion-fab class="bg-theme">\n            <ion-icon class="material-icons">print</ion-icon>\n        </button>\n    </ion-fab>\n</ion-footer>`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/chatting/chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideocallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideocallPage = /** @class */ (function () {
    function VideocallPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    VideocallPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    VideocallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-videocall',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/videocall/videocall.html"*/`<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title text-center>\n            Luicy Williams\n            <span>987 654 3210</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="video_chat">\n        <img src="assets/imgs/picture.png">\n    </div>\n\n</ion-content>\n<ion-footer class="animated slideInUp delay_3">\n    <ion-row class="text-white">\n        <ion-col col-6 class="d-flex item_start">\n            <ion-icon class="material-icons" (click)="dismiss()">call_end</ion-icon>\n            <h2>02:28</h2>\n        </ion-col>\n        <ion-col col-6 class="d-flex item_end">\n            <ion-icon class="material-icons end">cached</ion-icon>\n            <div class="user_img end">\n                <img src="assets/imgs/7.png">\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/videocall/videocall.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], VideocallPage);
    return VideocallPage;
}());

//# sourceMappingURL=videocall.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoicecallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VoicecallPage = /** @class */ (function () {
    function VoicecallPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    VoicecallPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    VoicecallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-voicecall',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/voicecall/voicecall.html"*/`<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <ion-icon class="material-icons end">more_vert</ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="voice_chat animated zoomIn delay_3">\n        <div class="animation_box a"></div>\n        <div class="animation_box b"></div>\n        <div class="animation_box c"></div>\n        <div class="animation_box d"></div>\n        <div class="img-box">\n            <img src="assets/imgs/profile_pic.png">\n        </div>\n    </div>\n    <div class="details text-white" text-center>\n        <h2>Luicy Williams</h2>\n        <p>987 654 3210</p>\n    </div>\n</ion-content>\n\n<ion-footer class="animated slideInUp delay_3">\n    <ion-row class="text-white">\n        <ion-col col-4 text-center>\n            <ion-icon class="material-icons">volume_up</ion-icon>\n        </ion-col>\n        <ion-col col-4 text-center (click)="dismiss()">\n            <ion-icon class="material-icons call-end">call_end</ion-icon>\n        </ion-col>\n        <ion-col col-4 text-center>\n            <h2>04:29</h2>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/voicecall/voicecall.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], VoicecallPage);
    return VoicecallPage;
}());

//# sourceMappingURL=voicecall.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videocall_videocall__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voicecall_voicecall__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profilepicture_profilepicture__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileinfoPage = /** @class */ (function () {
    function ProfileinfoPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ProfileinfoPage.prototype.profilepicture = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__profilepicture_profilepicture__["a" /* ProfilepicturePage */]);
        modal.present();
    };
    ProfileinfoPage.prototype.videocall = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__videocall_videocall__["a" /* VideocallPage */]);
        modal.present();
    };
    ProfileinfoPage.prototype.voicecall = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__voicecall_voicecall__["a" /* VoicecallPage */]);
        modal.present();
    };
    ProfileinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profileinfo',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/profileinfo/profileinfo.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'profile\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item class="profile">\n                <div class="profile_img_box animated zoomIn delay_1" (click)="profilepicture()">\n                    <div class="profile_img">\n                        <img src="assets/imgs/shop1.jpg">\n                    </div>\n                </div>\n                <h1 class="" text-center>东直门外大街28号华军速印</h1>\n                <h4 text-center>早9:00点至晚20:00营业</h4>\n            </ion-item>\n\n            <ion-item class="media_shared">\n                <ion-label>{{\'media_shared\' | translate}}</ion-label>\n                <ion-row item-end class="animated slideInUp delay_1">\n                    <ion-col col>\n                        <div class="img_box">\n                            <img src="assets/imgs/m1.png">\n                        </div>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="img_box">\n                            <img src="assets/imgs/m2.png">\n                        </div>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="img_box">\n                            <img src="assets/imgs/m3.png">\n                        </div>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="img_box">\n                            <img src="assets/imgs/m4.png">\n                        </div>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="img_box">\n                            <img src="assets/imgs/m5.png">\n                        </div>\n                    </ion-col>\n                    <h6 text-center class="bg-theme text-white">{{\'view_all\' | translate}}</h6>\n                </ion-row>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>{{\'mute_notification\' | translate}}</ion-label>\n                <ion-toggle item-end checked="true"></ion-toggle>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>{{\'phone_number\' | translate}}</ion-label>\n                <ion-input type="text" value="+1 987 654 3210" readonly></ion-input>\n                <h3 class="text-theme" item-end>\n                    <!-- <ion-icon class="material-icons" (click)="videocall()">videocam</ion-icon> -->\n                    <ion-icon class="material-icons" (click)="voicecall()">phone</ion-icon>\n                </h3>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-row>\n        <ion-col class="d-flex">\n            <ion-icon class="material-icons text-theme">error</ion-icon>\n            <h6>{{\'report_spam\' | translate}}</h6>\n        </ion-col>\n        <ion-col class="d-flex">\n            <ion-icon class="material-icons text-theme">block</ion-icon>\n            <h6>{{\'block_profile\' | translate}}</h6>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/profileinfo/profileinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], ProfileinfoPage);
    return ProfileinfoPage;
}());

//# sourceMappingURL=profileinfo.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsettingPage = /** @class */ (function () {
    function NotificationsettingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.personal_alert_type = "ring_vibrate";
        this.personal_meassage_tone = "tone_1";
        this.group_alert_type = "only_ring";
        this.group_meassage_tone = "tone_2";
        this.call_alert_type = "none";
        this.call_meassage_tone = "tone_3";
    }
    NotificationsettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notificationsetting',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/notificationsetting/notificationsetting.html"*/`<!--订单\n    打印店铺\n\n    文件\n    文件名称（页数）\n    打印多少也到多少页\n    打印份数\n    黑白/彩色\n    横/竖\n    A4/A3...\n\n    数量-单价\n    总价\n\n    自取/快递\n    快递\n    - 地址\n    - 电话 -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'notification_setting\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <h2>打印店铺</h2>\n        <ion-item class="animated slideInRight delay_1">\n            <ion-label>店铺名称</ion-label>\n            <ion-input type="text" placeholder="{{\'change_your_phone_number\' | translate}}" value="五道口南街10号快印店" readonly></ion-input>\n        </ion-item>\n        <h2>文件</h2>\n        <ion-item class="animated slideInRight delay_1">\n            <ion-label>文件名称</ion-label>\n            <ion-input type="text" placeholder="{{\'change_your_phone_number\' | translate}}" value="小学五年级数学 - 5页" readonly></ion-input>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_1 printfromto">\n            <ion-label>打印起始页</ion-label>\n            <ion-input type="text" placeholder="{{\'change_your_phone_number\' | translate}}" value="1"></ion-input>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_1 printfromto">\n            <ion-label>打印结束页</ion-label>\n            <ion-input type="text" placeholder="{{\'change_your_phone_number\' | translate}}" value="5"></ion-input>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_2">\n            <ion-label>{{\'meassage_tone\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="personal_meassage_tone">\n                <ion-option value="tone_1">自助打印</ion-option>\n                <ion-option value="tone_2">到店自取</ion-option>\n                <ion-option value="tone_3">快递给我</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_1 printfromto">\n            <ion-label>打印份数</ion-label>\n            <ion-input type="text" placeholder="{{\'change_your_phone_number\' | translate}}" value="1"></ion-input>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_2">\n            <ion-label>黑白/彩色</ion-label>\n            <ion-select [(ngModel)]="personal_meassage_tone">\n                <ion-option value="tone_1">黑白</ion-option>\n                <ion-option value="tone_2">彩色</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_2">\n            <ion-label>横/竖</ion-label>\n            <ion-select [(ngModel)]="personal_meassage_tone">\n                <ion-option value="tone_1">竖版</ion-option>\n                <ion-option value="tone_2">横版</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_2">\n            <ion-label>尺寸</ion-label>\n            <ion-select [(ngModel)]="personal_meassage_tone">\n                <ion-option value="tone_1">A4</ion-option>\n                <ion-option value="tone_2">A3</ion-option>\n            </ion-select>\n        </ion-item>\n        \n        <!-- <h2>{{\'group_message\' | translate}}</h2>\n        <ion-item class="animated slideInRight delay_3">\n            <ion-label>{{\'alert_type\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="group_alert_type">\n                <ion-option value="ring_vibrate">{{\'ring_vibrate\' | translate}}</ion-option>\n                <ion-option value="only_ring">{{\'only_ring\' | translate}}</ion-option>\n                <ion-option value="only_vibrate">{{\'only_vibrate\' | translate}}</ion-option>\n                <ion-option value="none">{{\'none\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item> -->\n\n        <!-- <ion-item class="animated slideInRight delay_4">\n            <ion-label>{{\'meassage_tone\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="group_meassage_tone">\n                <ion-option value="tone_1">Morning greetings</ion-option>\n                <ion-option value="tone_2">Grouo greetings</ion-option>\n                <ion-option value="tone_3">Instant</ion-option>\n            </ion-select>\n        </ion-item> -->\n        <!-- <h2>{{\'call_alert\' | translate}}</h2> -->\n        <!-- <ion-item class="animated slideInRight delay_5">\n            <ion-label>{{\'alert_type\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="call_alert_type">\n                <ion-option value="ring_vibrate">{{\'ring_vibrate\' | translate}}</ion-option>\n                <ion-option value="only_ring">{{\'only_ring\' | translate}}</ion-option>\n                <ion-option value="only_vibrate">{{\'only_vibrate\' | translate}}</ion-option>\n                <ion-option value="none">{{\'none\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item> -->\n\n        <!-- <ion-item class="animated slideInRight delay_6">\n            <ion-label>{{\'meassage_tone\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="call_meassage_tone">\n                <ion-option value="tone_1">Morning greetings</ion-option>\n                <ion-option value="tone_2">Grouo greetings</ion-option>\n                <ion-option value="tone_3">Instant</ion-option>\n            </ion-select>\n        </ion-item> -->\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <div class="d-flex">\n        <h2>支付金额：<span class="money">50.00</span> 元</h2>\n        <button ion-button round class="btn end" (click)="creategroupinfo()">{{\'next\' | translate}}</button>\n    </div>\n</ion-footer>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/notificationsetting/notificationsetting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NotificationsettingPage);
    return NotificationsettingPage;
}());

//# sourceMappingURL=notificationsetting.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreategroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creategroupinfo_creategroupinfo__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreategroupPage = /** @class */ (function () {
    function CreategroupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CreategroupPage.prototype.creategroupinfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__creategroupinfo_creategroupinfo__["a" /* CreategroupinfoPage */]);
    };
    CreategroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-creategroup',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/creategroup/creategroup.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'select_members\' | translate}}\n            <ion-icon class="material-icons end">search</ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list no-lines>\n        <ion-item class="animated slideInRight delay_1">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/1.png">\n                </div>\n            </div>\n            <ion-label>\n                <h2 class="d-flex"><span>Aditi Patel</span></h2>\n                <p>Travrlling with Nature</p>\n            </ion-label>\n            <ion-checkbox item-end checked="true"></ion-checkbox>\n        </ion-item>\n\n        <ion-item class=" animated slideInRight delay_2">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/5.png">\n                </div>\n            </div>\n            <ion-label>\n                <h2 class="d-flex"><span>Ammy Drack</span></h2>\n                <p>Feeling Awesome</p>\n            </ion-label>\n            <ion-checkbox item-end></ion-checkbox>\n        </ion-item>\n\n        <ion-item class="animated slideInRight delay_3">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/3.png">\n                </div>\n            </div>\n            <ion-label>\n                <h2 class="d-flex"><span>Andy Reslow</span></h2>\n                <p class="d-flex">Minding own business</p>\n            </ion-label>\n            <ion-checkbox item-end checked="true"></ion-checkbox>\n        </ion-item>\n\n        <ion-item class="animated slideInRight delay_4">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/2.png">\n                </div>\n            </div>\n            <ion-label>\n                <h2 class="d-flex"><span>Azler Hopson</span></h2>\n                <p>Busy</p>\n            </ion-label>\n            <ion-checkbox item-end></ion-checkbox>\n        </ion-item>\n\n        <ion-item class="animated slideInRight delay_5">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/6.png">\n                </div>\n            </div>\n            <ion-label>\n                <h2 class="d-flex"><span>Balton Smith</span></h2>\n                <p>About to reach New York</p>\n            </ion-label>\n            <ion-checkbox item-end checked="true"></ion-checkbox>\n        </ion-item>\n\n        <ion-item class="animated slideInRight delay_6">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/4.png">\n                </div>\n            </div>\n            <ion-label>\n                <h2 class="d-flex"><span>Byron kenny</span></h2>\n                <p>Gyming</p>\n            </ion-label>\n            <ion-checkbox item-end checked="true"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <div class="d-flex">\n        <h2>6 Members Selected</h2>\n        <button ion-button round class="btn end" (click)="creategroupinfo()">{{\'next\' | translate}}</button>\n    </div>\n    <ion-scroll scrollX="true" class="animated slideInUp delay_3">\n        <div class="profile_img_box">\n            <div class="profile_img">\n                <img src="assets/imgs/1.png">\n            </div>\n            <ion-icon name="md-close-circle"></ion-icon>\n        </div>\n        <div class="profile_img_box">\n            <div class="profile_img">\n                <img src="assets/imgs/2.png">\n            </div>\n            <ion-icon name="md-close-circle"></ion-icon>\n        </div>\n        <div class="profile_img_box">\n            <div class="profile_img">\n                <img src="assets/imgs/3.png">\n            </div>\n            <ion-icon name="md-close-circle"></ion-icon>\n        </div>\n        <div class="profile_img_box">\n            <div class="profile_img">\n                <img src="assets/imgs/4.png">\n            </div>\n            <ion-icon name="md-close-circle"></ion-icon>\n        </div>\n        <div class="profile_img_box">\n            <div class="profile_img">\n                <img src="assets/imgs/5.png">\n            </div>\n            <ion-icon name="md-close-circle"></ion-icon>\n        </div>\n        <div class="profile_img_box">\n            <div class="profile_img">\n                <img src="assets/imgs/6.png">\n            </div>\n            <ion-icon name="md-close-circle"></ion-icon>\n        </div>\n    </ion-scroll>\n</ion-footer>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/creategroup/creategroup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CreategroupPage);
    return CreategroupPage;
}());

//# sourceMappingURL=creategroup.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//  import { SetprofilePage } from '../setprofile/setprofile';

var VerificationPage = /** @class */ (function () {
    function VerificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VerificationPage.prototype.setprofile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/verification/verification.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img src="assets/imgs/logo-2.png" class="bounceIn animated delay_5">\n            <span class="app_title">{{\'app_title\' | translate}}</span>\n            <span class="end">02:55 left</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-theme">\n    <h1 class="text-white" text-center>{{\'verification\' | translate}}</h1>\n    <p class="text-white" text-center>{{\'verification_massage\' | translate}}</p>\n    <div class="form">\n        <ion-list no-lines class="d-flex zoomIn animated delay_5">\n            <ion-item>\n                <ion-input text-center type="text" placeholder="" maxlength="1"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input text-center type="text" placeholder="" maxlength="1"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input text-center type="text" placeholder="" maxlength="1"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input text-center type="text" placeholder="" maxlength="1"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button block round class="btn white_btn" (click)="setprofile()">{{\'confirm\' | translate}}</button>\n    </div>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newchat_newchat__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatlistPage = /** @class */ (function () {
    function ChatlistPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatlistPage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    ChatlistPage.prototype.newchat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newchat_newchat__["a" /* NewchatPage */]);
    };
    ChatlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatlist',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/chatlist/chatlist.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'chatroom\' | translate}}\n            <ion-icon class="material-icons end">search</ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list no-lines class="">\n        <ion-item class="active animated slideInRight delay_1" (click)="chatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/ppt.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>小学三年级数学</span> <small>2m</small></h2>\n            <p>2019-05-01 08:18:18</p>\n            <h6 class="bg-theme text-white" text-center item-end>2p</h6>\n        </ion-item>\n        <ion-item class=" animated slideInRight delay_2" (click)="chatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/word.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>小学五年级英语190502</span> <small>14m</small></h2>\n            <p>2019-05-02 18:26:22</p>\n            <h6 class="bg-theme text-white" text-center item-end>18p</h6>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_3" (click)="chatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/word.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>小学五年级英语190502</span> <small>14m</small></h2>\n            <p>2019-05-02 18:26:22</p>\n            <h6 class="bg-theme text-white" text-center item-end>18p</h6>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_4" (click)="chatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/ppt.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>小学五年级英语190502</span> <small>14m</small></h2>\n            <p>2019-05-02 18:26:22</p>\n            <h6 class="bg-theme text-white" text-center item-end>8p</h6>\n        </ion-item>\n        <ion-item class="active animated slideInRight delay_5" (click)="chatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/ppt.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>小学五年级英语190502</span> <small>14m</small></h2>\n            <p>2019-05-02 18:26:22</p>\n            <h6 class="bg-theme text-white" text-center item-end>18p</h6>\n        </ion-item>\n        <ion-item class="active animated slideInRight delay_6" (click)="chatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/word.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>小学五年级英语190502</span> <small>14m</small></h2>\n            <p>2019-05-02 18:26:22</p>\n            <h6 class="bg-theme text-white" text-center item-end>18p</h6>\n\n        </ion-item>\n        <ion-item class="active animated slideInRight delay_7" (click)="chatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/word.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>小学五年级英语190502</span> <small>14m</small></h2>\n            <p>2019-05-02 18:26:22</p>\n            <h6 class="bg-theme text-white" text-center item-end>18p</h6>\n        </ion-item>\n    </ion-list>\n    \n    <ion-fab class="fab_btn" bottom right (click)="newchat()">\n        <button bottom ion-fab class="bg-theme">\n            <ion-icon class="material-icons">add</ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/chatlist/chatlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChatlistPage);
    return ChatlistPage;
}());

//# sourceMappingURL=chatlist.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilepicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilepicturePage = /** @class */ (function () {
    function ProfilepicturePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ProfilepicturePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfilepicturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilepicture',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/profilepicture/profilepicture.html"*/`<!--\n<ion-header>\n    <ion-navbar>\n        <ion-title>profilepicture</ion-title>\n    </ion-navbar>\n</ion-header>\n-->\n\n<ion-content (click)="dismiss()">\n    <div class="img-box">\n        <img src="assets/imgs/profile_pic.png">\n    </div>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/profilepicture/profilepicture.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], ProfilepicturePage);
    return ProfilepicturePage;
}());

//# sourceMappingURL=profilepicture.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creategroup_creategroup__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewchatPage = /** @class */ (function () {
    function NewchatPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewchatPage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    NewchatPage.prototype.creategroup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__creategroup_creategroup__["a" /* CreategroupPage */]);
    };
    NewchatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newchat',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/newchat/newchat.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'new_chats\' | translate}}\n            <span class="end">\n                 <ion-icon class="material-icons">search</ion-icon>\n                 <ion-icon class="material-icons">person_add</ion-icon>\n                 <ion-icon class="material-icons">autorenew</ion-icon>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="create" (click)="creategroup()">\n        <div class="d-flex">\n            <ion-icon class="material-icons" text-center>group_add</ion-icon>\n            <h2>{{\'create_new_group\' | translate}}</h2>\n        </div>\n        <h3>{{\'select_contact_to_start_new_chat\' | translate}}</h3>\n    </div>\n    <ion-row>\n        <ion-col col-2 no-padding>\n            <h4>A</h4>\n        </ion-col>\n        <ion-col col-10 no-padding>\n            <ion-list no-lines>\n                <ion-item class="active animated slideInRight delay_1" (click)="chatting()">\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/1.png">\n                        </div>\n                    </div>\n                    <h2 class="d-flex"><span>Aditi Patel</span></h2>\n                    <p>Travrlling with Nature</p>\n                </ion-item>\n                <ion-item class="active animated slideInRight delay_2" (click)="chatting()">\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/5.png">\n                        </div>\n                    </div>\n                    <h2 class="d-flex"><span>Ammy Drack</span></h2>\n                    <p>Feeling Awesome</p>\n                </ion-item>\n                <ion-item (click)="chatting()" class="animated slideInRight delay_3">\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/3.png">\n                        </div>\n                    </div>\n                    <h2 class="d-flex"><span>Andy Reslow</span></h2>\n                    <p class="d-flex">Minding own business</p>\n                </ion-item>\n                <ion-item (click)="chatting()" class="animated slideInRight delay_4">\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/2.png">\n                        </div>\n                    </div>\n                    <h2 class="d-flex"><span>Azler Hopson</span></h2>\n                    <p>Busy</p>\n                </ion-item>\n            </ion-list>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-2 no-padding>\n            <h4>B</h4>\n        </ion-col>\n\n        <ion-col col-10 no-padding>\n            <ion-list no-lines>\n                <ion-item class="active animated slideInRight delay_5" (click)="chatting()">\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/6.png">\n                        </div>\n                    </div>\n                    <h2 class="d-flex"><span>Balton Smith</span></h2>\n                    <p>About to reach New York</p>\n                </ion-item>\n                <ion-item class="active animated slideInRight delay_6" (click)="chatting()">\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/4.png">\n                        </div>\n                    </div>\n                    <h2 class="d-flex"><span>Byron kenny</span></h2>\n                    <p>Gyming</p>\n                </ion-item>\n                <ion-item class="animated slideInRight delay_7" (click)="chatting()">\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/8.png">\n                        </div>\n                    </div>\n                    <h2 class="d-flex"><span>Brinley</span></h2>\n                    <p>Yes, I am Coming.</p>\n                </ion-item>\n            </ion-list>\n        </ion-col>\n    </ion-row>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/newchat/newchat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NewchatPage);
    return NewchatPage;
}());

//# sourceMappingURL=newchat.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreategroupinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreategroupinfoPage = /** @class */ (function () {
    function CreategroupinfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CreategroupinfoPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    CreategroupinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-creategroupinfo',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/creategroupinfo/creategroupinfo.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'group_info\' | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="form">\n        <ion-list no-lines>\n\n            <ion-item class="profile">\n                <div class="profile_img_box animated zoomIn delay_1">\n                    <div class="profile_img">\n                        <!--                        <img src="assets/imgs/profile_placeholder.png">-->\n                    </div>\n                    <ion-icon class="material-icons">photo_camera</ion-icon>\n                </div>\n            </ion-item>\n\n            <ion-item class="group_name">\n                <ion-input type="text" text-center placeholder="{{\'add_group_name\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item class="description">\n                <ion-input type="text" text-center placeholder="{{\'description\' | translate}}"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer class="animated slideInUp delay_3">\n    <button item-end ion-button block round class="btn" (click)="tabs()">{{\'create_group\' | translate}}</button>\n</ion-footer>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/creategroupinfo/creategroupinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CreategroupinfoPage);
    return CreategroupinfoPage;
}());

//# sourceMappingURL=creategroupinfo.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalllogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profileinfo_profileinfo__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalllogsPage = /** @class */ (function () {
    function CalllogsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CalllogsPage.prototype.shopinfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profileinfo_profileinfo__["a" /* ProfileinfoPage */]);
    };
    CalllogsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calllogs',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/calllogs/calllogs.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'call_logs\' | translate}}\n            <ion-icon class="material-icons end">search</ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list no-lines>\n        <ion-item class="outgoing animated slideInRight delay_1" (click)="shopinfo()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/shop1.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>东直门外大街28号华军速印</span></h2>\n            <p class=d-flex>\n                <ion-icon class="material-icons">call_made</ion-icon>东直门外大街28号，丽华快餐往北100米\n            </p>\n            <ion-icon class="material-icons text-theme" item-end>local_phone</ion-icon>\n        </ion-item>\n        <ion-item class="incoming animated slideInRight delay_2" (click)="shopinfo()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/shop2.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>东直门外大街28号华军速印</span></h2>\n            <p class=d-flex>\n                <ion-icon class="material-icons">call_received</ion-icon>东直门外大街28号，丽华快餐往北100米\n            </p>\n            <ion-icon class="material-icons text-theme" item-end>local_phone</ion-icon>\n        </ion-item>\n        <ion-item class="missed animated slideInRight delay_3" (click)="shopinfo()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/shop3.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>东直门外大街28号华军速印</span></h2>\n            <p class=d-flex>\n                <ion-icon class="material-icons">call_missed</ion-icon>东直门外大街28号，丽华快餐往北100米\n            </p>\n            <ion-icon class="material-icons text-theme" item-end>local_phone</ion-icon>\n        </ion-item>\n        <ion-item class="incoming animated slideInRight delay_4" (click)="shopinfo()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/shop4.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>东直门外大街28号华军速印</span></h2>\n            <p class=d-flex>\n                <ion-icon class="material-icons">call_received</ion-icon>东直门外大街28号，丽华快餐往北100米\n            </p>\n            <ion-icon class="material-icons text-theme" item-end>local_phone</ion-icon>\n        </ion-item>\n        <ion-item class="incoming animated slideInRight delay_5" (click)="shopinfo()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/shop4.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>东直门外大街28号华军速印</span></h2>\n            <p class=d-flex>\n                <ion-icon class="material-icons">call_received</ion-icon>东直门外大街28号，丽华快餐往北100米\n            </p>\n            <ion-icon class="material-icons text-theme" item-end>local_phone</ion-icon>\n        </ion-item>\n        <ion-item class="outgoing animated slideInRight delay_6" (click)="shopinfo()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/shop3.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>东直门外大街28号华军速印</span></h2>\n            <p class=d-flex>\n                <ion-icon class="material-icons">call_made</ion-icon>东直门外大街28号，丽华快餐往北100米\n            </p>\n            <ion-icon class="material-icons text-theme" item-end>local_phone</ion-icon>\n        </ion-item>\n        <ion-item class="missed animated slideInRight delay_7" (click)="shopinfo()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/shop2.jpg">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>东直门外大街28号华军速印</span></h2>\n            <p class=d-flex>\n                <ion-icon class="material-icons">call_missed</ion-icon>东直门外大街28号，丽华快餐往北100米\n            </p>\n            <ion-icon class="material-icons text-theme" item-end>local_phone</ion-icon>\n        </ion-item>\n    </ion-list>\n\n    <!-- <ion-fab class="fab_btn" bottom right (click)="newchat()">\n        <button bottom ion-fab class="bg-theme">\n            <ion-icon class="material-icons">add</ion-icon>\n        </button>\n    </ion-fab> -->\n</ion-content>`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/calllogs/calllogs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CalllogsPage);
    return CalllogsPage;
}());

//# sourceMappingURL=calllogs.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacy_privacy__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatsetting_chatsetting__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notificationsetting_notificationsetting__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myprofile_myprofile__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grouplist_grouplist__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { SetProfile } from '../setprofile/setprofile';




var MorePage = /** @class */ (function () {
    function MorePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MorePage.prototype.privacy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__privacy_privacy__["a" /* PrivacyPage */]);
    };
    MorePage.prototype.chatsetting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatsetting_chatsetting__["a" /* ChatsettingPage */]);
    };
    MorePage.prototype.notificationsetting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notificationsetting_notificationsetting__["a" /* NotificationsettingPage */]);
    };
    MorePage.prototype.myorder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__grouplist_grouplist__["a" /* GrouplistPage */]);
    };
    MorePage.prototype.myprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__myprofile_myprofile__["a" /* MyprofilePage */]);
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/more/more.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'more\' | translate}} <span class="end" (click)="myprofile()">{{\'edit\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item class="profile ">\n            <div class="profile_img_box animated zoomIn delay_1">\n                <div class="profile_img">\n                    <img src="assets/imgs/8.png">\n                </div>\n                <ion-icon class="material-icons bg-theme text-white">photo_camera</ion-icon>\n            </div>\n            <h1 class="" text-center>{{\'my_profile\' | translate}}</h1>\n            <!-- <h4 text-center>Hate is Heavy, Let it go!</h4> -->\n        </ion-item>\n        <h2>{{\'settings\' | translate}}</h2>\n\n        <ion-item class="animated slideInRight delay_1" (click)="privacy()">\n            <ion-icon class="material-icons text-theme" item-start>lock</ion-icon>\n            <h3>{{\'privacy_setting\' | translate}}</h3>\n        </ion-item>\n\n        <!-- <ion-item class="animated slideInRight delay_2" (click)="chatsetting()">\n            <ion-icon class="material-icons text-theme" item-start>textsms</ion-icon>\n            <h3>{{\'chat_setting\' | translate}}</h3>\n        </ion-item> -->\n\n        <ion-item class="animated slideInRight delay_3" (click)="myorder()">\n            <ion-icon class="material-icons text-theme" item-start>notifications_active</ion-icon>\n            <h3>我的订单</h3>\n        </ion-item>\n\n        <ion-item class="animated slideInRight delay_4">\n            <ion-icon class="material-icons text-theme" item-start>help</ion-icon>\n            <h3>{{\'need_help\' | translate}}</h3>\n        </ion-item>\n\n    </ion-list>\n    <ion-fab class="fab_btn" bottom right>\n        <button bottom ion-fab class="bg-theme">\n            <ion-icon class="material-icons">share</ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/more/more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPage = /** @class */ (function () {
    function PrivacyPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.last_seen = "everyone";
        this.profile_picture = "friends";
        this.status = "everyone";
        this.email_address = "me";
    }
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacy',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/privacy/privacy.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'privacy_setting\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <h2>{{\'set_who_can_see\' | translate}}</h2>\n        <ion-item class="animated slideInRight delay_1">\n            <ion-label>{{\'last_seen\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="last_seen">\n                <ion-option value="everyone">{{\'everyone\' | translate}}</ion-option>\n                <ion-option value="my_contacts">{{\'my_contacts\' | translate}}</ion-option>\n                <ion-option value="noboby">{{\'noboby\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item class="animated slideInRight delay_2">\n            <ion-label>{{\'profile_picture\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="profile_picture">\n                <ion-option value="friends">{{\'friends\' | translate}}</ion-option>\n                <ion-option value="my_contacts">{{\'my_contacts\' | translate}}</ion-option>\n                <ion-option value="noboby">{{\'noboby\' | translate}}</ion-option>\n\n            </ion-select>\n        </ion-item>\n\n        <ion-item class="animated slideInRight delay_3">\n            <ion-label>{{\'status\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="status">\n                <ion-option value="everyone">{{\'everyone\' | translate}}</ion-option>\n                <ion-option value="my_contacts">{{\'my_contacts\' | translate}}</ion-option>\n                <ion-option value="only_share_with">{{\'only_share_with\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_4">\n            <ion-label>{{\'email_address\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="email_address">\n                <ion-option value="me">{{\'me\' | translate}}</ion-option>\n                <ion-option value="friends">{{\'friends\' | translate}}</ion-option>\n                <ion-option value="my_contacts">{{\'my_contacts\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <div class="blocked_profiles">\n            <h2>{{\'blocked_profiles\' | translate}}</h2>\n            <ion-item class="animated slideInRight delay_5">\n                <ion-label>\n                    {{\'list_of_contacs_you_blocked\' | translate}}\n                    <h3 class="d-flex">10 Contacts\n                        <ion-icon class="material-icons end">keyboard_arrow_right</ion-icon>\n                    </h3>\n                </ion-label>\n            </ion-item>\n        </div>\n    </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/privacy/privacy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatsettingPage = /** @class */ (function () {
    function ChatsettingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.when_using_mobile_data = "no_media";
        this.when_using_wifi_network = "all";
        this.when_roaming = "picture";
        this.max_file_size = "5_mb";
        this.incoming_call_enable = "audio_video_call";
    }
    ChatsettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatsetting',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/chatsetting/chatsetting.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'chat_setting\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <h2>{{\'media_auto_download\' | translate}}</h2>\n        <ion-item class="animated slideInRight delay_1">\n            <ion-label>{{\'when_using_mobile_data\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="when_using_mobile_data">\n                <ion-option value="no_media">{{\'no_media\' | translate}}</ion-option>\n                <ion-option value="picture">{{\'picture\' | translate}}</ion-option>\n                <ion-option value="audio">{{\'audio\' | translate}}</ion-option>\n                <ion-option value="video">{{\'video\' | translate}}</ion-option>\n                <ion-option value="all">{{\'all\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item class="animated slideInRight delay_2">\n            <ion-label>{{\'when_using_wifi_network\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="when_using_wifi_network">\n                <ion-option value="no_media">{{\'no_media\' | translate}}</ion-option>\n                <ion-option value="picture">{{\'picture\' | translate}}</ion-option>\n                <ion-option value="audio">{{\'audio\' | translate}}</ion-option>\n                <ion-option value="video">{{\'video\' | translate}}</ion-option>\n                <ion-option value="all">{{\'all\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item class="animated slideInRight delay_3">\n            <ion-label>{{\'when_roaming\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="when_roaming">\n                <ion-option value="no_media">{{\'no_media\' | translate}}</ion-option>\n                <ion-option value="picture">{{\'picture\' | translate}}</ion-option>\n                <ion-option value="audio">{{\'audio\' | translate}}</ion-option>\n                <ion-option value="video">{{\'video\' | translate}}</ion-option>\n                <ion-option value="all">{{\'all\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <h2>{{\'auto_download_limit\' | translate}}</h2>\n        <ion-item class="animated slideInRight delay_4">\n            <ion-label>{{\'max_file_size\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="max_file_size">\n                <ion-option value="5_mb">{{\'5_mb\' | translate}}</ion-option>\n                <ion-option value="10_mb">{{\'10_mb\' | translate}}</ion-option>\n                <ion-option value="unlimited">{{\'unlimited\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <h2>{{\'call_setting\' | translate}}</h2>\n        <ion-item class="animated slideInRight delay_5">\n            <ion-label>{{\'incoming_call_enable\' | translate}}</ion-label>\n            <ion-select [(ngModel)]="incoming_call_enable">\n                <ion-option value="no_any_call">{{\'no_any_call\' | translate}}</ion-option>\n                <ion-option value="only_video_call">{{\'only_video_call\' | translate}}</ion-option>\n                <ion-option value="only_audio_call">{{\'only_audio_call\' | translate}}</ion-option>\n                <ion-option value="audio_video_call">{{\'audio_video_call\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/chatsetting/chatsetting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChatsettingPage);
    return ChatsettingPage;
}());

//# sourceMappingURL=chatsetting.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyprofilePage = /** @class */ (function () {
    function MyprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyprofilePage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/myprofile/myprofile.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'my_profile\' | translate}}\n            <!--            <span class="end">{{\'edit\' | translate}}</span>-->\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="form">\n        <ion-list no-lines>\n\n            <ion-item class="profile">\n                <div class="profile_img_box animated zoomIn delay_1">\n                    <div class="profile_img">\n                        <img src="assets/imgs/8.png">\n                    </div>\n                    <ion-icon class="material-icons bg-theme text-white">photo_camera</ion-icon>\n                </div>\n                <h1 class="" text-center>{{\'my_profile\' | translate}}</h1>\n            </ion-item>\n\n            <ion-item class="status animated slideInRight delay_1">\n                <ion-input type="text" text-center placeholder="Hate is Heavy, Let it go !" readonly></ion-input>\n                <ion-icon class="material-icons" item-end>create</ion-icon>\n            </ion-item>\n\n            <h2>{{\'profile_info\' | translate}}</h2>\n\n            <ion-item class="animated slideInRight delay_2">\n                <ion-label>{{\'phone_number\' | translate}}</ion-label>\n                <ion-input type="text" placeholder="{{\'change_your_phone_number\' | translate}}" value="+1 987 654 3210" readonly></ion-input>\n                <h3 class="text-theme" item-end (click)="signin()">{{\'logout\' | translate}}</h3>\n            </ion-item>\n\n            <ion-item class="animated slideInRight delay_3">\n                <ion-label>{{\'email_address\' | translate}}</ion-label>\n                <ion-input type="text" placeholder="{{\'enter_email_address\' | translate}}" value="mymailaddress@mail.com" readonly></ion-input>\n            </ion-item>\n\n            <ion-item class="animated slideInRight delay_4">\n                <ion-label>{{\'gender\' | translate}}</ion-label>\n                <ion-input type="text" placeholder="{{\'select_gender\' | translate}}" value="Female" readonly></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/myprofile/myprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrouplistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupchatting_groupchatting__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creategroup_creategroup__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GrouplistPage = /** @class */ (function () {
    function GrouplistPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GrouplistPage.prototype.groupchatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__groupchatting_groupchatting__["a" /* GroupchattingPage */]);
    };
    GrouplistPage.prototype.creategroup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__creategroup_creategroup__["a" /* CreategroupPage */]);
    };
    GrouplistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grouplist',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/grouplist/grouplist.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'groups\' | translate}}\n            <ion-icon class="material-icons end">search</ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list no-lines>\n        <ion-item class="active animated slideInRight delay_1" (click)="groupchatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/g5.png">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>Charlie\'s Angels</span> <small>2m</small></h2>\n            <p><span>Luicy : </span> Found Best place.</p>\n            <h6 class="bg-theme text-white" text-center item-end>2</h6>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_2" (click)="groupchatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/g8.png">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>School Friends</span> <small>14m</small></h2>\n            <p><span>Tanisha : </span> That\'s a great news buddy, we.</p>\n            <h6 class="bg-theme text-white" text-center item-end>1</h6>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_3" (click)="groupchatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/g3.png">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>Fitness Group</span> <small>26m</small></h2>\n            <p class="d-flex">\n                <ion-icon class="material-icons">attach_file</ion-icon>You shared a file.</p>\n        </ion-item>\n        <ion-item class="animated slideInRight delay_4" (click)="groupchatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/g7.png">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>Smili Community</span> <small>6h</small></h2>\n            <p>I will be there by 10:00 aunty.</p>\n        </ion-item>\n        <ion-item class="active animated slideInRight delay_5" (click)="groupchatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/g2.png">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>Smith Family</span> <small>1d</small></h2>\n            <p><span>John Uncle : </span> Yes that\'s sound a good plan.</p>\n        </ion-item>\n        <ion-item class="active animated slideInRight delay_6" (click)="groupchatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/g4.png">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>Office Birds</span> <small>2d</small></h2>\n            <p><span>You : </span> LOL That was so funny, ken.</p>\n        </ion-item>\n        <ion-item class="active animated slideInRight delay_7" (click)="groupchatting()">\n            <div class="profile_img_box" item-start>\n                <div class="profile_img">\n                    <img src="assets/imgs/g1.png">\n                </div>\n            </div>\n            <h2 class="d-flex"><span>Manchester United fans</span> <small>2m</small></h2>\n            <p><span>Peter : 8:00 pm</span> At my place. Party on.</p>\n        </ion-item>\n    </ion-list>\n\n    <ion-fab class="fab_btn" bottom right (click)="creategroup()">\n        <button bottom ion-fab class="bg-theme">\n            <ion-icon class="material-icons">group_add</ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/grouplist/grouplist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], GrouplistPage);
    return GrouplistPage;
}());

//# sourceMappingURL=grouplist.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupchattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupinfo_groupinfo__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupchattingPage = /** @class */ (function () {
    function GroupchattingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GroupchattingPage.prototype.setViewType = function (vt) {
        this.viewType = vt;
    };
    GroupchattingPage.prototype.groupinfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__groupinfo_groupinfo__["a" /* GroupinfoPage */]);
    };
    GroupchattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groupchatting',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/groupchatting/groupchatting.html"*/`<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title class="active">\n            <div class="profile d-flex" (click)="groupinfo()">\n                <div class="profile_img_box" item-start>\n                    <div class="profile_img">\n                        <img src="assets/imgs/g5.png">\n                    </div>\n                </div>\n                <h2 class="text-white">Charilie\'s Angels</h2>\n            </div>\n            <ion-icon class="material-icons end">more_vert</ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="chat_container">\n        <div class="chat-box d-flex received">\n            <div class="caht_text d-flex">\n                <div class="profile_img">\n                    <img src="assets/imgs/1.png">\n                </div>\n                <div class="text">\n                    <h6>Luicy Williams</h6>\n                    <h2>Hello, Guys?</h2>\n                </div>\n            </div>\n            <p>12:01 pm</p>\n        </div>\n\n        <div class="chat-box d-flex received">\n            <div class="caht_text d-flex">\n                <div class="profile_img">\n                    <img src="assets/imgs/1.png">\n                </div>\n                <div class="text">\n                    <h6>Luicy Williams</h6>\n                    <h2>Hey, Whatsup</h2>\n                </div>\n            </div>\n            <p>12:01 pm</p>\n        </div>\n\n        <div class="chat-box d-flex send">\n            <p>12:05 pm</p>\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h6>you</h6>\n                    <h2>What,s the weekend plan?</h2>\n                </div>\n                <div class="profile_img">\n                    <img src="assets/imgs/3.png">\n                </div>\n            </div>\n        </div>\n\n        <div class="chat-box d-flex received">\n            <div class="caht_text d-flex">\n                <div class="profile_img">\n                    <img src="assets/imgs/1.png">\n                </div>\n                <div class="text">\n                    <h6>Luicy Williams</h6>\n                    <h2>Let\'s met & paln something !</h2>\n                </div>\n            </div>\n            <p>12:06 pm</p>\n        </div>\n\n        <div class="chat-box d-flex send">\n            <p>12:07 pm</p>\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h6>you</h6>\n                    <h2>Okey! Where to meet?</h2>\n                </div>\n                <div class="profile_img">\n                    <img src="assets/imgs/3.png">\n                </div>\n            </div>\n        </div>\n\n        <div class="chat-box d-flex received location">\n            <div class="caht_text d-flex">\n                <div class="profile_img">\n                    <img src="assets/imgs/1.png">\n                </div>\n                <div class="text">\n                    <h6>Luicy Williams</h6>\n                    <h2>Fund best place!</h2>\n                </div>\n                <div class="map">\n                    <img src="assets/imgs/map.png">\n                    <ion-icon class="material-icons text-theme">location_on</ion-icon>\n                </div>\n            </div>\n            <p>12:08 pm</p>\n        </div>\n\n        <div class="chat-box d-flex send video">\n            <p>12:08 pm</p>\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h6>You</h6>\n                    <h2>This is location video</h2>\n                </div>\n                <div class="profile_img">\n                    <img src="assets/imgs/3.png">\n                </div>\n                <div class="video_box">\n                    <img src="assets/imgs/m2.png">\n                    <ion-icon class="material-icons">play_circle_outline</ion-icon>\n                </div>\n            </div>\n        </div>\n\n        <div class="chat-box d-flex send images">\n            <p>12:08 pm</p>\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h6>You</h6>\n                    <h2>This location images</h2>\n                </div>\n                <div class="profile_img">\n                    <img src="assets/imgs/3.png">\n                </div>\n                <div class="img_box">\n                    <img src="assets/imgs/m5.png">\n                </div>\n            </div>\n        </div>\n\n        <div class="chat-box d-flex send">\n            <p>12:08 pm</p>\n            <div class="caht_text d-flex">\n                <div class="text">\n                    <h6>You</h6>\n                    <h2>Can you send me a contact of Tonny?</h2>\n                </div>\n                <div class="profile_img">\n                    <img src="assets/imgs/3.png">\n                </div>\n            </div>\n        </div>\n\n        <div class="chat-box d-flex received contact">\n            <div class="caht_text d-flex">\n                <div class="profile_img">\n                    <img src="assets/imgs/1.png">\n                </div>\n                <div class="text">\n                    <h6>Luicy Williams</h6>\n                    <h2>Tonny</h2>\n                </div>\n                <div class="contact_box">\n                    <ion-icon class="material-icons">person_add</ion-icon>\n                    <ion-icon class="material-icons border_left">message</ion-icon>\n                </div>\n            </div>\n            <p>12:08 pm</p>\n        </div>\n    </div>\n</ion-content>\n<ion-footer class="form animated slideInUp delay_3">\n    <ion-list no-lines [ngClass]="viewType == \'active\' ? \'list active\':\'list\'">\n        <div class="option bg-theme d-flex">\n            <ion-icon class="material-icons text-white">description</ion-icon>\n            <ion-icon class="material-icons text-white">headset_mic</ion-icon>\n            <ion-icon class="material-icons text-white">perm_contact_calendar</ion-icon>\n            <ion-icon class="material-icons text-white">location_on</ion-icon>\n            <ion-icon class="material-icons text-white">photo</ion-icon>\n            <ion-icon class="material-icons text-white">photo_camera</ion-icon>\n            <ion-icon class="material-icons text-white" (click)="setViewType(null)">close</ion-icon>\n        </div>\n        <ion-item>\n            <ion-icon class=" material-icons " item-start>insert_emoticon</ion-icon>\n            <ion-input type="text " placeholder="{{ \'type_your_message\' | translate}} "></ion-input>\n            <div class=" " item-end>\n                <ion-icon class="material-icons" (click)="setViewType( \'active\') ">attach_file</ion-icon>\n                <ion-icon class="material-icons text-theme">mic</ion-icon>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-footer>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/groupchatting/groupchatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], GroupchattingPage);
    return GroupchattingPage;
}());

//# sourceMappingURL=groupchatting.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupinfoPage = /** @class */ (function () {
    function GroupinfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GroupinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groupinfo',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/groupinfo/groupinfo.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'group_info\' | translate}} <span class="end">{{\'edit\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item class="profile">\n                <div class="profile_img_box animated zoomIn delay_1">\n                    <div class="profile_img">\n                        <img src="assets/imgs/g5.png">\n                    </div>\n                </div>\n                <h1 class="" text-center>Charlie\'s Angels</h1>\n                <h4 text-center>Every Problam can be solved</h4>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'mute_notification\' | translate}}</ion-label>\n                <ion-toggle item-end checked="true"></ion-toggle>\n            </ion-item>\n\n            <ion-item class="media_shared">\n                <ion-label>{{\'media_shared\' | translate}}</ion-label>\n                <ion-row item-end class="animated slideInUp delay_1">\n                    <ion-col col>\n                        <div class="img_box">\n                            <img src="assets/imgs/m1.png">\n                        </div>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="img_box">\n                            <img src="assets/imgs/m2.png">\n                        </div>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="img_box">\n                            <img src="assets/imgs/m3.png">\n                        </div>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="img_box">\n                            <img src="assets/imgs/m4.png">\n                        </div>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="img_box">\n                            <img src="assets/imgs/m5.png">\n                        </div>\n                    </ion-col>\n                    <h6 text-center class="bg-theme text-white">{{\'view_all\' | translate}}</h6>\n                </ion-row>\n            </ion-item>\n\n            <div class="members_in_group animated slideInUp delay_1">\n                <h2>{{\'members_in_group\' | translate}} (06)</h2>\n                <ion-item>\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/1.png">\n                        </div>\n                    </div>\n                    <h3 class="d-flex"><span>Aditi Patel</span></h3>\n                    <p>Travrlling with Nature</p>\n                    <ion-icon class="material-icons bg-theme text-white" item-end>add</ion-icon>\n                </ion-item>\n                <ion-item>\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/5.png">\n                        </div>\n                    </div>\n                    <h3 class="d-flex"><span>Ammy Drack</span></h3>\n                    <p>Feeling Awesome</p>\n                    <ion-icon class="material-icons bg-theme text-white" item-end>add</ion-icon>\n                </ion-item>\n                <ion-item>\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/3.png">\n                        </div>\n                    </div>\n                    <h3 class="d-flex"><span>Andy Reslow</span></h3>\n                    <p class="d-flex">Minding own business</p>\n                    <ion-icon class="material-icons bg-theme text-white" item-end>add</ion-icon>\n                </ion-item>\n                <ion-item>\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/2.png">\n                        </div>\n                    </div>\n                    <h3 class="d-flex"><span>Azler Hopson</span></h3>\n                    <p>Busy</p>\n                    <ion-icon class="material-icons bg-theme text-white" item-end>add</ion-icon>\n                </ion-item>\n\n                <ion-item class="active">\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/6.png">\n                        </div>\n                    </div>\n                    <h3 class="d-flex"><span>Balton Smith</span></h3>\n                    <p>About to reach New York</p>\n                    <ion-icon class="material-icons bg-theme text-white" item-end>add</ion-icon>\n                </ion-item>\n\n                <ion-item class="active">\n                    <div class="profile_img_box" item-start>\n                        <div class="profile_img">\n                            <img src="assets/imgs/4.png">\n                        </div>\n                    </div>\n                    <h3 class="d-flex"><span>Byron kenny</span></h3>\n                    <p>Gyming</p>\n                    <ion-icon class="material-icons bg-theme text-white" item-end>add</ion-icon>\n                </ion-item>\n            </div>\n        </ion-list>\n    </div>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/groupinfo/groupinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], GroupinfoPage);
    return GroupinfoPage;
}());

//# sourceMappingURL=groupinfo.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_calllogs_calllogs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chatlist_chatlist__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chatsetting_chatsetting__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_creategroup_creategroup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_creategroupinfo_creategroupinfo__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_groupchatting_groupchatting__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_groupinfo_groupinfo__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_grouplist_grouplist__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_myprofile_myprofile__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_more_more__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_newchat_newchat__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notificationsetting_notificationsetting__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_privacy_privacy__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profileinfo_profileinfo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profilepicture_profilepicture__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_setprofile_setprofile__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_verification_verification__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_videocall_videocall__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_voicecall_voicecall__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_calllogs_calllogs__["a" /* CalllogsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chatlist_chatlist__["a" /* ChatlistPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chatsetting_chatsetting__["a" /* ChatsettingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_creategroup_creategroup__["a" /* CreategroupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_creategroupinfo_creategroupinfo__["a" /* CreategroupinfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_groupchatting_groupchatting__["a" /* GroupchattingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_groupinfo_groupinfo__["a" /* GroupinfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_grouplist_grouplist__["a" /* GrouplistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_newchat_newchat__["a" /* NewchatPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notificationsetting_notificationsetting__["a" /* NotificationsettingPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profileinfo_profileinfo__["a" /* ProfileinfoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profilepicture_profilepicture__["a" /* ProfilepicturePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_setprofile_setprofile__["a" /* SetprofilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_videocall_videocall__["a" /* VideocallPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_voicecall_voicecall__["a" /* VoicecallPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_calllogs_calllogs__["a" /* CalllogsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chatlist_chatlist__["a" /* ChatlistPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chatsetting_chatsetting__["a" /* ChatsettingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_creategroup_creategroup__["a" /* CreategroupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_creategroupinfo_creategroupinfo__["a" /* CreategroupinfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_groupchatting_groupchatting__["a" /* GroupchattingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_groupinfo_groupinfo__["a" /* GroupinfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_grouplist_grouplist__["a" /* GrouplistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_newchat_newchat__["a" /* NewchatPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notificationsetting_notificationsetting__["a" /* NotificationsettingPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profileinfo_profileinfo__["a" /* ProfileinfoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profilepicture_profilepicture__["a" /* ProfilepicturePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_setprofile_setprofile__["a" /* SetprofilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_videocall_videocall__["a" /* VideocallPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_voicecall_voicecall__["a" /* VoicecallPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translate.setDefaultLang('cn');
            _this.translate.use('cn');
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetprofilePage = /** @class */ (function () {
    function SetprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SetprofilePage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SetprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setprofile',template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/setprofile/setprofile.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'setprofile\' | translate}} <span class="end" (click)="tabs()">{{\'continue\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="form">\n        <ion-list no-lines>\n\n            <ion-item class="profile">\n                <div class="profile_img_box animated zoomIn delay_1">\n                    <div class="profile_img">\n                        <img src="assets/imgs/profile_placeholder.png">\n                    </div>\n                    <ion-icon class="material-icons bg-theme text-white">photo_camera</ion-icon>\n                </div>\n                <h1 class="" text-center>{{\'my_profile\' | translate}}</h1>\n            </ion-item>\n\n            <ion-item class="status">\n                <ion-input type="text" text-center placeholder="{{\'add_your_status\' | translate}}"></ion-input>\n            </ion-item>\n\n            <h2>{{\'profile_info\' | translate}}</h2>\n\n            <ion-item class="animated slideInRight delay_1">\n                <ion-label>{{\'phone_number\' | translate}}</ion-label>\n                <ion-input type="text" placeholder="{{\'change_your_phone_number\' | translate}}" value="+86 87654321"></ion-input>\n                <h3 class="text-theme" item-end>{{\'change\' | translate}}</h3>\n            </ion-item>\n\n            <ion-item class="animated slideInRight delay_2">\n                <ion-label>{{\'email_address\' | translate}}</ion-label>\n                <ion-input type="text" placeholder="{{\'enter_email_address\' | translate}}"></ion-input>\n            </ion-item>\n\n            <ion-item class="animated slideInRight delay_3">\n                <ion-label>{{\'gender\' | translate}}</ion-label>\n                <ion-input type="text" placeholder="{{\'select_gender\' | translate}}"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/setprofile/setprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SetprofilePage);
    return SetprofilePage;
}());

//# sourceMappingURL=setprofile.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chatlist_chatlist__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calllogs_calllogs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__more_more__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { GrouplistPage } from '../grouplist/grouplist';

var TabsPage = /** @class */ (function () {
    // tab4Root = MorePage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__calllogs_calllogs__["a" /* CalllogsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__chatlist_chatlist__["a" /* ChatlistPage */];
        //tab3Root = ContactPage;
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/tabs/tabs.html"*/`<ion-tabs class="">\n    <ion-tab [root]="tab1Root" tabTitle="" tabIcon="md-map" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="" tabIcon="md-list-box" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="" tabIcon="md-person" tabsHideOnSubPages="true"></ion-tab>\n    <!-- <ion-tab [root]="tab4Root" tabTitle="" tabIcon="ios-more" tabsHideOnSubPages="true"></ion-tab> -->\n    <!--    <ion-tab [root]="tab5Root" tabTitle="" tabIcon="ios-more" tabsHideOnSubPages="true"></ion-tab>-->\n</ion-tabs>\n`/*ion-inline-end:"/Users/open/Documents/Work/git/cloudprint/trunk/CloudPrint_App/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map