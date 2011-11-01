(function(){tinymce.create("tinymce.plugins.AutoResizePlugin",{init:function(g,j){var i=this,h=0;if(g.getParam("fullscreen_is_enabled")){return;}function f(){var c=g.getDoc(),l=c.body,a=c.documentElement,d=tinymce.DOM,b=i.autoresize_min_height,e;e=tinymce.isIE?l.scrollHeight:(tinymce.isWebKit&&l.clientHeight==0?0:l.offsetHeight);if(e>i.autoresize_min_height){b=e;}if(i.autoresize_max_height&&e>i.autoresize_max_height){b=i.autoresize_max_height;g.getBody().style.overflowY="auto";}else{g.getBody().style.overflowY="hidden";}if(b!==h){d.setStyle(d.get(g.id+"_ifr"),"height",b+"px");h=b;}if(i.throbbing){g.setProgressState(false);g.setProgressState(true);}}i.editor=g;i.autoresize_min_height=parseInt(g.getParam("autoresize_min_height",g.getElement().offsetHeight));i.autoresize_max_height=parseInt(g.getParam("autoresize_max_height",0));g.onInit.add(function(a){a.dom.setStyle(a.getBody(),"paddingBottom",a.getParam("autoresize_bottom_margin",50)+"px");});g.onChange.add(f);g.onSetContent.add(f);g.onPaste.add(f);g.onKeyUp.add(f);g.onPostRender.add(f);if(g.getParam("autoresize_on_init",true)){g.onInit.add(function(a,b){a.setProgressState(true);i.throbbing=true;a.getBody().style.overflowY="hidden";});g.onLoadContent.add(function(a,b){f();setTimeout(function(){f();a.setProgressState(false);i.throbbing=false;},1250);});}g.addCommand("mceAutoResize",f);},getInfo:function(){return{longname:"Auto Resize",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/autoresize",version:tinymce.majorVersion+"."+tinymce.minorVersion};}});tinymce.PluginManager.add("autoresize",tinymce.plugins.AutoResizePlugin);})();