/**  * PWS Tabs jQuery Plugin  * Author: Alex Chizhov  * Author Website: http://alexchizhov.com/pwstabs  * GitHub: https://github.com/alexchizhovcom/pwstabs  * Version: 1.1.3  * Version from: 18.01.2015  * Licensed under the MIT license  */
!function(s){function t(t,a){this.element=s(t),this.$elem=s(this.element),this.settings=s.extend({},i,a),this._defaults=i,this._name=e,this.init()}var e="pwstabs",i={effect:"scale",defaultTab:1,containerWidth:"100%",tabsPosition:"horizontal",horizontalPosition:"top",verticalPosition:"left",rtl:!1};t.prototype={init:function(){var t=this.$elem.children("[data-pws-tab]");this.$elem.addClass("pws_tabs_list");var e="";1==this.settings.rtl&&(e=" pws_tabs_rtl"),positionClass="vertical"==this.settings.tabsPosition?"left"==this.settings.verticalPosition?" pws_tabs_vertical pws_tabs_vertical_left":" pws_tabs_vertical pws_tabs_vertical_right":"top"==this.settings.horizontalPosition?" pws_tabs_horizontal pws_tabs_horizontal_top":" pws_tabs_horizontal pws_tabs_horizontal_bottom",this.$elem.wrap('<div class="pws_tabs_container'+e+positionClass+'" style="width:'+this.settings.containerWidth+'"></div>'),s(t).addClass("slideleft"==this.settings.effect?"pws_tabs_slide_left_hide":"scale"==this.settings.effect?"pws_tabs_scale_hide":"slideright"==this.settings.effect?"pws_tabs_slide_right_hide":"slidetop"==this.settings.effect?"pws_tabs_slide_top_hide":"slidedown"==this.settings.effect?"pws_tabs_slide_down_hide":"pws_tabs_scale_hide"),"vertical"==this.settings.tabsPosition?"left"==this.settings.verticalPosition?this.$elem.parent().prepend('<ul class="pws_tabs_controll"></ul>'):this.$elem.parent().append('<ul class="pws_tabs_controll"></ul>'):"top"==this.settings.horizontalPosition?this.$elem.parent().prepend('<ul class="pws_tabs_controll"></ul>'):this.$elem.parent().append('<ul class="pws_tabs_controll"></ul>');var i="1";if(this.$elem.children("[data-pws-tab]").each(function(){s(this).attr("data-pws-tab-id",i),s(this).parent().parent().find("ul.pws_tabs_controll").append('<li><a href="#" data-tab-id="'+s(this).data("pws-tab")+'">'+s(this).data("pws-tab-name")+"</a></li>"),s(this).addClass("pws_tab_single"),i++}),"vertical"==this.settings.tabsPosition){var a=parseInt(this.$elem.parent().find("ul.pws_tabs_controll li a").outerWidth())+1;this.$elem.parent().find("ul.pws_tabs_controll").width(a);var l=parseInt(this.$elem.parent().outerWidth())-a;this.$elem.outerWidth(l);var _=parseInt(this.$elem.parent().find("ul.pws_tabs_controll").outerHeight()),n=parseInt(this.$elem.outerHeight());_>n&&this.$elem.css("min-height",_)}this.$elem.find('[data-pws-tab-id="'+this.settings.defaultTab+'"]').addClass("slideleft"==this.settings.effect?"pws_tabs_slide_left_show":"scale"==this.settings.effect?"pws_tabs_scale_show":"slideright"==this.settings.effect?"pws_tabs_slide_right_show":"slidetop"==this.settings.effect?"pws_tabs_slide_top_show":"slidedown"==this.settings.effect?"pws_tabs_slide_down_show":"pws_tabs_scale_show"),"horizontal"==this.settings.tabsPosition?this.$elem.height(parseInt(this.$elem.find('[data-pws-tab-id="'+this.settings.defaultTab+'"]').height())):_>n&&this.$elem.css("min-height",_),this.$elem.parent().find('ul li a[data-tab-id="'+this.$elem.find('[data-pws-tab-id="'+this.settings.defaultTab+'"]').data("pws-tab")+'"]').addClass("pws_tab_active"),this.$elem.parent().find("ul li a").on("click",{pwsOptions:this.settings},function(t){t.preventDefault();var e=t.data.pwsOptions,i=e.effect;s(this).parent().parent().find("a").removeClass("pws_tab_active"),s(this).addClass("pws_tab_active");{var a=s(this).data("tab-id"),l=s(this).parent().parent().parent().find('div[data-pws-tab="'+a+'"]'),_=s(this).parent().parent().parent().find("[data-pws-tab]");s(this).parent().parent().parent().find(".pws_tabs_list")}"slideleft"==i?(_.removeClass("pws_tabs_slide_left_show").addClass("pws_tabs_slide_left_hide"),l.addClass("pws_tabs_slide_left_show")):"scale"==i?(_.removeClass("pws_tabs_scale_show").addClass("pws_tabs_scale_hide"),l.addClass("pws_tabs_scale_show")):"slideright"==i?(_.removeClass("pws_tabs_slide_right_show").addClass("pws_tabs_slide_right_hide"),l.addClass("pws_tabs_slide_right_show")):"slidetop"==i?(_.removeClass("pws_tabs_slide_top_show").addClass("pws_tabs_slide_top_hide"),l.addClass("pws_tabs_slide_top_show")):"slidedown"==i?(_.removeClass("pws_tabs_slide_down_show").addClass("pws_tabs_slide_down_hide"),l.addClass("pws_tabs_slide_down_show")):(_.removeClass("pws_tabs_scale_show").addClass("pws_tabs_scale_hide"),l.addClass("pws_tabs_scale_show")),l.parent().height(parseInt(l.height()))})}},s.fn[e]=function(s){return this.each(function(){new t(this,s)})}}(jQuery,window,document);