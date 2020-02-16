/// <reference path="./window.d.ts" />
/// <reference path="./basicinvite-interfaces.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var BasicInvite;
(function (BasicInvite) {
    BasicInvite.InkType = {
        Ink: 1,
        Foil: 2,
        Spot: 3,
    };
    BasicInvite.s7routes = {
        savepersonalizationdata: '/yscene7/index/savepersonalizationdata/',
        resetPersonalizationForUser: '/yscene7/customer/resetPersonalization/',
        selbackpanel: '/yscene7/index/selbackpanel/',
        selectEnvelopeProduct: '/yscene7/index/selectEnvelopeProduct/',
        selectEnvelopeLinerProduct: '/yscene7/index/selectEnvelopeLinerProduct/',
        selectPocketProduct: '/yscene7/index/selectPocketProduct/',
        selectStickerProduct: '/yscene7/index/selectStickerProduct/',
        scene7upload: '/yscene7/index/upload/',
        amazonS3Ugc: 'https://basicinvite-ugc.s3.amazonaws.com/',
        scene7UgcUrl: '/yscene7/index/getScene7Ugc/',
        saveScene7Photo: '/yscene7/index/saveScene7Photo/',
        scene7uploadPdf: '/yscene7/index/getAmazonS3BasicInviteUgc/',
        savePdf: '/yscene7/index/savePdf/',
        savemarketingpersonalizationdata: '/yscene7/index/savemarketingpersonalizationdata/',
        savepersonalizationdataproofdone: '/yscene7/index/savepersonalizationdataproofdone/',
        saveToWishlist: '/wishlist/index/add/',
        getCustomerPhotos: '/yscene7/customer/getphotos',
        checkUnclaimedPhotos: '/yscene7/customer/checkunclaimedphotos',
        claimPhotos: '/yscene7/customer/claimphotos',
        deleteCustomerPhotos: '/yscene7/customer/deletePhotos',
        photoProvider_SignInUrl: '/yscene7/photoprovider/auth',
        photoProvider_SignOutUrl: '/yscene7/photoprovider/signout',
        photoProvider_GetAlbumsUrl: '/yscene7/photoprovider/getalbums',
        photoProvider_GetAlbumPhotosUrl: '/yscene7/photoprovider/getalbumphotos',
        photoProvider_ImportPhotos: '/yscene7/photoprovider/importphotos',
        product_image_suite: '/invitation/product/getimagesuite',
        approval_SaveNotes: '/basicutility/approval/savenote',
        getActiveAndDraftPersonalizations: '/yscene7/customer/getpersonalizations',
        saveFavorite: '/favorites/index/save',
        removeFavorite: '/favorites/index/delete',
        getFavoriteIds: '/favorites/index/getFavoriteIds',
        sharePersonalization: '/favorites/share/save',
        sendShareEmail: '/favorites/share/sendEmail',
        proofSaveContacts: '/invitation/order/saveContacts',
        proofSavePlacecardGuests: '/invitation/order/savePlacecardGuests',
        getCustomerData: '/addressbook/api/getcustomer',
    };
    var UndoEvent = /** @class */ (function () {
        function UndoEvent(title, event) {
            this.title = title;
            this.event = event;
        }
        return UndoEvent;
    }());
    BasicInvite.UndoEvent = UndoEvent;
    var JsonService = /** @class */ (function () {
        function JsonService(element) {
            this.$elem = element;
        }
        JsonService.prototype.server = function (url, data, dataType, method) {
            if (this.$elem) {
                this.$elem.html("<i class='fa fa-spinner fa-spin'></i>");
            }
            return jQuery.ajax({
                dataType: dataType || 'json',
                method: method || 'GET',
                url: url,
                data: data
            });
        };
        ;
        JsonService.prototype.preload = function (imageArray) {
            jQuery(imageArray).each(function (key, value) {
                var e = jQuery('<img/>')[0];
                e.src = value;
            });
        };
        ;
        return JsonService;
    }());
    BasicInvite.JsonService = JsonService;
    var BiForm = /** @class */ (function () {
        function BiForm(eventBus) {
            var _this = this;
            this.eventBus = eventBus;
            this.hasChanges = false;
            window.onunload = function (event) {
                _this._clearTimeout();
            };
            window.onbeforeunload = function (event) {
                // if (this.getHasChanges()) {
                //     let msg = "You have made changes that have not been saved.";
                //     let evt = event || window.event;
                //     evt.returnValue = msg;
                //     evt.cancelBubble = true;
                //     this.saveTimeout = setTimeout(this.save.bind(this), 2000);
                //     return msg;
                // }
            };
        }
        BiForm.prototype.setHasChanges = function (event) {
            this.eventBus.dispatch('biform.onChange', this, event);
            this.hasChanges = true;
        };
        ;
        BiForm.prototype.getHasChanges = function () {
            return this.hasChanges;
        };
        ;
        BiForm.prototype.clearChanges = function () {
            this.eventBus.dispatch('biform.onClearChanges', this, true);
            this.hasChanges = false;
        };
        BiForm.prototype._clearTimeout = function () {
            window.clearTimeout(this.saveTimeout);
            delete this.saveTimeout;
        };
        BiForm.prototype.save = function () {
            this._clearTimeout();
            jQuery('.bi-btn-wishlist-save').trigger('click');
        };
        ;
        return BiForm;
    }());
    BasicInvite.BiForm = BiForm;
    var Customer = /** @class */ (function () {
        function Customer(eventBus) {
            this.eventBus = eventBus;
            this.name = '';
            this.activeSession = true;
        }
        Customer.prototype.isLoggedIn = function () {
            return jQuery('.welcome-msg').text() != '';
        };
        Customer.prototype.logout = function () {
            this.name = '';
            jQuery('.welcome-msg').text('');
            this.setSession(false);
            this.eventBus.dispatch('customer.logout', name);
        };
        Customer.prototype.login = function (name) {
            this.name = name;
            jQuery('.welcome-msg').text(this.name + '!');
            this.setSession(true);
            this.eventBus.dispatch('customer.login', name);
        };
        Customer.prototype.setSession = function (val) {
            this.activeSession = val;
        };
        Customer.prototype.hasActiveSession = function () {
            return this.activeSession;
        };
        return Customer;
    }());
    BasicInvite.Customer = Customer;
    BasicInvite.customer = new Customer(window.EventBus);
    var WishList = /** @class */ (function () {
        function WishList() {
        }
        WishList.prototype.saveToWishList = function (settings) {
            return __awaiter(this, void 0, void 0, function () {
                var url, productId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = jQuery('a.bi-btn-wishlist-save').attr('data-wishlist-url');
                            productId = jQuery('a.bi-btn-wishlist-save').attr('data-product-id');
                            if (!window.productControls) return [3 /*break*/, 2];
                            return [4 /*yield*/, window.productControls.saveLada(true)];
                        case 1:
                            _a.sent();
                            window.wishlistForm.submitAjaxWishlist(url, productId, settings);
                            return [3 /*break*/, 3];
                        case 2:
                            window.wishlistForm.submitAjaxWishlist(url, productId, settings);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return WishList;
    }());
    BasicInvite.WishList = WishList;
    BasicInvite.wishList = new WishList();
    var Scene7Template = /** @class */ (function () {
        function Scene7Template(eventBus, customOptions, colorSelectApp) {
            var _this = this;
            this.eventBus = eventBus;
            this.customOptions = customOptions;
            this.colorSelectApp = colorSelectApp;
            this.panels = {};
            this.canvases = [];
            this.name = null;
            this.id = null;
            this.productId = null;
            this.baseLadaPath = 'basicinvite/';
            this.mockupConfig = null;
            this.attributeSetName = '';
            this.panels = {};
            this.name = null;
            this.id = null;
            this.form = new BasicInvite.BiForm(this.eventBus);
            if (document.readyState === "complete" || document.readyState === "interactive") {
                this.initColorSelectApp();
            }
            else {
                document.addEventListener("DOMContentLoaded", function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.initColorSelectApp();
                        return [2 /*return*/];
                    });
                }); });
            }
        }
        Scene7Template.prototype.initColorSelectApp = function () {
            if (!this.colorSelectApp) {
                if (window.BasicInvite && window.BasicInvite.Editor && window.BasicInvite.Editor.ColorSelectApp) {
                    this.colorSelectApp = new window.BasicInvite.Editor.ColorSelectApp(window.recentColors, window.productControls, this.eventBus);
                }
            }
        };
        Scene7Template.prototype._getTextElementsFromPanel = function (type) {
            return jQuery.grep(this['elements'], function (element) {
                return element.type === type;
            });
        };
        Scene7Template.prototype.getColorSelectApp = function () {
            return this.colorSelectApp;
        };
        Scene7Template.prototype.getFirstPanel = function () {
            var keys = Object.keys(this.getPanels());
            return this.getPanels()[keys[0]];
        };
        Scene7Template.prototype.getPanel = function (id) {
            return this.panels[id];
        };
        Scene7Template.prototype.getPanels = function () {
            return this.panels;
        };
        Scene7Template.prototype.addPanel = function (id, panel, type) {
            panel = new Panel(panel, id, type, this);
            this.panels[id] = panel;
            this.eventBus.dispatch('design.panel.add', { id: id, panel: panel, index: Object.keys(this.panels).length - 1 });
        };
        Scene7Template.prototype.removePanel = function (id) {
            //if there's only one panel and it's the same id we are trying to remove then don't remove the panel
            var keys = Object.keys(this.panels);
            if (keys.length === 1 && keys[0] === id) {
                return;
            }
            this.eventBus.dispatch('design.panel.remove', { id: id, panel: this.panels[id], index: Object.keys(this.panels).length - 2 });
            delete this.panels[id];
        };
        Scene7Template.prototype.hasChanges = function () {
            return this.form.getHasChanges();
        };
        Scene7Template.prototype.setChanges = function (event) {
            this.form.setHasChanges(event);
        };
        Scene7Template.prototype.setAttributeSetName = function (name) {
            this.attributeSetName = name;
        };
        Scene7Template.prototype.getAttributeSetName = function () {
            return this.attributeSetName;
        };
        Scene7Template.prototype.clearChanges = function () {
            this.form.clearChanges();
        };
        Scene7Template.prototype.setName = function (val) {
            this.name = val;
        };
        Scene7Template.prototype.getName = function () {
            return this.name;
        };
        Scene7Template.prototype.setId = function (val) {
            this.id = val;
        };
        Scene7Template.prototype.getId = function () {
            return this.id;
        };
        Scene7Template.prototype.setProductId = function (val) {
            this.productId = val;
        };
        Scene7Template.prototype.getProductId = function () {
            return this.productId;
        };
        Scene7Template.prototype.getLadaPath = function () {
            var p = this.getFirstPanel();
            return p ? p.getLadaPath() : '';
        };
        Scene7Template.prototype.addCanvas = function (l) {
            this.canvases.push(l);
        };
        Scene7Template.prototype.getCanvas = function () {
            return this.canvases[0];
        };
        Scene7Template.prototype.setLada = function (val) {
            this.lada = val;
        };
        Scene7Template.prototype.isLada = function () {
            return this.lada;
        };
        Scene7Template.prototype.setCardSize = function (val) {
            this.cardSize = val;
        };
        Scene7Template.prototype.getCardSize = function () {
            return this.cardSize;
        };
        Scene7Template.prototype.setCustomOptions = function (options) {
            this.customOptions = options;
        };
        Scene7Template.prototype.getCustomOptions = function () {
            return this.customOptions;
        };
        Scene7Template.prototype.getMockup = function (panelIndex) {
            //try with paper type first
            return this.mockupConfig && this.mockupConfig.getMockup(this, panelIndex);
        };
        Scene7Template.prototype.setMockupConfig = function (config) {
            this.mockupConfig = config;
        };
        Scene7Template.prototype.getMockupConfig = function () {
            return this.mockupConfig;
        };
        Scene7Template.prototype.getElementsByType = function (type) {
            var keys = Object.keys(this.getPanels());
            var elements = [];
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var i = keys_1[_i];
                elements = elements.concat(this.panels[i].getElementsByType(type));
            }
            return elements;
        };
        Scene7Template.prototype.getElementsStartWith = function (startsWith) {
            var keys = Object.keys(this.getPanels());
            var elements = [];
            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                var i = keys_2[_i];
                elements = elements.concat(this.panels[i].getElementsStartWith(startsWith));
            }
            return elements;
        };
        Scene7Template.prototype.hasElements = function (type, startsWith) {
            if (startsWith === void 0) { startsWith = false; }
            return (startsWith ? this.getElementsStartWith(type) : this.getElementsByType(type)).length > 0;
        };
        return Scene7Template;
    }());
    BasicInvite.Scene7Template = Scene7Template;
    BasicInvite.S7Template = new Scene7Template(window.EventBus);
    var BiProduct = /** @class */ (function () {
        function BiProduct() {
            this.TYPE_WEBSITE = 49;
        }
        BiProduct.prototype.checkForPhotoWarning = function () {
            return this.AttributeSetId != this.TYPE_WEBSITE;
        };
        BiProduct.prototype.isValidStitchTypeForTrim = function () {
            return this.hasTrimTemplates;
        };
        return BiProduct;
    }());
    BasicInvite.BiProduct = BiProduct;
    BasicInvite.Product = new BiProduct();
    BasicInvite.getQueryParam = function (param) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1));
        var sURLVariables = sPageURL.split('&');
        var sParameterName;
        for (var i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === param) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    var Cookie = /** @class */ (function () {
        function Cookie() {
        }
        Cookie.prototype.set = function (name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        };
        Cookie.prototype.get = function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0)
                    return c.substring(nameEQ.length, c.length);
            }
            return null;
        };
        Cookie.prototype.remove = function (name) {
            this.set(name, "", -1);
        };
        return Cookie;
    }());
    BasicInvite.cookie = new Cookie();
    BasicInvite.scene7CleanText = function (text) {
        text = text.replace(/\’/g, "'");
        text = text.replace(/o[^A-Za-z0-9]+clock/g, "o'clock");
        text = text.replace(/\%/g, "%2525");
        text = text.replace(/\?/g, '%3F');
        text = text.replace(/\&/g, '%26amp;');
        text = text.replace(/\</g, '%26lt;');
        text = text.replace(/\>/g, '%26gt;');
        text = text.replace(/\+/g, '%252B');
        text = text.replace(/\{/g, '%7B');
        text = text.replace(/\}/g, '%26%23125%3B');
        text = text.replace(/\#/g, '%23');
        text = text.replace(/\r\n/g, '\n');
        text = text.replace(/\n/g, '\n');
        return text;
    };
    BasicInvite.scene7TextToContent = function (text) {
        var result = '';
        var lines = text.split('\n');
        for (var i = 0; i < lines.length; i++) {
            result += '<p><span>' + lines[i] + '</span></p>';
        }
        return '<content>' + result + '</content>';
    };
    BasicInvite.Sizes = {
        MaxMobileSize: 767,
        MinDraggableSize: 378
    };
    var Chat = /** @class */ (function () {
        function Chat() {
        }
        Chat.open = function () {
            window.Chatra && window.Chatra('openChat', true);
            window.Beacon && window.Beacon('open');
        };
        Chat.close = function () {
            window.Beacon && window.Beacon('close');
        };
        Chat.toggle = function () {
            window.Beacon && window.Beacon('toggle');
        };
        return Chat;
    }());
    BasicInvite.Chat = Chat;
    BasicInvite.IsMobile = function () {
        var isMobile = false;
        var $indicator = jQuery('#mobile-indicator');
        if ($indicator.length) {
            isMobile = jQuery('#mobile-indicator').is(':visible');
        }
        else {
            isMobile = jQuery(window).width() <= BasicInvite.Sizes.MaxMobileSize;
        }
        return isMobile;
    };
    BasicInvite.loginPrompt = function (redirectLink, callBack) {
        var $loginModal = jQuery('#modal-login');
        redirectLink = redirectLink ? redirectLink : 'none';
        jQuery('#modal-login-redirectUrl').val(redirectLink);
        $loginModal.on('hidden.bs.modal', function (e) {
            callBack && callBack();
        });
        $loginModal.modal();
    };
    BasicInvite.showAdvancedEditor = false;
})(BasicInvite || (BasicInvite = {}));
jQuery(function ($) {
    if (BasicInvite.S7Template.getId()) {
        $('#product_addtocart_form input, #product_addtocart_form textarea, #product_addtocart_form select,#product-options-wrapper .swatch').on('change', function () {
            BasicInvite.S7Template.setChanges();
        });
        $('#product-options-wrapper .swatch img, .option-img img').on('click', function () {
            BasicInvite.S7Template.setChanges();
        });
    }
    jQuery(document).on('click', '.s7-create-website-button', function (e) {
        e.preventDefault();
        var button = jQuery(e.currentTarget);
        var originalHtml = button.html();
        var jsonService = new BasicInvite.JsonService();
        jsonService.$elem = button;
        if (!BasicInvite.customer.isLoggedIn()) {
            BasicInvite.loginPrompt('none', function () {
                if (BasicInvite.customer.isLoggedIn()) {
                    button.trigger('click');
                }
            });
        }
        else {
            //send ajax to create website order in backend
            button.prop('disabled', true).addClass('disabled');
            var data = jQuery('#product_addtocart_form').serialize();
            data += '&product_id=' + button.attr('data-product-id') + '&form_key=' + jQuery('input[name="form_key"]').val();
            jsonService.server('/website/checkout/create', data, 'json', 'POST').done(function (response, httpStatus) {
                var modal = new window.BiModal('Create_Site');
                var data = response.data;
                if (data.status == 'success') {
                    BasicInvite.S7Template.clearChanges();
                    modal.message(data.message, 'New Website Created');
                    if (data.redirect_url) {
                        window.location.href = data.redirect_url;
                    }
                }
                else {
                    modal.alert(data.message);
                }
            }).fail(function (response, httpStatus) {
            }).always(function () {
                button.html(originalHtml).prop('disabled', false).removeClass('disabled');
            });
        }
    });
    var demoWebsiteButtonLoaded = window.demoWebsiteButtonLoaded || false;
    jQuery(function ($) {
        if (!demoWebsiteButtonLoaded) {
            $(document).on('click', '.s7-demo-website-button', function (e) {
                e.preventDefault();
                var modal = new window.BiModal('website-demo');
                modal.show({
                    href: $(this).attr('href'),
                    title: $('#product-name').text() + ' Demo',
                    size: 'xlarge',
                    showFooter: false,
                    showPrimaryButton: false,
                    afterHide: function () {
                        this.remove();
                    }.bind(modal)
                });
            });
            demoWebsiteButtonLoaded = true;
        }
    });
});
//# sourceMappingURL=basicinvite.js.map