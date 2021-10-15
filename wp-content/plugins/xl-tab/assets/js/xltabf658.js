(function ($) {
"use strict";

    var TabStep = function ($scope, $) {

        $scope.find('.xltbstpr').each(function () {

            var settings = $(this).data('xld');
            var form = $(this).find('.xltbstp');
            //var prev = $('.d-' + settings['id']+ ' ' +'li');

            form.steps({
                headerTag: "h3.title",
                bodyTag: ".xltbitms",
                transitionEffect: "fade",
                enableAllSteps: true,
                labels: {
                    previous : settings['prev'],
                    next : settings['nxt'],
                    finish : settings['submit'],
                    current : ''
                }, 
                titleTemplate : '<div class="title"><span class="title-text">#title#</span><span class="title-number">0#index#</span></div>',
                onFinished: function (event, currentIndex)
                {
                    if (settings['url']){
                        $(location).attr('href',settings['url']);
                    }
                }
            }); 

            $('.wizard > .steps li a').click(function(){
                $(this).parent().addClass('checked');
                $(this).parent().prevAll().addClass('checked');
                $(this).parent().nextAll().removeClass('checked');
            });

        });

    };

    var Tab1 = function ($scope, $) {

        $scope.find('.demoTab').each(function () {

            var settings = $(this).data('xld');
            var prev = $('.d-' + settings['id']);
            prev.easyResponsiveTabs();

        });

    };

    var AppTab = function ($scope, $) {

        $scope.find('.appTab').each(function () {

            var settings = $(this).data('xld');
            var prev = $('.d-' + settings['id']);
            prev.easyResponsiveTabs();

        });

    };


    var AcordFaq = function ($scope, $) {

        $scope.find('.xlacrdfaqsrch').each(function () {

            var settings = $(this).data('xld');

            $("#myUL > .filterDiv.is-active").children(".accordion-panel").slideDown();
            
            $("#myUL > .filterDiv").click(function() {
            event.preventDefault();
                // Cancel the siblings
                $(this).siblings(".filterDiv").removeClass("is-active").children(".accordion-panel").slideUp();
                // Toggle the item
                $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
            });

        });

    };

    var AcorCheck = function ($scope, $) {

        $scope.find('.thepack-accorcheckbx').each(function () {

            var settings = $(this).data('xld');
            var uniqcls = $('.d' + settings['id']);

            uniqcls.click(function(){
                uniqcls.removeClass('active');
                $(this).addClass('active');
            })


        });

    };


    var FloatTabxD = function ($scope, $) {

        $scope.find('.xlfloadingtab').each(function () {

             var mytrgt = $(this).find('.tab');
             var main = $(this);

            mytrgt.click(function () {
                selectDropin(this);
            });
            function selectDropin(el) {
                var $el = $(el),
                    container = $el.closest(".xlfloatab"),
                    activeTab = container.find(".tab.active"),
                    activeContent = container.find(".content.active"),
                    relContent = container.find("#" + $el.data("content"));

                if ($el.hasClass("active") && container.hasClass("showing")) {
                    $el.removeClass("active");
                    container.removeClass("showing");
                    relContent.removeClass("active");
                    $('body').removeClass("xldfloatoverlay");
                }
                else {
                    activeContent.removeClass("active");
                    activeTab.removeClass("active");
                    $('body').addClass("xldfloatoverlay");
                    relContent.addClass("active");
                    $el.addClass("active");

                    if (!container.hasClass("showing"))
                        container.addClass("showing");
                }
            }

            $(document).on('click', function(event) {

              if(!$(event.target).is('.xlfloatab')){
               /* $( ".xlfloatab" ).removeClass("showing");*/
              }    
            });

        });

    };


    var AccorDl = function ($scope, $) {

        $scope.find('.xldacdn').each(function () {

            var settings = $(this).data('xld');
            var faction = $('.accordion.'+ settings['id']+ ' ' +'li:eq(0) .xltbhd');
            var saction = $('.accordion.'+ settings['id']+ ' ' +'.xltbhd');

            faction.addClass('active').next().slideDown();

            saction.click(function(j) {
                var dropDown = $(this).closest('li').find('.xltbc');

                $(this).closest('.accordion').find('.xltbc').not(dropDown).slideUp();

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).closest('.accordion').find('.xltbhd.active').removeClass('active');
                    $(this).addClass('active');
                }

                dropDown.stop(false, true).slideToggle();

                j.preventDefault();
            });


        });

    };

    var TabVrtkl = function ($scope, $) {

        $scope.find('.xldtab').each(function () {

            $( ".xldtab" ).pluginName({type: "click"});
            
        });

    };

    var TabSwitcH = function ($scope, $) {

        $scope.find('.xldswitcher').each(function () {

             var togle = $(this).find('.xld_btn-toggle');
             var main = $(this);
             var settings = $(this).data('xld');

            var toggleSwitch = $('.d-' + settings['id']+ ' ' +'label.switch');
            var TabTitle = $('.d-' + settings['id']+ ' ' +'li');
            var monthTabTitle = $('.d-' + settings['id']+ ' ' +'li.month');
            var yearTabTitle = $('.d-' + settings['id']+ ' ' +'li.year');
            var monthTabContent = $('.d-' + settings['id']+ ' ' +'#month');
            var yearTabContent = $('.d-' + settings['id']+ ' ' +'#year'); 
            // hidden show deafult;
            monthTabContent.slideUp();   
            yearTabContent.slideDown();   
            function toggleHandle() {
                if(toggleSwitch.hasClass('off')) {
                    yearTabContent.slideDown();
                    monthTabContent.slideUp();
                    monthTabTitle.addClass('active');
                    yearTabTitle.removeClass('active');
                }else {
                    monthTabContent.slideDown();
                    yearTabContent.slideUp();
                    yearTabTitle.addClass('active');
                    monthTabTitle.removeClass('active');
                }
            };
            monthTabTitle.on('click', function () {
                toggleSwitch.addClass('on').removeClass('off');
                toggleHandle();
                return false;
            });
            yearTabTitle.on('click', function () {
                toggleSwitch.addClass('off').removeClass('on');
                toggleHandle();
                return false;
            });
            toggleSwitch.on('click', function () {
                toggleSwitch.toggleClass('on off');        
                toggleHandle();
            });


        });

    };

    $(window).on('elementor/frontend/init', function () {

        if (elementorFrontend.isEditMode()) {

            elementorFrontend.hooks.addAction('frontend/element_ready/xltab1.default', Tab1);
            elementorFrontend.hooks.addAction('frontend/element_ready/aetabswitch.default', TabSwitcH);
            elementorFrontend.hooks.addAction('frontend/element_ready/xlvtab1.default', TabVrtkl);
            elementorFrontend.hooks.addAction('frontend/element_ready/xlacrdn1.default', AccorDl);
            elementorFrontend.hooks.addAction('frontend/element_ready/xltabflt.default', FloatTabxD);
            elementorFrontend.hooks.addAction('frontend/element_ready/xltbstp.default', TabStep);
            elementorFrontend.hooks.addAction('frontend/element_ready/xlaccorcheck.default', AcorCheck);
            elementorFrontend.hooks.addAction('frontend/element_ready/xlaccorfq.default', AcordFaq);
            elementorFrontend.hooks.addAction('frontend/element_ready/xltabapp.default', AppTab);

        }
        else {

            elementorFrontend.hooks.addAction('frontend/element_ready/xltab1.default', Tab1);
            elementorFrontend.hooks.addAction('frontend/element_ready/aetabswitch.default', TabSwitcH);
            elementorFrontend.hooks.addAction('frontend/element_ready/xlvtab1.default', TabVrtkl);
            elementorFrontend.hooks.addAction('frontend/element_ready/xlacrdn1.default', AccorDl);
            elementorFrontend.hooks.addAction('frontend/element_ready/xltabflt.default', FloatTabxD);
            elementorFrontend.hooks.addAction('frontend/element_ready/xltbstp.default', TabStep);
            elementorFrontend.hooks.addAction('frontend/element_ready/xlaccorcheck.default', AcorCheck);
            elementorFrontend.hooks.addAction('frontend/element_ready/xlaccorfq.default', AcordFaq);
            elementorFrontend.hooks.addAction('frontend/element_ready/xltabapp.default', AppTab);

        }
    });


})(jQuery);
