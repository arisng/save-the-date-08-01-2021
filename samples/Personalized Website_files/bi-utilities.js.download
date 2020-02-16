(function ($) {

    /**  REVIEW PAGINATION **/
    $.fn.pageIt = function (options) {

        var settings = $.extend({
            enablePrevAndNext: true,
            itemsPerPage: 4,
            pagerLimit: 5
        }, options);

        var $list = this;
        var $pager = $('<ul class="pagination"></ul>');
        var $counter = $('<div class="counter" />');
        var $container = $('<nav>').append($counter).append($pager);
        var numberOfItems = $list.children().size();
        var numberOfPages = Math.ceil(numberOfItems / settings.itemsPerPage);
        var current = 0;

        function highlightPage(page) {
            $pager.find('li').removeClass('active');
            $pager.find('li a').filter(function () {
                return $(this).text() == page + 1;
            }).parent().addClass('active');
        }

        function goTo(page) {
            if (page >= 0 && page < numberOfPages) {
                var start = page * settings.itemsPerPage;
                var end = start + settings.itemsPerPage;
                $list.children().css('display', 'none').slice(start, end).css('display', 'block');
                updateCounter(start, end);
                $pager.data('current', page);
                fillPager(page);
                highlightPage(page);
            }
        }

        function fillPager(current) {
            var viewSize = settings.pagerLimit - 2;
            current = current >= viewSize ? current - viewSize : 0;
            $pager.html('');
            if (settings.enablePrevAndNext && current) {
                $pager.append($('<li><a href="#" class="previous">&laquo;</a>'));
            }
            var i = 0;
            while (numberOfPages > current && settings.pagerLimit > i) {
                $('<li><a href="#" class="page_link">' + (current + 1) + '</a></li>').appendTo($pager);
                current++;
                i++;
            }
            if (settings.enablePrevAndNext && numberOfPages > current) {
                $pager.append($('<li><a href="#" class="next">&raquo;</a>'));
            }
            $list.before($container);
            //Setup click events
            $pager.find('li a').click(function (e) {
                e.preventDefault();
                if ($(this).hasClass('previous')) {
                    goTo(parseInt($pager.data("current")) - 1);
                } else if ($(this).hasClass('next')) {
                    goTo(parseInt($pager.data("current")) + 1);
                } else {
                    var clickedPage = $(this).html().valueOf() - 1;
                    goTo(clickedPage, settings.itemsPerPage);
                }
            });
        }

        updateCounter = function (start, end) {
            end = Math.min(end, numberOfItems);
            $counter.html('Showing ' + (start + 1) + ' to ' + (end) + ' of ' + numberOfItems + ' total');
        };

        if (numberOfPages > 1) {
            $pager.data('current', 0);
            $list.children().css('display', 'none').slice(0, settings.itemsPerPage).css('display', 'block');
            updateCounter(0, settings.itemsPerPage);
            fillPager(0);
            highlightPage(0);
        }
        return this;
    };
    /**  REVIEW PAGINATION END **/

    $.fn.selectText = function () {
        var doc = document;
        var element = this[0];
        if (doc.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    $.fn.codeIt = function () {
        var $button = this;
        $('#' + $button.attr('code-id')).hide();
        $button.on('click', function (e) {
            e.preventDefault();
            $('#' + $(this).attr('code-id')).toggle().selectText();
        });
        return this;
    };

    $.fn.trimItClick = function () {
        $(this).on('click', function () {
            $('.bi_trim_overlay').trimIt();
        });
        return this;
    };

    $.fn.trimItOnLoad = function () {
        var $image = this;
        var $prev = $image.prev();
        $prev.on('load', function () {
            $image.trimIt();
        });
        return this;
    };

    $.fn.trimIt = function () {
        var $images = this;
        $.each($images, function () {
            var $image = $(this);
            var $prev = $image.prev();
            var css = {
                width: $prev.width(),
                height: $prev.height()
            };
            $image.css(css);
            if ($prev.css('max-width')) {
                $image.css('max-width', $(this).css('max-width'));
            }
        });
        return this;
    };

    $.fn.center = function () {
        this.css("position", "absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");

        var self = this;
        $(window).off('resize.bi.center').on('resize.bi.center', function () {
            self.center();
        });
        return this;
    };

    $.fn.highlightVerify = function () {
        var highlight = function (e) {
            var $el = $(this);
            var orderItemId = $el.attr('data-order-item-id');
            var quoteItemId = $el.attr('data-quote-item-id');
            $('.orderItem-container[data-order-item-id=' + orderItemId + '], .cart-item-container[data-quote-item-id=' + quoteItemId + ']').addClass('order-verification-highlight');
        };

        var removeHighlight = function (e) {
            var $el = $(this);
            var orderItemId = $el.attr('data-order-item-id');
            var quoteItemId = $el.attr('data-quote-item-id');
            $('.orderItem-container[data-order-item-id=' + orderItemId + '], .cart-item-container[data-quote-item-id=' + quoteItemId + ']').removeClass('order-verification-highlight');
        };

        $(this).hover(highlight, removeHighlight);
    };

    $.fn.helpVerify = function () {
        $(this).on('click', function (e) {
            var id = $(this).attr('data-rule-id');
            var $help = $('#order-verification-rule-' + id);

            if ($help.is(":visible")) {
                $help.slideUp();
            } else {
                $help.hide().removeClass('hidden');
                $help.slideDown();
            }

        })
    };

}(jQuery));

jQuery(function ($) {
    $('.bi_trim_overlay').trimItOnLoad();
    $('[data-toggle="tooltip"]').tooltip();
    $('.verify-highlight-item').highlightVerify();
    $('.order-verification-highlight-button-help').helpVerify();

    //hide popovers by clicking else where
    $('body').on('hidden.bs.popover', function (e) {
        var obj = $(e.target).data("bs.popover");
        if (obj && obj.inState) {
            obj.inState.click = false;
        }
    }).on('click', function (e) {
        $('[data-original-title]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
});

jQuery(function ($) {
    $(document).on('click', '.btn-cancel-order', function (e) {
        e.preventDefault();
        promptToCancel($(this).attr('data-cancel-url'), $(this).attr('data-increment-id'));
    });

    $('input').on('focus.hide-validation', function (e) {
        $(e.currentTarget).next('.validation-advice').hide();
    })
});
jQuery(function ($) {
    //https://stackoverflow.com/questions/46339063/ios-11-safari-bootstrap-modal-text-area-outside-of-cursor/46866149#46866149
    //https://bugs.webkit.org/show_bug.cgi?id=176896
    // Detect ios 11_x_x affected
    // NEED TO BE UPDATED if new versions are affected
    (function iOS_CaretBug() {
        var ua = navigator.userAgent,
            scrollTopPosition,
            iOS = /iPad|iPhone|iPod/.test(ua),
            iOS11 = /OS 11_0|OS 11_1|OS 11_2/.test(ua);
        // ios 11 bug caret position
        if (iOS && iOS11) {

            $(document.body).on('show.bs.modal', function (e) {
                if ($(e.target).hasClass('inputModal')) {
                    // Get scroll position before moving top
                    scrollTopPosition = $(document).scrollTop();

                    // Add CSS to body "position: fixed"
                    $("body").addClass("iosBugFixCaret");
                }
            });

            $(document.body).on('hide.bs.modal', function (e) {
                if ($(e.target).hasClass('inputModal')) {
                    // Remove CSS to body "position: fixed"
                    $("body").removeClass("iosBugFixCaret");

                    //Go back to initial position in document
                    $(document).scrollTop(scrollTopPosition);
                }
            });

        }
    })();
});

function promptToCancel(url, incrementId) {
    var modal = new BiModal('promptToCancel');
    modal.prompt('Click continue to immediately cancel order ' + incrementId + '. <br /><br />Please let us know why you are cancelling your order:', function (payload) {
            if (window.BasicInvite.GoogleAnalytics) {
                window.BasicInvite.GoogleAnalytics.refundOrder(incrementId);
            }
            window.location.href = url + 'reason/' + payload.input;
        }, function (response) {
            console.log(response);
        }, {
            title: 'Are you sure you want to cancel?',
            promptForInput: true
        },
        {
            afterHide: function () {
                this.remove();
            }.bind(modal)
        });
}


function escapePseudo(str) {
    if (str) {
        str = str.replace(/([<>:\/\s\~])/g, '\\$1');
    }
    return str;
}

