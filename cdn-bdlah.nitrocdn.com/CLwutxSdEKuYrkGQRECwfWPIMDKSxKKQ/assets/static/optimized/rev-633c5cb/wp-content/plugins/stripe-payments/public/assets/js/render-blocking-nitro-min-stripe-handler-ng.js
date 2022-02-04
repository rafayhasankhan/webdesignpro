var stripeHandlerNG=function(i){jQuery("input#stripeAmount_"+i.uniq_id).keydown(function(e){if(e.keyCode===13){e.preventDefault();jQuery("#asp_ng_button_"+i.uniq_id).click();return false}});this.isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);this.checkPPVisible=function(){if(n.iframe.find("#Aligner-item").is(":hidden")){n.form.submit();return true}setTimeout(this.checkPPVisible,100)};this.validateAmount=function(){var e=jQuery("input#stripeAmount_"+i.uniq_id).val();i.amountOpts={applySepOpts:0};i.minAmounts=[];if(i.amountOpts.applySepOpts!=0){e=e.replace(i.amountOpts.thousandSep,"");e=e.replace(i.amountOpts.decimalSep,".")}else{e=e.replace(/\$/g,"");e=e.replace(/\,/g,"");e=e.replace(/\ /g,"")}e=parseFloat(e);if(isNaN(e)){jQuery("#error_explanation_"+i.uniq_id).hide().html("Enter valid amount").fadeIn("slow");return false}var t=e.toFixed(2).toString();if(i.amountOpts.applySepOpts!=0){t=t.replace(".",i.amountOpts.decimalSep)}if(i.zeroCents.indexOf(i.currency)<=-1){}jQuery("#error_explanation_"+i.uniq_id).html("");jQuery("input#stripeAmount_"+i.uniq_id).val(t);return e};this.handleModal=function(e){if(n.data.show_custom_amount_input){var t=n.validateAmount();if(!t){return false}}if(!n.modal){n.modal=jQuery('div[data-asp-iframe-prod-id="'+n.data.product_id+'"][id="asp-payment-popup-'+n.data.uniq_id+'"]');if(n.modal.length===0){jQuery("body").append('<div id="asp-payment-popup-'+n.data.uniq_id+'" style="display: none;" data-asp-iframe-prod-id="'+n.data.product_id+'" class="asp-popup-iframe-cont"><iframe frameborder="0" allowtransparency="true" class="asp-popup-iframe" allow="payment" allowpaymentrequest="true" src="'+n.data.iframe_url+'"></iframe></div>');n.modal=jQuery("#asp-payment-popup-"+n.data.uniq_id)}if(e){window.aspVisibleModalObj=n.modal;n.modal.css("display","flex").hide().fadeIn()}var a=n.modal.find("iframe");n.iframe=a;a.on("load",function(){if(n.redirectToResult){window.location.href=a[0].contentWindow.location.href;return false}if(t){a.contents().find("#amount").val(t);a[0].contentWindow.triggerEvent(a.contents().find("#amount")[0],"change")}if(n.data.thankyou_page_url){a.contents().find("#thankyou_page_url").val(n.data.thankyou_page_url)}a[0].contentWindow["doSelfSubmit"]=i.doSelfSubmit;n.iForm=a.contents().find("form#payment-form");n.iForm.on("submit",function(e){e.preventDefault();if(n.form_submitted||n.redirectToResult){return false}var t=n.iForm.find("input#payment-intent").val();if(t!==""){if(n.form.length===0){console.log("Waiting for iframe to complete loading");n.redirectToResult=true;return true}var a=n.form.find("div.asp-child-hidden-fields");n.iForm.find('[name!=""]').each(function(){if(jQuery(this).attr("name")){jQuery(this).attr("name","asp_"+jQuery(this).attr("name"));var e=jQuery(this).clone();if(jQuery(this).is("select")){e.prop("selectedIndex",jQuery(this).prop("selectedIndex"))}a.append(e)}});console.log("Parent form submit");n.form_submitted=true;if(n.isSafari){n.checkPPVisible()}else{n.form.submit()}}return false})})}else{if(t){n.iframe.contents().find("#amount").val(t);n.iframe[0].contentWindow.triggerEvent(n.iframe.contents().find("#amount")[0],"change")}window.aspVisibleModalObj=n.modal;n.modal.css("display","flex").hide().fadeIn();n.iframe[0].contentWindow.popupDisplayed()}};var n=this;n.data=i;n.form=jQuery("form#asp_ng_form_"+n.data.uniq_id);window.WPASPDocumentElementOrigOverflow=jQuery("html").css("overflow");jQuery("#asp_ng_button_"+n.data.uniq_id).prop("disabled",false);if(n.data.preload){n.handleModal(false)}else if(n.data.prefetch){n.data.iframe_url=n.data.iframe_url+"&ckey="+wpASPNG.ckey;jQuery("body").append('<link rel="prefetch" as="document" href="'+n.data.iframe_url+'">')}var e="#asp_ng_button_"+n.data.uniq_id;if(i.attachToElement){e=i.attachToElement}jQuery(e).click(function(e){jQuery("html").css("overflow","hidden");e.preventDefault();n.handleModal(true)})};function WPASPClosePaymentPopup(){window.aspVisibleModalObj.fadeOut();jQuery("html").css("overflow",window.WPASPDocumentElementOrigOverflow)}function WPASPAttachToAElement(e){var t=jQuery(e).attr("href");if(!t){return false}var a=new RegExp("asp_action=show_pp&product_id=[0-9]*(.*)|"+wpASPNG.ppSlug+"(.*)product_id=[0-9]*(.*)");var i=t.match(a);if(i[0]){var n=i[0].match(/product_id=([0-9]+)/);if(n[1]){var r="";if(i[1]){r=i[1]}WPASPAttach(e,n[1],r)}}return true}function WPASPAttach(e,t,a){var i=Math.random().toString(36).substr(2,9);var n=jQuery(e).data("asp-price");if(n){a+="&price="+n}var r="&";if(wpASPNG.iframeUrl.indexOf("?")===-1){r="?"}new stripeHandlerNG({attachToElement:e,uniq_id:i,product_id:t,doSelfSubmit:true,iframe_url:wpASPNG.iframeUrl+r+"product_id="+t+a,prefetch:wpASPNG.prefetch==="1"?true:false})}function WPASPDocReady(e){if(document.readyState!=="loading"){e()}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",e)}else{document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){e()}})}}WPASPDocReady(function(){if(typeof wpaspInitOnDocReady!=="undefined"){console.log("ASP: Creating buttons on page load");wpaspInitOnDocReady.forEach(function(e){new stripeHandlerNG(e)})}jQuery('[class*="asp-attach-product-"]').each(function(e,t){var a=jQuery(t).attr("class");var i=a.match(/asp-attach-product-[0-9]*/);if(i[0]){var n=i[0].match(/([0-9].*)/);if(n[0]){WPASPAttach(t,n[0],"")}}});jQuery('a[href*="asp_action=show_pp&product_id="],a[href*="'+wpASPNG.ppSlug+'"]').each(function(e,t){WPASPAttachToAElement(t)})});