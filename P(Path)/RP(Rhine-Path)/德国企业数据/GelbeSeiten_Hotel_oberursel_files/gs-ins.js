var liwGetElementsByClassName=function(e){if(document.getElementsByClassName)return document.getElementsByClassName(e);var t,l,s,n=document,r=[];if(n.querySelectorAll)return n.querySelectorAll("."+e);for(t=n.getElementsByTagName("*"),l=new RegExp("(^|\\s)"+e+"(\\s|$)"),s=0;s<t.length;s++)l.test(t[s].className)&&r.push(t[s]);return r};

if (utag_data['pubNo']) {
	//var liwVid  = liwGetElementsByClassName("gs_teaser_verlag_bild")[0].src.split("_")[1].split(".")[0];
	var liwVid  = utag_data['pubNo'];
	//var liwIns= (document.getElementById('liw-gs-' + liwVid + '-00001')) ? document.getElementById('liw-gs-' + liwVid + '-00001') : ((document.getElementById('yvj-gs-' + liwVid + '-00001')) ? document.getElementById('yvj-gs-' + liwVid + '-00001') : document.getElementById('yvj-gs-' + liwVid + '-60001'));
	/*var liwIns= (document.getElementById('liw-gs-' + liwVid + '-00001')) ? document.getElementById('liw-gs-' + liwVid + '-00001') : ((document.getElementById('yvj-gs-' + liwVid + '-00001')) ? document.getElementById('yvj-gs-' + liwVid + '-00001') : (document.getElementById('yvj-gs-' + liwVid + '-60001')) ? document.getElementById('yvj-gs-' + liwVid + '-60001') : document.getElementById('yvj-gs-' + liwVid + '-60002'));
	console.log(utag_data['q_cat'].split(',')[0]);
	console.log(utag_data['q_q']);
	console.log(utag_data['bookNo'].split(',').reverse()[0]);
	
	if(liwIns) {
		var liwBra  = liwIns.getAttribute("data-what").split(",")[1];
		var liwSea  = liwIns.getAttribute("data-what").split(",")[0];
		var liwLoc  = liwIns.getAttribute("data-where");
	} else {
		liwIns = document.getElementById('yvj-gs-' + liwVid + '-XQLOHAYC');
		var liwBra  = liwIns.getAttribute("data-what").split(",")[1];
		var liwSea  = liwIns.getAttribute("data-what").split(",")[0];
		var liwLoc  = liwIns.getAttribute("data-where");
	}

	var liwBu   = liwLoc.split(",")[0];
	var liwLo   = liwLoc.split("").reverse().join("").split(",")[0].split("").reverse().join("");
	var liwBua  = '';
	var liwHref = location.href;
	if(liwHref.indexOf('?') > -1)
	   liwHref = liwHref + '&search=' + liwBra;
	else
	   liwHref = liwHref + '?search=' + liwBra;
*/
	var liwBra = utag_data['q_cat'].split(',')[0];
	var liwSea = utag_data['q_q'];
	var liwBu  = utag_data['bookNo'].split(',').reverse()[0];

	(function() {
		var script = document.createElement("script"); script.type = "text/javascript";
		script.src = (document.location.protocol === "https:" ? "https:" : "http:") + "//imagesrv.adition.com/js/srp.js";
		script.charset = "utf-8";
		script.async = true;
		var firstScript = document.getElementsByTagName("script")[0]; firstScript.parentNode.insertBefore(script, firstScript);
	})()
	
	if (typeof(__tcfapi) !== 'undefined') {
        	__tcfapi('addEventListener', 2, function(tcData, success) {
                	if (success && tcData.eventStatus === 'tcloaded') {
	                        dtmTcData = __tcfapi('getTCData',2,null);
        	                if (dtmTcData.purpose.consents[3] && dtmTcData.vendor.consents['39']) {
					var liwAImg = document.createElement('img');
					liwAImg.width = "1";
					liwAImg.height = "1";
					liwAImg.style.display = "none";
					var liwSrc = 'https://ad13.adfarm1.adition.com/tagging?type=image&network=3253&tag[gs_short.branche]=' + liwBra + '&tag[gs_long.branche]='  + liwBra + '&tag[gs_short.buid]=' + liwBu + '&tag[gs_long.buid]=' + liwBu + '&_rnd=' + Math.random();
		
					if (liwBra == '')
						liwSrc = liwSrc + '&tag[gs_long.branche_buid]=' + liwSea + '-' + liwBu;
					else
						liwSrc = liwSrc + '&tag[gs_long.branche_buid]=' + liwBra + '-' + liwBu;

					liwAImg.src = liwSrc;
					document.head.appendChild(liwAImg);
                        	}
                        	__tcfapi('removeEventListener', 2, function(success) {}, tcData.listenerId);
                	}
        	});
	}


}

(()=>{"use strict";window.moli=window.moli||{que:[]};var e=!1;window.addEventListener("message",(d=>{if(d.data&&"h5.adunit.refresh"===d.data.event)if(e)window.moli.que.push((e=>e.refreshAdSlot(d.data.domId)));else{e=!0;var t=document.createElement("script");t.async=!0,t.type="module",t.src="https://xgseiten.h5v.eu/7/moli.min.mjs",window.document.head.appendChild(t),window.moli.que.push((e=>e.afterRequestAds((()=>e.refreshAdSlot(d.data.domId)))))}}))})();

var lSlots = [ 'rs_sky3', 'rs_sky4' ];
var lGetSlot = function(domId) {
  return document.querySelector('#' + domId + ' iframe');
}

var postLiwLoaded = function(slotIFrame) {
  slotIFrame.contentWindow.postMessage({ event: 'liwloaded' });
}

// Case 1: iframe is already loaded. No readystatechange will be triggered so we can safely call postMessage
for (var i = 0; i < lSlots.length; i++) {
  var lSlot = lGetSlot(lSlots[i]);
  if (lSlot && lSlot.contentDocument && lSlot.contentDocument.readyState === 'complete') {
    postLiwLoaded(lSlot);
  }
}

// Case 2: iframes that are not yet loaded. This will trigger on all subsequent events
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') {
      for (var i = 0; i < lSlots.length; i++) {
        var lSlot = lGetSlot(lSlots[i]);
        if (lSlot) {
          postLiwLoaded(lSlot);
        }
      }
    }
  }
);
