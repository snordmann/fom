/**
* Loader
* 
* @author Gerdes, Andre
* @date 31.08.2011
*
* @type Class
*
* @description
**/
(function(){
	
	/**
	* Private
	**/
	var _Tempestiva = {
		
		PRIVATE_SECURITY_TOKEN:new Date().getTime(),
		
		Crypt:{},
		
		Classes:[
		
		//	"class/c_aes",
		//	"class/c_md5",
			
			"library/jquery.min",
			"bootstrap",
			"library/class",
			
		    "class/c_unique_id",
		    "class/c_feature",
		    "class/c_feature_object",
		    "class/c_object_sort",
		    "class/c_list",
		    "class/c_pager",
		    "class/c_ajax",
		    "class/c_filter",
			
		    "api/c_status",
		    "api/c_data",
			"api/c_lists",
			"api/c_image"
		],
		
		Callback:[],
		
		LoadScripts:[],
		
		// CUSTOMIZING: dies muss für jede Installation angepasst werden
		//Baseurl: window.location.protocol+'//'+window.location.host, 
		Baseurl: 'https://events.nwzonline.de',
		
		Urls:{
			// wird weiter unten befüllt
		},
		
		// Reguläre Ausdrücke: /iPhone/ entspricht new RegExp('/iPhone/')
		iPhone:(/iPhone/.test(navigator.userAgent) || /iPad/.test(navigator.userAgent)),
		iPhoneApp:false
	};
	
	
	_Tempestiva.Urls = {
		// todo: hier die kundenspezifischen URLs eintragen
		//API:"http://events.nwzonline.de/api/",
		//Ajax:"http://events.nwzonline.de/ajax/"
		
		Image:_Tempestiva.Baseurl+"/customer/nwz/images/",
		API:_Tempestiva.Baseurl+"/api/",
		Ajax:_Tempestiva.Baseurl+"/ajax/"
	};
	
	
	/**
	* iPhone App ID prüfen Private
	**/
	if(_Tempestiva.iPhone && _Tempestiva.iPhoneApp){
	
		_Tempestiva.verifyAppId = function(appid, callback){
			
			var object = {
			
				security:_Tempestiva.PRIVATE_SECURITY_TOKEN,
				appid:appid,
				apikey:_Tempestiva.APIKey
			};
			
			var serverSideAppId = "com.yourcompany.iPhoneApp";
			
			if(serverSideAppId == object.appid)
			{
				window.location = "intern:appID:"+encodeURIComponent(_Tempestiva.Helper.jsonToString(object));
				
				callback.call(this);
			
			}else{
			
				var object = {
				
					error:"App ID not registered!",
					apikey:_Tempestiva.APIKey
				}
				
				window.location = "intern:appIDError:"+encodeURIComponent(_Tempestiva.Helper.jsonToString(object));
			}
		};
	}
	
	/**
	 * API Key aus Metadaten lesen
	 **/
	_Tempestiva.setAPIKey = function(){
	
		for (var i = 0; i < document.getElementsByTagName('meta').length; i++) {
		
			if (document.getElementsByTagName('meta')[i].getAttribute('name') == 'tempestiva_apikey'){
			
			    _Tempestiva.APIKey = document.getElementsByTagName('meta')[i].getAttribute('content');
			}
		}
	};
	
	/**
	* Laden von Systemdateien
	**/
	_Tempestiva.Load = function(files,callback){
	
		var xmlObj = null;
			
		if(window.XMLHttpRequest){
			
			xmlObj = new XMLHttpRequest();
			
		} else if (window.ActiveXObject) {
			
			xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
			
		} else {
			
			return true;
		}
		
		var callbackTimestamp = new Date().getTime();
		
		xmlObj.onreadystatechange = function(){
			
			if(xmlObj.readyState == 2){
				
				_Tempestiva.Callback[callbackTimestamp] = function(script){
				
					try {
					
						(new Function("(function(_Tempestiva){"+script.data+"})(arguments[0]);")).call(this, _Tempestiva);
					
					}catch(e){
						
						console.log("error in response");
					}
				};
			}
				
			if(xmlObj.readyState == 4 && xmlObj.status == 200){
			
				(new Function("_Tempestiva", "{"+xmlObj.responseText+"}")).call(this, _Tempestiva);
				
				callback(_Tempestiva);
			}
		}
		
		xmlObj.open('GET', _Tempestiva.Urls.Ajax+"getlibfiles?apikey="+_Tempestiva.APIKey+"&files="+escape(files)+"&callback="+callbackTimestamp+"&_="+callbackTimestamp, true);
		xmlObj.send(null);
		
		return false;
	};
	
	/**
	* Private Helfermethoden
	**/
	_Tempestiva.Helper = {
			
		bind:function(scope, fn) {
			
			return function () {
			     
				return fn.apply(scope, arguments);
			};
		},
			
		ObjectLength: function (data) {
			var _length = 0;
			for (var date in data) {
				_length++;
			}
			return _length;
		},
			
		jsonToString:function (obj){
			
			var t = typeof (obj);
			
			if (t != "object" || obj === null){
			
				// simple data type
				if (t == "string") obj = '"'+obj+'"';
				
				return String(obj);
			
			}else {
			
				// recurse array or object
				var n, v, json = [], arr = (obj && obj.constructor == Array);
				
				for (n in obj) {
				
					v = obj[n]; t = typeof(v);
					if (t == "string") {
					
						v = ('"'+v+'"');
					
					}else if (t == "object" && v !== null) {
					
						v = _Tempestiva.Helper.jsonToString(v);
					}
					
					json.push((arr ? "" : '"' + n + '"~') + String(v).replace(/:/, "~"));
				}
				
				return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
			}
		},
		
		/**
		* Arguments To Array
		**/
		argumentsToArray: function(args){
		
			var array = [];
			
			for(var a = 0; a < args.length; a++){
	
				array.push(args[a]);
			}
			
			return array;
		},
		
		/**
		* Callback Helper
		**/
		callbackFunction: function(){
		
			var args = _Tempestiva.Helper.argumentsToArray(arguments);
				
			var callback = args.shift();
			var data = args;
			
			
			// Wenn callback == string, dann muss es vom IPhone kommen
			if(typeof callback == "string")
			{
				if(data.length > 0)
				{
					var jsonString = ":"+encodeURIComponent(_Tempestiva.Helper.jsonToString(data[0]));
					
				}else{
				
					jsonString = "";
				}
				
				window.location = "function:"+callback+jsonString;
			
			}else{
				
				callback.apply(this, data);
			}
		}
	};
	
	/**
	 * API Key
	 **/
	_Tempestiva.setAPIKey();
	
	if(_Tempestiva.APIKey === undefined){
	
		_Tempestiva.APIKey = window.TempestivaAPIKey;
	}
	
	/**
	 * Public Part
	 **/
	window.Tempestiva = {
	
		getBaseUrl: function(callback){
			_Tempestiva.Helper.callbackFunction(callback, _Tempestiva.Baseurl);
		},
		
		getImageUrl: function(callback){
			//console.log(_Tempestiva.Urls.Image);
			_Tempestiva.Helper.callbackFunction(callback, _Tempestiva.Urls.Image);
		},
			
		isReady:function(){
		
			/**
			* Lade Bootstrap (Private)
			**/
			var func = arguments[0];
			var appID = arguments[1];
			
			_Tempestiva.iPhoneApp = appID === undefined ? false : true;
			
			/**
			* Ladevorgang Sharpness 
			* deprecated
			**/
			if(_Tempestiva.iPhone && _Tempestiva.APIKey == "sdjfhiwueoalsk" && _Tempestiva.iPhoneApp){
				
				_Tempestiva.Load(_Tempestiva.Classes, function(){
				
					_Tempestiva.jQuery = jQuery.sub();
					_Tempestiva.jQuery.noConflict();
					
					_Tempestiva.Helper.callbackFunction(func);
				});
			}
			else if(_Tempestiva.iPhone && _Tempestiva.APIKey == "sdjfhiwueoalskx" && _Tempestiva.iPhoneApp)
			{
				_Tempestiva.verifyAppId(appID, function(){
				
					_Tempestiva.Load(_Tempestiva.Classes, function(){
					
						_Tempestiva.jQuery = jQuery.sub();
						_Tempestiva.jQuery.noConflict();
						
						_Tempestiva.Helper.callbackFunction(func);
					});
				});
			
			/**
			* Ladevorgang Browser
			**/
			}else{
			
				var jQueryIsset = false;
				
				if(window.jQuery !== undefined)
				{
					jQueryIsset = true;
					
					_Tempestiva.jQueryIsset = window.jQuery;
					_Tempestiva.jQueryIsset$ = window.$;
				}
				
				_Tempestiva.Load(_Tempestiva.Classes, function(){
				
					_Tempestiva.jQuery = jQuery.sub();
					_Tempestiva.jQuery.noConflict();
					
					if(jQueryIsset){
					
						window.jQuery = _Tempestiva.jQueryIsset;
						window.$ = _Tempestiva.jQueryIsset$;
					}
					
					_Tempestiva.Helper.callbackFunction(func);
				});
			}
		}
	};

})();