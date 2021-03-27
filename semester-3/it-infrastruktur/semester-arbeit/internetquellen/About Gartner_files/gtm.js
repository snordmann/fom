
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"348",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.categoryLevel2"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_map":["list",["map","key","Agenda","value","32"],["map","key","Registration","value","33"],["map","key","Confirm Registration","value","34"],["map","key","Speakers","value","35"],["map","key","Exhibitor","value","36"],["map","key","Exhibitors","value","36"],["map","key","Venue","value","37"],["map","key","Venue \u0026amp; Travel","value","37"],["map","key","Register","value","33"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eloquaFormData.0.formType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";if(a)return\"93\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eloquaFormData.0.offerName"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_map":["list",["map","key","campaign","value","104"],["map","key","bac","value","105"],["map","key","newsletter","value","106"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",7],8,16],";return\"campaign\"==a\u0026\u0026\"Webinar\"==b?\"109\":",["escape",["macro",8],8,16],"})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.categoryLevel1"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",10],
      "vtp_defaultValue":["macro",10],
      "vtp_map":["list",["map","key","en","value","Corporate Marketing"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","Register","value","Registration"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.categoryLevel3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.categoryLevel4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.categoryLevel5"
    },{
      "function":"__c",
      "vtp_value":"gartner.com.br,gartner.fr,gartner.de,gartner.co.jp,gartner.mx,gartner.pt,gartner.es,gartner.ch,gartner.co.uk,gartnereventsondemand.com, www.gartner.com, gartnerevents.com, www.gartnerinfo.com, gartnerinfo.com, gartner.dcatalog.com, gartner.epaperflip.com, gartnerformarketers.com, www.gartnerformarketers.com, scmworldcommunity.com, secure.gartnerevents.com, secure.gartnerformarketers.com, vid.gartner.com, blogs.gartner.com"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"clientId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(a){var c=new Date(a);a=\"\"+(c.getMonth()+1);var b=\"\"+c.getDate();c=c.getFullYear();2\u003Ea.length\u0026\u0026(a=\"0\"+a);2\u003Eb.length\u0026\u0026(b=\"0\"+b);return[c,a,b].join(\"-\")}return function(a){var c=a.get(\"clientId\");",["escape",["macro",17],8,16],"||window.dataLayer.push({clientId:c});var b=c.match(\/\\d+$\/)[0];b=e(1E3*b);var k=a.get(\"hitType\");a.set(\"dimension1\",c);a.set(\"dimension17\",b);a.set(\"dimension153\",k);var g=a.get(\"sendHitTask\");a.set(\"sendHitTask\",function(a){try{var c=a.get(\"hitPayload\"),b=c.replace(\/(^\\?)\/,\n\"\").split(\"\\x26\").map(function(a){return a=a.split(\"\\x3d\"),this[a[0]]=a[1],this}.bind({}))[0],d;for(d in b)b.hasOwnProperty(d)\u0026\u0026\"\"===b[d]\u0026\u0026d.match(\/^(cd|cm|il|pr[0-9]|promo|pal|ec|ea|el).*\/)\u0026\u0026(b[d]=\"(not set)\");var f=Object.keys(b).map(function(a){return encodeURIComponent(a)+\"\\x3d\"+decodeURIComponent(encodeURIComponent(b[a]))}).join(\"\\x26\");c=[[\"emailAddress\",\"[REDACTED EMAIL]\"],[\"business_email\",\"[REDACTED EMAIL]\"],[\"e\",\"[REDACTED EMAIL]\"],[\"em\",\"[REDACTED EMAIL]\"],[\"email\",\"[REDACTED EMAIL]\"],\n[\"Email\",\"[REDACTED EMAIL]\"],[\"email_asset_id\",\"[REDACTED EMAIL]\"],[\"emailAddress\",\"[REDACTED EMAIL]\"],[\"emailaddress\",\"[REDACTED EMAIL]\"],[\"EmailAddress\",\"[REDACTED EMAIL]\"],[\"email_Address\",\"[REDACTED EMAIL]\"],[\"email_address\",\"[REDACTED EMAIL]\"],[\"Email_Address\",\"[REDACTED EMAIL]\"],[\"EMAIL_ADDRESS\",\"[REDACTED EMAIL]\"],[\"Email_address\",\"[REDACTED EMAIL]\"],[\"db_registry_latitude\",\"[REDACTED LATITUDE]\"],[\"db_registry_longitude\",\"[REDACTED LONGITUDE]\"],[\"db_ip\",\"[REDACTED IP]\"],[\"db_registry_zip_code\",\n\"[REDACTED ZIP]\"],[\"db_registry_area_code\",\"[REDACTED AREA CODE]\"],[\"db_ipAddress\",\"[REDACTED IP]\"],[\"street_address\",\"[REDACTED ADDRESS]\"],[\"Street_Address\",\"[REDACTED ADDRESS]\"],[\"streetAddress\",\"[REDACTED ADDRESS]\"],[\"StreetAddress\",\"[REDACTED ADDRESS]\"],[\"phone_number\",\"[REDACTED PHONE]\"],[\"Phone_Number\",\"[REDACTED PHONE]\"],[\"phone\",\"[REDACTED PHONE]\"],[\"Phone\",\"[REDACTED PHONE]\"],[\"longitude\",\"[REDACTED LONGITUDE]\"],[\"Longitude\",\"[REDACTED LONGITUDE]\"],[\"latitude\",\"[REDACTED LATITUDE]\"],[\"Latitude\",\n\"[REDACTED LATITUDE]\"],[\"mailto:\",\"[REDACTED EMAIL]\"],[\"emails\",\"[REDACTED EMAIL]\"],[\"finalEmail\",\"[REDACTED EMAIL]\"],[\"lb_email\",\"[REDACTED EMAIL]\"],[\"mail\",\"[REDACTED EMAIL]\"],[\"utm_emailid\",\"[REDACTED EMAIL]\"],[\"utm_emailname\",\"[REDACTED EMAIL]\"],[\"vyemail\",\"[REDACTED EMAIL]\"],[\"work_email\",\"[REDACTED EMAIL]\"],[\"mail\",\"[REDACTED EMAIL]\"],[\"firstName\",\"[REDACTED FIRSTNAME]\"],[\"first-name\",\"[REDACTED FIRSTNAME]\"],[\"last-name\",\"[REDACTED FIRSTNAME]\"],[\"FirstName\",\"[REDACTED FIRSTNAME]\"],[\"firstname\",\n\"[REDACTED FIRSTNAME]\"],[\"name\",\"[REDACTED FIRSTNAME]\"],[\"lastName\",\"[REDACTED LASTNAME]\"],[\"optedUserFirstName\",\"[REDACTED FIRSTNAME]\"],[\"optedUserLastName\",\"[REDACTED LASTNAME]\"],[\"busphone\",\"[REDACTED BUSPHONE]\"],[\"password\",\"[REDACTED PASSWORD]\"],[\"userId\",\"[REDACTED USERID]\"],[\"username\",\"[REDACTED USERID]\"],[\"zip\",\"[REDACTED ZIPCODE]\"],[\"zipcode\",\"[REDACTED ZIPCODE]\"]];hitPayload_=f.split(\"\\x26\");for(i=0;i\u003ChitPayload_.length;i++){parts=hitPayload_[i].split(\"\\x3d\");try{val=decodeURIComponent(decodeURIComponent(parts[1]))}catch(l){val=\ndecodeURIComponent(parts[1])}for(d=0;d\u003Cc.length;d++){var h=c[d],e=new RegExp(\"([?\\x26]\"+h[0]+\"\\x3d)[^\\x26]+\",\"gi\");val=val.replace(e,\"$1\"+h[1])}val=val.replace(\/[\\w\\-\\.]+([@]|%[40])[\\w\\-\\.]+\/gi,\"[REDACTED EMAIL]\");parts[1]=encodeURIComponent(val);hitPayload_[i]=parts.join(\"\\x3d\")}f=hitPayload_.join(\"\\x26\");a.set(\"hitPayload\",f,!0);g(a)}catch(l){g(a)}})}})();"]
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__cid"
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__ctv"
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"6"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"7"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__c",
      "vtp_value":"8"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Date.now();return a})();"]
    },{
      "function":"__c",
      "vtp_value":"9"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jstz.determine();return a.name()})();"]
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).toISOString().substring(0,10)})();"]
    },{
      "function":"__c",
      "vtp_value":"11"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getHours()})();"]
    },{
      "function":"__c",
      "vtp_value":"12"
    },{
      "function":"__c",
      "vtp_value":""
    },{
      "function":"__c",
      "vtp_value":"13"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.siteCode"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",42],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/.*\/conferences","value","Events Marketing"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",43],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",43],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","corporate marketing","value","Public Marketing Site"]]
    },{
      "function":"__c",
      "vtp_value":"14"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.id"
    },{
      "function":"__c",
      "vtp_value":"15"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.creationDate"
    },{
      "function":"__c",
      "vtp_value":"16"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.isLoggedIn"
    },{
      "function":"__remm",
      "convert_null_to":"Not Logged In",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",50],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"Not Logged In",
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key","true","value","Logged In"],["map","key","false","value","Not Logged In"]]
    },{
      "function":"__c",
      "vtp_value":"18"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.companySize"
    },{
      "function":"__c",
      "vtp_value":"19"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.jobTitle"
    },{
      "function":"__c",
      "vtp_value":"20"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.jobRole"
    },{
      "function":"__c",
      "vtp_value":"21"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.secondaryJobRole"
    },{
      "function":"__c",
      "vtp_value":"22"
    },{
      "function":"__c",
      "vtp_value":"23"
    },{
      "function":"__c",
      "vtp_value":"24"
    },{
      "function":"__c",
      "vtp_value":"25"
    },{
      "function":"__c",
      "vtp_value":"26"
    },{
      "function":"__j",
      "convert_true_to":"Not Visible",
      "convert_false_to":"Visible",
      "vtp_name":"document.hidden"
    },{
      "function":"__c",
      "vtp_value":"27"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.industryName"
    },{
      "function":"__c",
      "vtp_value":"28"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.type"
    },{
      "function":"__c",
      "vtp_value":"29"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.country"
    },{
      "function":"__c",
      "vtp_value":"30"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.region"
    },{
      "function":"__c",
      "vtp_value":"31"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.uniqueEventId"
    },{
      "function":"__c",
      "vtp_value":"33"
    },{
      "function":"__c",
      "vtp_value":"34"
    },{
      "function":"__c",
      "vtp_value":"35"
    },{
      "function":"__c",
      "vtp_value":"36"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.enHrefLangPath"
    },{
      "function":"__c",
      "vtp_value":"37"
    },{
      "function":"__c",
      "vtp_value":"38"
    },{
      "function":"__c",
      "vtp_value":"39"
    },{
      "function":"__c",
      "vtp_value":"40"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.devicePixelRatio})();"]
    },{
      "function":"__c",
      "vtp_value":"41"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"placement"
    },{
      "function":"__c",
      "vtp_value":"43"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.title"
    },{
      "function":"__c",
      "vtp_value":"44"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.theme"
    },{
      "function":"__c",
      "vtp_value":"45"
    },{
      "function":"__c",
      "vtp_value":"46"
    },{
      "function":"__c",
      "vtp_value":"47"
    },{
      "function":"__c",
      "vtp_value":"48"
    },{
      "function":"__c",
      "vtp_value":"49"
    },{
      "function":"__c",
      "vtp_value":"50"
    },{
      "function":"__c",
      "vtp_value":"51"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"eventCode",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"eventcode",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",99],8,16],"||",["escape",["macro",100],8,16],"})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",102],8,16],".split(\".\")[0].toUpperCase()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"n\/a",
      "vtp_name":"gartnerEvent.eventCode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof ",["escape",["macro",101],8,16],"?",["escape",["macro",101],8,16],".toUpperCase():",["escape",["macro",102],8,16],".match(\/gartnereventsregistration\/gi)?",["escape",["macro",103],8,16],":",["escape",["macro",104],8,16],"})();"]
    },{
      "function":"__c",
      "vtp_value":"52"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"n\/a",
      "vtp_name":"gartnerEvent.eventLocation"
    },{
      "function":"__c",
      "vtp_value":"53"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gartnerEvent.eventGroup"
    },{
      "function":"__c",
      "vtp_value":"54"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"n\/a",
      "vtp_name":"gartnerEvent.eventPrimaryRole"
    },{
      "function":"__c",
      "vtp_value":"55"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"n\/a",
      "vtp_name":"gartnerEvent.eventRegion"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",113],
      "vtp_defaultValue":["macro",113],
      "vtp_map":["list",["map","key","Asia-Pacific","value","APAC"],["map","key","North America","value","NA"],["map","key","Europe","value","EU"],["map","key","Latin America","value","LA"],["map","key","Middle East","value","ME"]]
    },{
      "function":"__c",
      "vtp_value":"56"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"n\/a",
      "vtp_name":"gartnerEvent.eventType"
    },{
      "function":"__c",
      "vtp_value":"57"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"n\/a",
      "vtp_name":"gartnerEvent.eventCurrentMarketingMilestone"
    },{
      "function":"__c",
      "vtp_value":"58"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"n\/a",
      "vtp_name":"gartnerEvent.eventStartDate"
    },{
      "function":"__c",
      "vtp_value":"59"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=new Date;b.getTimezoneOffset();var a=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};a=b.getFullYear()+\"-\"+a(b.getMonth()+1)+\"-\"+a(b.getDate());b=",["escape",["macro",120],8,16],";a=Math.floor((Date.parse(b.replace(\/-\/g,\"\/\"))-Date.parse(a.replace(\/-\/g,\"\/\")))\/864E5);a=Math.floor(a\/7);if(b)return a})();"]
    },{
      "function":"__c",
      "vtp_value":"60"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"n\/a",
      "vtp_name":"gartnerEvent.eventTitle"
    },{
      "function":"__c",
      "vtp_value":"61"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"n\/a",
      "vtp_name":"gartnerEvent.eventVenueName"
    },{
      "function":"__c",
      "vtp_value":"62"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gartnerEvent.eventPrice"
    },{
      "function":"__c",
      "vtp_value":"83"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"151"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.language"
    },{
      "function":"__c",
      "vtp_value":"154"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"browsingBehavior.newTab"
    },{
      "function":"__c",
      "vtp_value":"155"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"browsingBehavior.navigationType"
    },{
      "function":"__c",
      "vtp_value":"156"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"browsingBehavior.tabCount"
    },{
      "function":"__c",
      "vtp_value":"157"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"browsingBehavior.tabId"
    },{
      "function":"__c",
      "vtp_value":"158"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"browsingBehavior.redirectCount"
    },{
      "function":"__c",
      "vtp_value":"161"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.type"
    },{
      "function":"__c",
      "vtp_value":"162"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.assetType"
    },{
      "function":"__c",
      "vtp_value":"163"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.role"
    },{
      "function":"__c",
      "vtp_value":"164"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.function"
    },{
      "function":"__c",
      "vtp_value":"165"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.industry"
    },{
      "function":"__c",
      "vtp_value":"166"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.contentType"
    },{
      "function":"__c",
      "vtp_value":"167"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.kI"
    },{
      "function":"__c",
      "vtp_value":"168"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.template"
    },{
      "function":"__c",
      "vtp_value":"169"
    },{
      "function":"__c",
      "vtp_value":"172"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eloquaFormData.0.campaignName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",161],8,16],".split(\"_\");return a=a[0]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",162],
      "vtp_defaultValue":["macro",162],
      "vtp_map":["list",["map","key","GTR","value","Company\/System Wide (GTR)"],["map","key","CNS","value","Consulting (CNS)"],["map","key","EVT","value","Events Marketing (EVT)"],["map","key","ATCM","value","EVT: Attendee Comms (ATCM)"],["map","key","SPOP","value","EVT: Sponsor Ops (SPOP)"],["map","key","SPEX","value","EVT: Sponsor Sales (SPEX)"],["map","key","EXP","value","Executive Program (EXP)"],["map","key","GTP","value","Gartner Tech Prof (GTP)"],["map","key","GML","value","GML (GML)"],["map","key","CORP","value","Internal Corporate Comms (CORP)"],["map","key","INT","value","Internal System \/ Adhoc (INT)"],["map","key","PI","value","Peer Insights (PI)"],["map","key","RM","value","Research Marketing (RM)"],["map","key","SM","value","Social Media Team (SM)"],["map","key","SCM","value","Supply Chain Mgmt (SCM)"]]
    },{
      "function":"__c",
      "vtp_value":"173"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",161],8,16],".split(\"_\");return a=a[1]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",165],
      "vtp_defaultValue":["macro",165],
      "vtp_map":["list",["map","key","ANZ","value","ANZ"],["map","key","APAC","value","APAC"],["map","key","ASIA","value","Asia"],["map","key","EMEA","value","EMEA"],["map","key","GB","value","Global"],["map","key","IN","value","India"],["map","key","JP","value","Japan"],["map","key","LA","value","Latin America"],["map","key","NA","value","North America"],["map","key","SA","value","South Africa"]]
    },{
      "function":"__c",
      "vtp_value":"174"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",161],8,16],".split(\"_\");return a=a[2]})();"]
    },{
      "function":"__c",
      "vtp_value":"177"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",161],8,16],".split(\"_\");return a=a[4]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",170],
      "vtp_defaultValue":["macro",170],
      "vtp_map":["list",["map","key","BT","value","Email: BrightTalk Automated"],["map","key","C","value","Email: Eloqua Campaigns"],["map","key","ET","value","Email: Template for Sales"],["map","key","LU","value","Lead Upload"],["map","key","NPP","value","Non-Paid Promotion"],["map","key","PP","value","Paid Promotion"],["map","key","CPC","value","Paid Campaign"],["map","key","PD","value","Paid Display"],["map","key","PSOC","value","Paid Social"],["map","key","P","value","Print"],["map","key","RT","value","Retargeting"],["map","key","SMS","value","Short Message Service \/ TXT"],["map","key","SOC","value","Social Media"],["map","key","WT","value","Web Traffic"]]
    },{
      "function":"__c",
      "vtp_value":"178"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eloquaForm.type"
    },{
      "function":"__c",
      "vtp_value":"179"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eloquaForm.userType"
    },{
      "function":"__c",
      "vtp_value":"183"
    },{
      "function":"__c",
      "vtp_value":"184"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",11]],["map","index","2","group",["macro",12]],["map","index","3","group",["macro",13]],["map","index","4","group",["macro",14]],["map","index","5","group",["macro",15]]],
      "vtp_autoLinkDomains":["macro",16],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","allowLinker","value","true"],["map","fieldName","legacyHistoryImport","value","false"],["map","fieldName","customTask","value",["macro",18]],["map","fieldName","siteSpeedSampleRate","value","100"],["map","fieldName","transport","value","beacon"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index",["macro",19],"dimension",["macro",20]],["map","index",["macro",21],"dimension",["macro",22]],["map","index",["macro",23],"dimension",["macro",24]],["map","index",["macro",25],"dimension",["macro",26]],["map","index",["macro",27],"dimension",["macro",28]],["map","index",["macro",29],"dimension",["macro",30]],["map","index",["macro",31],"dimension",["macro",32]],["map","index",["macro",33],"dimension",["macro",34]],["map","index",["macro",35],"dimension",["macro",36]],["map","index",["macro",37],"dimension",["macro",38]],["map","index",["macro",39],"dimension",["macro",40]],["map","index",["macro",41],"dimension",["macro",44]],["map","index",["macro",45],"dimension",["macro",46]],["map","index",["macro",47],"dimension",["macro",48]],["map","index",["macro",49],"dimension",["macro",51]],["map","index",["macro",52],"dimension",["macro",53]],["map","index",["macro",54],"dimension",["macro",55]],["map","index",["macro",56],"dimension",["macro",57]],["map","index",["macro",58],"dimension",["macro",59]],["map","index",["macro",60],"dimension","is gartner employee? placeholder"],["map","index",["macro",61],"dimension","is gartner client? placeholder"],["map","index",["macro",62],"dimension","number of events attended placeholder"],["map","index",["macro",63],"dimension","last login date placeholder"],["map","index",["macro",64],"dimension",["macro",65]],["map","index",["macro",66],"dimension",["macro",67]],["map","index",["macro",68],"dimension",["macro",69]],["map","index",["macro",70],"dimension",["macro",71]],["map","index",["macro",72],"dimension",["macro",73]],["map","index",["macro",74],"dimension",["macro",75]],["map","index",["macro",76],"dimension","placeholder 33"],["map","index",["macro",77],"dimension","placeholder 34"],["map","index",["macro",78],"dimension","placeholder 35"],["map","index",["macro",79],"dimension",["macro",80]],["map","index",["macro",81],"dimension","placeholder 37"],["map","index",["macro",82],"dimension","placeholder 38"],["map","index",["macro",83],"dimension","placeholder 39"],["map","index",["macro",84],"dimension",["macro",85]],["map","index",["macro",86],"dimension",["macro",87]],["map","index",["macro",88],"dimension",["macro",89]],["map","index",["macro",90],"dimension",["macro",91]],["map","index",["macro",92],"dimension","placeholder 45"],["map","index",["macro",93],"dimension","placeholder 46"],["map","index",["macro",94],"dimension","placeholder 47"],["map","index",["macro",95],"dimension","placeholder 48"],["map","index",["macro",96],"dimension","placeholder 49"],["map","index",["macro",97],"dimension","placeholder 50"],["map","index",["macro",98],"dimension",["macro",105]],["map","index",["macro",106],"dimension",["macro",107]],["map","index",["macro",108],"dimension",["macro",109]],["map","index",["macro",110],"dimension",["macro",111]],["map","index",["macro",112],"dimension",["macro",114]],["map","index",["macro",115],"dimension",["macro",116]],["map","index",["macro",117],"dimension",["macro",118]],["map","index",["macro",119],"dimension",["macro",120]],["map","index",["macro",121],"dimension",["macro",122]],["map","index",["macro",123],"dimension",["macro",124]],["map","index",["macro",125],"dimension",["macro",126]],["map","index",["macro",127],"dimension",["macro",128]],["map","index",["macro",129],"dimension",["macro",130]],["map","index",["macro",131],"dimension",["macro",132]],["map","index",["macro",133],"dimension",["macro",134]],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",137],"dimension",["macro",138]],["map","index",["macro",139],"dimension",["macro",140]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",143],"dimension",["macro",144]],["map","index",["macro",145],"dimension",["macro",146]],["map","index",["macro",147],"dimension",["macro",148]],["map","index",["macro",149],"dimension",["macro",150]],["map","index",["macro",151],"dimension",["macro",152]],["map","index",["macro",153],"dimension",["macro",154]],["map","index",["macro",155],"dimension",["macro",156]],["map","index",["macro",157],"dimension",["macro",158]],["map","index",["macro",159],"dimension","placeholder 169"],["map","index",["macro",160],"dimension",["macro",163]],["map","index",["macro",164],"dimension",["macro",166]],["map","index",["macro",167],"dimension",["macro",168]],["map","index",["macro",169],"dimension",["macro",171]],["map","index",["macro",172],"dimension",["macro",173]],["map","index",["macro",174],"dimension",["macro",175]],["map","index",["macro",176],"dimension",["macro",7]],["map","index",["macro",177],"dimension",["macro",161]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-8394889-3",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__c",
      "vtp_value":"32"
    },{
      "function":"__c",
      "vtp_value":"170"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",181],8,16],".split(\"_\");return a=a[5]})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",182],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",182],
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key","BAMBU(\\d+)?","value","Bambu"],["map","key","BN(\\d+)?","value","Banner"],["map","key","CIB(\\d+)?","value","Campaign-in-a-box"],["map","key","DM(\\d+)?","value","Direct Mail"],["map","key","EP(\\d+)?","value","EAGLE Page"],["map","key","48(\\d+)?","value","Email: 48 Hour Reminder"],["map","key","APPT(\\d+)?","value","Email: Appointment Setting"],["map","key","AQ(\\d+)?","value","Email: Audience Acquisition"],["map","key","AA(\\d+)?","value","Email: Automated Anniversary"],["map","key","BB(\\d+)?","value","Email: Batch \u0026 Blast \/ Strategic"],["map","key","BS(\\d+)?","value","Email: Batch Send \/ One-off"],["map","key","CU(\\d+)?","value","Email: Catchup Campaign"],["map","key","FUP(\\d+)?","value","Email: FollowUp"],["map","key","INV(\\d+)?","value","Email: Invite"],["map","key","JU(\\d+)?","value","Email: Justuno"],["map","key","NL(\\d+)?","value","Email: Newsletter"],["map","key","OND(\\d+)?","value","Email: On-Demand"],["map","key","PS(\\d+)?","value","Email: Paid Search"],["map","key","PE(\\d+)?","value","Email: Post Event"],["map","key","PRE(\\d+)?","value","Email: Pre Event"],["map","key","QC(\\d+)?","value","Email: Quick Collect"],["map","key","RE(\\d+)?","value","Email: Re-engagement"],["map","key","SO(\\d+)?","value","Email: Sponsor Ops"],["map","key","SV(\\d+)?","value","Email: Survey"],["map","key","TY(\\d+)?","value","Email: Thank You"],["map","key","BTR(\\d+)?","value","Email: Trigger"],["map","key","WTR(\\d+)?","value","Email: Web Trigger"],["map","key","GB(\\d+)?","value","Global-Blitz Day"],["map","key","WB(\\d+)?","value","In-Webinar"],["map","key","LP(\\d+)?","value","Landing Page"],["map","key","LG(\\d+)?","value","Lead Gen"],["map","key","LEA(\\d+)?","value","Lead Upload: Event Attendee"],["map","key","LEN(\\d+)?","value","Lead Upload: Event No Show"],["map","key","LER(\\d+)?","value","Lead Upload: Event Registrant"],["map","key","MP(\\d+)?","value","Media Partner"],["map","key","MTK(\\d+)?","value","Media Partner Toolkit"],["map","key","MIB(\\d+)?","value","Meeting-in-a-box"],["map","key","TI(\\d+)?","value","True Influence Campaign"],["map","key","PR(\\d+)?","value","Press Release"],["map","key","RT(\\d+)?","value","Retargetting"],["map","key","SEM(\\d+)?","value","Search Engine Marketing"],["map","key","SWG(\\d+)?","value","Smarter with Gartner"],["map","key","SNAP(\\d+)?","value","SnapApp"],["map","key","SC(\\d+)?","value","Social Center"],["map","key","STK(\\d+)?","value","Sponsor Toolkit"],["map","key","SF(\\d+)?","value","Spredfast"],["map","key","UNK(\\d+)?","value","Unknown \/ Generic"]]
    },{
      "function":"__c",
      "vtp_value":"171"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",181],8,16],".split(\"_\");return a=a[4]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",185],
      "vtp_defaultValue":["macro",185],
      "vtp_map":["list",["map","key","BT","value","Email: BrightTalk Automated"],["map","key","C","value","Email: Eloqua Campaigns"],["map","key","ET","value","Email: Template for Sales"],["map","key","LU","value","Lead Upload"],["map","key","NPP","value","Non-Paid Promotion"],["map","key","PP","value","Paid Promotion"],["map","key","CPC","value","Paid Campaign"],["map","key","PD","value","Paid Display"],["map","key","PSOC","value","Paid Social"],["map","key","P","value","Print"],["map","key","RT","value","Retargeting"],["map","key","SMS","value","Short Message Service \/ TXT"],["map","key","SOC","value","Social Media"],["map","key","WT","value","Web Traffic"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".nav\\x3eli\").find(\"a\").eq(0).text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1;return a?",["escape",["macro",1],8,16],".match(\/\\\/conferences\\\/|^\\\/events\\\/\/)?\"Events Site\":\"Corporate Marketing\":",["escape",["macro",10],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.screen.availWidth;return 1100\u003E=a?\"sm\":1100\u003Ca?\"lg\":\"none\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",191],
      "vtp_defaultValue":"Navigation - Events Section Bar",
      "vtp_map":["list",["map","key","sm","value","Navigation - Hamburger Menu"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){return b.replace(\/\\w\\S*\/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()})}})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",193],8,16],"(",["escape",["macro",194],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.is(\"ul.navbar-nav ul a\")?a.closest(\".navbar-nav\\x3eli\").find(\"a\").eq(0).text().trim()+\" - \"+",["escape",["macro",195],8,16],":",["escape",["macro",195],8,16],"})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",130],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",194],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","agenda.*\\.pdf","value","DOWNLOAD AGENDA"],["map","key","why\\-attend","value","More Reasons to Attend"],["map","key","speakers","value","View All Speakers"],["map","key","exhibitors","value","View All Exhibitors"],["map","key","venue\\-travel","value","Learn more (Venue \u0026 Travel)"],["map","key","agenda","value","View Full Agenda"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__viewedEventCodes"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return JSON.parse(",["escape",["macro",198],8,16],").hasOwnProperty(",["escape",["macro",104],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",104],8,16],";if(a\u0026\u0026\"n\/a\"!==a)return{ecommerce:{detail:{products:[{id:a}]}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\"li\").text().replace(\/\\n\/g,\"\").replace(\/\\s+\/g,\" \")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",130],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\.pdf","value","PDF"],["map","key","\\.doc|\\.docx","value","DOC"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",130],8,16],".split(\"\/\");a=a.pop();return-1\u003Ca.indexOf(\".\")?decodeURI(a):\"(not set)\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelector(\"section.page-filter .filter-center button\").textContent.trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.closest(\"section\").find(\"h3\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.find(\".headline h4\").text().trim()})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",130],8,16],".split(\"mailto:\").pop().split(\"?\").shift()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",187],8,16],".querySelector(\".headline h4\").textContent})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":true,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",102],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",102],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","gartner\\.com","value","gartner.com"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.navCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.navHeading"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.sublink"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".panel\").find(\"[class*\\x3dpanel-heading]\").eq(0).text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").find(\".inline-display\").eq(1).text().replace(\/^by\\s?\/i,\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"attributes.counter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"scrollThreshold.25"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"25\"==",["escape",["macro",220],8,16],")return\"57\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"scrollThreshold.50"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"50\"==",["escape",["macro",222],8,16],")return\"58\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"scrollThreshold.75"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"75\"==",["escape",["macro",224],8,16],")return\"59\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"scrollThreshold.90"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"90\"==",["escape",["macro",226],8,16],")return\"60\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"scrollThreshold.100"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"100\"==",["escape",["macro",228],8,16],")return\"61\"})();"]
    },{
      "function":"__c",
      "vtp_value":"62"
    },{
      "function":"__c",
      "vtp_value":"63"
    },{
      "function":"__c",
      "vtp_value":"82"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.__an_vidyard_mt[Object.keys(window.__an_vidyard_mt)[0]]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=0,b=0;a\u003Cwindow.dataLayer.length;a++)\"gtm.pageError\"===window.dataLayer[a].event\u0026\u0026b++;return b})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"RM",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/conference","value","EM"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"vidyard_action"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",239],
      "vtp_map":["list",["map","key","play","value","24"],["map","key","progress: 25%","value","25"],["map","key","progress: 50%","value","26"],["map","key","progress: 75%","value","27"],["map","key","progress: 90%","value","28"],["map","key","complete","value","29"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"vidyard_metadata.name"
    },{
      "function":"__c",
      "vtp_value":"180"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"vidyard_metadata.length_in_seconds"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b,a=",["escape",["macro",243],8,16],";120\u003Ea\u0026\u0026(b=\"00 - 02 Minutes\");120\u003C=a\u0026\u0026240\u003Ea\u0026\u0026(b=\"02 - 04 Minutes\");240\u003C=a\u0026\u0026360\u003Ea\u0026\u0026(b=\"04 - 06 Minutes\");360\u003C=a\u0026\u0026480\u003Ea\u0026\u0026(b=\"06 - 08 Minutes\");480\u003C=a\u0026\u0026600\u003Ea\u0026\u0026(b=\"08 - 10 Minutes\");600\u003C=a\u0026\u00261200\u003Ea\u0026\u0026(b=\"10 - 20 Minutes\");1200\u003C=a\u0026\u00261800\u003Ea\u0026\u0026(b=\"20 - 30 Minutes\");1800\u003C=a\u0026\u00262400\u003Ea\u0026\u0026(b=\"30 - 40 Minutes\");2400\u003C=a\u0026\u00263E3\u003Ea\u0026\u0026(b=\"40 - 50 Minutes\");3E3\u003C=a\u0026\u00263600\u003Ea\u0026\u0026(b=\"50 - 60 Minutes\");3600\u003C=a\u0026\u00264200\u003Ea\u0026\u0026(b=\"60 - 70 Minutes\");4200\u003C=a\u0026\u00264800\u003Ea\u0026\u0026(b=\"70 - 80 Minutes\");4800\u003C=a\u0026\u00265400\u003E\na\u0026\u0026(b=\"80 - 90 Minutes\");5400\u003C=a\u0026\u0026(b=\"90+ Minutes\");return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"conferenceMiniSiteNavBar\")?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eloquaForm.name"
    },{
      "function":"__c",
      "vtp_value":"96"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",173],
      "vtp_map":["list",["map","key","campaign","value","97"],["map","key","BAC","value","98"],["map","key","newsletter","value","99"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",7],8,16],";return\"campaign\"==a\u0026\u0026\"Webinar\"==b?\"110\":",["escape",["macro",248],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",173],8,16],",b=",["escape",["macro",175],8,16],",c=",["escape",["macro",7],8,16],";if(\"campaign\"==a\u0026\u0026\"known\"==b\u0026\u0026\"Webinar\"==c)return\"111\";if(\"campaign\"==a\u0026\u0026\"anonymous\"==b\u0026\u0026\"Webinar\"==c)return\"112\";if(\"campaign\"==a\u0026\u0026\"known\"==b)return\"100\";if(\"campaign\"==a\u0026\u0026\"anonymous\"==b)return\"101\";if(\"newsletter\"==a\u0026\u0026\"known\"==b)return\"102\";if(\"newsletter\"==a\u0026\u0026\"anonymous\"==b)return\"103\";if(\"quick collect\"==a\u0026\u0026\"known\"==b)return\"107\";if(\"quick collect\"==a\u0026\u0026\"anonymous\"==b)return\"108\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eloquaForm.step"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",251],
      "vtp_map":["list",["map","key","2 of 3","value","94"],["map","key","3 of 3","value","95"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"result-heading\"==",["escape",["macro",187],8,16],".className)return ",["escape",["macro",187],8,16],".parentElement.innerText;if(\"Read More\"==",["escape",["macro",187],8,16],".innerText)return ",["escape",["macro",187],8,16],".parentElement.parentElement.childNodes[7].childNodes[1].innerText;if(\"smart-image img-responsive\"==",["escape",["macro",187],8,16],".lastElementChild.className)return ",["escape",["macro",187],8,16],".parentElement.parentElement.childNodes[7].childNodes[1].innerText})();"]
    },{
      "function":"__c",
      "vtp_value":"80"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_customUrlSource":["macro",130],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",255],8,16],".split(\"\/\").reverse()[0]})();"]
    },{
      "function":"__c",
      "vtp_value":"65"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){Date.prototype.yyyymmdd||(Date.prototype.yyyymmdd=function(){var a=this.getMonth()+1,b=this.getDate();return[this.getFullYear(),(9\u003Ca?\"\":\"0\")+a,(9\u003Cb?\"\":\"0\")+b].join(\"-\")});return(new Date(jQuery.trim(jQuery(",["escape",["macro",187],8,16],").parent().parent().find(\"span:first\").text()))).yyyymmdd()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.closest(\".column-control\").find(\"h1,h2,h3,h4\").eq(0).text()||a.closest(\".cmp-globalsite-responsivegridcontainer,.cmp-globalsite-backgroundcontainer\").find(\"h1,h2,h3,h4\").eq(0).text()||a.closest(\".modal-wrap__wrapper\").find(\"h1,h2,h3,h4\").eq(0).text()||a.closest(\".player-element\").find(\".player-title\").eq(0).text()||a.closest(\"section\").find(\".h1,h2,h3,h4\").eq(0).text()||\"Top Nav Button \"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.promotions"
    },{
      "function":"__jsm",
      "convert_undefined_to":"0",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",260],8,16],".length})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",260],8,16],".map(function(a,b){return{id:a.id,name:a.name,creative:a.assetType+\": \"+a.creative,position:a.placement+\": \"+(b+1)}});return{ecommerce:{promoView:{promotions:b}}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.rel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(jQuery(",["escape",["macro",187],8,16],").is(\"[rel^\\x3dtab],[rel^\\x3dtab] *, .tab_drawer_heading\")){var a=",["escape",["macro",263],8,16],";a=document.querySelectorAll(\".tab_container #\"+a+\" a\");var d=",["escape",["macro",194],8,16],"}else a=0\u003Cdocument.querySelectorAll(\".tab_container .tab_content.active\").length?document.querySelectorAll(\".tab_container .tab_content.active a\"):document.querySelectorAll(\".tab_container #tab1 a\"),d=",["escape",["macro",205],8,16],";for(var c=0,e=[];c\u003Ca.length;c++)e.push(a[c].getAttribute(\"href\"));\na=",["escape",["macro",260],8,16],".filter(function(b){b=b.id.replace(\"\/content\/gartner\/\",\"\");return-1\u003Ce.indexOf(b)}).map(function(b,a){return{id:b.id,name:b.name,creative:b.assetType+\": \"+b.creative,position:\"Home - \"+d+\": \"+(a+1)}});return{ecommerce:{promoView:{promotions:a}}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.promoId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",262],8,16],";\"\/en\"===",["escape",["macro",1],8,16],"\u0026\u0026(a=",["escape",["macro",264],8,16],");return(a=",["escape",["macro",265],8,16],"?a.ecommerce.promoView.promotions.filter(function(a){return a.id==",["escape",["macro",265],8,16],"}).pop():a.ecommerce.promoView.promotions.filter(function(a){return-1\u003Ca.id.indexOf(",["escape",["macro",255],8,16],")}).pop())?{ecommerce:{promoClick:{promotions:[a]}}}:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",266],8,16],".ecommerce.promoClick.promotions[0].name})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.type"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").parent().parent().parent().prev().find(\"h3:first\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".tabs-wrapper\").find(\".tabs-nav .selected\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\"article\").find(\".title\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],").parent().clone();a.find(\"a\").remove();return a.text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],").closest(\"tr\").find(\"td:last\").text().split(\"\/\");if(!(3\u003Ea.length))return a=new Date(a),a.setMinutes(a.getMinutes()-a.getTimezoneOffset()),a=a.toISOString().slice(0,10)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".row\\x3ediv\").find(\".tag-type\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],").closest(\".modal-body\");return a.find(\"h1\").text()||a.find(\"h2\").text()||a.find(\"h3\").text()||a.find(\"h4\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\".tabctrllist.selected\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],").parent().next(\"p\").find(\"strong\").text();a=new Date(a);a=new Date(a.getTime()-6E4*a.getTimezoneOffset());a=a.toISOString();return a.substr(0,10)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");if(\"Featured Webinar\"===a.closest(\".grid-wide-inner\").find(\"h6\").text())return a.closest(\".grid-wide-inner\").find(\"h3\").text()})();"]
    },{
      "function":"__c",
      "vtp_value":"38"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.open"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",280],8,16],".replace(\"#\",\"\");return document.getElementById(a).querySelector(\".modal-wrap__heading\").textContent})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",187],8,16],".querySelector(\".card__title span\").textContent})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",283],8,16],";return document.getElementById(a).querySelector(\".modal-wrap__heading\").textContent})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=",["escape",["macro",208],8,16],".indexOf(\"subnav-link-text\")?jQuery(",["escape",["macro",187],8,16],").closest(\".dropdown\").find('[data-toggle\\x3d\"dropdown\"]').text().trim():",["escape",["macro",195],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=",["escape",["macro",208],8,16],".indexOf(\"subnav-link-text\")?",["escape",["macro",195],8,16],":\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.promoName"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tagName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",161],8,16],".split(\"_\");return a=a[3]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=",["escape",["macro",208],8,16],".indexOf(\"subnav-link-text\")?jQuery(",["escape",["macro",187],8,16],").closest(\".dropdown\").find('[data-toggle\\x3d\"dropdown\"]').text().trim():",["escape",["macro",195],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.timestamp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gaEventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gaEventAction"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",294],
      "vtp_map":["list",["map","key","Play","value","113"],["map","key","progress: 25%","value","114"],["map","key","progress: 50%","value","115"],["map","key","progress: 75%","value","116"],["map","key","progress: 90%","value","117"],["map","key","Finished","value","118"]]
    },{
      "function":"__d",
      "vtp_elementSelector":".player-title",
      "vtp_selectorType":"CSS"
    },{
      "function":"__c",
      "vtp_value":"107"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",212],
      "vtp_defaultValue":["macro",212],
      "vtp_map":["list",["map","key","itunes.apple.com","value","Itunes"],["map","key","play.google.com","value","Google Play"],["map","key","soundcloud.com","value","Sound Cloud"],["map","key","open.spotify.com","value","Spotify"],["map","key","stitcher.com","value","Stitcher"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",130],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",212],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","twitter","value","Twitter"],["map","key","facebook","value","Facebook"],["map","key","linkedin","value","Linkedin"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoSplitIndex"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoSplitView"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",300],8,16],"||0,b=",["escape",["macro",301],8,16],".map(function(a,b){return{id:a.id,name:a.name,creative:a.assetType+\": \"+a.creative,position:a.placement+\": \"+(b+1+c)}});return{ecommerce:{promoView:{promotions:b}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".text\").find(\"h5\").eq(\"0\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",144],8,16],".toLowerCase().split(\" \"),b=0;b\u003Ca.length;b++)a[b]=a[b].charAt(0).toUpperCase()+a[b].slice(1);return a.join(\" \")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.navType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");if(a.is(\"#primarynav a\"))return a.is(\"#primarynav\\x3eli\\x3ea\")?",["escape",["macro",194],8,16],":a.closest(\".primary-dropdown\").find(\"a\").eq(0).text();if(a.is(\"#mobileContextualAccordion a\"))return jQuery(\".contextual-label\").eq(0).text()||\"(not set)\";if(a.is(\"#globalNavAccordion a\"))return a.closest(\".panel\").find(\".panel-title a\").eq(0).text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],"),b=[];if(\"contextual\"===",["escape",["macro",305],8,16],")return ",["escape",["macro",214],8,16],"\u0026\u0026",["escape",["macro",216],8,16],"!==",["escape",["macro",214],8,16],"\u0026\u0026b.push(",["escape",["macro",214],8,16],"),b.push(",["escape",["macro",194],8,16],"),b.join(\"\/\");if(a.is(\"#primarynav a\")){if(a.is(\"#primarynav\\x3eli\\x3ea\"))return\"Main\";(a=a.closest(\"ul\").prev(\".dropdown-menu__title\").text())\u0026\u0026b.push(a);b.push(",["escape",["macro",194],8,16],");return b.join(\"\/\")}if(a.is(\"#mobileContextualAccordion a, #mobileContextualAccordion a *\")){if(a.is(\"a.contextual-label, a.contextual-label *\"))return\"Main\";\nif(a.is(\".panel-title a,.panel-title a *\"))return ",["escape",["macro",194],8,16],";(a=a.closest(\".panel\").find(\".panel-title\").text().trim())\u0026\u0026b.push(a);b.push(",["escape",["macro",194],8,16],");return b.join(\"\/\")}if(a.is(\"#globalNavAccordion a, #globalNavAccordion a *\"))return(a=a.closest(\"ul\").prev(\".dropdown-menu__title\").text())\u0026\u0026b.push(a),b.push(",["escape",["macro",194],8,16],"),b.join(\"\/\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".jumb-rep\").find(\"h1\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".individual-block\").find(\"h4,h3,h2,h1\").eq(0).text()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.accordion"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"brighttalk_action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"webinar-id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".feature\").find(\"h5.heading\").text()})();"]
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",263],8,16],",b=",["escape",["macro",260],8,16],";\"gtm.click\"===",["escape",["macro",314],8,16],"\u0026\u0026a?(a=document.querySelectorAll(\"#\"+a+\" h5.heading\"),tabTitle=",["escape",["macro",194],8,16],"):(a=jQuery(\".tab_content:visible h5.heading\"),tabTitle=",["escape",["macro",205],8,16],");for(var c=0,d=[];c\u003Ca.length;c++){var e=a[c];d.push(b.filter(function(a){return a.name===e.textContent}).pop())}b=d.map(function(a,b){return{id:a.id,name:a.name,creative:a.assetType+\": \"+a.creative,position:\"Home - \"+tabTitle+\": \"+(b+1)}});\nreturn{ecommerce:{promoView:{promotions:b}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",313],8,16],",a=",["escape",["macro",315],8,16],".ecommerce.promoView.promotions.filter(function(a){return-1\u003Ca.name.indexOf(b)});return{ecommerce:{promoClick:{promotions:a}}}})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",130],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^tel.*","value","Register by Phone"],["map","key","^mailto.*","value","Register by Email"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",104],8,16],";if(a\u0026\u0026\"n\/a\"!==a)return{ecommerce:{add:{products:[{id:a,quantity:1}]}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",208],8,16],";if(-1\u003Ca.indexOf(\"form-submit-button\"))return\"Registration Page - Unauthenticated\";if(-1\u003Ca.indexOf(\"register-button\"))return\"Registration Page - Authenticated\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gaEventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelector(\".breadcrumb-glossary-element\").textContent})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/information-technology\/glossary","value","IT Glossary"],["map","key","\/marketing\/glossary","value","Marketing Glossary"],["map","key","\/human-resources\/glossary","value","HR Glossary"],["map","key","\/finance\/glossary","value","Finance Glossary"],["map","key","\/sales\/glossary","value","Sales Glossary"],["map","key","\/glossary($|\\?)","value","Glossary Home Page"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelector(\".currentpage\").textContent})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelector(\".mg-t15\").textContent})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",187],8,16],".querySelector(\".link span\").textContent})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"glossary.keyword"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".main-container\").find(\"h1\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\".promotion-A a.breadcrumb-text\").innerText,b=document.querySelector(\".promotion-A h5.secondary-headline\").innerText;return a.concat(\" : \",b)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=a=document.querySelector(\".promotion-B a.breadcrumb-text\").innerText,c=document.querySelector(\".promotion-B h5.secondary-headline\").innerText;return b.concat(\" : \",c)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formFieldChanged"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.closest(\"div.individual-block.tile\").find(\"span.eye-brow.hidden-xs\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.closest(\"div.individual-block.tile\").find('div.headline [data-elem-val\\x3d\"title\"]').text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.closest(\"div.individual-block.tile\").find(\"span.eye-brow\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.closest(\"div.aem-Grid\").find(\"div.cmp-globalsite-heading h3\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\"article\").find(\"h5\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\"ul\").prev(\"p\").find(\"strong\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return null==a.attr(\"data-nav-category\")?",["escape",["macro",194],8,16],":a.attr(\"data-nav-category\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],"),b=a.attr(\"data-nav-sub-category\");a=a.attr(\"data-sublink\");return null==b?a:b+\"\/\"+a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.attr(\"data-nav-heading\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],"),b=a.attr(\"data-nav-category\");a=a.attr(\"data-sublink\");return null==b\u0026\u0026null==a?",["escape",["macro",194],8,16],":null==b\u0026\u0026null!=a?a:b+\"\/\"+a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],"),b=a.attr(\"data-nav-category\");a=a.attr(\"title\");if(null!=b)return b;if(null==b\u0026\u0026null!=a)return a;if(null==b\u0026\u0026null==a)return ",["escape",["macro",194],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],"),c=a.attr(\"data-nav-sub-category\"),b=a.attr(\"data-sublink\");a=a.attr(\"title\");if(null==c\u0026\u0026null!=b)return b;if(null!=c\u0026\u0026null!=b)return c+\"\/\"+b;if(null==c\u0026\u0026null==b\u0026\u0026null!=a)return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoEvent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoTitle"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"vidyard-ctaText"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"vidyard-videoTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.find(\"span.bold-text\").text()+\" : \"+a.find(\"span.not-bold-text\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"25,50,75,90,100\",c=.5,d=\"101\",a=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),e=Math.max(document.documentElement.clientHeight,window.innerHeight);a=e\/a;return a\u003Cc?b:d})();"]
    },{
      "function":"__c",
      "vtp_value":"1960447244259117"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",24],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*gartner.com\/en\/digital-markets.*","value","true"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmz"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utma"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmb"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"",["escape",["macro",353],7],"\",c=\"",["escape",["macro",354],7],"\",f=\"",["escape",["macro",355],7],"\";if(b){c=c.split(\/\\.\/);f=f.split(\/\\.\/);var d=b.split(\/\\.\/,4);b=b.split(\/[\\.|\\|]utm\/);for(var g=0,a={},e;g\u003Cb.length;g++)e=b[g].split(\"\\x3d\"),1\u003Ce.length\u0026\u0026(a[e[0]]=e[1]);if(a.gclid){if(!a.csr||a.csr.match(\/not.*set\/))a.csr=\"google\";if(!a.cmd||a.cmd.match(\/not.*set\/))a.cmd=\"cpc\"}return{host_hash:d[0],last_cookie_update:+d[1],session_number:+d[2],campaign_number:+d[3],source:a.csr,campaign:a.ccn,medium:a.cmd,keywords:a.ctr,\ncontent:a.cct,tableId:a.cid,adId:a.clid,googleAdId:a.gclid,first_visit:+c[2],last_visit:+c[3],session_start:+c[4],site_visits:+c[5],page_views:+f[1]}}})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_content",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_term",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_stripWww":true,
      "vtp_component":"HOST"
    },{
      "function":"__f",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"]
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",363],8,16],".toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=\/play.vidyard.com\/g,a=document.getElementsByTagName(\"script\"),b=a.length;b--;)if(c.test(a[b].src))return!0;return!1})();"]
    },{
      "function":"__dbg"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;a.getTimezoneOffset();var b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoEvent"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gaexp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gartnerEvent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pirate.primaryRole"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pirate.secondaryRole"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pirate.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pirate.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",24],
      "vtp_name":"page.originalLocation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.fragment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.companyName"
    },{
      "function":"__c",
      "vtp_value":"134"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"n\/a",
      "vtp_name":"gartnerEvent.eventWeeksUntilEventStart"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.transactionTotal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pirate.group"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.transactionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pirate.region"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"17"
    },{
      "function":"__c",
      "vtp_value":"42"
    },{
      "function":"__c",
      "vtp_value":"63"
    },{
      "function":"__c",
      "vtp_value":"66"
    },{
      "function":"__c",
      "vtp_value":"67"
    },{
      "function":"__c",
      "vtp_value":"68"
    },{
      "function":"__c",
      "vtp_value":"69"
    },{
      "function":"__c",
      "vtp_value":"70"
    },{
      "function":"__c",
      "vtp_value":"71"
    },{
      "function":"__c",
      "vtp_value":"76"
    },{
      "function":"__c",
      "vtp_value":"77"
    },{
      "function":"__c",
      "vtp_value":"78"
    },{
      "function":"__c",
      "vtp_value":"86"
    },{
      "function":"__c",
      "vtp_value":"108"
    },{
      "function":"__c",
      "vtp_value":"133"
    },{
      "function":"__c",
      "vtp_value":"134"
    },{
      "function":"__c",
      "vtp_value":"135"
    },{
      "function":"__c",
      "vtp_value":"136"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"_gaCid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"_gacid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",405],8,16],"||",["escape",["macro",406],8,16],"})();"]
    },{
      "function":"__c",
      "vtp_value":"00563437"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return a.is(\"ul.navbar-right ul.dropdown-menu a\")?\"Gartner Sites - \"+",["escape",["macro",195],8,16],":",["escape",["macro",195],8,16],"})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",211],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\\/doc\\\/","value","Research"],["map","key","\\\/webinar\\\/","value","Webinar"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ce.analysts"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ce.resId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ce.pageLength"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ce.wordCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ce.docId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No user market set",
      "vtp_name":"user.market"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.status"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.pBoolean"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ce.productType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoLink"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ce.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ce.docType"
    },{
      "function":"__c",
      "vtp_value":"5400"
    },{
      "function":"__c",
      "vtp_value":"15000"
    },{
      "function":"__c",
      "vtp_value":"65000"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",428],
      "vtp_defaultValue":["macro",378],
      "vtp_map":["list",["map","key","why-attend","value","section: Why Attend"],["map","key","agenda","value","section: Agenda"],["map","key","speakers","value","section: Speakers"],["map","key","exhibitors","value","section: Exhibitors"],["map","key","venue-travel","value","section: Venue \u0026 Travel"],["map","key","section_whyattend","value","section: Why Attend"],["map","key","section_agenda","value","section: Agenda"],["map","key","section_speakers","value","section: Speakers"],["map","key","section_exhibitors","value","section: Exhibitors"],["map","key","section_travel","value","section: Venue \u0026 Travel"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",211],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"Non Events Page",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/conferences","value","Events Page"],["map","key","\/events","value","Events Page"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.nav"
    },{
      "function":"__c",
      "vtp_value":"15000"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",432],8,16],"\/1E3})();"]
    },{
      "function":"__c",
      "vtp_value":"5400"
    },{
      "function":"__c",
      "vtp_value":"65000"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",219],8,16],"\u003E",["escape",["macro",434],8,16],"?!0:!1})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",181],8,16],".split(\"_\");return a=a[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",181],8,16],".split(\"_\");return a=a[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",181],8,16],".split(\"_\");return a=a[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",181],8,16],".split(\"_\");return a=a[3]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",438],
      "vtp_defaultValue":["macro",438],
      "vtp_map":["list",["map","key","GTR","value","Company\/System Wide (GTR)"],["map","key","CNS","value","Consulting (CNS)"],["map","key","EVT","value","Events Marketing (EVT)"],["map","key","ATCM","value","EVT: Attendee Comms (ATCM)"],["map","key","SPOP","value","EVT: Sponsor Ops (SPOP)"],["map","key","SPEX","value","EVT: Sponsor Sales (SPEX)"],["map","key","EXP","value","Executive Program (EXP)"],["map","key","GTP","value","Gartner Tech Prof (GTP)"],["map","key","GML","value","GML (GML)"],["map","key","CORP","value","Internal Corporate Comms (CORP)"],["map","key","INT","value","Internal System \/ Adhoc (INT)"],["map","key","PI","value","Peer Insights (PI)"],["map","key","RM","value","Research Marketing (RM)"],["map","key","SM","value","Social Media Team (SM)"],["map","key","SCM","value","Supply Chain Mgmt (SCM)"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",439],
      "vtp_defaultValue":["macro",439],
      "vtp_map":["list",["map","key","ANZ","value","ANZ"],["map","key","APAC","value","APAC"],["map","key","ASIA","value","Asia"],["map","key","EMEA","value","EMEA"],["map","key","GB","value","Global"],["map","key","IN","value","India"],["map","key","JP","value","Japan"],["map","key","LA","value","Latin America"],["map","key","NA","value","North America"],["map","key","SA","value","South Africa"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",441],
      "vtp_defaultValue":["macro",441],
      "vtp_map":["list",["map","key","GTR","value","Gartner Global \/ Unknown (GTR)"],["map","key","CCEC","value","RM: Communications Leadership Council (CCEC)"],["map","key","CCECIHT","value","RM: Internal Communications (CCECIHT)"],["map","key","GCSSL","value","RM: Customer Service \u0026 Support Leaders (GCSSL)"],["map","key","SASCSS","value","RM: Strategic Advisory Services: Customer Service \u0026 Support (SASCSS)"],["map","key","EITL","value","RM: Enterprise IT Leaders (EITL)"],["map","key","EITLTP","value","RM: Enterprise IT Leadership Team Plus (EITLTP)"],["map","key","EXPTP","value","RM: ExP Executive Programs Leadership Team Plus (EXPTP)"],["map","key","GTP","value","RM: Gartner for Technical Professionals (GTP)"],["map","key","ITLTP","value","RM: IT Leaders\/IAS Executive Programs Leadership Team Plus (ITLTP)"],["map","key","EXP","value","RM: Executive Programs (EXP)"],["map","key","ITL","value","RM: IT Leaders (ITL)"],["map","key","ITLMSE","value","RM: IT Leaders: Small and Medium Business (ITLMSE)"],["map","key","COLEX","value","RM: Procurement and Operations Leadership Council for MSE Classic (COLEX)"],["map","key","CPSC","value","RM: Procurement Leadership Council Classic (CPSC)"],["map","key","CREEB","value","RM: Real Estate Leadership Council Classic (CREEB)"],["map","key","CSSR","value","RM: Shared Services Leadership Council Classic (CSSR)"],["map","key","FINL","value","RM: Finance Leaders (FINL)"],["map","key","FINLMSE","value","RM: Finance Leaders Midsize Enterprise (FINLMSE)"],["map","key","CCBLC","value","RM: Commercial Banking (CCBLC)"],["map","key","CCBLCCS","value","RM: Small Business Banking (CCBLCCS)"],["map","key","CCBLCCT","value","RM: Treasury Management (CCBLCCT)"],["map","key","CFSOPS","value","RM: FS Operations Leadership Council (CFSOPS)"],["map","key","CIMC","value","RM: Investment Management (CIMC)"],["map","key","CRBLC","value","RM: Retail Banking (CRBLC)"],["map","key","CWMLC","value","RM: Wealth Management (CWMLC)"],["map","key","SASFINSV","value","RM: Strategic Advisory Services: Financial Services (SASFINSV)"],["map","key","HTAR","value","RM: Analyst Relations (HTAR)"],["map","key","HTCN","value","RM: Custom Newsletters Annual Program (HTCN)"],["map","key","HTDM","value","RM: Enterprise IT User Demand Research Japan (HTDM)"],["map","key","HTGBLB","value","RM: Business Associates (HTGBLB)"],["map","key","HTGBLPT","value","RM: Product Team (HTGBLPT)"],["map","key","HTGBLTM","value","RM: Tech Marketing Team (HTGBLTM)"],["map","key","HTGM","value","RM: General Managers (HTGM)"],["map","key","HTGML","value","RM: Marketing Leaders Addon (HTGML)"],["map","key","HTGSCEO","value","RM: Tech CEOs (HTGSCEO)"],["map","key","HTITERS","value","RM: IT Executives (HTITERS)"],["map","key","HTMCI","value","RM: Market \u0026 Competitive Intelligence (HTMCI)"],["map","key","HTMMC","value","RM: Custom Multimedia (HTMMC)"],["map","key","HTPMM","value","RM: Product Management \u0026 Marketing (HTPMM)"],["map","key","HTPS","value","RM: Gartner for Professional Services (HTPS)"],["map","key","HTPSIT","value","RM: Gartner for Business Leaders Professional Services (HTPSIT)"],["map","key","HTSAS","value","RM: Strategic Advisory Services: High-Tech \u0026 Telecom (HTSAS)"],["map","key","HTSASS","value","RM: Strategic Advisory Services: High-Tech \u0026 Telecom (HTSASS)"],["map","key","HTSR","value","RM: Reprints (HTSR)"],["map","key","HTTTS","value","RM: Talking Technology (HTTTS)"],["map","key","HTVILA","value","RM: Vertical Industry Leaders (HTVILA)"],["map","key","PFSTJ","value","RM: IT Services Japan (PFSTJ)"],["map","key","CAHREB","value","RM: Asia HR Leadership Council Classic (CAHREB)"],["map","key","CCLC","value","RM: Corporate Leadership Council Classic (CCLC)"],["map","key","CCLCASIA","value","RM: Corporate Leadership Council - Asia Classic (CCLCASIA)"],["map","key","CGMC","value","RM: General Manager Circle Classic (CGMC)"],["map","key","CH360","value","RM: Manager Success Workshop Series Classic (CH360)"],["map","key","CHRFORUM","value","RM: International Forum Classic (CHRFORUM)"],["map","key","CLDR","value","RM: Learning \u0026 Development Leadership Council Classic (CLDR)"],["map","key","CRR","value","RM: Recruiting Leadership Council Classic (CRR)"],["map","key","CTN","value","RM: TalentNeuron Classic (CTN)"],["map","key","CTNR","value","RM: TalentNeuron Recruit Classic (CTNR)"],["map","key","GCHRO","value","RM: Chief Human Resource Officers (GCHRO)"],["map","key","HRL","value","RM: HR Leaders (HRL)"],["map","key","HRLMSE","value","RM: HR Leaders Midsize Enterprise (HRLMSE)"],["map","key","SASHR","value","RM: Strategic Advisory Services: Human Resources (SASHR)"],["map","key","INVEST","value","RM: Invest Team (INVEST)"],["map","key","CADR","value","RM: Audit Leadership Council Classic (CADR)"],["map","key","CARC","value","RM: Audit Reference Center for Midsized Companies Classic (CARC)"],["map","key","CCDES","value","RM: RiskClarity Classic (CCDES)"],["map","key","CRISC","value","RM: Risk Management Leadership Council Classic (CRISC)"],["map","key","LCL","value","RM: Legal and Compliance Leaders (LCL)"],["map","key","LCLMSE","value","RM: Legal and Compliance Leaders Midsize Enterprise (LCLMSE)"],["map","key","CCSB","value","RM: Strategy Leadership Council Classic (CCSB)"],["map","key","CRTEC","value","RM: Research \u0026 Development Leadership Council Classic (CRTEC)"],["map","key","CSLSO","value","RM: Chief Sales Officers (CSLSO)"],["map","key","SASSALES","value","RM: Strategic Advisory Services: Sales (SASSALES)"],["map","key","SLSL","value","RM: Sales Leaders (SLSL)"],["map","key","SLSLMSE","value","RM: Sales Leaders Midsize Enterprise (SLSLMSE)"],["map","key","CQUAL","value","RM: Quality Leadership Council Classic (CQUAL)"],["map","key","CSCO","value","RM: Chief Supply Chain Officer (CSCO)"],["map","key","ESCL","value","RM: Enterprise Supply Chain Leaders (ESCL)"],["map","key","GCSC","value","RM: Global Chief Supply Chain Officer (GCSC)"],["map","key","SASQL","value","RM: Strategic Advisory Services: Supply Chain (SASQL)"],["map","key","SCL","value","RM: Supply Chain Leaders (SCL)"],["map","key","MTM","value","RM: Metric that Matter (MTM)"],["map","key","FRSDP","value","RM: Capabilities Builder (FRSDP)"],["map","key","SCDP","value","RM: Coaching Capabilities Builder (SCDP)"],["map","key","SEC-SC","value","RM: CEB Sales Challenger Development Program (SEC-SC)"],["map","key","SEC-SC-MM","value","RM: CEB Challenger Activation for Mid-Sized Companies (SEC-SC-MM)"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".text\").find(\"h4\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelector('[id^\\x3d\"vidyard_embed_code_\"]').id.split(\"_\").slice(-1)[0]})();"]
    },{
      "function":"__j",
      "vtp_name":"Vidyard"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",448],8,16],";return JSON.stringify(a,null,2)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",161],8,16],".split(\"_\");return a=a[5]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",290],
      "vtp_defaultValue":["macro",290],
      "vtp_map":["list",["map","key","GTR","value","Gartner Global \/ Unknown (GTR)"],["map","key","CCEC","value","RM: Communications Leadership Council (CCEC)"],["map","key","CCECIHT","value","RM: Internal Communications (CCECIHT)"],["map","key","GCSSL","value","RM: Customer Service \u0026 Support Leaders (GCSSL)"],["map","key","SASCSS","value","RM: Strategic Advisory Services: Customer Service \u0026 Support (SASCSS)"],["map","key","EITL","value","RM: Enterprise IT Leaders (EITL)"],["map","key","EITLTP","value","RM: Enterprise IT Leadership Team Plus (EITLTP)"],["map","key","EXPTP","value","RM: ExP Executive Programs Leadership Team Plus (EXPTP)"],["map","key","GTP","value","RM: Gartner for Technical Professionals (GTP)"],["map","key","ITLTP","value","RM: IT Leaders\/IAS Executive Programs Leadership Team Plus (ITLTP)"],["map","key","EXP","value","RM: Executive Programs (EXP)"],["map","key","ITL","value","RM: IT Leaders (ITL)"],["map","key","ITLMSE","value","RM: IT Leaders: Small and Medium Business (ITLMSE)"],["map","key","COLEX","value","RM: Procurement and Operations Leadership Council for MSE Classic (COLEX)"],["map","key","CPSC","value","RM: Procurement Leadership Council Classic (CPSC)"],["map","key","CREEB","value","RM: Real Estate Leadership Council Classic (CREEB)"],["map","key","CSSR","value","RM: Shared Services Leadership Council Classic (CSSR)"],["map","key","FINL","value","RM: Finance Leaders (FINL)"],["map","key","FINLMSE","value","RM: Finance Leaders Midsize Enterprise (FINLMSE)"],["map","key","CCBLC","value","RM: Commercial Banking (CCBLC)"],["map","key","CCBLCCS","value","RM: Small Business Banking (CCBLCCS)"],["map","key","CCBLCCT","value","RM: Treasury Management (CCBLCCT)"],["map","key","CFSOPS","value","RM: FS Operations Leadership Council (CFSOPS)"],["map","key","CIMC","value","RM: Investment Management (CIMC)"],["map","key","CRBLC","value","RM: Retail Banking (CRBLC)"],["map","key","CWMLC","value","RM: Wealth Management (CWMLC)"],["map","key","SASFINSV","value","RM: Strategic Advisory Services: Financial Services (SASFINSV)"],["map","key","HTAR","value","RM: Analyst Relations (HTAR)"],["map","key","HTCN","value","RM: Custom Newsletters Annual Program (HTCN)"],["map","key","HTDM","value","RM: Enterprise IT User Demand Research Japan (HTDM)"],["map","key","HTGBLB","value","RM: Business Associates (HTGBLB)"],["map","key","HTGBLPT","value","RM: Product Team (HTGBLPT)"],["map","key","HTGBLTM","value","RM: Tech Marketing Team (HTGBLTM)"],["map","key","HTGM","value","RM: General Managers (HTGM)"],["map","key","HTGML","value","RM: Marketing Leaders Addon (HTGML)"],["map","key","HTGSCEO","value","RM: Tech CEOs (HTGSCEO)"],["map","key","HTITERS","value","RM: IT Executives (HTITERS)"],["map","key","HTMCI","value","RM: Market \u0026 Competitive Intelligence (HTMCI)"],["map","key","HTMMC","value","RM: Custom Multimedia (HTMMC)"],["map","key","HTPMM","value","RM: Product Management \u0026 Marketing (HTPMM)"],["map","key","HTPS","value","RM: Gartner for Professional Services (HTPS)"],["map","key","HTPSIT","value","RM: Gartner for Business Leaders Professional Services (HTPSIT)"],["map","key","HTSAS","value","RM: Strategic Advisory Services: High-Tech \u0026 Telecom (HTSAS)"],["map","key","HTSASS","value","RM: Strategic Advisory Services: High-Tech \u0026 Telecom (HTSASS)"],["map","key","HTSR","value","RM: Reprints (HTSR)"],["map","key","HTTTS","value","RM: Talking Technology (HTTTS)"],["map","key","HTVILA","value","RM: Vertical Industry Leaders (HTVILA)"],["map","key","PFSTJ","value","RM: IT Services Japan (PFSTJ)"],["map","key","CAHREB","value","RM: Asia HR Leadership Council Classic (CAHREB)"],["map","key","CCLC","value","RM: Corporate Leadership Council Classic (CCLC)"],["map","key","CCLCASIA","value","RM: Corporate Leadership Council - Asia Classic (CCLCASIA)"],["map","key","CGMC","value","RM: General Manager Circle Classic (CGMC)"],["map","key","CH360","value","RM: Manager Success Workshop Series Classic (CH360)"],["map","key","CHRFORUM","value","RM: International Forum Classic (CHRFORUM)"],["map","key","CLDR","value","RM: Learning \u0026 Development Leadership Council Classic (CLDR)"],["map","key","CRR","value","RM: Recruiting Leadership Council Classic (CRR)"],["map","key","CTN","value","RM: TalentNeuron Classic (CTN)"],["map","key","CTNR","value","RM: TalentNeuron Recruit Classic (CTNR)"],["map","key","GCHRO","value","RM: Chief Human Resource Officers (GCHRO)"],["map","key","HRL","value","RM: HR Leaders (HRL)"],["map","key","HRLMSE","value","RM: HR Leaders Midsize Enterprise (HRLMSE)"],["map","key","SASHR","value","RM: Strategic Advisory Services: Human Resources (SASHR)"],["map","key","INVEST","value","RM: Invest Team (INVEST)"],["map","key","CADR","value","RM: Audit Leadership Council Classic (CADR)"],["map","key","CARC","value","RM: Audit Reference Center for Midsized Companies Classic (CARC)"],["map","key","CCDES","value","RM: RiskClarity Classic (CCDES)"],["map","key","CRISC","value","RM: Risk Management Leadership Council Classic (CRISC)"],["map","key","LCL","value","RM: Legal and Compliance Leaders (LCL)"],["map","key","LCLMSE","value","RM: Legal and Compliance Leaders Midsize Enterprise (LCLMSE)"],["map","key","CCSB","value","RM: Strategy Leadership Council Classic (CCSB)"],["map","key","CRTEC","value","RM: Research \u0026 Development Leadership Council Classic (CRTEC)"],["map","key","CSLSO","value","RM: Chief Sales Officers (CSLSO)"],["map","key","SASSALES","value","RM: Strategic Advisory Services: Sales (SASSALES)"],["map","key","SLSL","value","RM: Sales Leaders (SLSL)"],["map","key","SLSLMSE","value","RM: Sales Leaders Midsize Enterprise (SLSLMSE)"],["map","key","CQUAL","value","RM: Quality Leadership Council Classic (CQUAL)"],["map","key","CSCO","value","RM: Chief Supply Chain Officer (CSCO)"],["map","key","ESCL","value","RM: Enterprise Supply Chain Leaders (ESCL)"],["map","key","GCSC","value","RM: Global Chief Supply Chain Officer (GCSC)"],["map","key","SASQL","value","RM: Strategic Advisory Services: Supply Chain (SASQL)"],["map","key","SCL","value","RM: Supply Chain Leaders (SCL)"],["map","key","MTM","value","RM: Metric that Matter (MTM)"],["map","key","FRSDP","value","RM: Capabilities Builder (FRSDP)"],["map","key","SCDP","value","RM: Coaching Capabilities Builder (SCDP)"],["map","key","SEC-SC","value","RM: CEB Sales Challenger Development Program (SEC-SC)"],["map","key","SEC-SC-MM","value","RM: CEB Challenger Activation for Mid-Sized Companies (SEC-SC-MM)"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",450],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",450],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","BU(\\d+)?","value","Bambu"],["map","key","BN(\\d+)?","value","Banner"],["map","key","CIB(\\d+)?","value","Campaign-in-a-box"],["map","key","DM(\\d+)?","value","Direct Mail"],["map","key","EP(\\d+)?","value","EAGLE Page"],["map","key","48(\\d+)?","value","Email: 48 Hour Reminder"],["map","key","APPT(\\d+)?","value","Email: Appointment Setting"],["map","key","AQ(\\d+)?","value","Email: Audience Acquisition"],["map","key","AA(\\d+)?","value","Email: Automated Anniversary"],["map","key","BB(\\d+)?","value","Email: Batch \u0026 Blast \/ Strategic"],["map","key","BS(\\d+)?","value","Email: Batch Send \/ One-off"],["map","key","CU(\\d+)?","value","Email: Catchup Campaign"],["map","key","FUP(\\d+)?","value","Email: FollowUp"],["map","key","INV(\\d+)?","value","Email: Invite"],["map","key","JU(\\d+)?","value","Email: Justuno"],["map","key","NL(\\d+)?","value","Email: Newsletter"],["map","key","OND(\\d+)?","value","Email: On-Demand"],["map","key","PS(\\d+)?","value","Email: Paid Search"],["map","key","PE(\\d+)?","value","Email: Post Event"],["map","key","PRE(\\d+)?","value","Email: Pre Event"],["map","key","QC(\\d+)?","value","Email: Quick Collect"],["map","key","RE(\\d+)?","value","Email: Re-engagement"],["map","key","SO(\\d+)?","value","Email: Sponsor Ops"],["map","key","SV(\\d+)?","value","Email: Survey"],["map","key","TY(\\d+)?","value","Email: Thank You"],["map","key","BTR(\\d+)?","value","Email: Trigger"],["map","key","WTR(\\d+)?","value","Email: Web Trigger"],["map","key","GB(\\d+)?","value","Global-Blitz Day"],["map","key","WB(\\d+)?","value","In-Webinar"],["map","key","LP(\\d+)?","value","Landing Page"],["map","key","LG(\\d+)?","value","Lead Gen"],["map","key","LEA(\\d+)?","value","Lead Upload: Event Attendee"],["map","key","LEN(\\d+)?","value","Lead Upload: Event No Show"],["map","key","LER(\\d+)?","value","Lead Upload: Event Registrant"],["map","key","MP(\\d+)?","value","Media Partner"],["map","key","MTK(\\d+)?","value","Media Partner Toolkit"],["map","key","MIB(\\d+)?","value","Meeting-in-a-box"],["map","key","TI(\\d+)?","value","True Influence Campaign"],["map","key","PR(\\d+)?","value","Press Release"],["map","key","RT(\\d+)?","value","Retargetting"],["map","key","SEM(\\d+)?","value","Search Engine Marketing"],["map","key","SWG(\\d+)?","value","Smarter with Gartner"],["map","key","SNAP(\\d+)?","value","SnapApp"],["map","key","SC(\\d+)?","value","Social Center"],["map","key","STK(\\d+)?","value","Sponsor Toolkit"],["map","key","SF(\\d+)?","value","Spredfast"],["map","key","UNK(\\d+)?","value","Unknown \/ Generic"],["map","key","P(\\d+)?","value","Print"],["map","key","SMS(\\d+)?","value","Short Message Service \/ TXT"],["map","key","SOC(\\d+)?","value","Social Media"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"result-heading\"==",["escape",["macro",187],8,16],".className)return ",["escape",["macro",187],8,16],".parentElement.parentElement.parentElement.childNodes[1].innerText;if(\"Read More\"==",["escape",["macro",187],8,16],".innerText)return ",["escape",["macro",187],8,16],".parentElement.parentElement.childNodes[1].innerText;if(\"smart-image img-responsive\"==",["escape",["macro",187],8,16],".lastElementChild.className)return ",["escape",["macro",187],8,16],".parentElement.parentElement.childNodes[1].innerText})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"research.resId"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","\/en\/conferences\/apac\/applications-australia","value","APIN24A"],["map","key","\/en\/conferences\/na\/applications-us","value","APN32"],["map","key","\/en\/conferences\/apac\/applications-india","value","APPSI18"],["map","key","\/en\/conferences\/emea\/applications-uk","value","APPS21I"],["map","key","\/en\/conferences\/la\/data-analytics-brazil","value","BBIL6"],["map","key","\/pt-br\/conferences\/la\/data-analytics-brazil","value","BBIL6"],["map","key","\/en\/conferences\/la\/data-center-brazil","value","BDCL8"],["map","key","\/pt-br\/conferences\/la\/data-center-brazil","value","BDCL8"],["map","key","\/en\/conferences\/apac\/data-analytics-australia","value","BI12A"],["map","key","\/en\/conferences\/na\/data-analytics-us","value","BI16"],["map","key","\/en\/conferences\/emea\/data-analytics-germany","value","BIADE5"],["map","key","\/en\/conferences\/emea\/data-analytics-uk","value","BIE19I"],["map","key","\/en\/conferences\/apac\/data-analytics-india","value","BII6"],["map","key","\/en\/conferences\/la\/security-risk-management-brazil","value","BSRML4"],["map","key","\/pt-br\/conferences\/la\/security-risk-management-brazil","value","BSRML4"],["map","key","\/en\/conferences\/la\/symposium-brazil","value","BSYML7"],["map","key","\/pt-br\/conferences\/la\/symposium-brazil","value","BSYML7"],["map","key","\/en\/conferences\/emea\/catalyst-uk","value","CATUK6"],["map","key","\/en\/conferences\/na\/catalyst-us","value","CATUS9"],["map","key","\/en\/conferences\/emea\/cio-netherlands","value","CIO2E18"],["map","key","\/en\/conferences\/na\/cio-canada","value","CIOC3"],["map","key","\/en\/conferences\/na\/symposium-canada","value","CIOC4"],["map","key","\/en\/conferences\/emea\/cio-germany","value","CIODE6"],["map","key","\/de\/conferences\/emea\/cio-germany","value","CIODE6"],["map","key","\/en\/conferences\/emea\/cio-uk","value","CIOE10"],["map","key","\/en\/conferences\/na\/cio-us-west","value","CIOS12"],["map","key","\/en\/conferences\/emea\/cio-south-africa","value","CIOSA2"],["map","key","\/en\/conferences\/na\/cio-us-east","value","CIOSE2"],["map","key","\/en\/conferences\/emea\/customer-experience-uk","value","CRM19I"],["map","key","\/en\/conferences\/apac\/data-center-australia","value","DC13A"],["map","key","\/en\/conferences\/apac\/data-center-india","value","DCI7"],["map","key","\/en\/conferences\/na\/enterprise-architecture-us","value","EA20"],["map","key","\/en\/conferences\/emea\/enterprise-architecuture-uk","value","EPAEU18"],["map","key","\/en\/conferences\/emea\/symposium-spain","value","ESC30"],["map","key","\/en\/conferences\/na\/digital-marketing-us","value","GML4"],["map","key","\/en\/conferences\/na\/tech-growth-us","value","HTTP3"],["map","key","\/en\/conferences\/na\/identity-access-management-us","value","IAM13"],["map","key","\/en\/conferences\/emea\/identity-access-management-uk","value","IAME12"],["map","key","\/en\/conferences\/apac\/symposium-india","value","INDIA13"],["map","key","\/en\/conferences\/emea\/infrastructure-operations-management-germany","value","IOME7"],["map","key","\/en\/conferences\/na\/data-center-us","value","LSC37"],["map","key","\/en\/conferences\/emea\/data-center-uk","value","LSCE14"],["map","key","\/en\/conferences\/la\/data-center-mexico","value","MIODC3"],["map","key","\/es\/conferences\/la\/data-center-mexico","value","MIODC3"],["map","key","\/en\/conferences\/emea\/digital-workplace-uk","value","PCCE13"],["map","key","\/en\/conferences\/na\/program-portfolio-management-us","value","PPMIT10"],["map","key","\/en\/conferences\/emea\/rogram-portfolio-management-uk","value","PPMITE9"],["map","key","\/en\/conferences\/apac\/symposium-australia","value","PS26"],["map","key","\/en\/conferences\/emea\/symposium-south-aftrica","value","SAF18"],["map","key","\/en\/conferences\/na\/supply-chain-us","value","SCC9"],["map","key","\/en\/conferences\/emea\/supply-chain-uk","value","SCCE9"],["map","key","\/en\/conferences\/apac\/security-risk-management-australia","value","SEC12A"],["map","key","\/en\/conferences\/emea\/security-risk-management-uk","value","SEC19I"],["map","key","\/en\/conferences\/na\/security-risk-management-us","value","SEC24"],["map","key","\/en\/conferences\/apac\/security-risk-management-india","value","SECI4"],["map","key","\/en\/conferences\/emea\/security-risk-management-uae","value","SECME5"],["map","key","\/en\/conferences\/na\/infrastructure-operations-management-us","value","STR34"],["map","key","\/en\/conferences\/na\/symposium-us","value","SYM28"],["map","key","\/en\/conferences\/emea\/symposium-uae","value","SYMME6"],["map","key","\/en\/conferences\/apac\/customer-experience-australia","value","CET18A"],["map","key","\/en\/conferences\/la\/data-analytics-mexico","value","MDA18"],["map","key","\/es\/conferences\/la\/data-analytics-mexico","value","MDA18"],["map","key","\/en\/conferences\/apac\/human-resource-australia","value","CHRAU18"],["map","key","\/en\/conferences\/na\/us\/human-resource-us","value","CHRUS18"],["map","key","\/en\/conferences\/emea\/human-resource-uk","value","CHRUK18"],["map","key","\/en\/conferences\/na\/sales-us","value","CSMUS18"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us","value","ITSV18"],["map","key","\/en\/conferences\/emea\/it-sourcing-procurement-asset-management-uk","value","ITSVE18"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataContext.navCallout"
    },{
      "function":"__c",
      "vtp_value":"089"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],").parent().next(\"p\").text();a=a.split(\"|\").filter(function(a){return-1\u003Ca.indexOf(\"EDT\")}).pop().match(\/\\d+:\\d+\/).shift();return(0+a).substr(-5)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".modal-wrap__header\").find(\".modal-wrap__heading\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",187],8,16],".querySelector(\".card__desc\").textContent})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",208],8,16],";if(-1\u003Ca.indexOf(\"sign-in-button\"))return\"Attendee - Sign in and Register\";if(-1\u003Ca.indexOf(\"sign-up-button\"))return\"Attendee - Create account and Register\";if(-1\u003Ca.indexOf(\"register-button\"))return\"Attendee - Authenticated Register\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.gartnerId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",104],
      "vtp_map":["list",["map","key","CIOS13","value","ZqdtRWt0A867Buvwtg0f"],["map","key","BI17","value","FCK5Dt6rAUmGaN3xhq6y"],["map","key","CIOSE3","value","7GDQOjrVs1Kkq3XZCY2S"],["map","key","GML5","value","w3HVRVH9mBgw9ld5Av5W"],["map","key","SCC10","value","9WFtdifLdKh2jOhVFy4F"],["map","key","EA21","value","Vrxs3TJEL4ZNGKsNJXYo"],["map","key","PCC19","value","dqFmEulF1A6gQ2kr6hWN"],["map","key","CIOC4","value","DTIiq7nru3LjiWI8WH4H"],["map","key","HTTP4","value","ImfbnW0O7BsnUvDUcwhq"],["map","key","PPMIT11","value","G1TMVPcbFUPQsAOAsoV5"],["map","key","SEC25","value","cDHjyw4KeTCoSliwRQq1"],["map","key","CATUS10","value","0sVpiG8uJxnAa8vL8LZg"],["map","key","ITSV19","value","ZZ8p2WHqOS63uZ2P8AmR"],["map","key","SYM29","value","3JjXH04EAIyvhuQM6Qy0"],["map","key","SCCP19","value","hJVW6mr1N0ioxGaMyfdK"],["map","key","APN33","value","HFWhjFjVW0RE3MltyVPL"],["map","key","LSC38","value","3dDUbsWqpcnQNdEIm9LR"],["map","key","IAM14","value","MdI0v5jeA0HABUmWmYI0"],["map","key","BDCL9","value","dNtLXEoNTBeqAWxFXmTx"],["map","key","BBIL7","value","70gfPwVe335C61iwVdxg"],["map","key","MIODC4","value","VSZ4ZbdULMo4hqVv755X"],["map","key","BSRML5","value","gGLv9pwACLIYiZJ6GHcT"],["map","key","MDA19","value","97Qjgo1YfyjuGk5uRT72"],["map","key","BSYML8","value","hTMQ52vaRJJeXX8sLC6s"],["map","key","BIE20I","value","OBx8vj656Atsg41tZ6dD"],["map","key","CIOE11","value","jc13jV3bDGjwSV951oBb"],["map","key","SYMME7","value","tDRrUpnOJSJI0TQfKsi9"],["map","key","IAME13","value","04S92gxwrAQWH4DEj669"],["map","key","CIO2E19","value","MKqrmSt6uPKVUxKtVjOe"],["map","key","APPS22I","value","m0VXRbwkDwy6Op8uIqOT"],["map","key","CIODE7","value","26VG3EFKqHxqTkVABTfb"],["map","key","CRM20I","value","2CBNIRE6ZZAcktAKd2EI"],["map","key","EPAEU19","value","m0VXRbwkDwy6Op8uIqOT"],["map","key","IOME8","value","q3Zdo9adXMcXabO549Of"],["map","key","PPME10","value","x1iKVRkfia003mPQvNRZ"],["map","key","SCCE10","value","ajtBSasZ6gSCrdm2a2eV"],["map","key","SEC20I","value","rH4ECPPnuyRKQOa6Lau7"],["map","key","PCCE14","value","TU5lptx9fB6a4EFr6eHS"],["map","key","CATUK7","value","6p7rChxBchbfAttqL6GI"],["map","key","ITSVE19","value","XSWOVEulCqNBw8b5GIhj"],["map","key","ESC31","value","KynAa4TCoTprrg59NbgF"],["map","key","BIADE6","value","qZMGLwd09atL20vfjjXK"],["map","key","LSCE15","value","vAGrVuopjHGYqeuXtw4O"],["map","key","SECME6","value","EoMP0efvXrlLUKIsiLSE"],["map","key","BI13A","value","HN57E9iVBbcNxHcRDx4L"],["map","key","DC14A","value","JO6V81gbt3RU0TRooe1x"],["map","key","CET19A","value","kOhXOSBnQeEBK8T6vUak"],["map","key","APIN25A","value","Z3jjIl3ihTOb2GUPPns1"],["map","key","SEC13A","value","ajxWf338OiOf6nYBX2TJ"],["map","key","PS27","value","Uak0ptw6VJvnlVIrux7C"],["map","key","APPSi19","value","XKxAQYRgqJDHk2ffuRXF"],["map","key","DCi8","value","s2P52xj2jorsoW94pOS8"],["map","key","BII7","value","X8uK0sZxTV7wXkLUMR9C"],["map","key","SECi5","value","6gUDmJGSSuCTd24bsUlW"],["map","key","INDIA14","value","KhD5YY9wRNbmVlU6tK4q"],["map","key","SAF19","value","Hw5R8YCNV94vZx1dTF2F"],["map","key","JCR19","value","0KqEkLRF8lTUd25sqaeZ"],["map","key","JAI19","value","3338OjawlVbpEmEuoPtc"],["map","key","JDC19","value","ARdcGUPNgUDoQb6L8JsT"],["map","key","JBI19","value","73sQVX5eMkmiJSIA853x"],["map","key","JSI19","value","gPvOEwInCnQfGLvZOPtH"],["map","key","JSS19","value","TedLjlc24jKRfyhljUJD"],["map","key","JXP19","value","TedLjlc24jKRfyhljUJD"],["map","key","CHR19A","value","aint618VCguTYyEQNdEJ"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",104],
      "vtp_map":["list",["map","key","CIOS13","value","aoFvlCJ1ysFpOYTjQsEl"],["map","key","BI17","value","KEJrQYOR3n7tK5tw15cD"],["map","key","CIOSE3","value","kMdjmiOgSOi1js4myPha"],["map","key","GML5","value","MAx7rASRr7iaXf31xnDp"],["map","key","SCC10","value","7HKoEsbaFULtRZQZVpjI"],["map","key","EA21","value","yvBLf9PlhIO9HEPGDQM0"],["map","key","PCC19","value","AcflEwwsbBBWsuw0d6IP"],["map","key","CIOC4","value","uj9F8oMLhsa01SHBBRWq"],["map","key","HTTP4","value","IwlLNrDc9dVlXFnHb0ys"],["map","key","PPMIT11","value","Hl6xHcUMVKEJuBLlSwM4"],["map","key","SEC25","value","Wf47GCK6FEWiD6ccLmyS"],["map","key","CATUS10","value","XjIJeZaBFixXkJKluCTi"],["map","key","ITSV19","value","oNE76Rosw9gIUQiUX7oy"],["map","key","SYM29","value","rxts4kld4pf44XEkP018"],["map","key","SCCP19","value","yu9kasXyJlyVBHtPE7oO"],["map","key","APN33","value","sNRYNIUUyQCyvySNmHmd"],["map","key","LSC38","value","1imnd1xnErUZMB3RcktB"],["map","key","IAM14","value","GcSJFTWIrUnbqKA3ULOy"],["map","key","BDCL9","value","fi7SVkRtAZNTBfsMA0FW"],["map","key","BBIL7","value","lPhTAiU2uxL2xk6ygfNr"],["map","key","MIODC4","value","yRHEPHHaHBFhtGk4rFmA"],["map","key","BSRML5","value","v4RMUJBKGRMdkot2NwYt"],["map","key","MDA19","value","kuCVlU5nyPiAoYMKbCCW"],["map","key","BSYML8","value","b9XxCMf8MpUs4eo77gNa"],["map","key","BIE20I","value","KDVgam9QiS73tUfZ2P9F"],["map","key","CIOE11","value","8TkVUru1EKypKw6lokRs"],["map","key","SYMME7","value","9ld7LsfsLe4bVW8wST2a"],["map","key","IAME13","value","mwFwKuZ4jPcpgWRavhwX"],["map","key","CIO2E19","value","kr6hVG3EDViHH22FKxj1"],["map","key","APPS22I","value","4uWmXBM6D7a4EDVf9Pmm"],["map","key","CIODE7","value","47IKn9657FD25gVG5LdK"],["map","key","CRM20I","value","7M8fms7fKbEK2128RxUQ"],["map","key","EPAEU19","value","yTU1siMYFfjfGKqI28VZ"],["map","key","IOME8","value","XAWvr4lF2EGfeOwUboDi"],["map","key","PPME10","value","TRlbysGtblbXaemICDZ1"],["map","key","SCCE10","value","asY6fQ1gdDAMC7gNnvCP"],["map","key","SEC20I","value","C4VPdeRHsZ1pqmQjZ9q2"],["map","key","PCCE14","value","SYEnKIZpMocWX4qAY46P"],["map","key","CATUK7","value","tSCQT88PNgUClE0miuJw"],["map","key","ITSVE19","value","NtK6FEUbsSbwgrBWu5XV"],["map","key","ESC31","value","AesNFF5emwL0qOQwRPlg"],["map","key","BIADE6","value","osv1CDYx7p36VFvnJBFn"],["map","key","LSCE15","value","LvDTHhlhKlICDY1O3yjx"],["map","key","SECME6","value","Jsuvwy1cysZ8nokPgR4u"],["map","key","BI13A","value","hvRRsOUFxy2piBtrdpUn"],["map","key","DC14A","value","UH8eidncZg1nNR62rOMd"],["map","key","CET19A","value","GeagGHaMvYwniIO431wh"],["map","key","APIN25A","value","a3A1LrGsHjwSRr8ot5ZY"],["map","key","SEC13A","value","u8gMgZZAEM2ymW4cGTV8"],["map","key","PS27","value","dvH5LeRQeB6ct2JdRdqG"],["map","key","APPSi19","value","aTU22GRKRVe37HIgeJut"],["map","key","DCi8","value","EXqf45mW8QhTHqsrewJn"],["map","key","BII7","value","jnpjHH8cjMnNUF2A4jPM"],["map","key","SECi5","value","Yf0nPOkJMsK9UBkDwy5M"],["map","key","INDIA14","value","hkdgArijE5R9BpRS0vwy"],["map","key","SAF19","value","JcNvXnMtutlF6VG2B8kc"],["map","key","JCR19","value","2GSRosyAEoOWLFNRswM8"],["map","key","JAI19","value","5lqwxJqI5JVW91cP8Cx6"],["map","key","JDC19","value","NQ1hiZWxCMroXIbxmX90"],["map","key","JBI19","value","rbdSDunOZM6Bx9gITNj9"],["map","key","JSI19","value","mXCRLVQb3nbTLRRklJFR"],["map","key","JSS19","value","mXCRLVQb3nbTLRRklJFR"],["map","key","JXP19","value","6gWQi0cPMWTniHFWiE9j"],["map","key","CHR19A","value","muTRWEpQvgsDc8ufqBfu"],["map","key","","value",""]]
    },{
      "function":"__v",
      "convert_case_to":2,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.theme"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en","value","W2WK4iE9gMfR8cpBKyoE"],["map","key","\/en\/become-a-client","value","kme9RuFedKeSESVZAQY4"],["map","key","\/marketing\/","value","fD3fUH8aW2P40maaIemI"],["map","key","\/marketing\/research-areas","value","oVs2NvXpdvKqGuhwZw6W"],["map","key","\/smarterwithgartner\/","value","Vnbm72qFpRd9XGufqAUk"],["map","key","\/events\/","value","x7BRY1P9IGZtqaERT5rA"],["map","key","\/en\/information-technology\/cio-it-executives","value","HBANJmOoOWMNmtvIl6yb"],["map","key","\/en\/information-technology\/cio-it-executives\/cio-conferences","value","pOWKB9s5sHsX1RBmPa5G"],["map","key","\/en\/human-resources\/chro-hr-executives","value","GRIJeYMZPPr3mwJsTe9S"],["map","key","\/en\/innovation-strategy\/innovation-strategy-leaders","value","LtQT6w3P4xcYf0jwPGDL"],["map","key","\/en\/legal-compliance\/legal-compliance-leaders","value","eDAdmyUV81eXZBWt0CEa"],["map","key","\/en\/supply-chain\/supply-chain-leaders","value","sY3XHrUjS0slGs1MqBHk"],["map","key","\/en\/sales-service\/sales-leaders","value","CNDwHffR6446Epu6rIsT"],["map","key","\/en\/about","value","ViE9kXyERT2bHvyc6GIj"],["map","key","\/analysts\/coverage","value","uNC4XVvADeicgms3WW5g"],["map","key","\/en\/research\/magic-quadrant","value","49RwM8LZerHwoJxCMnWm"],["map","key","\/en\/consulting","value","ydXK5tw3FOexiuJyrUnb"],["map","key","\/en\/human-resources\/chro-hr-executives","value","QT840k2g2sv1B6uOIN3x"],["map","key","\/en\/human-resources\/human-resources-leaders","value","DlBiO1gnyN6bnG5Q0aIb"],["map","key","\/en\/human-resources\/hr-business-partners","value","wM7GERQpxEVe36DqwyO9"],["map","key","\/en\/human-resources\/diversity-inclusion","value","rHfC5fuPM8cl9q3ZfvWk"],["map","key","\/en\/human-resources\/learning-development","value","yrUnd0rRj4uWkOeHTPhS"],["map","key","\/en\/human-resources\/total-rewards","value","lwL35mXThKYdoF05LbDI"],["map","key","\/en\/human-resources\/head-of-recruitment","value","SlM3237KY3m12GQIKjno"],["map","key","\/en\/human-resources\/trends\/2019-hr-priorities","value","LDCRWDgvVfRr6ideRHqP"],["map","key","\/en\/information-technology\/technical-professionals","value","IZmQhS5uTamdqEj77Apa"],["map","key","\/en\/doc\/3891569-top-10-strategic-technology-trends-for-2019","value","EPF0UTuDfp91cQXMKvRh"],["map","key","\/en\/conferences\/na\/cfo-finance-us","value","jZFlIDFd2EJtWqmU3fUJ"],["map","key","\/en\/conferences\/na\/cfo-finance-us\/agenda","value","4MjfIUV4hi2m2dRNeo92"],["map","key","\/en\/conferences\/na\/cfo-finance-us\/why-attend","value","Rld7LscffuUamEx07S89"],["map","key","\/en\/webinars\/3890974\/the-cmo-spend-survey-2018-2019","value","F8qUokNvpUr0ERQq5eIv"],["map","key","\/en\/information-technology\/security-risk-management-leaders","value","MDDfmuDoQa16JYesLfaO"],["map","key","\/en\/webinars\/3892806\/articulate-the-business-value-of-cybersecurity","value","uALqiBriTyUU3dMo6q4s"],["map","key","\/en\/information-technology\/insights\/trends-predictions","value","JresMC7fLbBH03piAnW9"],["map","key","\/en\/newsroom\/press-releases\/2019-01-28-gartner-says-global-it-spending-to-reach--3-8-trillio","value","2flCpZCOSICCWrslIDHo"],["map","key","\/en\/executive-guidance\/digital-dexterity-at-work","value","EtftNGF0FTYFoLHUWEqZ"],["map","key","\/en\/information-technology\/role\/applications-leaders","value","I4ad7KXPIMxdtjNB0FTZ"],["map","key","\/en\/innovation-strategy\/role\/innovation-strategy-leaders","value","V6p5gVMMidqlOcw8xYnW"],["map","key","\/en\/supply-chain\/sourcing-procurement-leaders","value","dmNYX5eKfVOXTkVIxFYt"],["map","key","\/en\/supply-chain\/it-leaders","value","CyxF4ULKeTEx3DAI0yuf"],["map","key","\/en\/conferences\/emea\/it-sourcing-procurement-asset-management-uk\/why-attend\/gartner-insights\/reduce-it-costs","value","StuDYw9iT9W90bKlwJsT"],["map","key","\/en\/information-technology\/role\/technical-professionals","value","sJrQWI8XLDAX2TNXToiJ"],["map","key","\/en\/finance\/role\/procurement-leaders","value","Ztsh69N3B6fOrDk0DK10"],["map","key","\/en\/information-technology\/role\/sourcing-vendor-relationships-leaders","value","wPD5VLJwBK6IQaggTAal"],["map","key","\/en\/sales-service\/trends\/account-growth","value","RtAMD0YkE3KfXUr0GYoS"],["map","key","\/en\/confirmation\/sales-service\/trends\/account-growth","value","TjQtBRWt0CFfgZD3fWPc"],["map","key","\/en\/webinars\/13011\/account-planning-for-growth","value","y2oV1Yg2uCPPp3mJHXf4"],["map","key","\/en\/information-technology\/role\/cio-it-executives","value","iQFs6dEFKqEj79HFURYN"],["map","key","\/en\/sales-service\/trends\/top-tips-account-growth","value","2u2aAFtcbJg19963wedJ"],["map","key","\/en\/confirmation\/sales-service\/trends\/top-tips-account-growth","value","x8tNRuCWnVjMvnKGRLUL"],["map","key","\/en\/doc\/ug\/3751363-sm-a-framework-for-applying-ai-in-the-enterprise","value","4tQS2dRdpOUCi8ig8Equ"],["map","key","\/en\/doc\/ug\/sm-the-the-cios-executive-communication-guide","value","DbpRSwPCypocsRZRgq5u"],["map","key","\/en\/doc\/ug\/3899266-sm-2019-cloud-computing-primer","value","uvvtgwYux7XP4mvEYxs5"],["map","key","\/en\/doc\/ug\/375892-sm-crm-strategy-and-customer-experience-primer-for-2019","value","XcpBWcoShMcBDh0enMSY"],["map","key","\/en\/doc\/ug\/sm-design-a-data-and-analytics-strategy-ebook","value","WCsg2sROU5nxLyj05XVw"],["map","key","\/en\/doc\/ug\/3891569-sm-top-10-strategic-technology-trends-for-2019","value","ip3vsbdUKJ6llhq8uHoF"],["map","key","\/en\/doc\/ug\/3889272-sm-leadership-vision-for-2019-infrastructure-and-operations-leader","value","IIeXK124A0FUTbrQXMKy"],["map","key","\/en\/doc\/ug\/3738060-sm-iot-technology-disruptions-a-gartner-trend-insight-report","value","MvViGABY2TIBEoMQ1ije"],["map","key","\/en\/doc\/ug\/3731617-sm-leadership-in-the-digital-age-a-gartner-trend-insight-report","value","KI5VKFL0sUmdnQdty46T"],["map","key","\/en\/doc\/ug\/sm-rethink-security-risk-strategy-ebook","value","yWcoMP0dWVyPVf9OhWMK"],["map","key","\/en\/sales\/insights\/trending-topics\/account-management-and-growth","value","6WOVFxy3yETOLaxDSZOK"],["map","key","\/en\/conferences\/na\/sales-us","value","80aGZux3IYg44XDhwYqh"],["map","key","\/en\/sales\/role\/sales-leaders","value","XI7PrDjF8ayxqRejKUNU"],["map","key","\/en\/sales-service\/insights\/challenger-sale","value","TZLrmSr2VQdjMrRQot5Y"],["map","key","\/en\/sales-service\/insights\/sales-managers","value","XAUlXGtcbHutmMSQPkc4"],["map","key","\/en\/sales\/insights\/win-more-b2b-sales-deals","value","flqu2LmwHhlkXJd4amCo"],["map","key","\/en\/conferences\/emea\/symposium-south-africa","value","XQgo6looaip0Pbiov94u"],["map","key","\/en\/conferences\/apac\/security-risk-management-india","value","6gUDmJGSSuCTd24bsUlW"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",104],
      "vtp_map":["list",["map","key","CIOS13","value","oLJ9fFEVgZMDyRKP8Bqb"],["map","key","BI17","value","bjtDOVG07S9NcdRcjp0L"],["map","key","CIOSE3","value","qoagfOvRRtH16JVZCE9m"],["map","key","GML5","value","mZLbsVqpbjr9xRNa8Y5c"],["map","key","SCC10","value","obm868C1DJvcqSXEmDpV"],["map","key","EA21","value","eftQPq5fOwVf9LZdlySM"],["map","key","PCC19","value","nqsqdrHyudieDEkG8oJy"],["map","key","CIOC4","value","yM2uBMDxN8JRev7gQ0aI"],["map","key","HTTP4","value","x07S5uRXHxtaYjCx8iyt"],["map","key","PPMIT11","value","F09pKC83qFpQpP5rCJsS"],["map","key","SEC25","value","3hvkOlCnQb7QwRPlfB2P"],["map","key","CATUS10","value","OeFL0rQXyHaKm3gZRMh5"],["map","key","ITSV19","value","XhZJ4u1GTV82jovpwwIk"],["map","key","SYM29","value","xmNUH7UCi69KQU0WTVmP"],["map","key","SCCP19","value","drJ8VZLyFUJ1O58IJjpy"],["map","key","APN33","value","hZWyG9QgNloobm868C0A"],["map","key","LSC38","value","f0kxWe0nAZtoUwGcWZDL"],["map","key","IAM14","value","a9rSfAxt7hTUvAGrX2VT"],["map","key","BDCL9","value","1P8AoYASd6EAGnCkAh7i"],["map","key","BBIL7","value","QPgMfSaaIfsa3Ow1JbLo"],["map","key","MIODC4","value","sg3vHdi9Fmd5B0DK227L"],["map","key","BSRML5","value","2iNhTU5mt1wy7VGy04Cu"],["map","key","MDA19","value","bFPF4cI1CBQXKA3UNXRf"],["map","key","BSYML8","value","ZSbvefXTmk5tMB1LpPHG"],["map","key","BIE20I","value","xgjc8T9Rmfge1tX0Jjpy"],["map","key","CIOE11","value","UOLvrK1ysOlACBMDW3wv"],["map","key","SYMME7","value","D04akVOVIee5cuIjtANL"],["map","key","IAME13","value","l9bfbohBtqvBLpdtWpjG"],["map","key","CIO2E19","value","8531vegYW2WXATXBEM1q"],["map","key","APPS22I","value","wteo5lpstsjBFj2kuCVk"],["map","key","CIODE7","value","ZRZUiM5LdLihS60hihuP"],["map","key","CRM20I","value","gybRCvtkabO59LWV2Zh8"],["map","key","EPAEU19","value","q42CDgqLFIm865SvHk1a"],["map","key","IOME8","value","oACY0IbO3u7hTH0PXRat"],["map","key","PPME10","value","phbl4mwKtVocqKhE0VIv"],["map","key","SCCE10","value","QRlbuaXeyhp5fQ62uZ6b"],["map","key","SEC20I","value","prpaexy2mWoaip3upUr1"],["map","key","PCCE14","value","KKihUW4cCD5oPoKFN9N5"],["map","key","CATUK7","value","ujTuAIyugsEefXVwEVf8"],["map","key","ITSVE19","value","8ZWu8fJYeuXrnYBZ9tJ9"],["map","key","ESC31","value","Rb15GKpCb6lmapKBtAKj"],["map","key","BIADE6","value","MSQfEEZ0H07nuvFJnAfw"],["map","key","LSCE15","value","93pAdm1x5Q2m1vuqYAPD"],["map","key","SECME6","value","D2aCGitEaRJJg4EDXobk"],["map","key","BI13A","value","Wf45hkIJdTJDGgkjXH2g"],["map","key","DC14A","value","RjXJoe0rSc125GHf5OrD"],["map","key","CET19A","value","2rcilecZkCuqFhp6nwDR"],["map","key","APIN25A","value","qtyhKYcilgDpv8gK7ZZ2"],["map","key","SEC13A","value","qcl0Xg8ElbuNSwM6ArmO"],["map","key","PS27","value","MB4YL7KUQdA0H4fR9hMZ"],["map","key","APPSi19","value","mffSKKifLaA878FwEXqg"],["map","key","DCi8","value","5lnkQnqrkH909iR05WQr"],["map","key","BII7","value","M8IMxcUTt6rASe9T5sIx"],["map","key","SECi5","value","DIoDjJHtpNC4WQc6IRGo"],["map","key","INDIA14","value","1pDj87a5ITRnmM3ylBkC"],["map","key","SAF19","value","gUEtfuRVJCBPS3ijZXwD"],["map","key","JCR19","value","k1dSBnQdA0KkuBPQuHpI"],["map","key","JAI19","value","FYrmOy19Xu6nKEL1t83q"],["map","key","JDC19","value","fWNR78Brg3ymSkZSpJpi"],["map","key","JBI19","value","e5OsEdaA99Dw1u7dt1EN"],["map","key","JSI19","value","SxTWI9dcJdP7YtutmKI9"],["map","key","JSS19","value","ErSQou9iXNOp7rF0gFBY"],["map","key","JXP19","value","7WInBeqCPD3P1iot5h1m"],["map","key","CHR19A","value","t6a4FHghYX1QaggUCkcn"],["map","key","FES19","value","sceYROeIoW6mqwxKrMC2"],["map","key","SECI5","value","DIoDjJHtpNC4WQc6IRGo"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",104],
      "vtp_map":["list",["map","key","CIOS13","value","IXaemLNuNDs9r7jpNS9d"],["map","key","BI17","value","mSgo0RGutYnZHtNT13Ml"],["map","key","CIOSE3","value","l4o7tFivOC5ZQHIdWW3a"],["map","key","GML5","value","d7IO59OeIWETUfZ1NvYu"],["map","key","SCC10","value","KYMEAHwnDqM9RvKwefWO"],["map","key","EA21","value","4OrCJFRMjZDaTTxN9OeI"],["map","key","PCC19","value","sJtWsw7aXf2vOU3fWPSQ"],["map","key","CIOC4","value","Esa5UG6Q2jpwEqW0RDy9"],["map","key","HTTP4","value","ZXjHBCZ53FIjuHnBa6fp"],["map","key","PPMIT11","value","gvTehKmLP3qDhx1H3Lif"],["map","key","SEC25","value","MNo6oyN59MscfsYlMWUu"],["map","key","CATUS10","value","vpSljxVbl5sJ27L4IYhM"],["map","key","ITSV19","value","NFDUbpH3A3UKKfZUOIQB"],["map","key","SYM29","value","hUSme6D8eFGaPRpw1Yh8"],["map","key","SCCP19","value","UTeeOx5itcaDK24e7IMu"],["map","key","APN33","value","CSXv8caTQhS8KP7NxvmD"],["map","key","LSC38","value","tqbeoPoKFKylAg44T14a"],["map","key","IAM14","value","5eJw09lCsfxKsMD3dLjm"],["map","key","BDCL9","value","jewM0pFrBUhEyPjD1EKw"],["map","key","BBIL7","value","NfR51nG5OsDFFZy7r0kL"],["map","key","MIODC4","value","XW2ZfxdoUwGcWYDkZv1C"],["map","key","BSRML5","value","DAI27Olnf9Qq5b2WZBVq"],["map","key","MDA19","value","O0juEM449S0w3FM4WVt6"],["map","key","BSYML8","value","2lYHwmDqNf9OhUBfuUcu"],["map","key","BIE20I","value","qBEKpCemvCS8mmCNFBIy"],["map","key","CIOE11","value","eGL0oFsbaGXlNqW1UTvD"],["map","key","SYMME7","value","oLHVSRVnbTPcmXrnXMIW"],["map","key","IAME13","value","9OcA7kc6HLuWnUcxiy9k"],["map","key","CIO2E19","value","7QxWdweeNsEhtJxlSlar"],["map","key","APPS22I","value","Tqu1ENbTMVMOvRT3fbbH"],["map","key","CIODE7","value","KoV2raCIuOYFoJ2VRjXL"],["map","key","CRM20I","value","ui68E8drrg6U7x7a1bVN"],["map","key","EPAEU19","value","HhMagFDRSyWdtVlWAY8r"],["map","key","IOME8","value","tcbJgyy2mSme9RtBPS3n"],["map","key","PPME10","value","rckuFaQAoZEfjgMfTaCK"],["map","key","SCCE10","value","WwBHtJqKjPmlZONkiQsA"],["map","key","SEC20I","value","YMHSKNuQPns2Nws6eJsh"],["map","key","PCCE14","value","Dbsg2tVlXFnH6S76Nb9b"],["map","key","CATUK7","value","4Z2HtpZBXyFVcvaSJMqT"],["map","key","ITSVE19","value","lPfLbENTl74yk4o755Sx"],["map","key","ESC31","value","7Geau8gLcIvw08XLCLJ2"],["map","key","BIADE6","value","I18T89BqabP8E5WOUCkc"],["map","key","LSCE15","value","Dx6VH5Nms5pW2jAkGgJX"],["map","key","SECME6","value","iE6ZPC2LmyRHERRr6gSM"],["map","key","BI13A","value","e5e20vfn1ZkF6YWv0UXJ"],["map","key","DC14A","value","mvEZ1Lo94vYtw2BRc5D6"],["map","key","CET19A","value","XxBIwi1gdFKvOT0XcoOU"],["map","key","APIN25A","value","YI15FGaKpTkWDi3tRXJ9"],["map","key","SEC13A","value","L51d6HJkwL210vhwYpag"],["map","key","PS27","value","r1MvZ1JdSDtkBoV1Yg30"],["map","key","APPSi19","value","NwZv3KdQ9D02XTZLtxgJ"],["map","key","DCi8","value","go0USqyFZtrfwCNB2O2s"],["map","key","BII7","value","QE3KgoOWMLfTF2BuFbSL"],["map","key","SECi5","value","78E7nJCBQVBbbIbLqCOa"],["map","key","INDIA14","value","r7liQr8sI4EBK9VOYWyI"],["map","key","SAF19","value","usg0jvL4bVV3nd225DwI"],["map","key","JCR19","value","fgXQoJB9sJ4scgbgD7dB"],["map","key","JAI19","value","rWwADaW7b7PuIrPXLDAK"],["map","key","JDC19","value","EmEwulEwwtdkq2UMUJ3m"],["map","key","JBI19","value","AerGrUqpcqHxufn3a46S"],["map","key","JSI19","value","mNi4yitDAJ3k4pBgydmL"],["map","key","JSS19","value","962uYyGYqh9JNydZerHx"],["map","key","JXP19","value","UqrlMYIsVpkLWUs5lEx2"],["map","key","CHR19A","value","74xfeLjiTF5OsDL2wfkk"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",104],
      "vtp_map":["list",["map","key","CIOS13","value","pLEDVgjG35PwWgRq4qMU"],["map","key","BI17","value","WxHcSG9c6JXmd7HLv5uh"],["map","key","CIOSE3","value","B8mjPnppe1sVphbnIlUh"],["map","key","GML5","value","84vYtynd24cweeOyESYK"],["map","key","SCC10","value","aqQQE9iS71m5o6q2iiWH"],["map","key","EA21","value","wL2yrSek4rFk9dpBEDTa"],["map","key","PCC19","value","2TLOxADcx4Ka2Zg3yk4o"],["map","key","CIOC4","value","XCjQiWFui66ctWphdtVl"],["map","key","HTTP4","value","YcimkWBav0lY0Jg3CShI"],["map","key","PPMIT11","value","RZEgp8wQLXEc4Mlpu5WP"],["map","key","SEC25","value","qJeXEmBi8D1FNSd9c8Pr"],["map","key","CATUS10","value","egdhclWQi1inne38LqL6"],["map","key","ITSV19","value","2SDw0eYI6KlHA84wLvCO"],["map","key","SYM29","value","b8XJ9NQosw7fqIbxoKC9"],["map","key","SCCP19","value","5hZZ5qEpUr0H7b5HPCOI"],["map","key","APN33","value","eNqCi546pcqEmEwukZEg"],["map","key","LSC38","value","wEYv4P1jp1TNXX3mKMmx"],["map","key","IAM14","value","lRr4oTppg7F9yyryX47Z"],["map","key","BDCL9","value","t3iclVBg2rNISJKjlc4r"],["map","key","BBIL7","value","EhuMlT0XdrMD5lnkSvKy"],["map","key","MIODC4","value","9AkGkXH3qmRpw8vPJQcn"],["map","key","BSRML5","value","hD6i50oANZMDId8NdIZm"],["map","key","MDA19","value","rKw0TRkaqRnCh55SxPBw"],["map","key","BSYML8","value","FsPFNSEbWr3VQdmVkQpv"],["map","key","BIE20I","value","SlFxORVOZY45Op9xXkLT"],["map","key","CIOE11","value","81ijnG3B0Xf1sVncrQWF"],["map","key","SYMME7","value","bbMtRXGvj9ibm5sFj3m4"],["map","key","IAME13","value","YFWf8KVRgMdIZp1GU4YI"],["map","key","CIO2E19","value","hguOHLsNECOIO7Busi8C"],["map","key","APPS22I","value","JqLB5qBVlXDfn3bCFcYf"],["map","key","CIODE7","value","MjKTIDGgkiS2g3B9q3nO"],["map","key","CRM20I","value","BHl8559MjV5lniHJinoi"],["map","key","EPAEU19","value","jWGy02jLY4RGmapG03A2"],["map","key","IOME8","value","vy9gqX8sI6LbBMMjhPuH"],["map","key","PPME10","value","DddOxADSOa6Oq8sAOPrC"],["map","key","SCCE10","value","RS0YiAlNkUwHghM5iq9v"],["map","key","SEC20I","value","BUjQq4vpW1TOxvnG7VG3"],["map","key","PCCE14","value","AY6fPyFWiD4RF7ZCekpu"],["map","key","CATUK7","value","2hfJoV4dKeULJbFRN5Nj"],["map","key","ITSVE19","value","0x8mBh2qI6KqL9T5rDaV"],["map","key","ESC31","value","pcoMPyyQCw2B98PMa9aw"],["map","key","BIADE6","value","SvJrNJZh9JKmyTTxN9Na"],["map","key","LSCE15","value","jiWI7TLNtJ26GKoIflU4"],["map","key","SECME6","value","a4SYDmHplSwKu2aA9OmF"],["map","key","BI13A","value","ABRVmSXwwHea9sBSJqJ8"],["map","key","DC14A","value","sGhms3VPa017QwQKUNUI"],["map","key","CET19A","value","xisBUhGCNAux6TZLCvGe"],["map","key","APIN25A","value","LnNXSjS1bGw4Np9W93m2"],["map","key","SEC13A","value","T4mxM20rQdbEL6B1JcQ9"],["map","key","PS27","value","0RFmd38NfPwWf8KUPtdh"],["map","key","APPSi19","value","ayvi2m3ifHP5dihS9ZDc"],["map","key","DCi8","value","G19YRhsCBOIRF8b4wnkR"],["map","key","BII7","value","ov1ZmPb7QwTXAY8ouuBM"],["map","key","SECi5","value","UYGqShIQBqaaG2urYmSs"],["map","key","INDIA14","value","JkxTWFy2hHIgeKyJlyYk"],["map","key","SAF19","value","JaBAQZSd5C7eFHioyKoG"],["map","key","JCR19","value","tTc0tN9Mti5449Pml6ct"],["map","key","JAI19","value","LNtMsslKKfXZKtxiOmpq"],["map","key","JDC19","value","6jc8T840m88g8Fr0Kkr7"],["map","key","JBI19","value","lE0m7xZrlMVNSVyOTxOU"],["map","key","JSI19","value","mffQ4uXphYv4SJypNOsE"],["map","key","JSS19","value","gC4UMOwXlRr6fNp8uL5A"],["map","key","JXP19","value","qqg9KUMQ4xaQAlKLn5lq"],["map","key","CHR19A","value","lq1MvXocpElZATfqhSZO"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",104],
      "vtp_map":["list",["map","key","CIOS13","value","Yx7q5sK7Kjg45hg8HHaI"],["map","key","BI17","value","4rEj5yhns3RQPot6b8VA"],["map","key","CIOSE3","value","0oADUncwfhguOHKpCWai"],["map","key","GML5","value","BjaKpBM9Nc4xxwsWcqGu"],["map","key","SCC10","value","EEYtx9de8Mwtem1YjCvx"],["map","key","EA21","value","sv2HUXNNmtr7lhJTMWSj"],["map","key","PCC19","value","cKgui7QnlRWpkMXY4qCD"],["map","key","CIOC4","value","os1IBCAJ4AyEPHIemHjS"],["map","key","HTTP4","value","TSuALx6nvKDDVhEme9Sy"],["map","key","PPMIT11","value","qxLEGdYcjnqo5j8iPPmn"],["map","key","SEC25","value","7rbhiBTWQKSH3rapqlPf"],["map","key","CATUS10","value","cnCkCqYpdqGvj77Busg2"],["map","key","ITSV19","value","2sSbxmZAPS74xgilZBXw"],["map","key","SYM29","value","u3NuOIRCskCtoRkZTfiE"],["map","key","SCCP19","value","6SyTSs9s86449OhXRnFy"],["map","key","APN33","value","OENNmu3dP3rI4DDnMQ4u"],["map","key","LSC38","value","hBuvxy4EDTk2hdC4ls8k"],["map","key","IAM14","value","wcYetQVACXwyPYv6XTlD"],["map","key","BDCL9","value","BIpH3A1O2sQWDmG5OsFh"],["map","key","BBIL7","value","M20tALv8cLwd3IYjDy9b"],["map","key","MIODC4","value","7ArjBrg42wivQOeLfXTo"],["map","key","BSRML5","value","CQIHBCBOL7YUmal74wcW"],["map","key","MDA19","value","xZv2GTU20O7AoMhApbjq"],["map","key","BSYML8","value","28QsKhD6gw4WSiPrPi1h"],["map","key","BIE20I","value","amgBxs5g0fcA8ot4VPdg"],["map","key","CIOE11","value","Xg7ApbkvKwgo0TNh0inq"],["map","key","SYMME7","value","8ButlF6WNPvOE3nglOa4"],["map","key","IAME13","value","DaRJLm1ZnU0UV6p7q8sD"],["map","key","CIO2E19","value","2u9nqqg9KSCqyN6lRnmU"],["map","key","APPS22I","value","SXEkSnkSxRKP8D1DGhq6"],["map","key","CIODE7","value","tXu6rHk2g2yGqv9iT9Pd"],["map","key","CRM20I","value","i8E4Q631tCmKI3JaCFfj"],["map","key","EPAEU19","value","mlTd6GHbN3xgmt6cxACI"],["map","key","IOME8","value","WFtbaFSU6sEflr0KktJ1"],["map","key","PPME10","value","0W7rCgxBIxoI9ckYMECP"],["map","key","SCCE10","value","QtEHinu8hTBkCtnPb5FH"],["map","key","SEC20I","value","OZFedKeUKHWahkd9XJmJ"],["map","key","PCCE14","value","h2oG4JrfxaMwbTNbaEOC"],["map","key","CATUK7","value","G8eifIUW7tFgnxKrJ9WH"],["map","key","ITSVE19","value","RgJXXoQS3jld7LlH2Ybe"],["map","key","ESC31","value","Ec4MmuLIZlLTCoTt8iYT"],["map","key","BIADE6","value","HW8vQNbruw09asY7lgGI"],["map","key","LSCE15","value","SOa7S5tOHN45fdIZoHsF"],["map","key","SECME6","value","0CBTd4bpJ9M58lc5B3UK"],["map","key","BI13A","value","VUvBNEAEegi4v7eEFJkx"],["map","key","DC14A","value","U80eiJJgwtdknmq3WX9x"],["map","key","CET19A","value","3jiWIl9YBZvHmG5Q3qEh"],["map","key","APIN25A","value","EM5f9N5LeP3tSM49Nab1"],["map","key","SEC13A","value","9jWt0CDAI27PoyLv4ggv"],["map","key","PS27","value","D7saZpUboEnHepdtVlU6"],["map","key","APPSi19","value","iHHt9pvyPf3223hq3lvG"],["map","key","DCi8","value","5YZDi2oRb13peymKJ9gI"],["map","key","BII7","value","Na8ZVogcsQVBdiiXNOrD"],["map","key","SECi5","value","Z0HolYHxpRb3e5rmOa30"],["map","key","INDIA14","value","HugsFj2kr6gSJEM7HG9h"],["map","key","SAF19","value","GpMLeSZsnTu82lwL48M6"],["map","key","JCR19","value","47D8gMfR89kdbCCWsuvx"],["map","key","JAI19","value","cfjSr0LoDqZChxCMlRs8"],["map","key","JDC19","value","Yu3OwZw8b4A1Km23oV0Q"],["map","key","JBI19","value","6o1XaaJiliPnqrnW94sL"],["map","key","JSI19","value","ne6C6h1jtKd24lT2bEL5"],["map","key","JSS19","value","7F6p5fSMS6oOYTiOliOl"],["map","key","JXP19","value","7mnhBw6YWyIgfPy9iVCi"],["map","key","CHR19A","value","4kNvqWyMyisKhEuAK8R0"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",104],
      "vtp_map":["list",["map","key","CIOS13","value","PdCF09ZVoe1wiwTZNECP"],["map","key","BI17","value","0eh2qI5JWMiGAh7AoZHs"],["map","key","CIOSE3","value","s4ls6dDALqikIEPIMuTk"],["map","key","GML5","value","PhUCjU1ZlH8r2dSDwvrN"],["map","key","SCC10","value","Sw7aZqabMye3HWXpbn99"],["map","key","EA21","value","guPKYacRg4336E93myVK"],["map","key","PCC19","value","Lh6SuDXu2JaBEaRFryCJ"],["map","key","CIOC4","value","IkVF1rsqbijrVsyCFgkl"],["map","key","HTTP4","value","bsWt2Ln3dNsGpKCFoIqo"],["map","key","PPMIT11","value","rkIGZpacTMSaaG5VOYWy"],["map","key","SEC25","value","ax8bslGgIRD0qsqbimnc"],["map","key","CATUS10","value","mOqUpqif320uc8ufqBcf"],["map","key","ITSV19","value","HDMYJ6McFQHFTOKmNWQq"],["map","key","SYM29","value","EHgkfD1ZnTt6tHqRj4rH"],["map","key","SCCP19","value","baEOE4eQ642xk4tPL2C9"],["map","key","APN33","value","tnSlbwhrAUiMvpSmbuQD"],["map","key","LSC38","value","bmd24e6EwGbPSYJ7QxVb"],["map","key","IAM14","value","mG7XPYUkXEmBjV4hfrEh"],["map","key","BDCL9","value","tsjPM1t2MsHueichFDsh"],["map","key","BBIL7","value","656Atsh8D1FRLVSnjLYy"],["map","key","MIODC4","value","7C4TDrXjHFTXEj63xhr8"],["map","key","BSRML5","value","vUffQ66SVkU5o6p8sBTg"],["map","key","MDA19","value","wsceYEbVWF2DBQWCfqRs"],["map","key","BSYML8","value","Wt0CEbUUyPAnU1upW5gV"],["map","key","BIE20I","value","k78kIDMT5o7tEc1B2cLm"],["map","key","CIOE11","value","4vXsqeuYwt7fNmt8kbyv"],["map","key","SYMME7","value","ATiLulCraaG0ACpZJkT5"],["map","key","IAME13","value","GCLaPTal753ynCjKMpBf"],["map","key","CIO2E19","value","FIm84vH5LbAIogal3ihQ"],["map","key","APPS22I","value","ZNFGaMvs9r9uHnUt8jCb"],["map","key","CIODE7","value","09gp8uIsVqoCMkOeIWTY"],["map","key","CRM20I","value","1wj4uTbWWkLVOdeUKGSO"],["map","key","EPAEU19","value","oAM7F8uMZONgWPZWu7cf"],["map","key","IOME8","value","OSZ4Za91eWTpobpEnJCB"],["map","key","PPME10","value","qCRLVRfFHfcBQOhWMMkm"],["map","key","SCCE10","value","RQot5Zaw3GSNa4HQF9eC"],["map","key","SEC20I","value","dZh6SuCTaqLFKtUiLXK4"],["map","key","PCCE14","value","GIjtJ7R2hfJy7YSfttnR"],["map","key","CATUK7","value","FBepLFIoW2XaaKn7wXkN"],["map","key","ITSVE19","value","FWe0qK0LrHvhuPJTKNsI"],["map","key","ESC31","value","YHvi1ikecypLEDXpg7D3"],["map","key","BIADE6","value","LtyyKrKapLDEhx4TCpYB"],["map","key","LSCE15","value","ejlbyrVt4UKGTWTs5qX8"],["map","key","SECME6","value","bYh9HDOBy9wRNbncvaTO"],["map","key","BI13A","value","ROiZWvs5a7TEw06R2hgP"],["map","key","DC14A","value","X4bA9uHl868HEPKTJENb"],["map","key","CET19A","value","q2VW4eOyHaHETZOKZjAi"],["map","key","APIN25A","value","80cRdsLv5UIkWY7ljS4q"],["map","key","SEC13A","value","PsARaTQkpLGQFjVBbbJh"],["map","key","PS27","value","UrxxJpDgvUctZ3Yyu9os"],["map","key","APPSi19","value","cWFk5w4gVahkeu2KgpTm"],["map","key","DCi8","value","EBJ39WEoLJ5TNB0FST2b"],["map","key","BII7","value","e1uFJl3idxBEc2DFcYck"],["map","key","SECi5","value","o2ZkDy8gqEoPnId8Pp2X"],["map","key","INDIA14","value","dd1yrUmbSMVPfn0UV5lp"],["map","key","SAF19","value","W62tVkQp1Qf31uaUWFgn"],["map","key","JCR19","value","4dKcMsHtFaQiexffSUxI"],["map","key","JAI19","value","gvUctXxDnJDHk1dQPbed"],["map","key","JDC19","value","W4b3Ydm3fWPnH6QxZspM"],["map","key","JBI19","value","3avNMhnKEHjxXgSwKwdg"],["map","key","JSI19","value","QAkIDJuaSNqX4ane6C5Z"],["map","key","JSS19","value","Bvy7WJkVQj51nG7VH7VD"],["map","key","JXP19","value","OR1fnKIqdn9BmQfJXbgb"],["map","key","CHR19A","value","tsg2tUiJRg3xiwUYtyt7"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(",["escape",["macro",187],8,16],");return(a=a.closest(\"section\").find(\"h3,h4\").eq(0).text())||",["escape",["macro",296],8,16],"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en\/human-resources\/become-a-client-hr2","value","become-a-client-hr2"],["map","key","\/en\/human-resources\/become-a-client-hr1","value","become-a-client-hr1"],["map","key","\/en\/human-resources\/trends\/2019-hr-priorities","value","2019-hr-priorities"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",104],
      "vtp_map":["list",["map","key","CIOS13","value","CuoV1YfwCMpg7E9gMgYW"],["map","key","CIOSE3","value","CuoV1YfwCMpg7E9gMgYW"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",104],
      "vtp_map":["list",["map","key","CIOS13","value","QyuupYF4MjhR2gbebpI9"],["map","key","CIOSE3","value","QyuupYF4MjhR2gbebpI9"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.performance.timing,b=Date.now();a=b-a.navigationStart;if(0\u003Ca)return a})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en\/supply-chain\/it-leaders","value","sX0LtSBMtxfD4gXVwBK5"],["map","key","\/en\/supply-chain\/customer-service-leaders","value","8JRCrfxcUQhOp6jeqmSs"],["map","key","\/en\/supply-chain\/logistics-leaders","value","uMLdO0hjayuccNtMmV8O"],["map","key","\/en\/supply-chain\/manufacturing-leaders","value","2QIHZslKOxHgFCMAv5UG"],["map","key","\/en\/supply-chain\/planning-leaders","value","n0TQiVDlBjOIQAkE3Lji"],["map","key","\/en\/supply-chain\/quality-leaders","value","ilgD4fWPhvSYI4A2N0ju"],["map","key","\/en\/supply-chain\/sourcing-procurement-leaders","value","0ncvN9KULP3rLnWocUQg"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en\/conferences\/na\/cfo-finance-us\/exhibitors\/gc-finance-leaders-priorities","value","cXYqf44XFnIvvDTbtyUX"],["map","key","\/en\/conferences\/exhibitor\/gc-iocs-global-exhibitor-prospectus","value","D4idrrjBqclyVVf8M3C8"],["map","key","\/en\/conferences\/na\/security-risk-management-us\/exhibitors\/gc-masergy-case-study","value","Ss8lhJTLQ9Cvwxwten3d"],["map","key","\/en\/conferences\/exhibitor\/iocs-experience","value","XssnUxKuZ3VPpQgtHrSe"],["map","key","\/en\/conferences\/emea\/symposium-south-africa\/exhibitors","value","ajuJtXwX7mqrpEVdyk60"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en\/conferences\/na\/marketing-symposium-us\/agenda\/featured-topics\/customer-experience","value","bRE5TBi7Z1JcQV6o30d7"],["map","key","\/en\/conferences\/na\/marketing-symposium-us\/agenda\/featured-topics\/b-to-b-marketing","value","V962tWqkKO4yl5vVhCy6"],["map","key","\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/agenda\/topic.html#IT-Infrastructure-Modernization","value","TVn5kbeZfuRXGxtcaEQM"],["map","key","\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/agenda\/track","value","KIuuoQdroZHvfo24KcLm"],["map","key","\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/agenda\/topic.html#Cloud-Computing","value","nWEx3GM6iC1DIpGy18TB"],["map","key","\/en\/conferences\/na\/catalyst-us\/agenda\/featured-topics\/topic-applications-enterprise-architecture","value","TiLZh40qKoctY1MvXpe0"],["map","key","\/en\/conferences\/na\/catalyst-us\/agenda\/featured-topics\/topic-data-analytics","value","BHqNMkiUTqrpYqicnx9c"],["map","key","\/en\/conferences\/na\/catalyst-us\/agenda\/featured-topics\/topic-infrastructure","value","YCN7F5vViGGwrI4ECRXI"],["map","key","\/en\/conferences\/na\/catalyst-us\/agenda\/featured-topics\/topic-security","value","RG5eNrCLyl9K3ecFNYHv"],["map","key","\/en\/conferences\/na\/catalyst-us\/agenda\/featured-topics\/topic-cloud","value","MT3fYEM45hkIIaFUaO7A"],["map","key","\/en\/conferences\/na\/sales-us\/agenda","value","3goMOuPJQMkOgPuL6FDR"],["map","key","\/en\/conferences\/emea\/symposium-south-africa\/agenda","value","NOsDFBIxpOTSnhC4UKEL"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/agenda\/conference-by-role\/it-sourcing-leaders","value","uj9AnTs6cBxPD5XSgIPQ"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/agenda\/conference-by-role\/it-procurement-leaders","value","SmX7p3sdm3fXVxFZu1EJ"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/agenda\/conference-by-role\/it-vendor-management-leaders","value","u7uNC4WReAyBFgo2ZkE4"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/agenda\/conference-by-role\/it-asset-management-leaders","value","V0TOa6NkiQtDBLjKULNu"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/agenda\/conference-by-role\/it-finance-leaders","value","nRgMdJbGWg9LZcgxxwsR"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en\/conferences\/na\/tech-growth-us\/why-attend\/gartner-insights\/rn-survive-market-disruption","value","VcUOqX6khMbBPa16Nhdg"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/data-analytics-strategy","value","k9bgfOrASd7M6R5vZxyL"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/analytics","value","oG1e8Qq5eKbEOBxryDK1"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/artificial-intelligence","value","07oyKqEkNXW1UPb6Op2l"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/blockchain-data-management","value","FpMNmu4knkQq2VUwFAa4"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/data-analytics","value","CcbGXjG6jewon8kixYpa"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/data-driven-organization","value","Hip1TOmG6Q3n6qGwtccN"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/gc-webinar-key-trends-ai-ml","value","6D8fJXacTLQ52uxRJMuU"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/gc-webinar-data-analytics-governance","value","dMmyQFs62sttlHqtv0ek"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/gc-webinar-key-trends-emerging-technologies","value","jMWPj78E6XTjVMQ1imjR"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/gc-research-analytics-bi","value","s8nrtx7XNR5xJl0YkJJc"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/gc-research-ai-success","value","0hkfC606LbA83tQT9KO1"],["map","key","\/en\/conferences\/apac\/data-analytics-india\/why-attend\/gartner-insights\/gc-research-ai-strategy","value","CaXev9q0Kn7xqxCHrUnd"],["map","key","\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/why-attend\/gartner-insights\/webinars","value","mcyqQIoW3mNWPIpH2fKt"],["map","key","\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/why-attend\/gartner-insights\/research-cloud-computing","value","th3vAGrVt2P4wbTMXVwD"],["map","key","\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/why-attend\/gartner-insights\/research-intelligent-infrastructure","value","x7OkKO1kwOjHDL9Pou8j"],["map","key","\/en\/conferences\/emea\/enterprise-architecture-uk\/why-attend\/event-resources\/brochure","value","dSEy8Cb6XSfA0Gx8qSgF"],["map","key","\/en\/conferences\/emea\/enterprise-architecture-uk\/agenda\/track","value","35C7b8VEoMQ51pFsIsUk"],["map","key","\/en\/conferences\/emea\/enterprise-architecture-uk\/agenda\/track-descriptions","value","sPQuHoDmEwxxvnHjS3ig"],["map","key","\/en\/conferences\/emea\/enterprise-architecture-uk\/why-attend\/about-the-conference\/frequently-asked-questions","value","k1bH6fpfyfeKfYZLDJyr"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/why-attend\/gartner-insights\/gc-optimize-software-negotiations","value","jZXxESU9E0t5ZROeKl9q"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/why-attend\/gartner-insights\/gc-reduce-it-costs","value","hsFk4rI016KZg41t3ha3"],["map","key","\/en\/conferences\/emea\/digital-workplace-uk\/why-attend\/gartner-insights\/digital-workplace-journey","value","B3Q9FmcyqRqQPCw5SKMn"],["map","key","\/en\/conferences\/emea\/digital-workplace-uk\/why-attend\/gartner-insights\/lp-reactive-journey","value","ppg8JO68JMw26WNOuK5s"],["map","key","\/en\/conferences\/emea\/digital-workplace-uk\/why-attend\/gartner-insights\/lp-emerging-journey","value","FM324gZ2NvZwokQp0O45"],["map","key","\/en\/conferences\/emea\/digital-workplace-uk\/why-attend\/gartner-insights\/lp-optimizing-journey","value","cbIcP56ajvL4XDj631sW"],["map","key","\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/why-attend\/gartner-insights\/rn-digital-infrastructures","value","WnBK5FBLYKmYI28UEwwu"],["map","key","\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/why-attend\/about-the-conference\/networking","value","TngBv3LhwrZAEFF2MpDo"],["map","key","\/en\/conferences\/apac\/symposium-australia\/why-attend\/gartner-insights\/cost-optimization","value","s7iPD5XVus8ot3SDrdks"],["map","key","\/en\/conferences\/apac\/symposium-australia\/why-attend\/gartner-insights\/cio-culture-change-roadmap","value","VcsQXLB6eHTSr4qYX4b4"],["map","key","\/en\/conferences\/apac\/symposium-australia\/why-attend\/gartner-insights\/infographic-strategic-technology-trends","value","XKB2bGYlOb8YPUAYlMZb"],["map","key","\/en\/conferences\/apac\/symposium-australia\/why-attend\/gartner-insights\/ai-project-success","value","oZw9gJYcm2bGXkIGYmTx"],["map","key","\/en\/conferences\/apac\/symposium-australia\/why-attend\/gartner-insights\/cio-agenda-ebook","value","dmbsWrrjE2Iuru9655PQ"],["map","key","\/en\/conferences\/apac\/security-risk-management-india\/why-attend\/gartner-insights\/research-implement-single-sign-on","value","qpduYyFTUd24cxhtHnCi"],["map","key","\/en\/conferences\/apac\/security-risk-management-india\/why-attend\/gartner-insights\/research-identity-and-access-management","value","29VBbBASbxmJxk8RnmVk"],["map","key","\/en\/conferences\/apac\/security-risk-management-india\/why-attend\/gartner-insights\/research-internal-audit-on-cybersecurity","value","qesONgVH8PCyv2v7sFgl"],["map","key","\/en\/conferences\/apac\/security-risk-management-india\/why-attend\/gartner-insights\/research-cybersecurity-skills-shortage","value","iZX1O446C5gtNEHs1IcP"],["map","key","\/en\/conferences\/apac\/security-risk-management-india\/why-attend\/gartner-insights\/research-future-of-privacy","value","Urv7j8adYbf2oe21wixZ"],["map","key","\/en\/conferences\/apac\/security-risk-management-india\/why-attend\/gartner-insights\/research-keep-your-job-after-a-cyberattack","value","BXg8F907wpSfD1pPIN3y"],["map","key","\/pt-br\/conferences\/la\/security-risk-management-brazil\/why-attend\/gartner-insights\/privacy-predictions","value","2LlvFIjq3pYDlCmMVJ5b"],["map","key","\/en\/conferences\/na\/sales-us\/why-attend","value","KlICFcYeuTcwiy4TEy5J"],["map","key","\/en\/conferences\/emea\/symposium-south-africa\/why-attend","value","cGVWmXAX3nNXTmjwTWJv"],["map","key","\/en\/conferences\/na\/cfo-finance-us\/why-attend\/gartner-insights\/recession-readiness-checklist","value","oMPxxnfhnr0Gxne5Asrg"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/why-attend\/gartner-insights\/it-sourcing-qa","value","hILtTho1WTZONjeu2KeW"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/why-attend\/gartner-insights\/it-procurement-qa","value","aZoRRwNICDZ4Zas4frFn"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/why-attend\/gartner-insights\/it-vendor-management-qa","value","OEpv703odu6dFJrNL7YV"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/why-attend\/gartner-insights\/it-asset-management-qa","value","UkSxTT1rckuDYv8cefVJ"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/why-attend\/gartner-insights\/it-finance-qa","value","8XKBwKyl76QmlZNIRE6Z"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en\/human-resources\/total-rewards","value","qrkIFROeJ7ZZ2cLm0YjC"],["map","key","\/en\/human-resources\/head-of-recruitment","value","q0LrJ4C8jeeTCpZKocuC"],["map","key","\/en\/human-resources\/human-resources-leaders","value","2u5p8JLn4icnBepBfsJ2"],["map","key","\/en\/human-resources\/hr-business-partners","value","aSMXY71jq42B9r6hYUnf"],["map","key","\/en\/human-resources\/diversity-inclusion","value","rHwnEsbdTJDFea1RE4Mm"],["map","key","\/en\/human-resources\/learning-development","value","9ZWruwy7UX9yYoL9VSiN"],["map","key","\/en\/human-resources\/role\/chro-hr-executives","value","GDQQtHyxtceSBmNXToiH"],["map","key","\/en\/human-resources\/role\/human-resources-leaders","value","tBD8y5ZGitGmJCDZ4Zbb"],["map","key","\/en\/human-resources\/role\/hr-business-partners","value","KByTV82jr5bxCLXH18TB"],["map","key","\/en\/human-resources\/role\/diversity-inclusion","value","TQVACWsuw1pkMdmyUXG2"],["map","key","\/en\/human-resources\/role\/learning-development","value","flqyEUdraDOFEpSjT9LP"],["map","key","\/en\/human-resources\/role\/total-rewards","value","baGXkJMsJ6IPQkbxnEum"],["map","key","\/en\/human-resources\/role\/head-of-recruitment","value","4Ax2ZjPLy4IVZHtRKSDu"],["map","key","\/en\/human-resources\/trends\/reinvent-talent-strategies.html","value","cA6dEGgitb5RIEOmTySL"],["map","key","\/en\/conferences\/emea\/human-resource-uk\/register","value","ulDvth4yirWyKoNR6433"],["map","key","\/en\/conferences\/emea\/human-resource-uk","value","0A6vWjILo9adWW4cEL5m"],["map","key","\/en\/conferences\/emea\/human-resource-uk\/why-attend","value","PYVrv3KdQLQ8dWZC9q1S"],["map","key","\/en\/conferences\/emea\/human-resource-uk\/agenda","value","EL49SyUSWsttlHxIfa89"],["map","key","\/en\/conferences\/emea\/human-resource-uk\/speakers","value","BvJutImitGisDIjtCVmP"],["map","key","\/en\/human-resources\/research-tools\/talentneuron\/analytics-driven-talent-strategy","value","l74xdvsepOUDmJEK0tZ6"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",487],
      "vtp_map":["list",["map","key","https:\/\/www.gartner.com\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/agenda\/track.html#Track-C","value","6o1USoogV81ijauc2lHq"],["map","key","https:\/\/www.gartner.com\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/agenda\/type.html#Magic-Quadrant-Theater","value","9wQJP7falYLrqev5lood"],["map","key","https:\/\/www.gartner.com\/es\/conferences\/la\/infrastructure-operations-cloud-mexico\/agenda\/track.html#Track-A","value","1VYAUlSl740pGwrIqNLb"],["map","key","https:\/\/www.gartner.com\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/agenda\/track#Track-A","value","XoUamJB7yESYKN8IIbMu"],["map","key","https:\/\/www.gartner.com\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/agenda\/track#Track-B","value","OyxvkW5hmEvqX8tDHfdF"],["map","key","https:\/\/www.gartner.com\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/agenda\/track#Track-C","value","4n4ic9YOQxXjE4SaaJjr"],["map","key","https:\/\/www.gartner.com\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/agenda\/track#Track-D","value","J128S4n5jiR1bIdTKHZq"],["map","key","https:\/\/www.gartner.com\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/agenda\/track#Track-F","value","SmX7p3sdm3fXVxFZu1EJ"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".globalsite.cmp-globalsite-columncontrol\").prevAll(\".cmp-globalsite-heading\").eq(0).text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".aem-Grid\").find(\"h1,h2,h3,h4,h5\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".aem-Grid\").find(\"article a\").eq(0).text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".individual-block\").find(\"h4,h3,h2,h1\").eq(0).text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",187],8,16],").closest(\".featuredicon-text\").find(\"strong\").text().split(\"Learn More\")[0]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en\/webinars","value","OfMic9XJoH3B9q0O6T3f"],["map","key","\/en\/corporate-communications\/events\/webinars","value","rOR1cO3xeaxGACBPQuGk"],["map","key","\/en\/customer-service-support\/events\/webinars","value","DhxxM20tZ7liNdHWbl2d"],["map","key","\/en\/finance\/events\/webinars","value","TbsXyGyv78kKNtOHKrKg"],["map","key","\/en\/human-resources\/events\/webinars","value","Ei0bO41uFmAcikasBOMc"],["map","key","\/en\/information-technology\/events\/webinars","value","LJutiKOybRDx3GRJMtQQ"],["map","key","\/en\/innovation-strategy\/events\/webinars","value","E5TBh3waQAmOy17S5sK7"],["map","key","\/en\/legal-compliance\/events\/webinars","value","5a7VEsa2I2JaEOD8hPrW"],["map","key","\/en\/marketing\/events\/webinars","value","O9JLo80cSF5R78BtoUvD"],["map","key","\/en\/sales\/events\/webinars","value","8Ob8VDkX4tMrpVd0rQZT"],["map","key","\/en\/supply-chain\/events\/webinars","value","FM7D6eo5mt0YhMZdiiZU"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en\/conferences\/na\/cfo-finance-us\/speakers","value","8S3ltDrUWnTl756uALoc"],["map","key","\/en\/conferences\/emea\/symposium-south-africa\/speakers","value","6E1oYEoOZZ1md223fTmK"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en\/conferences\/na\/cfo-finance-us\/register","value","TF2EJqI5HPbl3igMisRM"],["map","key","\/en\/conferences\/na\/sales-us\/register","value","CskE14xy2t0CEaQCurdo"],["map","key","\/en\/conferences\/emea\/symposium-south-africa\/register","value","ajuJtXwX7mqrpEVdyk60"],["map","key","\/en\/conferences\/na\/it-sourcing-procurement-asset-management-us\/register","value","nwBMAyDJ0tAMB5rIqOQw"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/en\/conferences\/na\/cfo-finance-us\/venue-travel","value","Aqg6f324al5wZwjWFrZS"],["map","key","\/en\/conferences\/emea\/symposium-south-africa\/venue-travel","value","ajuJtXwX7mqrpEVdyk60"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","\/watch\/CdTf6pL5A3dk8K2fQMrKyM","value","p4gavw0c3XGuguPLZgyg"]]
    },{
      "function":"__c",
      "vtp_value":"176"
    },{
      "function":"__c",
      "vtp_value":"175"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__r"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__img",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=1130169\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":277
    },{
      "function":"__img",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=1242321\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":281
    },{
      "function":"__sp",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"826474469",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",2],
      "vtp_enableRdpCheckbox":true,
      "tag_id":4
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableUrlPassthrough":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":5
    },{
      "function":"__baut",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_tagId":"5824477",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":7
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",354,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index",["macro",4],"metric","1"],["map","index",["macro",6],"metric","1"],["map","index",["macro",9],"metric","1"]],
      "vtp_gaSettings":["macro",178],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Pageview - All Pages - datalayer-initialized"],["map","index",["macro",180],"dimension",["macro",183]],["map","index",["macro",184],"dimension",["macro",186]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Navigation - Events Section Bar",
      "vtp_eventLabel":["macro",189],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Navigation - Events Section Bar"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",192],
      "vtp_eventLabel":["macro",196],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Navigation"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Register Button Click",
      "vtp_eventLabel":"(not set)",
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Navigation - Register"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Attendee Login Click",
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Navigation - Login"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":16
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"CTA Button Click",
      "vtp_eventLabel":["macro",197],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - CTA Button Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",200],
      "vtp_eventCategory":"EM - Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Detail View",
      "vtp_eventLabel":["macro",104],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EEC - Detail"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Link Click",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Link Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Bullet Text",
      "vtp_eventLabel":["macro",201],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Bullet Text"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template",["macro",202]," Download"],
      "vtp_eventLabel":["macro",203],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Document Download"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":24
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Featured Content: ",["macro",204]],
      "vtp_eventLabel":["template",["macro",205],": ",["macro",206]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Homepage - Featured Content"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Top Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Sign In Button",
      "vtp_eventLabel":["macro",1],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Corporate - Sign In Button"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Email Click",
      "vtp_eventLabel":["macro",209],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Email Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":30
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"View Speaker - Highlighted",
      "vtp_eventLabel":["macro",210],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - View Speaker"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Footer Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",194],
      "vtp_eventLabel":["macro",211],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Footer Navigation"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":35
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Follow",
      "vtp_eventLabel":["macro",212],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Footer - Social Follow"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Footer Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Text Click",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Footer Navigation"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":37
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Footer Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Logo Click",
      "vtp_eventLabel":"(not set)",
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Footer Logo"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":39
    },{
      "function":"__ga",
      "once_per_event":true,
      "vtp_detectTitle":true,
      "vtp_ignoredRef":["list"],
      "vtp_useDebugVersion":false,
      "vtp_allowLinker":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_cookiePathCopy":["list"],
      "vtp_clientInfo":true,
      "vtp_campaignTrack":true,
      "vtp_siteSpeedSampleRate":"0",
      "vtp_anonymizeIp":false,
      "vtp_webPropertyId":"UA-123456-33",
      "vtp_allowAnchor":false,
      "vtp_allowHash":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_sendHitsToGoogle":false,
      "vtp_enableInPageLinkId":false,
      "vtp_forceSsl":true,
      "vtp_domainName":["macro",213],
      "vtp_ignoredOrganic":["list"],
      "vtp_detectFlash":true,
      "tag_id":42
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Gartner Insights - Display",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Home Page - Tab Click"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Top Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",215],
      "vtp_eventLabel":["template",["macro",214]," \/ ",["macro",216]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Top Navigation"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Expand Content",
      "vtp_eventLabel":["macro",217],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Expand Content"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Filter Agenda: ",["macro",218]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Filter Agenda"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":58
    },{
      "function":"__bzi",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_id":"37808",
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",219],
      "vtp_eventCategory":"Engagement Timer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",221],"metric","1"],["map","index",["macro",223],"metric","1"],["map","index",["macro",225],"metric","1"],["map","index",["macro",227],"metric","1"],["map","index",["macro",229],"metric","1"],["map","index",["macro",230],"metric","1"],["map","index",["macro",231],"metric",["macro",219]],["map","index",["macro",232],"metric",["macro",233]]],
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Seconds",
      "vtp_eventLabel":["macro",219],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Engagement Timer"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template",["macro",202]," Download"],
      "vtp_eventLabel":["macro",203],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Document Download"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template",["macro",235]," - Javascript Error"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Error Message: ",["macro",236]],
      "vtp_eventLabel":["template","Error Line: ",["macro",237],"; Error URL: ",["macro",238]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - JavaScript Error"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":81
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Email Click",
      "vtp_eventLabel":["macro",209],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Email Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":83
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",240],"metric","1"]],
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",239],
      "vtp_eventLabel":["macro",241],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Vidyard Video Tracking"],["map","index",["macro",242],"dimension",["macro",244]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Expand Content",
      "vtp_eventLabel":["macro",217],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Expand Content"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":87
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",247],"metric","1"],["map","index",["macro",249],"metric","1"],["map","index",["macro",250],"metric","1"]],
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Lead Generation - ",["macro",173]," form completed"],
      "vtp_eventLabel":["macro",175],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Lead Gen"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",252],"metric","1"]],
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Eloqua Form Step: ",["macro",251]],
      "vtp_eventLabel":["template","User Type: ",["macro",175]," | Form Type: ",["macro",173]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Lead Gen Step"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Click to Smarter With Gartner",
      "vtp_eventLabel":["macro",253],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - SRP - Smarter With Gartner"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":91
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Click to Research",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - SRP - Click To Research"],["map","index",["macro",254],"dimension",["macro",256]],["map","index",["macro",257],"dimension",["macro",258]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":92
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Click to Webinar",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - SRP - Click To Webinar"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":93
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"CTA Button Click",
      "vtp_eventLabel":["template",["macro",259],": ",["macro",194]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - CTA"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":96
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",262],
      "vtp_eventCategory":"RM - Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Promo View",
      "vtp_eventLabel":["template",["macro",144]," Page"],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EEC - Promo View"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":97
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",266],
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Related Content Click",
      "vtp_eventLabel":["macro",267],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Related Content Click - EEC"],["map","index",["macro",145],"dimension",["macro",268]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":98
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Click to Conference",
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - SRP - Click to Conference"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":99
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Footer Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - ALL - Footer Navigation"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":100
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Analyst Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",269],
      "vtp_eventLabel":["template",["macro",194]," :: ",["macro",130]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - AP - Main Column Articles Clicks"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":102
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",270],
      "vtp_eventLabel":["macro",195],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - View Tab Articles"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":104
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"View Article",
      "vtp_eventLabel":["macro",271],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - View Article"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":105
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Research Methodology",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Clicked Market Document",
      "vtp_eventLabel":["template",["macro",272],": ",["macro",195]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Research Methodology - Clicked Market Document"],["map","index",["macro",257],"dimension",["macro",273]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":106
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Become a Client",
      "vtp_eventLabel":["template",["macro",259]," : ",["macro",195]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Become A Client"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":108
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Gartner Insights - Display",
      "vtp_eventLabel":["macro",204],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Home - View 1st Promotion - EEC"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":109
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",266],
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Gartner Insights - Click",
      "vtp_eventLabel":["template",["macro",205],": ",["macro",267]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Home Page - Gartner Insights Click - EEC"],["map","index",["macro",145],"dimension",["macro",274]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":110
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Top Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Opened Search Box",
      "vtp_eventLabel":["macro",1],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Top Navigation - Opened Search Box"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":111
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Top Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Clicked Into Search Box",
      "vtp_eventLabel":["macro",1],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Top Navigation - Clicked Into Search Box"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":112
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Click to Newsroom",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - SRP - Click To Newroom"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":113
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Click to Other (temp)",
      "vtp_eventLabel":["macro",130],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - SRP - Click To OTHER"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Click to RM Content",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - SRP - Click To RM Content"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":115
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Tab Click",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Tab Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Viewed Form Modal",
      "vtp_eventLabel":["macro",275],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - View Modal"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":117
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Webinars Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Click to Webinar: ",["macro",276]],
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Webinars Homepage - Click to Webinar"],["map","index",["macro",257],"dimension",["macro",277]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":118
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Webinars Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Click to Webinar: Featured",
      "vtp_eventLabel":["macro",278],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Webinars Homepage - Click to Webinar - Featured"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":119
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",247],"metric","1"],["map","index",["macro",248],"metric","1"],["map","index",["macro",250],"metric","1"],["map","index",["macro",279],"metric","1"]],
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Lead Generation - ",["macro",173]," form completed"],
      "vtp_eventLabel":["macro",175],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EM - Lead Gen"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":121
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",252],"metric","1"]],
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Eloqua Form Step: ",["macro",251]],
      "vtp_eventLabel":["macro",175],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EM - Lead Gen Step"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":122
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":123
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":124
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Tile Click",
      "vtp_eventLabel":["template",["macro",281],": ",["macro",282]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Interactive - Tile Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":125
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Expand Click",
      "vtp_eventLabel":["macro",281],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Interactive - Expand Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":126
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"CTA Button Click",
      "vtp_eventLabel":["template",["macro",284],": ",["macro",194]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Interactive - CTA Button Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":127
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EN - Top Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",285],
      "vtp_eventLabel":["macro",286],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EN - Conference Mini Site - Top Navigation"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":128
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EN - Conference Mini Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"CTA Button Click",
      "vtp_eventLabel":["macro",195],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EN - Conference Mini Site - CTA Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":129
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EN - Conference Mini Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Featured Content: ",["macro",271]],
      "vtp_eventLabel":["macro",195],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EN - Conference Mini Site - Featured Content"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":130
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EN - Conference Mini Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Expand Content",
      "vtp_eventLabel":["macro",217],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EN - Conference Mini Site - Expand Content"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":131
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",266],
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Related Content Click",
      "vtp_eventLabel":["macro",287],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Related Webinar Click - EEC"],["map","index",["macro",145],"dimension","webinar"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":154
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=684186\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":155
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=684194\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":156
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=693602\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":157
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=693618\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":159
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=693626\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":160
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=693634\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":161
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=693642\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":162
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=693650\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":163
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Javascript Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Error Message: ",["macro",236]],
      "vtp_eventLabel":["template","Custom Tag: ",["macro",289]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - custom js error"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":176
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template","Form: ",["macro",290]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Form Error",
      "vtp_eventLabel":["macro",291],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Click to timestamp",
      "vtp_eventLabel":["macro",292],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Podcast - Click to timestamp"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":190
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Audio",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",295],"metric","1"]],
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",294],
      "vtp_eventLabel":["macro",296],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Podcast - Player Interaction"],["map","index",["macro",297],"dimension",["macro",259]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":191
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Subscribe",
      "vtp_eventLabel":["macro",298],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Podcast - Subscribe"],["map","index",["macro",297],"dimension",["macro",259]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":192
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Social Share",
      "vtp_eventLabel":["macro",299],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Social Share"],["map","index",["macro",297],"dimension",["macro",259]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":193
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",302],
      "vtp_eventCategory":"RM - Enhanced Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Promo View",
      "vtp_eventLabel":["template",["macro",144]," Page"],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EEC - Promo Split View"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":196
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Image Click",
      "vtp_eventLabel":["macro",259],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Podcast - Subscribe"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":204
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Link Click",
      "vtp_eventLabel":["macro",259],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Podcast - Featured Link"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":205
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Listen Now",
      "vtp_eventLabel":["macro",303],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Podcast - List - Listen Now"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":208
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Load More",
      "vtp_eventLabel":"(not set)",
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Load More"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":209
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",304]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",259],
      "vtp_eventLabel":["template",["macro",194]," :: ",["macro",130]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Podcast - Main Column Articles Clicks"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":210
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",178],
      "vtp_dimension":["list",["map","index",["macro",41],"dimension","Public Marketing Site"],["map","index",["macro",143],"dimension","Vidyard"],["map","index",["macro",179],"dimension","Vidyard PageViews Tag"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":211
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Eloqua Form Step: 1 of 3",
      "vtp_eventLabel":["macro",161],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Webinar FormView"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":213
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",89]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Resources",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Analyst Page Articles"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":236
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Top Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",306],
      "vtp_eventLabel":["macro",307],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Top Navigation 2.0"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":238
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Hero Button: ",["macro",194]],
      "vtp_eventLabel":["macro",308],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - CTA - Download Now"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":240
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Debugging - Non-Nav Link Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Content Link Clicks",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Debugging Non-Nav Link Clicks"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":245
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Latest Research Clicks",
      "vtp_eventLabel":["macro",309],
      "vtp_dimension":["list",["map","index","32","dimension","UA - Event - GFM - Latest Research"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":246
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"research",
      "vtp_eventLabel":["macro",309],
      "vtp_dimension":["list",["map","index","32","dimension","UA - Event - GFM - Research"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":248
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Become a Client",
      "vtp_eventLabel":"Responsive BAC Button : Become a Client",
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Responsive - Become A Client"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":257
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - webinar player Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Brighttalk conversion: ",["macro",311]],
      "vtp_eventLabel":["macro",312],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM Webinar player - Brighttalk Conversion"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":266
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"gartn0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"gartn0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8466193",
      "vtp_ordinalStandard":["macro",288],
      "vtp_url":["macro",2],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":269
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",316],
      "vtp_eventCategory":["template","RM - ",["macro",144]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Tab Click",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Top Tab click"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":274
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":276
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=1242313\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":280
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=1242337\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":282
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=1242329\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":284
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site: Registration",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",317],
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - CTA Button Click - Mobile Page"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":285
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",318],
      "vtp_eventCategory":"EM - Event Site: Registration",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",319],
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Conferences - Register - Buttons Click - New"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":286
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=1244297\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":287
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":["macro",293],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",294],
      "vtp_eventLabel":["macro",320],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EEC - Production-3"]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-8394889-3",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":294
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",322],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Search Result: Page # ",["macro",323]],
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Glossary Search Result Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":296
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",322],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"List",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Glossary List Search Result Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":297
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",322],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Term of the Day",
      "vtp_eventLabel":["macro",324],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Glossary Term of the Day"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":298
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",322],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",259],
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Glossary Trending or Related Terms"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":299
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",322],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Letter",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Glossary Letter Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":300
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",322],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Related Content: ",["macro",268]],
      "vtp_eventLabel":["template",["macro",309],":",["macro",325]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Glossary Related Content"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":301
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",322],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Banner",
      "vtp_eventLabel":["template",["macro",259],": ",["macro",194]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Glossary CTA Button Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":303
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",1]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",178],
      "vtp_dimension":["list",["map","index",["macro",143],"dimension","Webinar Player"],["map","index",["macro",3],"dimension","webinar player"],["map","index",["macro",179],"dimension","UA - Page Virtual - btPlayerDisplayed"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":304
    },{
      "function":"__sp",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"780045268",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",2],
      "vtp_enableRdpCheckbox":true,
      "tag_id":305
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Help Menu Navigation",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Help Menu Navigation"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":307
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",322],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Search",
      "vtp_eventLabel":["macro",326],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Glossary Keyword"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":308
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=1690209\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":310
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=1901900\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":312
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Glossary Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"CTA Button Click",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Glossary Home Page - CTA Button Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":313
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o2oeb",
      "tag_id":1060
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EM - Event Site",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",247],"metric","1"],["map","index",["macro",248],"metric","1"],["map","index",["macro",250],"metric","1"],["map","index",["macro",279],"metric","1"]],
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Lead Generation - exhibitor form completed",
      "vtp_eventLabel":["macro",175],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - EM - Exhibitor Lead Gen"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1062
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"654961738",
      "vtp_conversionLabel":"SvTACLWZ6csBEMrYp7gC",
      "vtp_rdp":false,
      "vtp_url":["macro",2],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":1080
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"654961738",
      "vtp_conversionLabel":"AJyTCM6NiMwBEMrYp7gC",
      "vtp_rdp":false,
      "vtp_url":["macro",2],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":1084
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","Form Tracking: ",["macro",3]," ",["macro",13]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Form Submission",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Form Tracking - Form Submitted"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1108
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Hero Banner : Main Container",
      "vtp_eventLabel":["template",["macro",327]," : ",["macro",194]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Home Hero Banner - Main Container Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1125
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Hero Banner : Promotion-A",
      "vtp_eventLabel":["macro",328],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Home Hero Banner - Secondary Container - Promotion-A Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1129
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Hero Banner : Promotion-B",
      "vtp_eventLabel":["macro",329],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Home Hero Banner - Secondary Container - Promotion-B Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1133
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Middle Banner",
      "vtp_eventLabel":["template",["macro",259]," : ",["macro",194]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Home Middle Banner Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1136
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","Form Tracking: ",["macro",3]," ",["macro",13]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Field Interaction",
      "vtp_eventLabel":["macro",330],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Form Tracking - Field Entered"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1144
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","Form Tracking: ",["macro",3]," ",["macro",13]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Form Start",
      "vtp_eventLabel":["macro",330],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Form Tracking - Form Start"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1145
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Dynamic Content Click : ",["macro",331]],
      "vtp_eventLabel":["macro",332],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Dynamic Content Click - EEC"],["map","index",["macro",145],"dimension",["macro",268]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1150
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"BAC Form Viewed",
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - BAC Form Viewed"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1153
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","Middle Banner: ",["macro",333]],
      "vtp_eventLabel":["macro",309],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Home Middle Banner Tile Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1156
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Dropdown",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Articles - Drop Down"],["map","index",["macro",145],"dimension",["macro",268]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1171
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Featured Content",
      "vtp_eventLabel":["macro",334],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Glossary - Featured Resources"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1174
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=2269370\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":1181
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"826474469",
      "vtp_conversionLabel":"4KQTCKuxztUBEOX_i4oD",
      "vtp_rdp":false,
      "vtp_url":["macro",2],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":1184
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Virtual Peer Forum Content Click",
      "vtp_eventLabel":["template",["macro",335]," ",["macro",194]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Virtual Forum Content Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1188
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Virtual Peer Forum Content Click",
      "vtp_eventLabel":["template",["macro",336],": ",["macro",194]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Virtual Peer Forum - Content Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1193
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Top Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",337],
      "vtp_eventLabel":["macro",338],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Top Navigation 3.0"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1205
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Contextual Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",339],
      "vtp_eventLabel":["macro",340],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Top Navigation 3.0 - Contextual Navigation"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1212
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Footer Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",341],
      "vtp_eventLabel":["macro",342],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - RM - Footer Navigation 2.0"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1217
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=37808\u0026conversionId=1690209\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",288],
      "tag_id":1230
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Lead Generation",
      "vtp_tagId":"5824477",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Lead Generation – BAC form completed",
      "vtp_eventLabel":"Become a Client",
      "tag_id":1234
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"Lead Generation",
      "vtp_tagId":"5824477",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Lead Generation – Campaign form completed",
      "vtp_eventLabel":"Campaign",
      "tag_id":1235
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","Promotional Popup : ",["macro",343]," : ",["macro",344]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["macro",345],
      "vtp_eventLabel":["macro",346],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Internal Promotion Engagement"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1246
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o4ur0",
      "tag_id":1250
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o4vk3",
      "tag_id":1255
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"ny0xk",
      "tag_id":1256
    },{
      "function":"__cvt_8219063_1257",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableFirstPartyCookies":true,
      "vtp_id":"t2_8l2hajog",
      "vtp_eventType":"PageVisit",
      "tag_id":1259
    },{
      "function":"__cvt_8219063_1257",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableFirstPartyCookies":true,
      "vtp_id":"t2_8l2hajog",
      "vtp_eventType":"Lead",
      "tag_id":1260
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"DEI - Content Click",
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Home Page - DEI Tag"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1266
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Life at Gartner - Content Click",
      "vtp_eventLabel":["template",["macro",268],": ",["macro",309]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Home Page - Life at Gartner"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1270
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RM - Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Resource Centers - Content Click",
      "vtp_eventLabel":["template",["macro",268],": ",["macro",309]],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Home Page - Resource Centre"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1271
    },{
      "function":"__sp",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"653952131",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",2],
      "vtp_enableRdpCheckbox":true,
      "tag_id":1274
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":["template","CTA Click - ",["macro",347]],
      "vtp_eventLabel":["macro",348],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Vidyard - CTA Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1277
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o56cj",
      "tag_id":1283
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","RM - ",["macro",144]," Page"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",178],
      "vtp_eventAction":"Site Selection",
      "vtp_eventLabel":["macro",349],
      "vtp_dimension":["list",["map","index",["macro",179],"dimension","UA - Event - Site Selection"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1292
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-P973B6B","nickname",""]],
      "vtp_boundaries":["list"],
      "vtp_enableTypeRestrictions":false,
      "tag_id":1293
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_22",
      "tag_id":1294
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_25",
      "tag_id":1295
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_27",
      "tag_id":1296
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_28",
      "tag_id":1297
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_30",
      "tag_id":1298
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_45",
      "tag_id":1299
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_47",
      "tag_id":1300
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_50",
      "tag_id":1301
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_52",
      "tag_id":1302
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_55",
      "tag_id":1303
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_58",
      "tag_id":1304
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_60",
      "tag_id":1305
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_66",
      "tag_id":1306
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_67",
      "tag_id":1307
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_69",
      "tag_id":1308
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_71",
      "tag_id":1309
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_95",
      "tag_id":1310
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_99",
      "tag_id":1311
    },{
      "function":"__cl",
      "tag_id":1312
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_117",
      "tag_id":1313
    },{
      "function":"__cl",
      "tag_id":1314
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_121",
      "tag_id":1315
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_135",
      "tag_id":1316
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":["macro",350],
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"8219063_151",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1317
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_181",
      "tag_id":1318
    },{
      "function":"__jel",
      "tag_id":1319
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_183",
      "tag_id":1320
    },{
      "function":"__cl",
      "tag_id":1321
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_201",
      "tag_id":1322
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_202",
      "tag_id":1323
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_203",
      "tag_id":1324
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_206",
      "tag_id":1325
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_211",
      "tag_id":1326
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_213",
      "tag_id":1327
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_215",
      "tag_id":1328
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_217",
      "tag_id":1329
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_218",
      "tag_id":1330
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_219",
      "tag_id":1331
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"div.globalsite.cmp-globalsite-pagefilter div:nth-child(1) \u003E section \u003E h3",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_226",
      "tag_id":1332
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_229",
      "tag_id":1333
    },{
      "function":"__cl",
      "tag_id":1334
    },{
      "function":"__cl",
      "tag_id":1335
    },{
      "function":"__cl",
      "tag_id":1336
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_237",
      "tag_id":1337
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_238",
      "tag_id":1338
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_239",
      "tag_id":1339
    },{
      "function":"__cl",
      "tag_id":1340
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".modal-body",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_245",
      "tag_id":1341
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_246",
      "tag_id":1342
    },{
      "function":"__cl",
      "tag_id":1343
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_251",
      "tag_id":1344
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_252",
      "tag_id":1345
    },{
      "function":"__cl",
      "tag_id":1346
    },{
      "function":"__cl",
      "tag_id":1347
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_264",
      "tag_id":1348
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_273",
      "tag_id":1349
    },{
      "function":"__cl",
      "tag_id":1350
    },{
      "function":"__cl",
      "tag_id":1351
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_281",
      "tag_id":1352
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_282",
      "tag_id":1353
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_283",
      "tag_id":1354
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_285",
      "tag_id":1355
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_327",
      "tag_id":1356
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"#submit-form \u003E div.submit-form \u003E div \u003E div:nth-child(1) \u003E div \u003E span:nth-child(1) \u003E div",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_354",
      "tag_id":1357
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"#submit-form \u003E div.submit-form \u003E div \u003E div:nth-child(2) \u003E div \u003E span:nth-child(1) \u003E div \u003E span",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_355",
      "tag_id":1358
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"#submit-form \u003E div.submit-form \u003E div \u003E div:nth-child(1) \u003E div \u003E span:nth-child(2) \u003E div \u003E span",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_356",
      "tag_id":1359
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"#submit-form \u003E div.submit-form \u003E div \u003E div:nth-child(1) \u003E div \u003E span:nth-child(4) \u003E div \u003E span",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_357",
      "tag_id":1360
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"#submit-form \u003E div.submit-form \u003E div \u003E div:nth-child(1) \u003E div \u003E span:nth-child(3) \u003E div \u003E span",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_358",
      "tag_id":1361
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"#submit-form \u003E div.submit-form \u003E div \u003E div:nth-child(2) \u003E div \u003E span:nth-child(3) \u003E div \u003E span",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_359",
      "tag_id":1362
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"#submit-form \u003E div.submit-form \u003E div \u003E div:nth-child(2) \u003E div \u003E span:nth-child(4) \u003E div \u003E span",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_360",
      "tag_id":1363
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"#submit-form \u003E div.footer.row \u003E div.form-action.col-md-6.col-sm-5.col-xs-12 \u003E span \u003E div",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_361",
      "tag_id":1364
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_378",
      "tag_id":1365
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_380",
      "tag_id":1366
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_381",
      "tag_id":1367
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_418",
      "tag_id":1368
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_419",
      "tag_id":1369
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_422",
      "tag_id":1370
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_423",
      "tag_id":1371
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_424",
      "tag_id":1372
    },{
      "function":"__cl",
      "tag_id":1373
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_426",
      "tag_id":1374
    },{
      "function":"__cl",
      "tag_id":1375
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^=\"vidyard\"]",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8219063_460",
      "tag_id":1376
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_538",
      "tag_id":1377
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_539",
      "tag_id":1378
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_540",
      "tag_id":1379
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_542",
      "tag_id":1380
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_544",
      "tag_id":1381
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_554",
      "tag_id":1382
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_564",
      "tag_id":1383
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_580",
      "tag_id":1384
    },{
      "function":"__cl",
      "tag_id":1385
    },{
      "function":"__cl",
      "tag_id":1386
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_589",
      "tag_id":1387
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_590",
      "tag_id":1388
    },{
      "function":"__cl",
      "tag_id":1389
    },{
      "function":"__cl",
      "tag_id":1390
    },{
      "function":"__cl",
      "tag_id":1391
    },{
      "function":"__cl",
      "tag_id":1392
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_723",
      "tag_id":1393
    },{
      "function":"__cl",
      "tag_id":1394
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_787",
      "tag_id":1395
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_788",
      "tag_id":1396
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_789",
      "tag_id":1397
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_790",
      "tag_id":1398
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_791",
      "tag_id":1399
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_792",
      "tag_id":1400
    },{
      "function":"__cl",
      "tag_id":1401
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_795",
      "tag_id":1402
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_809",
      "tag_id":1403
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_842",
      "tag_id":1404
    },{
      "function":"__cl",
      "tag_id":1405
    },{
      "function":"__cl",
      "tag_id":1406
    },{
      "function":"__cl",
      "tag_id":1407
    },{
      "function":"__cl",
      "tag_id":1408
    },{
      "function":"__cl",
      "tag_id":1409
    },{
      "function":"__cl",
      "tag_id":1410
    },{
      "function":"__cl",
      "tag_id":1411
    },{
      "function":"__cl",
      "tag_id":1412
    },{
      "function":"__cl",
      "tag_id":1413
    },{
      "function":"__cl",
      "tag_id":1414
    },{
      "function":"__cl",
      "tag_id":1415
    },{
      "function":"__cl",
      "tag_id":1416
    },{
      "function":"__cl",
      "tag_id":1417
    },{
      "function":"__cl",
      "tag_id":1418
    },{
      "function":"__cl",
      "tag_id":1419
    },{
      "function":"__cl",
      "tag_id":1420
    },{
      "function":"__cl",
      "tag_id":1421
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1128",
      "tag_id":1422
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1131",
      "tag_id":1423
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1132",
      "tag_id":1424
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1135",
      "tag_id":1425
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1149",
      "tag_id":1426
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.form-bac form",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"20",
      "vtp_uniqueTriggerId":"8219063_1152",
      "tag_id":1427
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1158",
      "tag_id":1428
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1170",
      "tag_id":1429
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1173",
      "tag_id":1430
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1187",
      "tag_id":1431
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1192",
      "tag_id":1432
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1202",
      "tag_id":1433
    },{
      "function":"__cl",
      "tag_id":1434
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1209",
      "tag_id":1435
    },{
      "function":"__cl",
      "tag_id":1436
    },{
      "function":"__cl",
      "tag_id":1437
    },{
      "function":"__cl",
      "tag_id":1438
    },{
      "function":"__cl",
      "tag_id":1439
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1223",
      "tag_id":1440
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1265",
      "tag_id":1441
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1269",
      "tag_id":1442
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1272",
      "tag_id":1443
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8219063_1291",
      "tag_id":1444
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(f,h){function l(a){a(window,\"beforeunload\")}function n(a){var b=a\u0026\u0026a[\"gtm.element\"];b\u0026\u0026b.nodeType\u0026\u0026(a.dataContext=p(b),m=!0);return a}function q(a){var b=f(a),d=jQuery.extend({},b.data());v.map(function(a){var e=d,k=b;k=(\"string\"==typeof k?f.trim(k):f.trim(k.attr(a))).replace(\/\\s+\/g,\" \");e[a]=k?k:h});return d}function w(a,b){var d=[];f(a).parents().each(function(a,e){d.push(b.call(e,e,a))});return d}function x(a){var b,d=!1;for(b in a)y.call(a,b)\u0026\u0026(\"\"===a[b]?a[b]=\"(not set)\":d\u0026\u0026a[b]===h\u0026\u0026\n(a[b]=\"(undefined)\"));return a}function p(a){var b=q(a);a=w(a,q);r\u0026\u0026console.info(\"Merging data sets\",b,a);a.map(function(a){b=jQuery.extend(a,b)});return x(b)}function t(){var a=\"event_profiling\\x3dtrue\";a=-1==document.cookie.indexOf(a);return z||!a}function A(a){function b(a){setInterval(function(){m\u0026\u0026(a.push({dataContext:h}),m=!1)},1E3)}a.fn.dataContext=function(){return a.makeArray(this).map(p)};a(document).ready(function(){l(function(b,g,e){a(b).on(g,e,function(a){l.dataLayer.push({event:\"context.\"+\na.type,\"gtm.element\":a.target})})})});(function(a,g){function e(){var a=c.track;if(a\u0026\u0026c.end){var b=(c.end-c.start)\/1E3;console.info(\"Processed %d variables in %f seconds\",a,b)}c.id++;c.track=0;c.start=(new Date).getTime();c.end=0}var d=a.push,f=Array.prototype.slice,h=g\u0026\u0026g.e,c={id:0,track:0,start:0,end:0};l.dataLayer=a;b(a);setInterval(function(){t()\u0026\u0026e()},1E3);h\u0026\u0026(g.e=function(a){c.track++;c.end=(new Date).getTime();return h(a)});a.push=function(){if(t())return b=f.call(arguments,0).map(function(b){if(b.event){e();\nvar c=\"dl\/\"+b.event,f=b.eventCallback;console.time(c);console.profile(c);b.eventCallback=function(){f\u0026\u0026f.apply(this,arguments);console.profileEnd();console.timeEnd(c);e()}}return d.call(a,n(b))}),b[b.length-1];var b=f.call(arguments,0).map(n);r\u0026\u0026b.map(function(a){console.log(\"dl:\",a)});return d.apply(a,b)}})(window[u]=window[u]||[],window.google_tag_manager)}var r=!1,u=\"dataLayer\",v=\"alt;title;aria expanded;id;value;rel\".split(\";\"),m=!1,z=!1,y=Object.prototype.hasOwnProperty;(function(a,b,d){var g=\nb\/d,e=setInterval(function(){window[a]?(A(f=window[a]),clearInterval(e)):1\u003Eg\u0026\u0026clearInterval(e);g--},d)})(\"jQuery\",1E4,50)})(null);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":2
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",",["escape",["macro",351],8,16],");fbq(\"track\",\"PageView\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _elqQ=_elqQ||[];_elqQ.push([\"elqSetSiteId\",\"1849907385\"]);_elqQ.push([\"elqUseFirstPartyCookie\",\"elqact.gartner.com\"]);_elqQ.push([\"elqTrackPageView\"]);\"true\"==",["escape",["macro",352],8,16],"\u0026\u0026(_elqQ.push([\"elqSetSiteId\",\"68275882\"]),_elqQ.push([\"elqUseFirstPartyCookie\",\"elqact.gartner.com\"]),_elqQ.push([\"elqTrackPageView\"]));var s=document.createElement(\"script\");s.type=\"text\/javascript\";s.async=!0;s.src=\"\/\/img.en25.com\/i\/elqCfg.min.js\";var x=document.getElementsByTagName(\"script\")[0];\nx.parentNode.insertBefore(s,x);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",11,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=",["escape",["macro",104],8,16],",c=",["escape",["macro",198],8,16],",b={};try{b=JSON.parse(c)}catch(e){}if(!b.hasOwnProperty(a)){b[a]=1;c=JSON.stringify(b);a=\"__viewedEventCodes\\x3d\"+c+\";\";var d=new Date;d.setTime(d.getTime()+18E5);document.cookie=a+\"expires\\x3d\"+d.toGMTString()+\";path\\x3d\/\"}}catch(e){console.log(e)}})();\u003C\/script\u003E  "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(a,b){var c=document.getElementsByName(a);if(c)for(var d=0;d\u003Cc.length;d++)c[d].value=b}try{var a=",["escape",["macro",356],8,16],";document.getElementById(\"lead-gen-utm-campaign\")\u0026\u0026(document.getElementById(\"lead-gen-utm-campaign\").value=",["escape",["macro",181],8,16],"||a.campaign);document.getElementById(\"lead-gen-utm-source\")\u0026\u0026(document.getElementById(\"lead-gen-utm-source\").value=",["escape",["macro",357],8,16],"||a.source);document.getElementById(\"lead-gen-utm-medium\")\u0026\u0026(document.getElementById(\"lead-gen-utm-medium\").value=\n",["escape",["macro",358],8,16],"||a.medium);document.getElementById(\"lead-gen-utm-content\")\u0026\u0026(document.getElementById(\"lead-gen-utm-content\").value=",["escape",["macro",359],8,16],"||a.content);document.getElementById(\"lead-gen-utm-content\")\u0026\u0026(document.getElementById(\"lead-gen-utm-term\").value=",["escape",["macro",360],8,16],"||a.keywords);document.getElementById(\"utm-campaign\")\u0026\u0026(document.getElementById(\"utm-campaign\").value=",["escape",["macro",181],8,16],"||a.campaign);document.getElementById(\"utm-source\")\u0026\u0026(document.getElementById(\"utm-source\").value=\n",["escape",["macro",357],8,16],"||a.source);document.getElementById(\"utm-medium\")\u0026\u0026(document.getElementById(\"utm-medium\").value=",["escape",["macro",358],8,16],"||a.medium);document.getElementById(\"utm-content\")\u0026\u0026(document.getElementById(\"utm-content\").value=",["escape",["macro",359],8,16],"||a.content);b(\"utm_campaign\",",["escape",["macro",181],8,16],"||a.campaign);b(\"utm_source\",",["escape",["macro",357],8,16],"||a.source);b(\"utm_medium\",",["escape",["macro",358],8,16],"||a.medium);b(\"utm_content\",",["escape",["macro",359],8,16],"||a.content);b(\"utm_term\",",["escape",["macro",360],8,16],"||\na.keywords);b(\"refURL_Host\",",["escape",["macro",361],8,16],"||\"none\");b(\"refURL_Path\",",["escape",["macro",362],8,16],"||\"none\");b(\"curURL\",",["escape",["macro",24],8,16],"||\"none\");b(\"ga_client_id\",",["escape",["macro",17],8,16],"||\"none\")}catch(e){console.log(e)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"infinity.tracking\"});var _ictt=_ictt||[];_ictt.push([\"_setIgrp\",\"2593\"]);_ictt.push([\"_setCustomVar\",[\"siteCode\",",["escape",["macro",44],8,16],"]]);_ictt.push([\"_setCustomVar\",[\"eventCode\",",["escape",["macro",105],8,16],"]]);_ictt.push([\"_setCustomVar\",[\"eventGroup\",",["escape",["macro",109],8,16],"]]);_ictt.push([\"_setCustomVar\",[\"eventLocation\",",["escape",["macro",107],8,16],"]]);_ictt.push([\"_setCustomVar\",[\"eventPrimaryRole\",",["escape",["macro",111],8,16],"]]);_ictt.push([\"_setCustomVar\",[\"eventRegion\",",["escape",["macro",114],8,16],"]]);\n_ictt.push([\"_setCustomVar\",[\"eventType\",",["escape",["macro",116],8,16],"]]);_ictt.push([\"_setCustomVar\",[\"function\",",["escape",["macro",150],8,16],"]]);_ictt.push([\"_setCustomVar\",[\"type\",",["escape",["macro",144],8,16],"]]);_ictt.push([\"_setCustomVar\",[\"contentType\",",["escape",["macro",154],8,16],"]]);_ictt.push([\"_setCustomVar\",[\"campaignName\",",["escape",["macro",161],8,16],"]]);_ictt.push([\"_enableGAIntegration\",{gua:!0,ga:!1}]);_ictt.push([\"_enableAutoDiscovery\"]);_ictt.push([\"_track\"]);\n(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"ict.infinity-tracking.net\/js\/nas.v1.min.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({scrollThreshold:{",["escape",["macro",364],7],":",["escape",["macro",364],8,16],"}});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\n\u003Cscript data-gtmsrc=\"https:\/\/play.vidyard.com\/v0\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{var __an_ids;__an_ids=document.getElementsByTagName(\"iframe\")\u0026\u0026-1\u003Cdocument.getElementsByTagName(\"iframe\")[0].id.indexOf(\"vidyard_iframe_\")?document.getElementsByTagName(\"iframe\")[0].id.split(\"vidyard_iframe_\")[1]:\"\";Vidyard._players||(Vidyard._players={});Vidyard._players\u0026\u0026!Vidyard._players[__an_ids]\u0026\u0026(Vidyard._players[__an_ids]=\"\",Vidyard._players[__an_ids].started=!1)}catch(a){dataLayer.push({event:\"js error\",\"gtm.errorMessage\":a,tagName:\"Utility - Vidyard - V2\",tagID:88}),console.error({tagId:88,\nerror:a})}(function(){try{for(var a in Vidyard._players)Vidyard._players.hasOwnProperty(a)\u0026\u0026(window.__an_vidyard_mt=window.__an_vidyard_mt||{},window.__an_vidyard_mt[a]||(window.__an_vidyard_mt[a]=0))}catch(c){console.error({tagId:88,error:c})}})();\n(function(a){function c(e){if(k[e])return k[e].exports;var r=k[e]={i:e,l:!1,exports:{}};a[e].call(r.exports,r,r.exports,c);r.l=!0;return r.exports}var k={};c.m=a;c.c=k;c.d=function(e,a,k){c.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:k})};c.n=function(a){var e=a\u0026\u0026a.__esModule?function(){return a[\"default\"]}:function(){return a};c.d(e,\"a\",e);return e};c.o=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)};c.p=\"https:\/\/assets.vidyard.com\/play\/\";return c(c.s=5)})({5:function(a,\nc,k){a.exports=k(6)},6:function(a,c){var k=\"function\"===typeof Symbol\u0026\u0026\"symbol\"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a\u0026\u0026\"function\"===typeof Symbol\u0026\u0026a.constructor===Symbol\u0026\u0026a!==Symbol.prototype?\"symbol\":typeof a};(function(a){function c(b,p,c){function e(){var a=b.getCurrentChapter();d[a]={interval:[0,0],intervals:m.create(),thresholds:c.slice()};return d[a]}var d=[],t=!1,u=b.getCurrentChapter();b.on(\"timeupdate\",function(a){var c=b.getCurrentChapter();if(u!==c)u=\nc;else{var l=a;a=p;Math.floor(l)\u003Ewindow.__an_vidyard_mt[b.uuid]\u0026\u0026(window.__an_vidyard_mt[b.uuid]=Math.floor(l));c=0;var g=b.getCurrentChapter();\"undefined\"===typeof d[g]\u0026\u0026e();if(!(t||\"object\"!==k(b.metadata)||l\u003C=d[g].interval[1])){d[g].interval[1]=l;l=d[g].intervals.insertOne(d[g].interval);var h=d[g].intervals;var f=null;var q=[],n;for(n=0;n\u003Ch.length;++n)!f||f[1]\u003Ch[n][0]?(f\u0026\u0026q.push(f),f=[h[n][0],h[n][1]]):h[n][1]\u003Ef[1]\u0026\u0026(f[1]=h[n][1]);f\u0026\u0026q.push(f);h=q;if(h.length+1\u003Cd[g].intervals.length)for(d[g].intervals=\nm.create(),f=0;f\u003Ch.length;++f)c+=h[f][1]-h[f][0],d[g].intervals.insertOne(h[f]);else{for(f=0;f\u003Ch.length;++f)c+=h[f][1]-h[f][0];d[g].intervals.remove(l)}c=\"number\"===typeof b.metadata.chapters_attributes[g].video_attributes.length_in_milliseconds?c\/b.metadata.chapters_attributes[g].video_attributes.length_in_milliseconds*1E5:c\/b.metadata.chapters_attributes[g].video_attributes.length_in_seconds*100;Math.round(c)\u003E=d[g].thresholds[0]\u0026\u0026a({player:b,chapter:g,event:d[g].thresholds.shift()})}}});b.on(\"beforeSeek\",\nfunction(a){var c=b.getCurrentChapter();!1===t\u0026\u0026(d[c].interval[1]=a.start);t=!0});b.on(\"play\",function(c){a._players[b.uuid]\u0026\u0026!1===a._players[b.uuid].started\u0026\u0026(a._players[b.uuid].started=!0,dataLayer.push({event:\"vidyard\",vidyard_action:\"play\",vidyard_status:b.status,vidyard_metadata:b.metadata,vidyard_id:b.uuid,vidyard_max_played_time:window.__an_vidyard_mt[b.uuid]}));var l=b.getCurrentChapter();\"undefined\"===typeof d[l]\u0026\u0026e();d[l].intervals.insertOne(d[l].interval.slice(0));d[l].interval[0]=c;d[l].interval[1]=\nc;t=!1});b.on(\"chapterComplete\",function(a){dataLayer.push({event:\"vidyard\",vidyard_action:\"chapter-completed\",vidyard_status:b.status,vidyard_metadata:b.metadata,vidyard_id:b.uuid,vidyard_max_played_time:window.__an_vidyard_mt[b.uuid]});d[a].interval=[0,0];t=!1});b.on(\"pause\",function(c){a._players[b.uuid].started=!1;dataLayer.push({event:\"vidyard\",vidyard_action:\"pause\",vidyard_status:b.status,vidyard_metadata:b.metadata,vidyard_id:b.uuid,vidyard_max_played_time:window.__an_vidyard_mt[b.uuid]})});\nb.on(\"playerComplete\",function(a){dataLayer.push({event:\"vidyard\",vidyard_action:\"complete\",vidyard_status:b.status,vidyard_metadata:b.metadata,vidyard_id:b.uuid,vidyard_max_played_time:window.__an_vidyard_mt[b.uuid]})});b.on(\"error\",function(a){dataLayer.push({event:\"vidyard\",vidyard_action:\"error\",vidyard_status:b.status,vidyard_metadata:b.metadata,vidyard_id:b.uuid,vidyard_max_played_time:window.__an_vidyard_mt[b.uuid]})});b.on(\"fullScreenChange\",function(a){a=!0===a?\"on\":\"off\";dataLayer.push({event:\"vidyard\",\nvidyard_action:\"fullscreen \"+a,vidyard_status:b.status,vidyard_metadata:b.metadata,vidyard_id:b.uuid,vidyard_max_played_time:window.__an_vidyard_mt[b.uuid]})});b.on(\"volumeChange\",function(a){dataLayer.push({event:\"vidyard\",vidyard_action:\"volume-change\",vidyard_status:b.status,vidyard_metadata:b.metadata,vidyard_id:b.uuid,vidyard_max_played_time:window.__an_vidyard_mt[b.uuid]})})}function e(b,p){function e(b){b.sort(function(b,a){return b\u003Ca?-1:b\u003Ea?1:0});for(var a=0;a\u003Cb.length;)b[a]===b[a+1]?b.splice(a+\n1,1):a+=1;return b}var q=!0;p=p||[1,25,50,75,90];try{var d=new a.players}catch(u){throw Error(\"The Vidyard Player API must be loaded before this script can execute\");}p=e(p);for(var k in d)d.hasOwnProperty(k)\u0026\u00260\u003Ck.length\u0026\u0026(c(d[k],b,p),q=!1);q\u0026\u0026console.warn(\"No Vidyard Players found. (include this script below player embed codes)\")}var m=function(){this._compare=function(b,a){return b[0]\u003Ca[0]?-1:b[0]\u003Ea[0]?1:b[1]\u003Ca[1]?-1:b[1]\u003Ea[1]?1:0}};m.create=function(){return new m};m.prototype=[];m.prototype.constructor=\nArray.prototype.constructor;m.prototype.insertOne=function(a){var b=this.bsearch(a);this.splice(b+1,0,a);return b+1};m.prototype.remove=function(a){this.splice(a,1);return this};m.prototype.bsearch=function(a){if(!this.length)return-1;for(var b,c,e=0,d=this.length;1\u003Cd-e;){b=Math.floor((e+d)\/2);c=this[b];c=this._compare(a,c);if(0===c)return b;0\u003Cc?e=b:d=b}return 0===e\u0026\u00260\u003Cthis._compare(this[0],a)?-1:e};window.VidyardProgressEvents=e})(window.Vidyard)}});\ntry{VidyardProgressEvents(function(a){1==a.event?dataLayer.push({event:\"vidyard\",vidyard_action:\"play\",vidyard_status:a.player.status,vidyard_metadata:a.player.metadata,vidyard_id:a.player.uuid,vidyard_max_played_time:window.__an_vidyard_mt[a.player.uuid]}):dataLayer.push({event:\"vidyard\",vidyard_action:\"progress: \"+a.event+\"%\",vidyard_status:a.player.status,vidyard_metadata:a.player.metadata,vidyard_id:a.player.uuid,vidyard_max_played_time:window.__an_vidyard_mt[a.player.uuid]})},[1,25,50,75,90])}catch(a){dataLayer.push({event:\"js error\",\n\"gtm.errorMessage\":a,tagName:\"Utility - Vidyard - V2\",tagID:88}),console.error({tagId:88,error:a})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a,c=function(b){\"https:\/\/www.brighttalk.com\"==b.origin\u0026\u0026(a=JSON.parse(b.data),\"tracking-event\"==a.header.name\u0026\u0026\"BrightTALK Conversion\"==a.body.eventType\u0026\u0026dataLayer.push({event:\"brighttalk conversion\",brighttalk_action:a.body.eventAction,\"webinar-id\":document.location.pathname.split(\"\/\")[3]}))};window.addEventListener(\"message\",c,!1)}catch(b){}})();\u003C\/script\u003E  ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/www.everestjs.net\/static\/amo-conversion-mapper.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Contact\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":146
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c,d,e){a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.id=e;a.src=d;b.parentNode.insertBefore(a,b)})(window,document,\"script\",\"https:\/\/scripts.demandbase.com\/4b9d2aa6.min.js\",\"demandbase_js_lib\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Agenda\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Exhibitors Page\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Homepage\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Marketing Landing Page\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Quick Collect\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Registration Start\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Why Attend\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(a){switch(a.type){case \"timeupdate\":b[a.target.id].current=Math.round(a.target.currentTime);var d=Math.floor(100*b[a.target.id].current\/a.target.duration),c;for(c in b[a.target.id]._progress_markers)d\u003E=c\u0026\u0026c\u003Eb[a.target.id].greatest_marker\u0026\u0026(b[a.target.id].greatest_marker=c);b[a.target.id].greatest_marker\u0026\u0026!b[a.target.id]._progress_markers[b[a.target.id].greatest_marker]\u0026\u0026(b[a.target.id]._progress_markers[b[a.target.id].greatest_marker]=!0,dataLayer.push({event:\"gaEvent\",gaEventCategory:\"HTML5 Video\",\ngaEventAction:\"progress: \"+b[a.target.id].greatest_marker+\"%\",gaEventLabel:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1])}));break;case \"play\":dataLayer.push({event:\"gaEvent\",gaEventCategory:\"HTML5 Video\",gaEventAction:\"Play\",gaEventLabel:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1])});break;case \"pause\":dataLayer.push({event:\"gaEvent\",gaEventCategory:\"HTML5 Video\",gaEventAction:\"Pause\",gaEventLabel:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-\n1]),gaEventValue:b[a.target.id].current});break;case \"ended\":dataLayer.push({event:\"gaEvent\",gaEventCategory:\"HTML5 Video\",gaEventAction:\"Finished\",gaEventLabel:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1])})}}for(var g=25,b={},e=document.getElementsByTagName(\"audio\"),d=0;d\u003Ce.length;d++){if(e[d].getAttribute(\"id\"))var c=e[d].getAttribute(\"id\");else c=\"html5_video_\"+Math.random().toString(36).slice(2),e[d].setAttribute(\"id\",c);b[c]={};b[c].greatest_marker=\n0;b[c]._progress_markers={};for(j=0;100\u003Ej;j++)b[c].progress_point=g*Math.floor(j\/g),b[c]._progress_markers[b[c].progress_point]=!1;b[c].current=0;e[d].addEventListener(\"play\",f,!1);e[d].addEventListener(\"pause\",f,!1);e[d].addEventListener(\"ended\",f,!1);e[d].addEventListener(\"timeupdate\",f,!1)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":194
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var promoView=",["escape",["macro",260],8,16],",MAX_PROMO=30,i=0;i\u003CMath.ceil(promoView.length\/MAX_PROMO);i++)dataLayer.push({event:\"promoSplitView\",promoSplitIndex:MAX_PROMO*i,promoSplitView:promoView.filter(function(b,a){return a\u003E=MAX_PROMO*i\u0026\u0026a\u003CMAX_PROMO*(i+1)})});\u003C\/script\u003E  "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":195
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){for(var b=document.querySelectorAll(\"section\"),a=0;a\u003Cb.length;a++){var c=b[a];c.querySelector(\"section .subscribelink\")\u0026\u0026c.setAttribute(\"data-gtm-podcast-block\",\"Featured Shows\")}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar label=\"~Top Nav 2.0\";console.group(label);console.info(\"~ ea:\"+",["escape",["macro",306],8,16],");console.info(\"~ el:\"+",["escape",["macro",307],8,16],");console.info(\"~ Debug:\"+",["escape",["macro",366],8,16],");console.info(\"~ Container Version:\"+",["escape",["macro",22],8,16],");console.info(\"~ TagID:237\");console.groupEnd(label);\u003C\/script\u003E  "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":237
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"\/\/analytics.newscred.com\/analytics_716881b73ece4012a382138efe0abc9c.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":271
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{Array.prototype.chunk=function(a){var b=[],c=this.length;c=Math.ceil(c\/a);for(var d=0;d\u003Cc;d++)b.push(this.slice(d*a,d*a+a)||[]);return b};var g=22,b=jQuery(\".conference-link\"),e=[],a=new Date;a.getTimezoneOffset();var f=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a},h=a.getFullYear()+\"-\"+f(a.getMonth()+1)+\"-\"+f(a.getDate());for(a=0;a\u003Cb.length;a++){var k=b[a].dataset.gtmStartDate,l=Math.floor((Date.parse(k.replace(\/-\/g,\"\/\"))-Date.parse(h.replace(\/-\/g,\"\/\")))\/864E5),m=Math.floor(l\/\n7),n={name:b[a].dataset.gtmTitle,id:b[a].dataset.code,price:void 0,brand:b[a].dataset.type,category:\"Gartner Events\/\"+b[a].dataset.type+\"\/\"+b[a].dataset.region+\"\/\"+b[a].dataset.primaryRole+\"\/\"+b[a].dataset.group,dimension134:m,list:\"Events Calendar\",position:parseInt(b[a].dataset.index)};e.push(n)}impressions_chunks=e.chunk(g);for(a=0;a\u003Cimpressions_chunks.length;a++)dataLayer.push({event:\"EEC\",gaEventCategory:\"EM - Enhanced Ecommerce\",gaEventAction:\"Events Calendar\",gaEventLabel:\"Impressions\",gaEventNonInteraction:!0,\necommerce:{impressions:impressions_chunks[a]}})}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":291
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){if(",["escape",["macro",366],8,16],"){var d=dataLayer.push;dataLayer.push=function(){arguments[0].event\u0026\u0026\"gaEvent\"==arguments[0].event\u0026\u0026console.table([arguments[0]]);return d.apply(this,arguments)}}try{a(document).on(\"mousedown\",\".conference-tile a\",function(){var b=",["escape",["macro",367],8,16],",c=a(this).data(\"gtm-start-date\");b=Math.floor((Date.parse(c.replace(\/-\/g,\"\/\"))-Date.parse(b.replace(\/-\/g,\"\/\")))\/864E5);c=Math.floor(b\/7);dataLayer.push({event:\"EEC\",gaEventCategory:\"EM - Events Calendar\",gaEventAction:\"Tile Click\",\ngaEventLabel:a(this).data(\"type\")+\" : \"+a(this).data(\"code\"),gaEventNonInteraction:!1,customMetricIndex:void 0,gartnerEvent:{eventCode:a(this).data(\"code\"),eventType:a(this).data(\"type\"),eventStartDate:a(this).data(\"gtm-start-date\"),eventTitle:a(this).data(\"gtm-title\"),eventLocation:a(this).data(\"gtm-location\"),eventRegion:a(this).data(\"region\"),eventSecondaryRoles:a(this).data(\"secondary-roles\"),eventPrimaryRole:a(this).data(\"primary-role\"),eventGroup:a(this).data(\"group\"),eventDaysUntilEventStart:b.toString(),\neventWeeksUntilEventStart:c.toString()},tileLocation:a(this).data(\"index\"),ecommerce:{click:{actionField:{list:\"Events Calendar\"},products:[{name:a(this).data(\"gtm-title\"),id:a(this).data(\"code\"),brand:a(this).data(\"type\"),category:\"Gartner Events\/\"+a(this).data(\"type\")+\"\/\"+a(this).data(\"region\")+\"\/\"+a(this).data(\"group\")+\"\/\"+a(this).data(\"primary-role\"),dimension134:c.toString(),position:a(this).data(\"index\")}]}}})})}catch(b){dataLayer.push({event:\"gaEvent\",gaEventCategory:\"JavaScript Error\",gaEventAction:\"Utility - GA Events\"+\nb.name,gaEventLabel:b.message,gaEventValue:void 0,gaEventNonInteraction:!0,customMetricIndex:void 0,customMetricValue:void 0})}})(jQuery);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":309
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.defer=!0;a.src=document.location.protocol+\"\/\/dist.routingapi.com\/jsapi\/v1\/retreaver.min.js\";a.onload=a.onreadystatechange=function(){Retreaver.configure({host:\"api.routingapi.com\",prefix:\"https:\"==document.location.protocol?\"https\":\"http\"});(new Retreaver.Campaign({campaign_key:\"2af4587bd7e5a2ff5265973525f8ff0e\"})).auto_replace_numbers()};(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1054
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"\/\/gartner.api.useinsider.com\/ins.js?id=10004049\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1057
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ElementArray=document.querySelectorAll(\"div.custom-form form input,div.custom-form form select, div.custom-form form textarea, div.custom-form form input, div.custom-form form select, div.form-bac  form div.submit-form input, div.form-bac form div.submit-form select\"),TestField,FieldInteractedArray=[];ElementArray.forEach(fieldInteraction);\nfunction fieldInteraction(a){a.onchange=function(){TestField=jQuery(a);fieldChanged=0\u003CjQuery(a)[0].name.length?jQuery(a)[0].name:jQuery(a).closest(\".field-container\").find(\"label\")[0].getAttribute(\"for\");-1==FieldInteractedArray.indexOf(fieldChanged)\u0026\u0026(dataLayer.push({event:\"formFieldChanged\",formFieldChanged:fieldChanged}),FieldInteractedArray.push(fieldChanged))}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1124
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"\/\/analytics.newscred.com\/analytics_716881b73ece4012a382138efe0abc9c.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1196
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vgm\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vgm\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vgm\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o3f3w\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o3f3w\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o3f3w\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vk8\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vk8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vk8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vie\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vie\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vie\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o56cn\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o56cn\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o56cn\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1251
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vgl\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vgl\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vgl\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o3f3t\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o3f3t\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o3f3t\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vk6\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vk6\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vk6\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vid\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vid\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vid\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o56cl\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o56cl\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o56cl\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1252
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vgj\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vgj\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vgj\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4o7x\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4o7x\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4o7x\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vka\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vka\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vka\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vif\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vif\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vif\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o56cm\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o56cm\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o56cm\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1253
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vgi\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vgi\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vgi\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4o7v\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4o7v\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4o7v\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vk5\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vk5\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vk5\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o4vic\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o4vic\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o4vic\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n\n\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o56ck\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o56ck\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o56ck\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1254
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.driftt=window.drift=window.driftt||[];if(!a.init){if(a.invoked)return void(window.console\u0026\u0026console.error\u0026\u0026console.error(\"Drift snippet included twice.\"));a.invoked=!0;a.methods=\"identify config track reset debug show ping page hide off on\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};a.methods.forEach(function(c){a[c]=a.factory(c)});a.load=function(c){var b=3E5,d=Math.ceil(new Date\/b)*b;b=\ndocument.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.crossorigin=\"anonymous\";b.src=\"https:\/\/js.driftt.com\/include\/\"+d+\"\/\"+c+\".js\";c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)}}}();drift.SNIPPET_VERSION=\"0.3.1\";drift.load(\"vsu8txb288b8\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1262
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n MIT License - https:\/\/bitbucket.org\/pellepim\/jstimezonedetect\/src\/default\/LICENCE.txt\n\n For usage and examples, visit:\n http:\/\/pellepim.bitbucket.org\/jstz\/\n\n Copyright (c) Jon Nylander\n*\/\nvar jstz=function(){var y=\"s\",r=864E5,q=36E5,t=6E4,z=1E3,u=2014,A=864E6,v={\"America\/Denver\":[\"America\/Mazatlan\"],\"Europe\/London\":[\"Africa\/Casablanca\"],\"America\/Chicago\":[\"America\/Mexico_City\"],\"America\/Asuncion\":[\"America\/Campo_Grande\",\"America\/Santiago\"],\"America\/Montevideo\":[\"America\/Sao_Paulo\",\"America\/Santiago\"],\"Asia\/Beirut\":\"Asia\/Amman Asia\/Jerusalem Europe\/Helsinki Asia\/Damascus Africa\/Cairo Asia\/Gaza Europe\/Minsk\".split(\" \"),\"Pacific\/Auckland\":[\"Pacific\/Fiji\"],\"America\/Los_Angeles\":[\"America\/Santa_Isabel\"],\n\"America\/New_York\":[\"America\/Havana\"],\"America\/Halifax\":[\"America\/Goose_Bay\"],\"America\/Godthab\":[\"America\/Miquelon\"],\"Asia\/Dubai\":[\"Asia\/Yerevan\"],\"Asia\/Jakarta\":[\"Asia\/Krasnoyarsk\"],\"Asia\/Shanghai\":[\"Asia\/Irkutsk\",\"Australia\/Perth\"],\"Australia\/Sydney\":[\"Australia\/Lord_Howe\"],\"Asia\/Tokyo\":[\"Asia\/Yakutsk\"],\"Asia\/Dhaka\":[\"Asia\/Omsk\"],\"Asia\/Baku\":[\"Asia\/Yerevan\"],\"Australia\/Brisbane\":[\"Asia\/Vladivostok\"],\"Pacific\/Noumea\":[\"Asia\/Vladivostok\"],\"Pacific\/Majuro\":[\"Asia\/Kamchatka\",\"Pacific\/Fiji\"],\"Pacific\/Tongatapu\":[\"Pacific\/Apia\"],\n\"Asia\/Baghdad\":[\"Europe\/Minsk\",\"Europe\/Moscow\"],\"Asia\/Karachi\":[\"Asia\/Yekaterinburg\"],\"Africa\/Johannesburg\":[\"Asia\/Gaza\",\"Africa\/Cairo\"]},w=function(e){e=-e.getTimezoneOffset();return null!==e?e:0},B=function(){var e=w(new Date(u,0,2)),a=w(new Date(u,5,2)),b=e-a;return 0\u003Eb?e+\",1\":0\u003Cb?a+\",1,\"+y:e+\",0\"},C=function(){if(\"undefined\"!==typeof Intl\u0026\u0026\"undefined\"!==typeof Intl.DateTimeFormat){var e=Intl.DateTimeFormat();if(\"undefined\"!==typeof e\u0026\u0026\"undefined\"!==typeof e.resolvedOptions\u0026\u0026(e=e.resolvedOptions().timeZone)\u0026\u0026\n(-1\u003Ce.indexOf(\"\/\")||\"UTC\"===e))return e}},x=function d(a,b,c){\"undefined\"===typeof b\u0026\u0026(b=r,c=q);var n=(new Date(a.getTime()-b)).getTime();a=a.getTime()+b;for(var p=(new Date(n)).getTimezoneOffset(),h=null;n\u003Ca-c;){var l=new Date(n),g=l.getTimezoneOffset();if(g!==p){h=l;break}n+=c}return b===r?d(h,q,t):b===q?d(h,t,z):h},D=function(a,b,c,d){if(\"N\/A\"!==c)return c;if(\"Asia\/Beirut\"===b){if(\"Africa\/Cairo\"===d.name\u0026\u002613983768E5===a[6].s\u0026\u002614116788E5===a[6].e||\"Asia\/Jerusalem\"===d.name\u0026\u002613959648E5===a[6].s\u0026\u0026\n14118588E5===a[6].e)return 0}else if(\"America\/Santiago\"===b){if(\"America\/Asuncion\"===d.name\u0026\u002614124816E5===a[6].s\u0026\u00261397358E6===a[6].e||\"America\/Campo_Grande\"===d.name\u0026\u002614136912E5===a[6].s\u0026\u002613925196E5===a[6].e)return 0}else if(\"America\/Montevideo\"===b){if(\"America\/Sao_Paulo\"===d.name\u0026\u002614136876E5===a[6].s\u0026\u00261392516E6===a[6].e)return 0}else if(\"Pacific\/Auckland\"===b\u0026\u0026\"Pacific\/Fiji\"===d.name\u0026\u002614142456E5===a[6].s\u0026\u002613961016E5===a[6].e)return 0;return c},E=function(a,b){for(var c={},d=jstz.olson.dst_rules.zones,\nn=d.length,p=v[b],h=0;h\u003Cn;h++){var l=d[h];var g=d[h];for(var k=0,f=0;f\u003Ca.length;f++)if(g.rules[f]\u0026\u0026a[f]){if(a[f].s\u003E=g.rules[f].s\u0026\u0026a[f].e\u003C=g.rules[f].e)k=0,k+=Math.abs(a[f].s-g.rules[f].s),k+=Math.abs(g.rules[f].e-a[f].e);else{k=\"N\/A\";break}if(k\u003EA){k=\"N\/A\";break}}g=k=D(a,b,k,g);\"N\/A\"!==g\u0026\u0026(c[l.name]=g)}for(var m in c)if(c.hasOwnProperty(m))for(d=0;d\u003Cp.length;d++)if(p[d]===m)return m;return b},F=function(a){var b=function(){for(var a=[],b=0;b\u003Cjstz.olson.dst_rules.years.length;b++){var c=jstz.olson.dst_rules.years[b];\nvar h=(new Date(c,0,1,0,0,1,0)).getTime();c=(new Date(c,12,31,23,59,59)).getTime();for(var l=(new Date(h)).getTimezoneOffset(),g=null,k=null;h\u003Cc-864E5;){var f=new Date(h),m=f.getTimezoneOffset();m!==l\u0026\u0026(m\u003Cl\u0026\u0026(g=f),m\u003El\u0026\u0026(k=f),l=m);h+=864E5}c=g\u0026\u0026k?{s:x(g).getTime(),e:x(k).getTime()}:!1;a.push(c)}return a},c=function(a){for(var b=0;b\u003Ca.length;b++)if(!1!==a[b])return!0;return!1};b=b();return(c=c(b))?E(b,a):a},G=function(){var a=C();a||(a=jstz.olson.timezones[B()],\"undefined\"!==typeof v[a]\u0026\u0026(a=F(a)));\nreturn{name:function(){return a}}};return{determine:G}}();jstz.olson=jstz.olson||{};\njstz.olson.timezones={\"-720,0\":\"Etc\/GMT+12\",\"-660,0\":\"Pacific\/Pago_Pago\",\"-660,1,s\":\"Pacific\/Apia\",\"-600,1\":\"America\/Adak\",\"-600,0\":\"Pacific\/Honolulu\",\"-570,0\":\"Pacific\/Marquesas\",\"-540,0\":\"Pacific\/Gambier\",\"-540,1\":\"America\/Anchorage\",\"-480,1\":\"America\/Los_Angeles\",\"-480,0\":\"Pacific\/Pitcairn\",\"-420,0\":\"America\/Phoenix\",\"-420,1\":\"America\/Denver\",\"-360,0\":\"America\/Guatemala\",\"-360,1\":\"America\/Chicago\",\"-360,1,s\":\"Pacific\/Easter\",\"-300,0\":\"America\/Bogota\",\"-300,1\":\"America\/New_York\",\"-270,0\":\"America\/Caracas\",\n\"-240,1\":\"America\/Halifax\",\"-240,0\":\"America\/Santo_Domingo\",\"-240,1,s\":\"America\/Asuncion\",\"-210,1\":\"America\/St_Johns\",\"-180,1\":\"America\/Godthab\",\"-180,0\":\"America\/Argentina\/Buenos_Aires\",\"-180,1,s\":\"America\/Montevideo\",\"-120,0\":\"America\/Noronha\",\"-120,1\":\"America\/Noronha\",\"-60,1\":\"Atlantic\/Azores\",\"-60,0\":\"Atlantic\/Cape_Verde\",\"0,0\":\"UTC\",\"0,1\":\"Europe\/London\",\"60,1\":\"Europe\/Berlin\",\"60,0\":\"Africa\/Lagos\",\"60,1,s\":\"Africa\/Windhoek\",\"120,1\":\"Asia\/Beirut\",\"120,0\":\"Africa\/Johannesburg\",\"180,0\":\"Asia\/Baghdad\",\n\"180,1\":\"Europe\/Moscow\",\"210,1\":\"Asia\/Tehran\",\"240,0\":\"Asia\/Dubai\",\"240,1\":\"Asia\/Baku\",\"270,0\":\"Asia\/Kabul\",\"300,1\":\"Asia\/Yekaterinburg\",\"300,0\":\"Asia\/Karachi\",\"330,0\":\"Asia\/Kolkata\",\"345,0\":\"Asia\/Kathmandu\",\"360,0\":\"Asia\/Dhaka\",\"360,1\":\"Asia\/Omsk\",\"390,0\":\"Asia\/Rangoon\",\"420,1\":\"Asia\/Krasnoyarsk\",\"420,0\":\"Asia\/Jakarta\",\"480,0\":\"Asia\/Shanghai\",\"480,1\":\"Asia\/Irkutsk\",\"525,0\":\"Australia\/Eucla\",\"525,1,s\":\"Australia\/Eucla\",\"540,1\":\"Asia\/Yakutsk\",\"540,0\":\"Asia\/Tokyo\",\"570,0\":\"Australia\/Darwin\",\"570,1,s\":\"Australia\/Adelaide\",\n\"600,0\":\"Australia\/Brisbane\",\"600,1\":\"Asia\/Vladivostok\",\"600,1,s\":\"Australia\/Sydney\",\"630,1,s\":\"Australia\/Lord_Howe\",\"660,1\":\"Asia\/Kamchatka\",\"660,0\":\"Pacific\/Noumea\",\"690,0\":\"Pacific\/Norfolk\",\"720,1,s\":\"Pacific\/Auckland\",\"720,0\":\"Pacific\/Majuro\",\"765,1,s\":\"Pacific\/Chatham\",\"780,0\":\"Pacific\/Tongatapu\",\"780,1,s\":\"Pacific\/Apia\",\"840,0\":\"Pacific\/Kiritimati\"};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\\\/cn($|\\?|\\\/)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"datalayer-initialized"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#fresponsive a"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_22($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"ul.navbar-nav a"
    },{
      "function":"_eq",
      "arg0":["macro",190],
      "arg1":"Events Site"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_25($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"ul.navbar-right a"
    },{
      "function":"_re",
      "arg0":["macro",194],
      "arg1":"^register$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_27($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",194],
      "arg1":"^login$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_28($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"a.btBtn.btnNormalWidth, a.btBtn.btnFullWidth"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/register$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_30($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",199],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",104],
      "arg1":"n\\\/a|false|null|undefined|.*not.*set.*|^$",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"[class*=text] a, p a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_45($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"[class*=articletext] li a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_47($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",202],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_50($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div.globalsite.cmp-globalsite-pagefilter section div.row.dynamic-content a"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/[a-z]{2}\/?$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_52($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",207],
      "arg1":"signin-button"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",208],
      "arg1":"signinredirect"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_121($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".for-mobile.m-signin"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_246($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"a.signin-link"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_264($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",130],
      "arg1":"mailto:"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_58($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".member a"
    },{
      "function":"_cn",
      "arg0":["macro",130],
      "arg1":"speaker"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_60($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"footer.footer a"
    },{
      "function":"_eq",
      "arg0":["macro",130],
      "arg1":"https:\/\/www.gartner.com\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\\/en($|\\?|\\\/.*)"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_66($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"a.footer-link"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\\/en($|\\?|\\\/.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_539($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div:nth-child(3) \u003E ul"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_540($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"footer div.social-share a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_67($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".footer-links a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_69($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".footer-logo a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_71($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"section.page-filter .filter-center ul li a[data-value]"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/en"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#globalMainMenu .navbar-nav a"
    },{
      "function":"_re",
      "arg0":["macro",214],
      "arg1":"undefined|^$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_99($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"a.back"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_135($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"[data-toggle],[data-toggle] *"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"[aria-expanded=true], [aria-expanded=true] *"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#agenda-filter a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_117($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/en\/digital-markets"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"context.beforeunload"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_181($|,)))"
    },{
      "function":"_lt",
      "arg0":["macro",234],
      "arg1":"10"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.pageError"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_183($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"vidyard"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".collapsed, .collapsed *"
    },{
      "function":"_eq",
      "arg0":["macro",245],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"formSuccess"
    },{
      "function":"_re",
      "arg0":["macro",246],
      "arg1":"^EVT",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",173],
      "arg1":"exhibitor",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"formStep"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".smart-block-content a"
    },{
      "function":"_re",
      "arg0":["macro",144],
      "arg1":"Search Results",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_201($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div.search-result  div.search-item.row a.result-heading"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/en\/search",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",130],
      "arg1":".*\\\/doc\\\/([0-9]+).*"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_202($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div.search-result div.search-item.row a.result-heading"
    },{
      "function":"_re",
      "arg0":["macro",130],
      "arg1":"\/webinar(s)?\/([0-9]+)"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_203($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div.cmp-globalsite-button a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_206($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".modal-wrap__content a.btn"
    },{
      "function":"_cn",
      "arg0":["macro",211],
      "arg1":"become-a-client"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div#global-navbar li.bac-btn-container.global-nav-bac \u003E a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_55($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/en\/(sales|information-technology|marketing|human-resources|finance)\/glossary",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_795($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",260],
      "arg1":"undefined|^$|^\\[\\]$|null"
    },{
      "function":"_eq",
      "arg0":["macro",144],
      "arg1":"Home"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"newPromotionsAdded"
    },{
      "function":"_gt",
      "arg0":["macro",261],
      "arg1":"30"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/[a-z]{2}\/?$"
    },{
      "function":"_re",
      "arg0":["macro",266],
      "arg1":"undefined|null|^$"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".individual-block a, .home-insight .feature-category-content a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_211($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".home-insight .feature-category-content a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_229($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div.search-item.banner-div a"
    },{
      "function":"_re",
      "arg0":["macro",130],
      "arg1":".*\\\/events\\\/.*|\/conferences\/"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_213($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".col-md-9 .aem-Grid.aem-Grid--12 article a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_215($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".tabs-wrapper article h4 a"
    },{
      "function":"_re",
      "arg0":["macro",270],
      "arg1":"undefined|null|^$"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_217($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"article a"
    },{
      "function":"_re",
      "arg0":["macro",271],
      "arg1":"undefined|null|^$"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_218($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",144],
      "arg1":"Research Methodology"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".publication-table a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_219($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\\/en\\\/?"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_226($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#search-img, #navigation-affix #affix-search, #navigation-affix #affix-search *"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#searchString, #searchString *"
    },{
      "function":"_re",
      "arg0":["macro",130],
      "arg1":"\/newsroom\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_237($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_238($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",130],
      "arg1":"\/en\/.*\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_239($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#secondary-nav a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_245($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"article h4 a"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/en\/webinars\/?$"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_251($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",278],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_252($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",280],
      "arg1":"not set|undefined|^$|null"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".modal-wrap, .modal-wrap *"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".btn, .btn *"
    },{
      "function":"_re",
      "arg0":["macro",194],
      "arg1":"contact us",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".cards a.card__link"
    },{
      "function":"_re",
      "arg0":["macro",144],
      "arg1":"interactive",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_273($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".cards__middle .cards__btn, .cards__middle .cards__btn *"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#httpBoard .modal-wrap .btn, #httpboard .modal-wrap .btn,#httpBoard .modal-wrap .btn *, #httpboard .modal-wrap .btn *"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#conferenceMiniSiteNavBar a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_281($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".cmp-conferenceminisite-button a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_282($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".cmp-conferenceminisite-featuredbox a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_283($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".accordion-panel-heading-clicked,.accordion-panel-heading-clicked *"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_285($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"webinar"
    },{
      "function":"_re",
      "arg0":["macro",265],
      "arg1":"[0-9]"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_327($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/conferences\/.*\/agenda"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"\/conferences\/.*\/exhibitors"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"Events Site"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"Home"
    },{
      "function":"_re",
      "arg0":["macro",173],
      "arg1":"campaign",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",173],
      "arg1":"quick collect",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"Events Site"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/conferences\/.*\/register",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/conferences\/.*\/why-attend"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"js error"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"become-a-client"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_354($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"become-a-client",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_355($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_356($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_357($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_358($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_359($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_360($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_361($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"a[data-timestamp]"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/en\/podcasts\/thinkcast\/"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_378($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/en\/podcasts\/"
    },{
      "function":"_eq",
      "arg0":["macro",293],
      "arg1":"HTML5 Video"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gaEvent"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"a.subscribelink, .subscribers a, a.podlink"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_380($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".social-share a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_381($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"promoSplitView"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/en\/podcasts"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"[data-gtm-podcast-block=\"Featured Shows\"] .image a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_418($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/en\/podcasts\/[^\\\/]+$"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".image a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_423($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"[data-gtm-podcast-block=\"Featured Shows\"] h4 a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_419($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"h3 a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_422($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/en\/podcasts.*"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".individual-block.podcast .link a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_424($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".load-more.button, .load-more.button *"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/en\/podcasts"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".article a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_426($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"vid.gartner.com"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"\/webinars\/[0-9]"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"Webinar"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"article p a"
    },{
      "function":"_cn",
      "arg0":["macro",130],
      "arg1":"mailto"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_542($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#primarynav a.nav-link"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\\/[a-z]{2}($|\\?|\\\/.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_544($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#globalNavAccordion a.nav-link, #globalNavAccordion a.nav-link *"
    },{
      "function":"_eq",
      "arg0":["macro",305],
      "arg1":"contextual"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".js-collapse, .js-collapse *"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_564($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",208],
      "arg1":"btn btn-primary button-block btn-lg"
    },{
      "function":"_eq",
      "arg0":["macro",187],
      "arg1":"https:\/\/www.gartner.com\/en\/trends\/top-insights"
    },{
      "function":"_eq",
      "arg0":["macro",194],
      "arg1":"Download Now"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_554($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_580($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div#globalMainMenu div.childlinks.it.open"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_538($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#mobileContextualAccordion a, #mobileContextualAccordion a *"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#primarynav.js-global-nav li  a.nav-link"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\\\/[a-z]{2}($|\\?|\\\/.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1202($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".dropdown-menu.global-nav-menu li a.nav-link"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#primarynav.js-context-nav li  a.nav-link"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1209($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#cmp-globalsite-mobile-contextualnav ul li a"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"footer .hide-mobile a.footer-top-link,footer .hide-mobile a.nav-link"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"footer .hide-desktop a.footer-top-link,footer .hide-desktop a.nav-link[data-nav-category]"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/en\/marketing\/research"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".individual-block a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_590($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/en\/marketing\/research"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_589($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",208],
      "arg1":"bac-btn"
    },{
      "function":"_eq",
      "arg0":["macro",310],
      "arg1":"#globalNavAccordion"
    },{
      "function":"_eq",
      "arg0":["macro",283],
      "arg1":"global-navbar"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"brighttalk conversion"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/conferences\/emea\/symposium-spain\/why-attend",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",181],
      "arg1":"EVT_EMEA_2019_ESC31_PP_MP1_INBOXINSIGHTS",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#topTab1 li, #topTab1 li *"
    },{
      "function":"_re",
      "arg0":["macro",173],
      "arg1":"bac",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"webinar",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/register\/mobile-registration",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_723($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"form.formOne .form-submit-button, a.event-register-button"
    },{
      "function":"_ew",
      "arg0":["macro",1],
      "arg1":"\/register"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".button-gray"
    },{
      "function":"_re",
      "arg0":["macro",294],
      "arg1":"Calendar|tile",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"EEC"
    },{
      "function":"_eq",
      "arg0":["macro",208],
      "arg1":"result-heading p-small"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/en(\/(sales|information-technology|marketing|human-resources|finance))?\/glossary",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",321],
      "arg1":"search",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_787($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/en(\/(information-technology|marketing|human-resources|finance|sales))?\/glossary",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_788($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"p:nth-child(4) \u003E a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_789($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",208],
      "arg1":"p-small"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_790($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",208],
      "arg1":"Selected|key",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_791($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",259],
      "arg1":"Related Content",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_792($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",246],
      "arg1":"undefined",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"btPlayerDisplayed"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".help-icon-container a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_809($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",326],
      "arg1":".+",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"keywordsearched"
    },{
      "function":"_re",
      "arg0":["macro",246],
      "arg1":"getStarted",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",173],
      "arg1":"connect",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"en\/conferences\/apac\/symposium-australia\/cio-content-week"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"section.grid-norm a.btn"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/en\/glossary",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_842($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"Events Marketing",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",173],
      "arg1":"Digital Markets",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/digital-markets($|\\?)|\/digital-markets\/request-estimate",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"formSuccess"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\\/digital-markets\\\/basic-listing",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/en\/become-a-client($|\\?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/en\/digital-markets($|\\?)|\/en\/digital-markets\/request-estimate|\/en\/digital-markets\/basic-listing|\/en\/digital-markets\/get-started",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".main-container a.main-cta"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/[a-z]{2}($|\\?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1128($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div.promotion-A a.secondary-cta"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1131($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div.promotion-B a.secondary-cta"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1132($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"section.tablet-full div.globalsite.cmp-globalsite-button a.btn"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1135($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/en\/become-a-client($|\\?)|\/en\/digital-markets($|\\?)|\/en\/digital-markets\/request-estimate|\/en\/digital-markets\/basic-listing|\/en\/digital-markets\/get-started",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"formFieldChanged"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div.dynamic-content div.tile a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1149($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1152($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"section.tablet-full .dynamic-content a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1158($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".dynamic-filter div.dropdown ul.dropdown-menu  li a"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/en\/marketing\/insights\/articles($|\\?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1170($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".cmp-globalsite-articletext article.article-text a"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\\/en\\\/information-technology\\\/glossary\\\/cost-optimization|\\\/en\\\/information-technology\\\/glossary\\\/benchmarking",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1173($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"section .featuredicon-inner-wrapper article a"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/en\/.*\/events\/"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1187($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"div article  ul li a"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/2020-emea-spring-escl-peer-forum"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1192($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"a[href=\"#\"],a[href=\"#collapse-to-0\"],a[href=\"#collapse-to-1\"],a[href=\"#collapse-to-2\"],a[href=\"#collapse-to-3\"],a[href=\"#collapse-to-4\"],a[href=\"#collapse-to-5\"],a[href=\"#collapse-0\"],a[href=\"#collapse-1\"],a[href=\"#collapse-2\"],a[href=\"#collapse-3\"],a[href=\"#collapse-4\"],a[href=\"#collapse-5\"]"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1223($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",173],
      "arg1":"Digital Markets"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\\/en\\\/digital-markets\\\/get-started($|\\?)|\\\/en\\\/digital-markets($|\\?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"promoImpression|promoEvent"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"article#dei-section a"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\\\/en($|\\?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1265($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#lifeatgartner-section .individual-block a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1269($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":"#resoucecenter-section .individual-block a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1272($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"vidyard-cta-click"
    },{
      "function":"_css",
      "arg0":["macro",187],
      "arg1":".language-popup a"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_1291($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",144],
      "arg1":"Search Results"
    },{
      "function":"_re",
      "arg0":["macro",353],
      "arg1":"undefined|null|^$"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",102],
      "arg1":"pvs.gartner.com"
    },{
      "function":"_eq",
      "arg0":["macro",102],
      "arg1":"wwwdvc.gartner.com"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_151($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",102],
      "arg1":"www.gartner.com"
    },{
      "function":"_eq",
      "arg0":["macro",365],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",188],
      "arg1":"(^$|((^|,)8219063_460($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/webinar"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"gartner.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"^$|undefined|null",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"QUICK_PREVIEW"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*\/conferences\/.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/calendar"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"calendar"
    },{
      "function":"_sw",
      "arg0":["macro",24],
      "arg1":"https:\/\/www.gartner.com\/en\/testarea\/nancy---retreaver-test-page"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"en\\\/conferences\\\/emea\\\/(data-analytics-uk|infrastructure-operations-cloud-germany|symposium-spain)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/en\/information-technology\/glossary|\/en\/human-resources\/glossary|\/en\/finance\/glossary|\/en\/marketing\/glossary|\/en\/sales\/glossary",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",173],
      "arg1":"campaign|newsletter|quick\\scollect",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",368],
      "arg1":"Engagement - Incentivized Form"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"JustunoEvent"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"gartnerinfo\\.com\\\/2018\\\/thankyou\\.php|reg.*rfr(.)*(?:\\\/[^h]|\\\/h[^o]|\\\/ho[^u]|\\\/hou[^s]|\\\/hous[^i]|\\\/housi[^n]|\\\/housin[^g])(.)*confirmation",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"#!registration|\/events.*\/register\/|\/technology\/user\/registration\/(catalyst|applications|data-center)|\/conferences\/.*\/register$|\/conferences\/.*\/register\\?",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"conferences"
    },{
      "function":"_re",
      "arg0":["macro",369],
      "arg1":".*yT8CDxTBSvu7tUup56FHwg\\.[0-9]{5}\\.1",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"^https:\/\/www.gartner.com\/en|^https:\/\/blogs.gartner.com\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"\\\/en\/information-technology\\\/glossary\\\/vendor|preview.gartner.com\/en\/information-technology\/trends\/es-swg-avoid-these-9-corporate-digital-business-transformation-mistakes",
      "ignore_case":true
    }],
  "rules":[
    [["if",0],["add",2,3,4,23,122,167,319,320,321,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,197,198,199,200,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318]],
    [["if",2],["add",5]],
    [["if",3,4,5],["add",6]],
    [["if",4,6,7,8],["add",7]],
    [["if",4,9,10,11],["add",8]],
    [["if",4,9,12,13],["add",9]],
    [["if",4,7,14,16],["unless",15],["add",10]],
    [["if",0,7],["unless",17,18],["add",11,322]],
    [["if",4,7,19,20],["add",12]],
    [["if",4,7,21,22],["add",13]],
    [["if",4,7,24],["unless",23],["add",14],["block",30]],
    [["if",4,25,26,27],["add",15]],
    [["if",28,29],["add",16]],
    [["if",4,30,31],["add",16]],
    [["if",4,32,33],["add",16]],
    [["if",4,34,35],["add",16]],
    [["if",4,7,36,37],["add",17]],
    [["if",4,7,38,39,40],["add",18]],
    [["if",4,41,44],["unless",42,43],["add",19]],
    [["if",4,45,47],["unless",46],["add",19],["block",99]],
    [["if",4,48,49],["unless",42,46],["add",19]],
    [["if",4,50,51],["add",20],["block",19]],
    [["if",4,52,53],["add",21,44],["block",99]],
    [["if",4,54,55],["add",22]],
    [["if",29,56,57],["add",24]],
    [["if",4,58,60],["unless",59],["add",25],["block",99]],
    [["if",7,29,63],["unless",64],["add",26],["block",34]],
    [["if",4,7,65,66],["add",27]],
    [["if",0,67],["add",28,158,163]],
    [["if",68],["add",29]],
    [["if",4,69],["unless",23],["add",30]],
    [["if",70,71],["add",31]],
    [["if",4,36,72],["unless",7],["add",32]],
    [["if",73],["add",33]],
    [["if",29,74],["add",34]],
    [["if",77],["add",35]],
    [["if",80],["add",36]],
    [["if",4,81,82,83],["add",37],["block",55,56]],
    [["if",4,84,85,86,87],["add",38],["block",55,56]],
    [["if",4,82,88,89,90],["add",39],["block",55,56]],
    [["if",4,91,92],["add",40]],
    [["if",29,93],["add",40]],
    [["if",2],["unless",99,100],["add",41]],
    [["if",101],["add",41]],
    [["if",4,105,106],["unless",104],["add",42]],
    [["if",4,82,109,110,111],["add",43],["block",55,56]],
    [["if",4,112,113],["add",45]],
    [["if",4,114,116],["unless",115],["add",46],["block",47]],
    [["if",4,117,119],["unless",118],["add",47]],
    [["if",4,120,121,122],["add",48]],
    [["if",4,94,96],["unless",95],["add",49],["block",40,120]],
    [["if",123,124,125],["add",50]],
    [["if",4,107,108],["unless",104],["add",51],["block",42]],
    [["if",29,126],["add",52]],
    [["if",29,127],["add",53],["block",99]],
    [["if",4,85,88,128,129],["add",54],["block",55,56]],
    [["if",4,85,88,130],["add",55]],
    [["if",4,82,88,131,132],["add",56],["block",55]],
    [["if",29,133],["add",57]],
    [["if",124,134],["add",58]],
    [["if",4,135,136,137],["add",59]],
    [["if",4,136,139],["unless",138],["add",60]],
    [["if",77,78],["add",61,329],["block",35]],
    [["if",78,80],["add",62],["block",36]],
    [["if",29,141],["unless",140],["add",63]],
    [["if",29,141,142,143],["add",64]],
    [["if",4,144,145,146],["add",65]],
    [["if",29,145,147],["add",66]],
    [["if",29,145,148],["add",67]],
    [["if",4,75,149,150],["add",68],["block",99]],
    [["if",4,75,151,152],["add",69]],
    [["if",4,75,153,154],["add",70]],
    [["if",4,75,155,156],["add",71]],
    [["if",4,157,158,159],["add",72]],
    [["if",160,161],["add",73,331]],
    [["if",161,162],["add",74,332]],
    [["if",161,163,164],["add",75,333]],
    [["if",77,165],["add",76,80,107,108,153,334,349]],
    [["if",77,166,167],["add",77,80,108,335]],
    [["if",161,168],["add",78,336]],
    [["if",161,169],["add",79,337]],
    [["if",170],["add",81]],
    [["if",124,171,172],["add",82]],
    [["if",124,173,174],["add",82]],
    [["if",124,173,175],["add",82]],
    [["if",124,173,176],["add",82]],
    [["if",124,173,177],["add",82]],
    [["if",124,173,178],["add",82]],
    [["if",124,173,179],["add",82]],
    [["if",124,173,180],["add",82]],
    [["if",0,173],["add",83]],
    [["if",4,181,182,183],["add",84]],
    [["if",184,185,186],["add",85]],
    [["if",4,187,188],["add",86]],
    [["if",4,189,190],["add",87]],
    [["if",191],["add",88]],
    [["if",4,192,193,194],["add",89]],
    [["if",4,195,196,197],["add",89]],
    [["if",4,192,198,199],["add",90]],
    [["if",4,195,200,201],["add",90]],
    [["if",4,202,203,204],["add",91]],
    [["if",29,205,206],["add",92]],
    [["if",4,206,207,208],["add",93]],
    [["if",0,209],["add",94]],
    [["if",2,210,211],["add",95]],
    [["if",4,212,214],["unless",42,213],["add",96]],
    [["if",4,215,217],["unless",216],["add",97,341],["block",99]],
    [["if",29,218],["unless",216],["add",97]],
    [["if",4,222,223,224,225],["add",98]],
    [["if",4,226],["add",99]],
    [["if",4,239,240,241],["add",100]],
    [["if",4,240,242,243],["unless",239],["add",101]],
    [["if",29,244,245,246],["add",102]],
    [["if",247],["add",103]],
    [["if",161,248,249],["add",104]],
    [["if",29,250],["add",105]],
    [["if",77,251],["add",106,0,1,152]],
    [["if",77,165,252],["add",109,112]],
    [["if",4,7,14,253,254],["add",110]],
    [["if",7,29,255,256],["unless",257],["add",111]],
    [["if",258,259],["add",113]],
    [["if",4,260,261,262,263],["add",114]],
    [["if",4,260,264,265],["unless",262],["add",115]],
    [["if",4,97,266,267],["add",116]],
    [["if",4,261,268,269],["add",117]],
    [["if",4,261,270,271],["add",118]],
    [["if",29,261,270],["add",118]],
    [["if",4,97,272,273],["add",119]],
    [["if",4,91,97,98],["add",120],["block",40]],
    [["if",275],["unless",274],["add",121]],
    [["if",4,276,277],["add",123]],
    [["if",278,279],["add",124]],
    [["if",77,280,281],["add",125]],
    [["if",77,78,282],["add",126]],
    [["if",4,283,284,285],["add",127]],
    [["if",0,286],["add",128,155,156,157,165]],
    [["if",77,79],["add",129,144,145],["block",35,61,349,350]],
    [["if",287,288,289],["add",130]],
    [["if",287,289,290],["add",131]],
    [["if",77,251,291],["add",132]],
    [["if",287,289,292],["add",132]],
    [["if",4,293,294,295],["add",133]],
    [["if",4,294,296,297],["add",134]],
    [["if",4,294,298,299],["add",135]],
    [["if",4,294,300,301],["add",136]],
    [["if",302,303],["add",137,138]],
    [["if",4,304,305],["add",139]],
    [["if",124,306],["add",140]],
    [["if",4,294,307,308],["add",141]],
    [["if",4,309,310,311],["add",142]],
    [["if",4,312,313,314],["add",143]],
    [["if",4,315,316,317],["add",146]],
    [["if",4,318,319,320],["add",147]],
    [["if",4,230,231,232],["add",148],["block",99]],
    [["if",29,231,233],["add",148],["block",99]],
    [["if",4,231,234,235],["add",149],["block",99]],
    [["if",29,231,236],["add",149],["block",99]],
    [["if",29,231,237],["add",150],["block",99]],
    [["if",29,231,238],["add",150],["block",99]],
    [["if",77,323,324],["add",151,159]],
    [["if",325],["add",154]],
    [["if",4,326,327,328],["add",160]],
    [["if",4,327,329,330],["add",161]],
    [["if",4,327,331,332],["add",162]],
    [["if",333],["add",164]],
    [["if",4,334,335],["add",166]],
    [["if",0,336],["add",196,201]],
    [["if",161],["unless",337],["add",323]],
    [["if",338],["unless",337],["add",323]],
    [["if",161],["add",324,330]],
    [["if",341,342],["add",325]],
    [["if",161,344],["add",326]],
    [["if",124,345],["add",326]],
    [["if",0,346],["add",327]],
    [["if",0],["unless",347],["add",328]],
    [["if",161,184],["add",338,340]],
    [["if",2,102],["unless",103],["add",339],["block",41]],
    [["if",101,102],["unless",103],["add",339],["block",41]],
    [["if",0,192],["add",340]],
    [["if",4,219,221],["unless",46,220],["add",341],["block",97]],
    [["if",161,350],["add",342]],
    [["if",161,351],["add",343]],
    [["if",161,352],["add",344]],
    [["if",0,353],["add",345]],
    [["if",0,354],["add",346]],
    [["if",0,302],["add",347]],
    [["if",2,355],["add",348]],
    [["if",77,356],["add",350]],
    [["if",286,357,358],["add",350]],
    [["if",77,78,286],["add",350]],
    [["if",161,359],["add",351]],
    [["if",161,360],["add",352]],
    [["if",0,362,363],["unless",361],["add",353]],
    [["if",0,364],["add",353]],
    [["if",0,1],["block",2,3,4,122,320]],
    [["if",4,61,62],["block",25]],
    [["if",75,76],["block",34,47]],
    [["if",29,95],["block",49]],
    [["if",4,227,228],["unless",59],["block",99]],
    [["if",29,229],["unless",220],["block",99]],
    [["if",29,321],["block",148,149,150]],
    [["if",4,321,322],["block",148]],
    [["if",161,339,340],["block",324]],
    [["if",76],["unless",343],["block",325]],
    [["if",76],["unless",348],["block",330]],
    [["if",76],["unless",349],["block",341]]]
},
"runtime":[[50,"__cvt_8219063_1257",[46,"a"],[41,"b","c","d","e","f","g","h"],[3,"b",["require","injectScript"]],[3,"c",["require","copyFromWindow"]],[3,"d",["require","setInWindow"]],[3,"e",["require","callInWindow"]],[3,"f",["require","createQueue"]],[3,"g",[51,"",[7],[41,"i","j"],[3,"i",["c","rdt"]],[22,[15,"i"],[46,[36,[15,"i"]]]],["d","rdt",[51,"",[7],[41,"k"],[3,"k",["c","rdt.sendEvent"]],[22,[15,"k"],[46,["e","rdt.sendEvent.apply",[15,"i"],[15,"arguments"]]],[46,["j",[15,"arguments"]]]]]],[3,"j",["f","rdt.callQueue"]],[36,["c","rdt"]]]],[3,"h",["g"]],[22,[28,[17,[15,"h"],"advertiserId"]],[46,["h","init",[17,[15,"a"],"id"]]]],[22,[28,[17,[15,"a"],"enableFirstPartyCookies"]],[46,["h","disableFirstPartyCookies"]]],["h","track",[17,[15,"a"],"eventType"]],["b","https://www.redditstatic.com/ads/pixel.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"rdtPixel"]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]],[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__cvt_8219063_1257":{"inject_script":{"urls":["https:\/\/www.redditstatic.com\/ads\/pixel.js"]},"access_globals":{"keys":[{"key":"rdt","read":true,"write":true,"execute":false},{"key":"rdt.callQueue","read":true,"write":true,"execute":false},{"key":"rdt.sendEvent.apply","read":true,"write":false,"execute":true},{"key":"rdt.callQueue.push","read":false,"write":false,"execute":true},{"key":"rdt.sendEvent","read":true,"write":false,"execute":false},{"key":"rdt.advertiserId","read":true,"write":false,"execute":false}]}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}},"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}
,"sandboxed_scripts":["__cvt_8219063_1257"]
,"security_groups":{
"nonGoogleScripts":["__twitter_website_tag","__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}fa=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.mj=b.prototype},na=this||self,ua=function(a){if(a&&a!=na)return ra(a.document);null===sa&&(sa=ra(na.document));return sa},va=/^[\w+/_-]+[=]{0,2}$/,sa=null,ra=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&va.test(c))return c}return""},wa=function(a){return a};var xa=function(a,b){this.g=a;this.o=b};var ya=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},za=function(){this.s={};this.o=!1;this.D={}};za.prototype.get=function(a){return this.s["dust."+a]};za.prototype.set=function(a,b){this.o||(a="dust."+a,this.D.hasOwnProperty(a)||(this.s[a]=b))};za.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var Ba=function(a){var b=[],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c.substr(5));return b};var Ca=function(a){this.o=new za;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ya(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};aa=Ca.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof Ca?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!ya(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else ya(a)?this.g[Number(a)]=b:this.o.set(a,b)};aa.get=function(a){return"length"===a?this.length():ya(a)?this.g[Number(a)]:this.o.get(a)};aa.length=function(){return this.g.length};aa.Tb=function(){for(var a=Ba(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new Ca(a)};
var Da=function(a,b){if(ya(b))delete a.g[Number(b)];else{var c=a.o,d;d="dust."+b;c.o||c.D.hasOwnProperty(d)||delete c.s[d]}};aa=Ca.prototype;aa.pop=function(){return this.g.pop()};aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new Ca(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};
aa.has=function(a){return ya(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ea=function(){function a(f,g){if(b[f]){if(b[f].Gc+g>b[f].max)throw Error("Quota exceeded");b[f].Gc+=g}}var b={},c=void 0,d=void 0,e={ki:function(f){c=f},Hf:function(){c&&a(c,1)},mi:function(f){d=f},Sa:function(f){d&&a(d,f)},Gi:function(f,g){b[f]=b[f]||{Gc:0};b[f].max=g},Nh:function(f){return b[f]&&b[f].Gc||0},reset:function(){b={}},zh:a};e.onFnConsume=e.ki;e.consumeFn=e.Hf;e.onStorageConsume=e.mi;e.consumeStorage=e.Sa;e.setMax=e.Gi;e.getConsumed=e.Nh;e.reset=e.reset;e.consume=e.zh;return e};var Fa=function(a,b){this.s=a;this.S=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new za;this.g=this.N=void 0};Fa.prototype.add=function(a,b){Ia(this,a,b,!1)};var Ia=function(a,b,c,d){if(!a.o.o)if(a.s.Sa(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.D["dust."+b]=!0}else a.o.set(b,c)};
Fa.prototype.set=function(a,b){this.o.o||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.Sa(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Fa.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Fa.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ja=function(a){var b=new Fa(a.s,a);a.N&&(b.N=a.N);b.S=a.S;b.g=a.g;return b};var Ka=function(){},Ma=function(a){return"function"==typeof a},k=function(a){return"string"==typeof a},Na=function(a){return"number"==typeof a&&!isNaN(a)},Oa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Qa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ra=function(a,b){if(a&&Oa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Sa=function(a,b){if(!Na(a)||
!Na(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ua=function(a,b){for(var c=new Ta,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Va=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Wa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Xa=function(a){return Math.round(Number(a))||0},Za=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},$a=function(a){var b=[];if(Oa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ab=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},eb=function(){return(new Date).getTime()},Ta=function(){this.prefix="gtm.";this.values={}};Ta.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ta.prototype.get=function(a){return this.values[this.prefix+a]};
var fb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},gb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},hb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},ib=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},jb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},mb=function(a,b){var c=p;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Qa(b,d))return}return d},nb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},ob=function(a){var b=[];Va(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var sb=function(a,b){za.call(this);this.N=a;this.S=b};ma(sb,za);sb.prototype.toString=function(){return this.N};sb.prototype.Tb=function(){return new Ca(Ba(this))};sb.prototype.g=function(a,b){a.s.Hf();return this.S.apply(new tb(this,a),Array.prototype.slice.call(arguments,1))};sb.prototype.Ua=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var vb=function(a,b){for(var c,d=0;d<b.length&&!(c=ub(a,b[d]),c instanceof xa);d++);return c},ub=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof sb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.N;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},tb=function(a,b){this.o=a;this.g=b},B=function(a,b){var c=a.g;return Oa(b)?ub(c,b):b},F=function(a){return a.o.N};var wb=function(){za.call(this)};ma(wb,za);wb.prototype.Tb=function(){return new Ca(Ba(this))};var xb={control:function(a,b){return new xa(a,B(this,b))},fn:function(a,b,c){var d=this.g,e=B(this,b);if(!(e instanceof Ca))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.Sa(a.length+f.length);return new sb(a,function(){return function(g){var h=Ja(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=B(this,l[m]),l[m]instanceof xa)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new Ca(l));var t=vb(h,f);if(t instanceof xa)return"return"===t.g?t.o:t}}())},list:function(a){var b=this.g.s;b.Sa(arguments.length);for(var c=new Ca,d=0;d<arguments.length;d++){var e=B(this,arguments[d]);"string"===typeof e&&b.Sa(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new wb,d=0;d<arguments.length-1;d+=2){var e=B(this,arguments[d])+"",f=B(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Sa(g);c.set(e,f)}return c},undefined:function(){}};var zb=function(){this.s=Ea();this.g=new Fa(this.s)},Ab=function(a,b,c){var d=new sb(b,c);d.o=!0;a.g.set(b,d)};zb.prototype.Lc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};zb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=ub(this.g,arguments[c]);return b};zb.prototype.D=function(a,b){var c=Ja(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=ub(c,arguments[e]);return d};var Bb=function(a){if(a instanceof Bb)return a;this.sa=a};Bb.prototype.toString=function(){return String(this.sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Cb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Db=function(a){if(null==a)return String(a);var b=Cb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Eb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Fb=function(a){if(!a||"object"!=Db(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Eb(a,"constructor")&&!Eb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Eb(a,b)},G=function(a,b){var c=b||("array"==Db(a)?[]:{}),d;for(d in a)if(Eb(a,d)){var e=a[d];"array"==Db(e)?("array"!=Db(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Fb(e)?(Fb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Hb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=Qa(d,h);if(-1<l)return e[l];if(h instanceof Ca){var m=[];d.push(h);e.push(m);for(var n=h.Tb(),q=0;q<n.length();q++)m[n.get(q)]=g(h.get(n.get(q)));return m}if(h instanceof wb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof sb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Gb(u[v],b,!!c);var x=b?b.s:Ea(),y=new Fa(x);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Gb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Qa(d,
h);if(-1<l)return e[l];if(Oa(h)||Wa(h)){var m=new Ca([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,g(h[n]));return m}if(Fb(h)){var q=new wb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var t=new sb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=Hb(B(this,v[x]),b,!!c);return g((0,this.g.S)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Ib=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Jb=function(a){if(void 0===a||Oa(a)||Fb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Kb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof Ca)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new Ca(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new Ca(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new Ca(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ib(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Da(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new Ca(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ib(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Da(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Lb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Mb=new xa("break"),Pb=new xa("continue"),Qb=function(a,b){return B(this,a)+B(this,b)},Rb=function(a,b){return B(this,a)&&B(this,b)},Sb=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);if(!(c instanceof Ca))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Qa(Lb,b)){var d=Ib(c);return Gb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof Ca){if(a.has(b)){var e=a.get(b);if(e instanceof
sb){var f=Ib(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Qa(Kb.supportedMethods,b)){var g=Ib(c);g.unshift(this.g);return Kb[b].apply(a,g)}}if(a instanceof sb||a instanceof wb){if(a.has(b)){var h=a.get(b);if(h instanceof sb){var l=Ib(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof sb?a.N:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Ib(c))}if(a instanceof
Bb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Tb=function(a,b){a=B(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=B(this,b);c.set(a,d);return d},Wb=function(a){var b=Ja(this.g),c=vb(b,Array.prototype.slice.apply(arguments));if(c instanceof xa)return c},Xb=function(){return Mb},Yb=function(a){for(var b=B(this,a),c=0;c<b.length;c++){var d=
B(this,b[c]);if(d instanceof xa)return d}},Zb=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=B(this,arguments[c+1]);Ia(b,d,e,!0)}}},$b=function(){return Pb},ac=function(a,b,c){var d=new Ca;b=B(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,B(this,f))},bc=function(a,b){return B(this,a)/B(this,b)},cc=function(a,b){a=B(this,a);b=B(this,b);var c=
a instanceof Bb,d=b instanceof Bb;return c||d?c&&d?a.sa==b.sa:!1:a==b},dc=function(a){for(var b,c=0;c<arguments.length;c++)b=B(this,arguments[c]);return b};function ec(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=vb(f,d);if(g instanceof xa){if("break"===g.g)break;if("return"===g.g)return g}}}
function fc(a,b,c){if("string"===typeof b)return ec(a,function(){return b.length},function(f){return f},c);if(b instanceof wb||b instanceof Ca||b instanceof sb){var d=b.Tb(),e=d.length();return ec(a,function(){return e},function(f){return d.get(f)},c)}}
var gc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return fc(function(e){d.set(a,e);return d},b,c)},hc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return fc(function(e){var f=Ja(d);Ia(f,a,e,!0);return f},b,c)},ic=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return fc(function(e){var f=Ja(d);f.add(a,e);return f},b,c)},kc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return jc(function(e){d.set(a,e);return d},b,c)},lc=
function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return jc(function(e){var f=Ja(d);Ia(f,a,e,!0);return f},b,c)},mc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return jc(function(e){var f=Ja(d);f.add(a,e);return f},b,c)};
function jc(a,b,c){if("string"===typeof b)return ec(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof Ca)return ec(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var nc=function(a,b,c,d){function e(n,q){for(var t=0;t<f.length();t++){var r=f.get(t);q.add(r,n.get(r))}}var f=B(this,a);if(!(f instanceof Ca))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=B(this,d);var h=Ja(g);for(e(g,h);ub(h,b);){var l=vb(h,d);if(l instanceof xa){if("break"===l.g)break;if("return"===l.g)return l}var m=Ja(g);e(h,m);ub(m,c);h=m}},oc=function(a){a=B(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},pc=function(a,b){var c;a=B(this,a);b=B(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof wb||a instanceof Ca||a instanceof sb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:ya(b)&&(c=a[b]);else if(a instanceof Bb)return;return c},qc=function(a,b){return B(this,a)>B(this,
b)},rc=function(a,b){return B(this,a)>=B(this,b)},sc=function(a,b){a=B(this,a);b=B(this,b);a instanceof Bb&&(a=a.sa);b instanceof Bb&&(b=b.sa);return a===b},tc=function(a,b){return!sc.call(this,a,b)},uc=function(a,b,c){var d=[];B(this,a)?d=B(this,b):c&&(d=B(this,c));var e=vb(this.g,d);if(e instanceof xa)return e},vc=function(a,b){return B(this,a)<B(this,b)},wc=function(a,b){return B(this,a)<=B(this,b)},xc=function(a,b){return B(this,a)%B(this,b)},zc=function(a,b){return B(this,a)*B(this,b)},Ac=function(a){return-B(this,
a)},Bc=function(a){return!B(this,a)},Cc=function(a,b){return!cc.call(this,a,b)},Dc=function(){return null},Ec=function(a,b){return B(this,a)||B(this,b)},Ic=function(a,b){var c=B(this,a);B(this,b);return c},Jc=function(a){return B(this,a)},Kc=function(a){return Array.prototype.slice.apply(arguments)},Lc=function(a){return new xa("return",B(this,a))},Mc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
sb||a instanceof Ca||a instanceof wb)&&a.set(b,c);return c},Nc=function(a,b){return B(this,a)-B(this,b)},Oc=function(a,b,c){a=B(this,a);var d=B(this,b),e=B(this,c);if(!Oa(d)||!Oa(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===B(this,d[h]))if(f=B(this,e[h]),f instanceof xa){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=B(this,e[e.length-1]),f instanceof xa&&("return"===f.g||"continue"===
f.g)))return f},Pc=function(a,b,c){return B(this,a)?B(this,b):B(this,c)},Qc=function(a){a=B(this,a);return a instanceof sb?"function":typeof a},Rc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Sc=function(a,b,c,d){var e=B(this,d);if(B(this,c)){var f=vb(this.g,e);if(f instanceof xa){if("break"===f.g)return;if("return"===f.g)return f}}for(;B(this,a);){var g=vb(this.g,e);if(g instanceof xa){if("break"===g.g)break;if("return"===g.g)return g}B(this,
b)}},Tc=function(a){return~Number(B(this,a))},Uc=function(a,b){return Number(B(this,a))<<Number(B(this,b))},Vc=function(a,b){return Number(B(this,a))>>Number(B(this,b))},Wc=function(a,b){return Number(B(this,a))>>>Number(B(this,b))},Xc=function(a,b){return Number(B(this,a))&Number(B(this,b))},Yc=function(a,b){return Number(B(this,a))^Number(B(this,b))},Zc=function(a,b){return Number(B(this,a))|Number(B(this,b))};var ad=function(){this.g=new zb;$c(this)};ad.prototype.Lc=function(a){return bd(this.g.o(a))};
var dd=function(a,b){return bd(cd.g.D(a,b))},$c=function(a){var b=function(d,e){var f=a.g,g=String(e);xb.hasOwnProperty(d)&&Ab(f,g||d,xb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Ab(a.g,String(d),e)};c(0,Qb);c(1,Rb);c(2,Sb);c(3,Tb);c(53,Wb);c(4,Xb);c(5,Yb);c(52,Zb);c(6,$b);c(9,Yb);c(50,ac);c(10,bc);c(12,cc);c(13,dc);c(47,gc);c(54,hc);c(55,ic);c(63,nc);c(64,kc);c(65,lc);c(66,mc);c(15,oc);c(16,pc);c(17,pc);c(18,qc);c(19,rc);c(20,sc);c(21,tc);c(22,uc);
c(23,vc);c(24,wc);c(25,xc);c(26,zc);c(27,Ac);c(28,Bc);c(29,Cc);c(45,Dc);c(30,Ec);c(32,Ic);c(33,Ic);c(34,Jc);c(35,Jc);c(46,Kc);c(36,Lc);c(43,Mc);c(37,Nc);c(38,Oc);c(39,Pc);c(40,Qc);c(41,Rc);c(42,Sc);c(58,Tc);c(57,Uc);c(60,Vc);c(61,Wc);c(56,Xc);c(62,Yc);c(59,Zc)},fd=function(){var a=cd,b=ed();Ab(a.g,"require",b)},kd=function(a,b){a.g.g.S=b};
function bd(a){if(a instanceof xa||a instanceof sb||a instanceof Ca||a instanceof wb||a instanceof Bb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var ld=[],md={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},nd=function(a){return md[a]},od=/[\x00\x22\x26\x27\x3c\x3e]/g;var sd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,td={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},ud=function(a){return td[a]};ld[7]=function(a){return String(a).replace(sd,ud)};
ld[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(sd,ud)+"'"}};var Cd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Dd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ed=function(a){return Dd[a]};ld[16]=function(a){return a};var Gd;
var Hd=[],Id=[],Jd=[],Pd=[],Qd=[],Rd={},Sd,Td,Ud,Vd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Wd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Rd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Ef&&b.Ef(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Gd(c,e,b)},Yd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Xd(a[e],b,c));return d},Xd=function(a,b,c){if(Oa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Xd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Hd[f];if(!g||b.Vd(g))return;c[f]=!0;try{var h=Yd(g,b,c);h.vtp_gtmEventId=b.id;d=Wd(h,b);Ud&&(d=Ud.Bh(d,h))}catch(y){b.Tf&&b.Tf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Xd(a[l],b,c)]=Xd(a[l+1],b,c);return d;case "template":d=[];for(var m=
!1,n=1;n<a.length;n++){var q=Xd(a[n],b,c);Td&&(m=m||q===Td.yc);d.push(q)}return Td&&m?Td.Eh(d):d.join("");case "escape":d=Xd(a[1],b,c);if(Td&&Oa(a[1])&&"macro"===a[1][0]&&Td.Yh(a))return Td.ui(d);d=String(d);for(var t=2;t<a.length;t++)ld[a[t]]&&(d=ld[a[t]](d));return d;case "tag":var r=a[1];if(!Pd[r])throw Error("Unable to resolve tag reference "+r+".");return d={Kf:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Zd(u,b,c),x=!!a[4];return x||2!==v?x!==
(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Zd=function(a,b,c){try{return Sd(Yd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var $d=function(){var a=function(b){return{toString:function(){return b}}};return{ig:a("consent"),Ae:a("convert_case_to"),Be:a("convert_false_to"),Ce:a("convert_null_to"),De:a("convert_true_to"),Ee:a("convert_undefined_to"),Si:a("debug_mode_metadata"),Qa:a("function"),Wg:a("instance_name"),Xg:a("live_only"),Yg:a("malware_disabled"),Zg:a("metadata"),Vi:a("original_activity_id"),Wi:a("original_vendor_template_id"),ah:a("once_per_event"),uf:a("once_per_load"),yf:a("setup_tags"),zf:a("tag_id"),Af:a("teardown_tags")}}();var ae=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};ma(ae,Error);function be(a,b){if(Oa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)be(a[c],b[c])}};var ce=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};ma(ce,Error);var ee=function(){return function(a,b){a instanceof ce||(a=new ce(a,de));b&&a.g.push(b);throw a;}};function de(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Na(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var fe=null,ie=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];fe=ge(a);for(var e=0;e<Id.length;e++){var f=Id[e],g=he(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<Pd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},he=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=fe(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=fe(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ge=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Zd(Jd[c],a));return b[c]}};var je={Bh:function(a,b){b[$d.Ae]&&"string"===typeof a&&(a=1==b[$d.Ae]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty($d.Ce)&&null===a&&(a=b[$d.Ce]);b.hasOwnProperty($d.Ee)&&void 0===a&&(a=b[$d.Ee]);b.hasOwnProperty($d.De)&&!0===a&&(a=b[$d.De]);b.hasOwnProperty($d.Be)&&!1===a&&(a=b[$d.Be]);return a}};var ke=function(){this.g={}};function le(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new ae(c,d,g);}}function me(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));le(e,b,d,g);le(f,b,d,g)}}}};var qe=function(a){var b=ne.F,c=this;this.o=new ke;this.g={};var d={},e=me(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Va(a,function(f,g){var h={};Va(g,function(l,m){var n=oe(l,m);h[l]=n.assert;d[l]||(d[l]=n.M)});c.g[f]=function(l,m){var n=h[l];if(!n)throw pe(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},se=function(a){return re.g[a]||
function(){}};function oe(a,b){var c=Vd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=pe;try{return Wd(c)}catch(d){return{assert:function(e){throw new ae(e,{},"Permission "+e+" is unknown.");},M:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function pe(a,b,c){return new ae(a,b,c)};var te=!1;var ue={};ue.Ni=Za('');ue.Hh=Za('');var ve=te,we=ue.Hh,xe=ue.Ni;
var Le=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Me=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Le(b,"/*")&&(b=b.slice(0,-2));Le(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Ne=/^[a-z0-9-]+$/i,Oe=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Qe=function(a,b){var c;if(!(c=!Pe(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Ne.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Oe.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var x=n.slice(n.indexOf("/"));h=Me(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Pe=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Te=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ue={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Te.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof sb?n="Fn":l instanceof Ca?n="List":l instanceof wb?n="DustMap":
l instanceof Bb&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(Ue[h]||h)+".");}}};function Ve(a){return""+a}
function We(a,b){var c=[];return c};var Xe=function(a,b){var c=new sb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=B(this,d[e]);return b.apply(this,d)});c.o=!0;return c},Ye=function(a,b){var c=new wb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ma(e)?c.set(d,Xe(a+"_"+d,e)):(Na(e)||k(e)||"boolean"==typeof e)&&c.set(d,e)}c.o=!0;return c};var Ze=function(a,b){H(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new wb;return d=Ye("AssertApiSubject",c)};var $e=function(a,b){H(F(this),["actual:?*","message:?string"],arguments);var c={},d=new wb;
return d=Ye("AssertThatSubject",c)};function af(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Hb(arguments[d],c));return Gb(a.apply(null,b))}}var cf=function(){for(var a=Math,b=bf,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=af(a[e].bind(a)))}return c};var df=function(a){var b;return b};var ef=function(a){var b;return b};var ff=function(a){H(F(this),["uri:!string"],arguments);return encodeURI(a)};var gf=function(a){H(F(this),["uri:!string"],arguments);return encodeURIComponent(a)};var hf=function(a){H(F(this),["message:?string"],arguments);};var jf=function(a,b){H(F(this),["min:!number","max:!number"],arguments);return Sa(a,b)};var kf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.qh.apply(null,Array.prototype.slice.call(arguments,1))};var lf=function(){kf(this,"read_container_data");var a=new wb;a.set("containerId",'GTM-WWNT3B3');a.set("version",'348');a.set("environmentName",'');a.set("debugMode",ve);a.set("previewMode",xe);a.set("environmentMode",we);a.o=!0;return a};var mf=function(){return(new Date).getTime()};var nf=function(a){if(null===a)return"null";if(a instanceof Ca)return"array";if(a instanceof sb)return"function";if(a instanceof Bb){a=a.sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var of=function(a){function b(c){return function(d){try{return c(d)}catch(e){(ve||xe)&&a.call(this,e.message)}}}return{parse:b(function(c){return Gb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Hb(c))})}};var pf=function(a){return Xa(Hb(a,this.g))};var qf=function(a){return Number(Hb(a,this.g))};var rf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var sf=function(a,b,c){var d=null,e=!1;H(F(this),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new wb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof wb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var bf="floor ceil round max min abs pow sqrt".split(" ");var tf=function(){var a={};return{Oh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Hi:function(b,c){a[b]=c},reset:function(){a={}}}},uf=function(a,b){H(F(this),["apiName:!string","mock:?*"],arguments);};var vf=function(){this.g={};this.o={};};vf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
vf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ma(b)?Xe(a,b):Ye(a,b)};
var wf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ma(c)?Xe(b,c):Ye(b,c)};function xf(){var a={};return a};var J={Gb:"_ee",Dd:"_syn",Zi:"_uei",xd:"_eu",Xi:"_pci",ld:"event_callback",sc:"event_timeout",ja:"gtag.config",Ma:"gtag.get",na:"purchase",cb:"refund",La:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",rg:"view_cart",Ie:"add_to_wishlist",Aa:"view_item",He:"view_promotion",Ge:"select_promotion",fd:"select_item",nc:"view_item_list",Fe:"add_payment_info",qg:"add_shipping_info",Da:"value_key",Ca:"value_callback",ka:"allow_ad_personalization_signals",td:"restricted_data_processing",wb:"allow_google_signals",
la:"cookie_expires",zb:"cookie_update",Db:"session_duration",qa:"user_properties",Pa:"transport_url",O:"ads_data_redaction",C:"ad_storage",J:"analytics_storage",ze:"region",jg:"wait_for_update"};J.jf=[J.na,J.cb,J.La,J.$a,J.ab,J.rg,J.Ie,J.Aa,J.He,J.Ge,J.nc,J.fd,J.Fe,J.qg];J.hf=[J.ka,J.wb,J.zb];J.kf=[J.la,J.sc,J.Db];var yf={},zf=function(a,b){yf[a]=yf[a]||[];yf[a][b]=!0},Af=function(a){for(var b=[],c=yf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Bf=function(a){zf("GTM",a)};var Cf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Df=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ef,Ff=function(){if(void 0===Ef){var a=null,b=na.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:wa,createScript:wa,createScriptURL:wa})}catch(c){na.console&&na.console.error(c.message)}Ef=a}else Ef=a}return Ef};var Hf=function(a,b){this.g=b===Gf?a:""};Hf.prototype.toString=function(){return this.g+""};var Gf={};var If=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Jf;a:{var Kf=na.navigator;if(Kf){var Lf=Kf.userAgent;if(Lf){Jf=Lf;break a}}Jf=""}var Mf=function(a){return-1!=Jf.indexOf(a)};var Of=function(a,b,c){this.g=c===Nf?a:""};Of.prototype.toString=function(){return this.g.toString()};var Pf=function(a){return a instanceof Of&&a.constructor===Of?a.g:"type_error:SafeHtml"},Nf={},Qf=new Of(na.trustedTypes&&na.trustedTypes.emptyHTML||"",0,Nf);var Rf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Pf(Qf);return!c.parentElement}),Sf=function(a,b){if(Rf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Pf(b)};var Tf=function(a){var b=Ff(),c=b?b.createHTML(a):a;return new Of(c,null,Nf)};var p=window,K=document,Uf=navigator,Vf=K.currentScript&&K.currentScript.src,Wf=function(a,b){var c=p[a];p[a]=void 0===c?b:c;return p[a]},Xf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Yf=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Ff(),g=f?f.createScriptURL(a):a;e=new Hf(g,Gf);d.src=e instanceof Hf&&e.constructor===Hf?e.g:"type_error:TrustedResourceUrl";
var h=ua(d.ownerDocument&&d.ownerDocument.defaultView);h&&d.setAttribute("nonce",h);Xf(d,b);c&&(d.onerror=c);var l=ua();l&&d.setAttribute("nonce",l);var m=K.getElementsByTagName("script")[0]||K.body||K.head;m.parentNode.insertBefore(d,m);return d},Zf=function(){if(Vf){var a=Vf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},$f=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=K.body&&K.body.lastChild||K.body||K.head;d.parentNode.insertBefore(c,d);Xf(c,b);void 0!==a&&(c.src=a);return c},ag=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},bg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},cg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},M=function(a){p.setTimeout(a,
0)},dg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},eg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},gg=function(a){var b=K.createElement("div"),c=Tf("A<div>"+a+"</div>");Sf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},hg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},ig=function(a){Uf.sendBeacon&&Uf.sendBeacon(a)||ag(a)},jg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var kg={},lg=function(){return void 0==kg.gtag_cs_api?!1:kg.gtag_cs_api};var mg=[];function ng(){var a=Wf("google_tag_data",{});a.ics||(a.ics={entries:{},set:og,update:pg,addListener:qg,notifyListeners:rg,active:!1,usedDefault:!1});return a.ics}
function og(a,b,c,d,e,f){var g=ng();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:q};h[a]=t;q&&p.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,sg(a),rg(),zf("TAGGING",2))},f)}}}
function pg(a,b){var c=ng();c.active=!0;if(void 0!=b){var d=tg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=tg(a);f.quiet?(f.quiet=!1,sg(a)):g!==d&&sg(a)}}function qg(a,b){mg.push({Gf:a,Kh:b})}function sg(a){for(var b=0;b<mg.length;++b){var c=mg[b];Oa(c.Gf)&&-1!==c.Gf.indexOf(a)&&(c.Wf=!0)}}function rg(a){for(var b=0;b<mg.length;++b){var c=mg[b];if(c.Wf){c.Wf=!1;try{c.Kh({Ff:a})}catch(d){}}}}
var tg=function(a){var b=ng().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},ug=function(a){return(ng().entries[a]||{}).initial},vg=function(a){return!(ng().entries[a]||{}).quiet},wg=function(){return lg()?ng().active:!1},xg=function(){return ng().usedDefault},yg=function(a,b){ng().addListener(a,b)},zg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!vg(b[e]))return!0;return!1}if(c()){var d=!1;yg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Ag=function(a,
b){if(!1===tg(b)){var c=!1;yg([b],function(d){!c&&tg(b)&&(a(d),c=!0)})}};function Bg(a){for(var b=[],c=0;c<Cg.length;c++){var d=a(Cg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Cg=[J.C,J.J],Dg=function(a){var b=a[J.ze];b&&Bf(40);var c=a[J.jg];c&&Bf(41);for(var d=Oa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Cg.length;f++){var g=Cg[f],h=a[Cg[f]],l=d[e];ng().set(g,h,l,"DE","DE-HB",c)}},Eg=function(a,b){for(var c=0;c<Cg.length;c++){var d=Cg[c],e=a[Cg[c]];ng().update(d,e)}ng().notifyListeners(b)},Fg=function(a){var b=tg(a);return void 0!=b?b:!0},Gg=function(){return"G1"+Bg(tg)},Hg=function(a,b){zg(a,b)};var Jg=function(a){return Ig?K.querySelectorAll(a):null},Kg=function(a,b){if(!Ig)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Lg=!1;if(K.querySelectorAll)try{var Mg=K.querySelectorAll(":root");Mg&&1==Mg.length&&Mg[0]==K.documentElement&&(Lg=!0)}catch(a){}var Ig=Lg;var Ng=function(a){if(K.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!p.getComputedStyle)return!0;var c=p.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=p.getComputedStyle(d,
null))}return!1};
var Og=function(){var a=K.body,b=K.documentElement||a&&a.parentElement,c,d;if(K.compatMode&&"BackCompat"!==K.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Bf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Pg=function(a){var b=Og(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Qg=[],Rg=!(!p.IntersectionObserver||!p.IntersectionObserverEntry),Sg=function(a,b,c){for(var d=new p.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Qg.length;f++)if(!Qg[f])return Qg[f]=d,f;return Qg.push(d)-1},Tg=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},n={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:eb()};M(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=Pg(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},Ug=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Rg){var e=!1;M(function(){e||
Tg(a,b,c)()});return Sg(function(f){e=!0;for(var g={rb:0};g.rb<f.length;g={rb:g.rb},g.rb++)M(function(h){return function(){return a(f[h.rb])}}(g))},b,c)}return p.setInterval(Tg(a,b,c),1E3)},Vg=function(a){Rg?0<=a&&a<Qg.length&&Qg[a]&&(Qg[a].disconnect(),Qg[a]=void 0):p.clearInterval(a)};var Wg=/:[0-9]+$/,Xg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},$g=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Yg(a.protocol)||Yg(p.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
p.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||p.location.hostname).replace(Wg,"").toLowerCase());return Zg(a,b,c,d,e)},Zg=function(a,b,c,d,e){var f,g=Yg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=ah(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Wg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||zf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Qa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Xg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Yg=function(a){return a?a.replace(":",
"").toLowerCase():""},ah=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},bh=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||zf("TAGGING",1),c="/"+c);var d=b.hostname.replace(Wg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},ch=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=bh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var dh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),eh=new RegExp(/support|noreply/i),fh=["SCRIPT","IMG","SVG","PATH","BR"],gh=["BR"];function hh(a){var b;if(a===K.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=hh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var kh=function(){var a=!0;var b=a,c;var d=[],e=K.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=fh.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=gh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var n=c,q=n.elements,t=[],r=0;r<q.length;r++){var u=q[r],v=u.textContent;u.value&&(v=u.value);if(v){var x=v.match(dh);if(x){var y=x[0],w;if(p.location){var z=Zg(p.location,"host",!0);w=0<=y.toLowerCase().indexOf(z)}else w=!1;w||t.push({element:u,dd:y})}}}var A;for(var C=[],D=10<t.length?"3":n.status,E=0;E<t.length&&
10>E;E++){var I=t[E].element,Q=t[E].dd,Y=!1;C.push({dd:Q,querySelector:hh(I),tagName:I.tagName,isVisible:!Ng(I),type:1,Rc:!!Y})}return{elements:C,status:D}};var ne={},N=null,yh=Math.random();ne.F="GTM-WWNT3B3";ne.Cc="1r0";ne.Ui="";ne.kg="ChEIgLz+gAYQmL/etfKOopnrARIkAJrgSkeJvCZY8gnYMAHl570uywfZltUvVEdFB5IoyNx3oHyuGgIQFQ\x3d\x3d";var zh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Ah={__paused:!0,__tg:!0},Bh;for(Bh in zh)zh.hasOwnProperty(Bh)&&(Ah[Bh]=!0);var Ch="www.googletagmanager.com/gtm.js";
var Dh=Ch,Eh=Za(""),Fh=null,Gh=null,Hh="//www.googletagmanager.com/a?id="+ne.F+"&cv=348",Ih={},Jh={},Kh=function(){var a=N.sequence||1;N.sequence=a+1;return a};var Lh={},Mh=new Ta,Nh={},Oh={},Rh={name:"dataLayer",set:function(a,b){G(nb(a,b),Nh);Ph()},get:function(a){return Qh(a,2)},reset:function(){Mh=new Ta;Nh={};Ph()}},Qh=function(a,b){return 2!=b?Mh.get(a):Sh(a)},Sh=function(a,b){var c=a.split(".");b=b||[];for(var d=Nh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Qa(b,d))return}return d},Th=function(a,b){Oh.hasOwnProperty(a)||(Mh.set(a,b),G(nb(a,b),Nh),Ph())},Ph=function(a){Va(Oh,function(b,c){Mh.set(b,c);G(nb(b,
void 0),Nh);G(nb(b,c),Nh);a&&delete Oh[b]})},Uh=function(a,b,c){Lh[a]=Lh[a]||{};var d=1!==c?Sh(b):Mh.get(b);"array"===Db(d)||"object"===Db(d)?Lh[a][b]=G(d):Lh[a][b]=d},Vh=function(a,b){if(Lh[a])return Lh[a][b]},Wh=function(a,b){Lh[a]&&delete Lh[a][b]};var Zh={},$h=function(a,b){if(p._gtmexpgrp&&p._gtmexpgrp.hasOwnProperty(a))return p._gtmexpgrp[a];void 0===Zh[a]&&(Zh[a]=Math.floor(Math.random()*b));return Zh[a]};var ai=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function bi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var di=function(a,b,c,d){return ci(d)?bi(a,String(b||document.cookie),c):[]},gi=function(a,b,c,d,e){if(ci(e)){var f=ei(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=fi(f,function(g){return g.Kc},b);if(1===f.length)return f[0].id;f=fi(f,function(g){return g.Zb},c);return f[0]?f[0].id:void 0}}};function hi(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=di(b,f,!1,d).indexOf(c)}
var li=function(a,b,c,d){function e(x,y,w){if(null==w)return delete h[y],x;h[y]=w;return x+"; "+y+"="+w}function f(x,y){if(null==y)return delete h[y],x;h[y]=!0;return x+"; "+y}if(!ci(c.ya))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ii(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.hi);g=e(g,"samesite",
c.Bi);c.Ei&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=ji(),q=void 0,t=!1,r=0;r<n.length;++r){var u="none"!==n[r]?n[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){q=x;continue}t=!0;if(!ki(u,c.path)&&hi(v,a,b,c.ya))return 0}if(q&&!t)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return ki(m,c.path)?1:hi(g,a,b,c.ya)?0:1},mi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return li(a,b,c)};
function fi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function ei(a,b,c){for(var d=[],e=di(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Kc:1*l[0]||1,Zb:1*l[1]||1}))}}return d}
var ii=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},ni=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,oi=/(^|\.)doubleclick\.net$/i,ki=function(a,b){return oi.test(document.location.hostname)||"/"===b&&ni.test(a)},ji=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;oi.test(e)||ni.test(e)||a.push("none");
return a},ci=function(a){if(!lg()||!a||!wg())return!0;if(!vg(a))return!1;var b=tg(a);return null==b?!0:!!b};var pi=function(){for(var a=Uf.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=p.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^ai(a)&2147483647,Math.round(eb()/1E3)].join(".")},si=function(a,b,c,d,e){var f=qi(b);return gi(a,f,ri(c),d,e)},ti=function(a,b,c,d){var e=""+qi(c),f=ri(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},qi=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ri=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function ui(a,b,c){var d,e=a.Yb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||eb())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var vi=["1"],wi={},zi=function(a){var b=xi(a.prefix),c=wi[b];c&&yi(b,c,a)},Bi=function(a){var b=xi(a.prefix);if(!wi[b]&&!Ai(b,a.path,a.domain)){var c=pi();yi(b,c,a);var d=Wf("google_tag_data",{});d._gcl_au?zf("GTM",57):d._gcl_au=c;Ai(b,a.path,a.domain)}};function yi(a,b,c){var d=ti(b,"1",c.domain,c.path),e=ui(c);e.ya="ad_storage";mi(a,d,e)}function Ai(a,b,c){var d=si(a,b,c,vi,"ad_storage");d&&(wi[a]=d);return d}function xi(a){return(a||"_gcl")+"_au"};function Ci(){for(var a=Di,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ei(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Di,Fi;
function Gi(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Fi[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Di=Di||Ei();Fi=Fi||Ci();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Hi;var Li=function(){var a=Ii,b=Ji,c=Ki(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){bg(K,"mousedown",d);bg(K,"keyup",d);bg(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Mi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ki().decorators.push(f)},Ni=function(a,b,c){for(var d=Ki().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==K.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&hb(e,g.callback())}}return e},Ki=function(){var a=Wf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Oi=/(.*?)\*(.*?)\*(.*)/,Pi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ui=/^(?:www\.|m\.|amp\.)+/,Vi=/([^?#]+)(\?[^#]*)?(#.*)?/;function Wi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Yi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Di=Di||Ei();Fi=Fi||Ci();for(var l=[],m=0;m<h.length;m+=3){var n=m+1<h.length,q=m+2<h.length,t=h.charCodeAt(m),r=n?h.charCodeAt(m+1):0,u=q?h.charCodeAt(m+2):0,v=t>>2,x=(t&3)<<4|r>>4,y=(r&15)<<2|u>>6,w=u&63;q||(w=64,n||(y=64));l.push(Di[v],Di[x],Di[y],Di[w])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Xi(z),
z].join("*")},Xi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Hi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Hi=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Hi[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},$i=function(){return function(a){var b=bh(p.location.href),
c=b.search.replace("?",""),d=Xg(c,"_gl",!1,!0)||"";a.query=Zi(d)||{};var e=$g(b,"fragment").match(Wi("_gl"));a.fragment=Zi(e&&e[3]||"")||{}}},aj=function(a){var b=$i(),c=Ki();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(hb(d,e.query),a&&hb(d,e.fragment));return d},Zi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Oi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=
0;n<b;++n)if(m===Xi(h,n)){l=!0;break a}l=!1}if(l){for(var q={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=Gi(t[r+1]);return q}}}}catch(u){}};function bj(a,b,c,d){function e(n){var q=n,t=Wi(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}n=r;var x=n.charAt(n.length-1);n&&"&"!==x&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Vi.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function cj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ni(b,1,c),e=Ni(b,2,c),f=Ni(b,3,c);if(ib(d)){var g=Yi(d);c?dj("_gl",g,a):ej("_gl",g,a,!1)}if(!c&&ib(e)){var h=Yi(e);ej("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){ej(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){dj(m,n,q);break a}}"string"==typeof q&&bj(m,n,q,void 0)}}
function ej(a,b,c,d){if(c.href){var e=bj(a,b,c.href,void 0===d?!1:d);If.test(e)&&(c.href=e)}}
function dj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=bj(a,b,c.action);If.test(m)&&(c.action=m)}}}
var Ii=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||cj(e,e.hostname)}}catch(g){}},Ji=function(a){try{if(a.action){var b=$g(bh(a.action),"host");cj(a,b)}}catch(c){}},fj=function(a,b,c,d){Li();Mi(a,b,"fragment"===c?2:1,!!d,!1)},gj=function(a,b){Li();Mi(a,[Zg(p.location,"host",!0)],b,!0,!0)},hj=function(){var a=K.location.hostname,b=Pi.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ui,""),l=e.replace(Ui,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},ij=function(a,b){return!1===a?!1:a||b||hj()};var jj=/^\w+$/,kj=/^[\w-]+$/,lj=/^~?[\w-]+$/,mj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},nj=function(){if(!lg()||!wg())return!0;var a=tg("ad_storage");return null==a?!0:!!a},oj=function(a,b){vg("ad_storage")?nj()?a():Ag(a,"ad_storage"):b?zf("TAGGING",3):zg(function(){oj(a,!0)},["ad_storage"])},rj=function(a){var b=[];if(!K.cookie)return b;var c=di(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=pj(c[d]);e&&-1===Qa(b,e)&&b.push(e)}return qj(b)};
function sj(a){return a&&"string"==typeof a&&a.match(jj)?a:"_gcl"}
var uj=function(){var a=bh(p.location.href),b=$g(a,"query",!1,void 0,"gclid"),c=$g(a,"query",!1,void 0,"gclsrc"),d=$g(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Xg(e,"gclid",!1,void 0);c=c||Xg(e,"gclsrc",!1,void 0)}return tj(b,c,d)},tj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(kj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},vj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},xj=function(a){var b=uj();oj(function(){wj(b,a)})};
function wj(a,b,c){function d(l,m){var n=yj(l,e);n&&mi(n,m,f)}b=b||{};var e=sj(b.prefix);c=c||eb();var f=ui(b,c,!0);f.ya="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.pj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Aj=function(a,b){var c=aj(!0);oj(function(){for(var d=sj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==mj[f]){var g=yj(f,d),h=c[g];if(h){var l=Math.min(zj(h),eb()),m;b:{for(var n=l,q=di(g,K.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(zj(q[t])>n){m=!0;break b}m=!1}if(!m){var r=ui(b,l,!0);r.ya="ad_storage";mi(g,h,r)}}}}wj(tj(c.gclid,c.gclsrc),b)})},yj=function(a,b){var c=mj[a];if(void 0!==c)return b+c},zj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function pj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Bj=function(a,b,c,d,e){if(Oa(b)){var f=sj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=yj(a[l],f);if(m){var n=di(m,K.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};oj(function(){fj(g,b,c,d)})}},qj=function(a){return a.filter(function(b){return lj.test(b)})},Cj=function(a,b){for(var c=sj(b.prefix),d={},e=0;e<a.length;e++)mj[a[e]]&&(d[a[e]]=mj[a[e]]);oj(function(){Va(d,function(f,g){var h=di(c+g,K.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=zj(l),
n={};n[f]=[pj(l)];wj(n,b,m)}})})};function Dj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ej=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(wg()){var c=uj();if(Dj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);gj(function(){return d},3);gj(function(){var e={};return e._up="1",e},1)}}},Fj=function(){var a;if(nj()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({te:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].te]||(g[b[h].te]=[]),g[b[h].te].push({timestamp:l[1],Nc:l[2]}))}a=g}else a={};return a};var Gj=/^\d+\.fls\.doubleclick\.net$/,Hj=!1;function Ij(a,b){vg(J.C)?Fg(J.C)?a():Ag(a,J.C):b?Bf(42):Hg(function(){Ij(a,!0)},[J.C])}function Jj(a){var b=bh(p.location.href),c=$g(b,"host",!1);if(c&&c.match(Gj)){var d=$g(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Kj(a,b,c){if("aw"==a||"dc"==a){var d=Jj("gcl"+a);if(d)return d.split(".")}var e=sj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Fg(J.C)&&c,g;g=uj()[a]||[];if(0<g.length)return f?["0"]:g}var h=yj(a,e);return h?rj(h):[]}
var Lj=function(a){var b=Jj("gac");if(b)return!Fg(J.C)&&a?"0":decodeURIComponent(b);var c=Fj(),d=[];Va(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Nc);g=qj(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Nj=function(a,b){if(Hj)Mj(a,b,"dc");else{var c=uj().dc||[];Ij(function(){Bi(b);var d=wi[xi(b.prefix)],e=!1;if(d&&0<c.length){var f=N.joined_au=N.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;ig(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&zi(b)})}},Mj=function(a,b,c){var d=uj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!vj(h,c)||e.push({Nc:f,Of:h});!g||c&&"dc"!==c||e.push({Nc:g,Of:"ds"});Ij(function(){Bi(b);var l=wi[xi(b.prefix)],m=!1;if(l&&0<e.length)for(var n=N.joined_auid=N.joined_auid||{},q=0;q<e.length;q++){var t=e[q],r=t.Nc,u=t.Of,v=(b.prefix||"_gcl")+"."+u+"."+r;if(!n[v]){var x="https://adservice.google.com/pagead/regclk";x=x+"?gclid="+r+"&auid="+l+"&gclsrc="+u;ig(x);
m=n[v]=!0}}null==a&&(a=m);a&&l&&zi(b)})};var Oj=/[A-Z]+/,Pj=/\s/,Qj=function(a){if(k(a)&&(a=ab(a),!Pj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Oj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Sj=function(a){for(var b={},c=0;c<a.length;++c){var d=Qj(a[c]);d&&(b[d.id]=d)}Rj(b);var e=[];Va(b,function(f,g){e.push(g)});return e};
function Rj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Tj=function(){var a=!1;return a};var Vj=function(a,b,c,d){return(2===Uj()||d||"http:"!=p.location.protocol?a:b)+c},Uj=function(){var a=Zf(),b;if(1===a)a:{var c=Dh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var jk=function(a){return Fg(J.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=ch(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},kk=function(){var a;if(!(a=Eh)){var b;if(!0===p._gtmdgs)b=!0;else{var c=Uf&&Uf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Xa("1");return $h(1,100)<d?$h(2,2):-1},lk=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var mk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),nk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ok={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},pk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var rk=function(a){var b=Qh("gtm.allowlist")||Qh("gtm.whitelist");b&&Bf(9);var c=b&&jb($a(b),nk),d=Qh("gtm.blocklist")||Qh("gtm.blacklist");d||(d=Qh("tagTypeBlacklist"))&&
Bf(3);d?Bf(8):d=[];qk()&&(d=$a(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Qa($a(d),"google")&&Bf(2);var e=d&&jb($a(d),ok),f={};return function(g){var h=g&&g[$d.Qa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Jh[h]||[],m=a(h,l);if(b){var n;if(n=m)a:{if(0>Qa(c,h))if(l&&0<l.length)for(var q=0;q<
l.length;q++){if(0>Qa(c,l[q])){Bf(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var r=0<=Qa(e,h);if(r)t=r;else{var u=Ua(e,l||[]);u&&Bf(10);t=u}}var v=!m||t;v||!(0<=Qa(l,"sandboxedScripts"))||c&&-1!==Qa(c,"sandboxedScripts")||(v=Ua(e,pk));return f[h]=v}},qk=function(){return mk.test(p.location&&p.location.hostname)};var sk={active:!0,isAllowed:function(){return!0}},tk=function(a){var b=N.zones;return b?b.checkState(ne.F,a):sk},uk=function(a){var b=N.zones;!b&&a&&(b=N.zones=a());return b};var vk=function(){},wk=function(){};var xk=!1,yk=0,zk=[];function Ak(a){if(!xk){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){xk=!0;for(var e=0;e<zk.length;e++)M(zk[e])}zk.push=function(){for(var f=0;f<arguments.length;f++)M(arguments[f]);return 0}}}function Bk(){if(!xk&&140>yk){yk++;try{K.documentElement.doScroll("left"),Ak()}catch(a){p.setTimeout(Bk,50)}}}var Ck=function(a){xk?a():zk.push(a)};var Ek=function(a,b){this.g=!1;this.o=[];this.s={tags:[]};this.D=Dk(this,a,b)},Fk=function(a,b,c,d){if(Ah.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Fb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.s.tags.push(e)-1},Gk=function(a,b,c,d){var e=a.s.tags[b];e&&(e.status=c,e.executionTime=d)},Hk=function(a){if(!a.g){for(var b=a.o,c=0;c<b.length;c++)b[c]();a.g=!0;a.o.length=0}},Dk=function(a,b,c){Ma(b)&&a.Mb(b);c&&p.setTimeout(function(){return Hk(a)},Number(c));return Ik(a)};
Ek.prototype.Mb=function(a){var b=this,c=gb(function(){return M(function(){a(ne.F,b.s)})});this.g?c():this.o.push(c)};var Ik=function(a){var b=0,c=0,d=!1;return{add:function(){c++;return gb(function(){b++;d&&b>=c&&Hk(a)})},ph:function(){d=!0;b>=c&&Hk(a)}}};var Jk=function(){function a(d){return!Na(d)||0>d?0:d}if(!N._li&&p.performance&&p.performance.timing){var b=p.performance.timing.navigationStart,c=Na(Rh.get("gtm.start"))?Rh.get("gtm.start"):0;N._li={cst:a(c-b),cbt:a(Gh-b)}}};var Nk={},Ok=function(){return p.GoogleAnalyticsObject&&p[p.GoogleAnalyticsObject]},Pk=!1;
var Qk=function(a){p.GoogleAnalyticsObject||(p.GoogleAnalyticsObject=a||"ga");var b=p.GoogleAnalyticsObject;if(p[b])p.hasOwnProperty(b)||Bf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);p[b]=c}Jk();return p[b]},Rk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ok();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Sk=function(a){};
var Uk=function(a){},Tk=function(){return p.GoogleAnalyticsObject||"ga"},Vk=function(a,b){return function(){var c=Ok(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var $k=function(){return"&tc="+Pd.filter(function(a){return a}).length},cl=function(){2022<=al().length&&bl()},el=function(){dl||(dl=p.setTimeout(bl,500))},bl=function(){dl&&(p.clearTimeout(dl),dl=void 0);void 0===fl||gl[fl]&&!hl&&!il||(jl[fl]||kl.Zh()||0>=ll--?(Bf(1),jl[fl]=!0):(kl.yi(),ag(al()),gl[fl]=!0,ml=nl=ol=il=hl=""))},al=function(){var a=fl;if(void 0===a)return"";var b=Af("GTM"),c=Af("TAGGING");return[pl,gl[a]?"":"&es=1",ql[a],b?"&u="+b:"",c?"&ut="+c:"",$k(),hl,il,ol?ol:"",nl,ml,"&z=0"].join("")},
rl=function(){return[Hh,"&v=3&t=t","&pid="+Sa(),"&rv="+ne.Cc].join("")},sl="0.005000">Math.random(),pl=rl(),tl=function(){pl=rl()},gl={},hl="",il="",ml="",nl="",ol="",fl=void 0,ql={},jl={},dl=void 0,kl=function(a,b){var c=0,d=0;return{Zh:function(){if(c<a)return!1;eb()-d>=b&&(c=0);return c>=a},yi:function(){eb()-d>=b&&(c=0);c++;d=eb()}}}(2,1E3),ll=1E3,ul=function(a,b,c){if(sl&&!jl[a]&&b){a!==fl&&(bl(),fl=a);var d,e=String(b[$d.Qa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;hl=hl?hl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Rd[g]?"1":"2")+d;ml=ml?ml+"."+h:"&ti="+h;el();cl()}},vl=function(a,b,c){if(sl&&!jl[a]){a!==fl&&(bl(),fl=a);var d=c+b;il=il?il+"."+d:"&epr="+d;el();cl()}},wl=function(a,b,c){};
var xl=function(){return!1},yl=function(){var a={};return function(b,c,d){}};function zl(a,b,c,d){var e=Pd[a],f=Al(a,b,c,d);if(!f)return null;var g=Xd(e[$d.yf],c,[]);if(g&&g.length){var h=g[0];f=zl(h.index,{onSuccess:f,onFailure:1===h.Kf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Al(a,b,c,d){function e(){if(f[$d.Yg])h();else{var x=Yd(f,c,[]);var z=Fk(c.Ra,String(f[$d.Qa]),Number(f[$d.zf]),x[$d.Zg]),A=!1;x.vtp_gtmOnSuccess=function(){if(!A){A=!0;var E=eb()-D;ul(c.id,Pd[a],"5");Gk(c.Ra,z,"success",
E);g()}};x.vtp_gtmOnFailure=function(){if(!A){A=!0;var E=eb()-D;ul(c.id,Pd[a],"6");Gk(c.Ra,z,"failure",E);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;ul(c.id,f,"1");var C=function(){var E=eb()-D;ul(c.id,f,"7");Gk(c.Ra,z,"exception",E);A||(A=!0,h())};var D=eb();try{Wd(x,c)}catch(E){C(E)}}}var f=Pd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Vd(f))return null;var m=Xd(f[$d.Af],c,[]);if(m&&m.length){var n=m[0],q=zl(n.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===n.Kf?l:q}if(f[$d.uf]||f[$d.ah]){var t=f[$d.uf]?Qd:
c.Ji,r=g,u=h;if(!t[a]){e=gb(e);var v=Bl(a,t,e);g=v.onSuccess;h=v.onFailure}return function(){t[a](r,u)}}return e}function Bl(a,b,c){var d=[],e=[];b[a]=Cl(d,e,c);return{onSuccess:function(){b[a]=Dl;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=El;for(var f=0;f<e.length;f++)e[f]()}}}function Cl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Dl(a){a()}function El(a,b){b()};var Hl=function(a,b,c){for(var d=[],e=0;e<Pd.length;e++)if(a[e]){var f=Pd[e];var g=c.add();try{var h=zl(e,{onSuccess:g,onFailure:g,terminate:g},b,e);if(h){var l=d,m=l.push,n=e,q=f["function"];if(!q)throw"Error: No function name given for function call.";var t=Rd[q];m.call(l,{dg:n,Xf:t?t.priorityOverride||0:0,Lc:h})}else Fl(e,b),g()}catch(u){g()}}c.ph();d.sort(Gl);for(var r=0;r<d.length;r++)d[r].Lc();return 0<
d.length};function Gl(a,b){var c,d=b.Xf,e=a.Xf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.dg,h=b.dg;f=g>h?1:g<h?-1:0}return f}function Fl(a,b){if(!sl)return;var c=function(d){var e=b.Vd(Pd[d])?"3":"4",f=Xd(Pd[d][$d.yf],b,[]);f&&f.length&&c(f[0].index);ul(b.id,Pd[d],e);var g=Xd(Pd[d][$d.Af],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Il=!1,Nl=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Il)return!1;Il=!0}var d=tk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=tk(Number.MAX_SAFE_INTEGER)}sl&&!jl[b]&&fl!==b&&(bl(),fl=b,ml=hl="",ql[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,el());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,Vd:rk(d.isAllowed),Ji:[],Tf:function(){Bf(6)},Ef:Jl(b),Ra:new Ek(f,
g)},l=h.Ra.D;Kl(b,h.Ra);var m=ie(h);e&&(m=Ll(m));var n=Hl(m,h,l);"gtm.js"!==c&&"gtm.sync"!==c||Uk(ne.F);switch(c){case "gtm.init":Bf(19),n&&Bf(20)}return Ml(m,n)};function Jl(a){return function(b){sl&&(Jb(b)||wl(a,"input",b))}}
function Kl(a,b){Uh(a,"event",1);Uh(a,"ecommerce",1);Uh(a,"gtm");Uh(a,"eventModel");}function Ll(a){for(var b=[],c=0;c<a.length;c++)a[c]&&zh[String(Pd[c][$d.Qa])]&&(b[c]=!0);return b}function Ml(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Pd[c]&&!Ah[String(Pd[c][$d.Qa])])return!0;return!1}function Ol(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return bh(""+c+b).href}}function Pl(a,b){return Ql()?Ol(a,b):void 0}function Ql(){var a=!1;return a};var Rl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Sl=function(a){var b=new Rl;b.eventModel=a;return b},Tl=function(a,b){a.targetConfig=b;return a},Ul=function(a,b){a.containerConfig=b;return a},Vl=function(a,b){a.remoteConfig=b;return a},Wl=function(a,b){a.globalConfig=
b;return a},Xl=function(a,b){a.onSuccess=b;return a},Yl=function(a,b){a.setContainerTypeLoaded=b;return a},Zl=function(a,b){a.getContainerTypeLoaded=b;return a},$l=function(a,b){a.onFailure=b;return a};Rl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var am=function(a){function b(e){Va(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Va(c,function(e){d.push(e)});return d};var bm;if(3===ne.Cc.length)bm="g";else{var cm="G";bm=cm}
var dm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:bm,OPT:"o"},em=function(a){var b=ne.F.split("-"),c=b[0].toUpperCase(),d=dm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===ne.Cc.length){var g="w";f="2"+g}else f="";return f+d+ne.Cc+e};var fm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var gm=function(){return Mf("iPhone")&&!Mf("iPod")&&!Mf("iPad")};Mf("Opera");Mf("Trident")||Mf("MSIE");Mf("Edge");!Mf("Gecko")||-1!=Jf.toLowerCase().indexOf("webkit")&&!Mf("Edge")||Mf("Trident")||Mf("MSIE")||Mf("Edge");-1!=Jf.toLowerCase().indexOf("webkit")&&!Mf("Edge")&&Mf("Mobile");Mf("Macintosh");Mf("Windows");Mf("Linux")||Mf("CrOS");var hm=na.navigator||null;hm&&(hm.appVersion||"").indexOf("X11");Mf("Android");gm();Mf("iPad");Mf("iPod");gm()||Mf("iPad")||Mf("iPod");Jf.toLowerCase().indexOf("kaios");var im=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var jm=function(){};var km=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},lm=function(a,b){this.o=a;this.g=null;this.D={};this.S=0;this.N=void 0===b?500:b;this.s=null};ma(lm,jm);
var nm=function(a){return"function"===typeof a.o.__tcfapi||null!=mm(a)};
lm.prototype.addEventListener=function(a){var b={},c=Df(function(){return a(b)}),d=0;-1!==this.N&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.N));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=km(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{om(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};lm.prototype.removeEventListener=function(a){a&&a.listenerId&&om(this,"removeEventListener",null,a.listenerId)};
var qm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=pm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&pm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?pm(a.purpose.legitimateInterests,
b)&&pm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},pm=function(a,b){return!(!a||!a[b])},om=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(mm(a)){rm(a);var f=++a.S;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},mm=function(a){if(a.g)return a.g;a.g=im(a.o,"__tcfapiLocator");return a.g},rm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},fm(a.o,a.s))};var sm={1:0,3:0,4:0,7:3,9:3,10:3};function tm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var um=tm("",550),vm=tm("",500);function wm(){var a=N.tcf||{};return N.tcf=a}
var xm=function(a,b){this.s=a;this.g=b;this.o=eb();},ym=function(a){},zm=function(a){},Fm=function(){var a=wm(),b=new lm(p,3E3),c=new xm(b,a);if((Am()?!0===p.gtag_enable_tcf_support:!1!==p.gtag_enable_tcf_support)&&!a.active&&("function"===typeof p.__tcfapi||nm(b))){a.active=!0;a.ac={};Bm();var d=setTimeout(function(){Cm(a);Dm(a);d=null},vm);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Cm(a),Dm(a),ym(c);else{var f;if(!1===e.gdprApplies)f=Em(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in sm)if(sm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var n;var q=l;!1===q.gdprApplies?n=!0:(void 0===q.internalErrorState&&(q.internalErrorState=km(q)),n="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===q.eventStatus)?!0:!1);g["1"]=n?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:qm(l,"1",0):!1}else g[h]=qm(e,h,sm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.ac=f,Dm(a),ym(c))}}),zm(c)}catch(e){d&&(clearTimeout(d),d=null),Cm(a),Dm(a)}}};function Cm(a){a.type="e";a.tcString="tcunavailable";a.ac=Em()}function Bm(){var a={};Dg((a.ad_storage="denied",a.wait_for_update=um,a))}
var Am=function(){var a=!1;a=!0;return a};function Em(){var a={},b;for(b in sm)sm.hasOwnProperty(b)&&(a[b]=!0);return a}function Dm(a){var b={};Eg((b.ad_storage=a.ac["1"]?"granted":"denied",b))}
var Gm=function(){var a=wm();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Hm=function(){var a=wm();return a.active?a.tcString||"":""},Im=function(a){if(!sm.hasOwnProperty(String(a)))return!0;var b=wm();return b.active&&b.ac?!!b.ac[String(a)]:!0};var Jm=!1;function Km(a){var b=String(p.location).split(/[?#]/)[0],c=ne.kg||p._CONSENT_MODE_SALT;return a?c?String(ai(b+a+c)):"0":""}
function Lm(a){function b(r){var u;N.reported_gclid||(N.reported_gclid={});u=N.reported_gclid;var v;v=Jm&&g&&(!wg()||Fg(J.C))?l+"."+(f.prefix||"_gcl")+(r?"gcu":"gcs"):l+(r?"gcu":"gcs");if(!u[v]){u[v]=!0;var x=[],y=function(D,E){E&&x.push(D+"="+encodeURIComponent(E))},w="https://www.google.com";if(wg()){var z=Fg(J.C);y("gcs",Gg());r&&y("gcu","1");N.dedupe_gclid||(N.dedupe_gclid=
""+pi());y("rnd",N.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Fg(J.C)){var A=rj("_gcl_aw");y("gclaw",A.join("."))}y("url",String(p.location).split(/[?#]/)[0]);y("dclid",Mm(d,n));!z&&d&&(w="https://pagead2.googlesyndication.com")}y("gdpr_consent",Hm());"1"===aj(!1)._up&&y("gtm_up","1");y("gclid",Mm(d,l));y("gclsrc",
m);y("gtm",em(!e));Jm&&g&&Fg(J.C)&&(Bi(f||{}),y("auid",wi[xi(f.prefix)]||""));var C=w+"/pagead/landing?"+x.join("&");ig(C)}}var c=!!a.Jd,d=!!a.wa,e=a.U,f=void 0===a.Hc?{}:a.Hc,g=void 0===a.Qc?!0:a.Qc,h=uj(),l=h.gclid||"",m=h.gclsrc,n=h.dclid||"",q=!c&&(!l||m&&"aw.ds"!==m?!1:!0),t=wg();if(q||t)t?Hg(function(){b();Fg(J.C)||Ag(function(r){return b(!0,r.Ff)},J.C)},[J.C]):b()}function Mm(a,b){var c=a&&!Fg(J.C);return b&&c?"0":b}
var Wm=function(a){return!(void 0===a||null===a||0===(a+"").length)},Xm=function(a,b){var c;if(2===b.da)return a("ord",Sa(1E11,1E13)),!0;if(3===b.da)return a("ord","1"),a("num",Sa(1E11,1E13)),!0;if(4===b.da)return Wm(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.da)c="1";else if(6===b.da)c=b.ne;else return!1;Wm(c)&&a("qty",c);Wm(b.Ic)&&a("cost",b.Ic);Wm(b.transactionId)&&a("ord",b.transactionId);return!0},Zm=function(a,b,c){function d(w,z,A){n.hasOwnProperty(w)||(z=String(z),m.push(";"+w+"="+(A?
z:Ym(z))))}var e=a.Od,f=a.qe,g=a.protocol;g+=f?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var h=";",l=!Fg(J.C)&&a.wa;l&&(g="https://ade.googlesyndication.com/ddm/activity",h="/",f=!1);var m=[h,"src="+Ym(e),";type="+Ym(a.Rd),";cat="+Ym(a.Lb)],n=a.Fh||{};Va(n,function(w,z){m.push(";"+Ym(w)+"="+Ym(z+""))});if(Xm(d,a)){Wm(a.bd)&&d("u",a.bd);Wm(a.ad)&&d("tran",a.ad);d("gtm",em());wg()&&(d("gcs",Gg()),c&&d("gcu","1"));(function(w,z){z&&
d(w,z)})("gdpr_consent",Hm());"1"===aj(!1)._up&&d("gtm_up","1");!1===a.mh&&d("npa","1");if(a.Kd){var q=void 0===a.wa?!0:!!a.wa,t=Kj("dc",a.lb,q);t&&t.length&&d("gcldc",t.join("."));var r=Kj("aw",a.lb,q);r&&r.length&&d("gclaw",r.join("."));var u=Lj(q);u&&d("gac",u);Bi({prefix:a.lb,Yb:a.Dh,domain:a.Ch,flags:a.bj});var v=wi[xi(a.lb)];v&&d("auiddc",v)}Wm(a.ee)&&d("prd",a.ee,!0);Va(a.ve,function(w,z){d(w,z)});m.push(b||"");if(Wm(a.Sc)){var x=a.Sc||"";l&&(x=ch(x));
d("~oref",x)}var y=g+m.join("")+"?";f?$f(y,a.onSuccess):ag(y,a.onSuccess,a.onFailure)}else M(a.onFailure)},Ym=encodeURIComponent,$m=function(a,b){wg()?Hg(function(){Zm(a,b);Fg(J.C)||Ag(function(){Zm(a,b,!0)},J.C)},[J.C]):Zm(a,b)};var wn=function(){var a=!0;Im(7)&&Im(9)&&Im(10)||(a=!1);var b=!0;b=!1;b&&!vn()&&(a=!1);return a},vn=function(){var a=!0;Im(3)&&Im(4)||(a=!1);return a};var Un=!1;function Vn(){var a=N;return a.gcq=a.gcq||new Wn}
var Xn=function(a,b,c){Vn().register(a,b,c)},Yn=function(a,b,c,d){Vn().push("event",[b,a],c,d)},Zn=function(a,b){Vn().push("config",[a],b)},$n=function(a,b,c,d){Vn().push("get",[a,b],c,d)},ao=function(a){return Vn().getRemoteConfig(a)},bo={},co=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},eo=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},Wn=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
fo=function(a,b){var c=Qj(b);return a.D[c.containerId]=a.D[c.containerId]||new co},go=function(a,b,c){if(b){var d=Qj(b);if(d&&1===fo(a,b).status){fo(a,b).status=2;var e={};sl&&(e.timeoutId=p.setTimeout(function(){Bf(38);el()},3E3));a.push("require",[e],d.containerId);bo[d.containerId]=eb();if(Tj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=p.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Pl(c,g)||h;Yf(l)}}}},ho=function(a,b,c,d){if(d.U){var e=fo(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),n=G(a.o),q=Qh("gtm.uniqueEventId"),t=Qj(d.U).prefix,r=Zl(Yl($l(Xl(Wl(Vl(Ul(Tl(Sl(g),h),l),m),n),function(){
vl(q,t,"2");}),function(){vl(q,t,"3");}),function(u,v){a.s[u]=v}),function(u){return a.s[u]});try{vl(q,t,"1");f(d.U,b,d.s,r)}catch(u){vl(q,t,"4");}}}};aa=Wn.prototype;
aa.register=function(a,b,c){var d=fo(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){d.remoteConfig=c}var e=Qj(a),f=bo[e.containerId];if(void 0!==f){var g=N[e.containerId].bootstrap,h=e.prefix.toUpperCase();N[e.containerId]._spx&&(h=h.toLowerCase());var l=Qh("gtm.uniqueEventId"),m=h,n=eb()-g;if(sl&&!jl[l]){l!==fl&&(bl(),fl=l);var q=m+"."+Math.floor(g-f)+
"."+Math.floor(n);nl=nl?nl+","+q:"&cl="+q}delete bo[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(eb()/1E3);go(this,c,b[0][J.Pa]||this.o[J.Pa]);Un&&c&&fo(this,c).g&&(d=!1);this.g.push(new eo(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(eb()/1E3);0<this.g.length?this.g.splice(1,0,new eo(a,d,c,b,!1)):this.g.push(new eo(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)Un?!e.U||fo(this,e.U).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==fo(this,e.U).status&&!a){Un&&this.g.push.apply(this.g,c);return}sl&&p.clearTimeout(e.g[0].timeoutId);break;case "set":Va(e.g[0],function(t,r){G(nb(t,r),b.o)});break;case "config":var f=e.g[0],g=!!f[J.xc];delete f[J.xc];var h=fo(this,e.U),l=Qj(e.U),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.U]={});h.g&&g||ho(this,J.ja,f,e);h.g=!0;delete f[J.Gb];m?G(f,h.containerConfig):G(f,h.targetConfig[e.U]);Un&&(d=!0);break;case "event":ho(this,e.g[1],e.g[0],e);break;case "get":var n={},q=(n[J.Da]=e.g[0],n[J.Ca]=e.g[1],n);ho(this,J.Ma,q,e)}this.g.shift()}Un&&(this.g.push.apply(this.g,c),d&&this.flush())};aa.getRemoteConfig=function(a){return fo(this,a).remoteConfig};function io(a,b,c){};function jo(a,b,c,d){};function ko(a){};var lo=function(a,b,c){function d(f,g){var h=f[g];h=jg(f,g);return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||dg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},mo=function(a){N.hasOwnProperty("autoEventsSettings")||(N.autoEventsSettings={});var b=N.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},no=function(a,b,c){mo(a)[b]=c},oo=function(a,b,c,d){var e=mo(a),f=fb(e,b,d);e[b]=c(f)},po=function(a,b,c){var d=mo(a);return fb(d,b,c)};var qo={},ro=[];
var yo=function(a,b){};

function Bo(a,b){};var Co=/^\s*$/,Do,Eo=!1;
function Po(a,b){}function Qo(a,b,c){};var Ro=!!p.MutationObserver,So=void 0,To=function(a){if(!So){var b=function(){var c=K.body;if(c)if(Ro)(new MutationObserver(function(){for(var e=0;e<So.length;e++)M(So[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;bg(c,"DOMNodeInserted",function(){d||(d=!0,M(function(){d=!1;for(var e=0;e<So.length;e++)M(So[e])}))})}};So=[];K.body?b():M(b)}So.push(a)};var Vo=["www.youtube.com","www.youtube-nocookie.com"],Wo,Xo=!1,Yo=0;
function hp(a,b){}function ip(a,b){
return!0};function jp(a,b){var c;H(F(this),["path:!string"],[a]);kf(this,"access_globals","execute",a);for(var d=a.split("."),e=p,f=e[d[0]],g=1;f&&g<d.length;g++){e=f;f=f[d[g]];}if("function"!==Db(f))return;var h=!1;
for(var l=[],m=1;m<arguments.length;m++)l.push(Hb(arguments[m],this.g,h));var n=(0,this.g.S)(f,e,l);c=Gb(n,this.g);void 0===c&&void 0!==n&&Bf(45);return c};function kp(a){};function lp(a){};var mp=!1,np=[];function op(){if(!mp){mp=!0;for(var a=0;a<np.length;a++)M(np[a])}}var pp=function(a){mp?M(a):np.push(a)};function qp(a){H(F(this),["listener:!Fn"],arguments);kf(this,"process_dom_events","window","load");pp(Hb(a))};function rp(a,b){var c;var e=!1;var f=Gb(c,this.g,e);void 0===f&&void 0!==c&&Bf(45);return f};function sp(a){var b;H(F(this),["path:!string"],arguments);kf(this,"access_globals","read",a);var c=a.split("."),d=p,e;for(e=0;e<c.length-1;e++){d=d[c[e]];if(null==d)return;}b=d[c[e]];var f=!1;var g=Gb(b,this.g,f);void 0===g&&void 0!==b&&Bf(45);return g};function tp(a,b){var c=null,d=!1;H(F(this),["functionPath:!string","arrayPath:!string"],arguments);kf(this,"access_globals","readwrite",a);kf(this,"access_globals","readwrite",b);var e=[];
var f=a.split("."),g=mb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ma(l))return null;if(l)return Gb(l,this.g,d);var m;l=function(){if(!Ma(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var n=b.split("."),q=mb(n,e),t=n[n.length-1];if(void 0===q)throw Error("Path "+n+" does not exist.");m=q[t];void 0===m&&(m=[],q[t]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};
return Gb(c,this.g,d)};function up(a){var b;H(F(this),["path:!string"],arguments);kf(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=mb(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!Ma(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return Gb(b,this.g,h)};var vp=function(a){var b;return b};function wp(a,b){b=void 0===b?!0:b;var c;return c};function xp(a){var b=null;return b};function yp(a,b){var c;return c};function zp(a,b){var c;return c};function Ap(a){var b="";return b};function Bp(a,b){var c;return c};function Cp(a){var b="";return b};function Dp(){kf(this,"get_user_agent");return p.navigator.userAgent};function Ep(a,b){};var Fp={};
function Gp(a,b,c,d){H(F(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);kf(this,"inject_script",a);var e=this.g,f=function(){b instanceof sb&&b.Ua(e)},g=function(){c instanceof sb&&c.Ua(e)};if(!d){Yf(a,f,g);return}var h=d;Fp[h]?(Fp[h].onSuccess.push(f),Fp[h].onFailure.push(g)):(Fp[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Fp[h].onSuccess,m=0;m<l.length;m++)M(l[m]);l.push=function(n){M(n);return 0}},
g=function(){for(var l=Fp[h].onFailure,m=0;m<l.length;m++)M(l[m]);Fp[h]=null},Yf(a,f,g));};var Hp=function(){return!1},Ip={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Jp(){};function Kp(a){var b=void 0;return b};function Lp(a,b){var c=!1;return c};function Mp(){var a="";return a};function Np(){var a="";return a};function Op(a,b,c,d){d=void 0===d?!1:d;};function Pp(a,b,c){};function Qp(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Rp(a){H(F(this),["consentSettings:!DustMap"],arguments);for(var b=a.Tb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==J.ze&&kf(this,"access_consent",e,"write")}Dg(Hb(a))};function Sp(a,b,c){H(F(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);kf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=p,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Hb(b,this.g,d),!0;return!1};function Tp(a,b,c){};var Up=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Vp(a,b,c,d){var e=this;};var Wp={},Xp={};Wp.getItem=function(a){var b=null;return b};
Wp.setItem=function(a,b){};
Wp.removeItem=function(a){};Wp.clear=function(){};var Yp=function(a){var b;return b};function Zp(a){H(F(this),["consentSettings:!DustMap"],arguments);var b=Hb(a),c;for(c in b)b.hasOwnProperty(c)&&kf(this,"access_consent",c,"write");Eg(b)};var ed=function(){var a=new vf;Tj()?(a.add("injectHiddenIframe",Ka),a.add("injectScript",Ka)):(a.add("injectHiddenIframe",Ep),a.add("injectScript",Gp));var b=Pp;a.add("Math",cf());a.add("TestHelper",xf());a.add("addEventCallback",ko);a.add("aliasInWindow",ip);a.add("assertApi",Ze);a.add("assertThat",$e);a.add("callInWindow",
jp);a.add("callLater",kp);a.add("copyFromDataLayer",rp);a.add("copyFromWindow",sp);a.add("createArgumentsQueue",tp);a.add("createQueue",up);a.add("decodeUri",df);a.add("decodeUriComponent",ef);a.add("encodeUri",ff);a.add("encodeUriComponent",gf);a.add("fail",hf);a.add("fromBase64",vp,!("atob"in p));a.add("generateRandom",jf);a.add("getContainerVersion",lf);a.add("getCookieValues",wp);a.add("getQueryParameters",yp);a.add("getReferrerQueryParameters",zp);a.add("getReferrerUrl",Ap);a.add("getTimestamp",
mf);a.add("getTimestampMillis",mf);a.add("getType",nf);a.add("getUrl",Cp);a.add("localStorage",Ip,!Hp());a.add("logToConsole",Jp);a.add("makeInteger",pf);a.add("makeNumber",qf);a.add("makeString",rf);a.add("makeTableMap",sf);a.add("mock",uf);a.add("queryPermission",Lp);a.add("readCharacterSet",Mp);a.add("readTitle",Np);a.add("sendPixel",b);a.add("setCookie",Qp);a.add("setInWindow",Sp);a.add("sha256",Vp);a.add("templateStorage",Wp);a.add("toBase64",Yp,!("btoa"in p));a.add("JSON",of(function(c){var d=this.g.g;d&&d.log.call(this,"error",c)}));a.add("parseUrl",Kp);

return function(c){var d;if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c)){var f=!1,g=this.g.g;if(g){var h=g.Sb();if(h){0!==h.indexOf("__cvt_")&&(f=!0);}}e=f}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var cd,re;
function $p(){var a=data.runtime||[],b=data.runtime_lines;cd=new ad;aq();Gd=function(e,f,g){bq(f);var h=new wb;Va(f,function(r,u){var v=Gb(u);void 0===v&&void 0!==u&&Bf(44);h.set(r,v)});cd.g.g.N=ee();var l={qh:se(e),eventId:void 0!==g?g.id:void 0,Mb:void 0!==g?function(r){return g.Ra.Mb(r)}:void 0,Sb:function(){return e},log:function(){}};if(xl()){var m=yl(),n=void 0,q=void 0;l.ia={Nb:{},nb:function(r,u,v){1===u&&(n=r);7===u&&(q=v);m(r,u,v)},Zd:tf()};l.log=function(r,u){if(n){var v=Array.prototype.slice.call(arguments,1);
m(n,4,{level:r,source:q,message:v})}}}var t=dd(l,[e,h]);cd.g.g.N=void 0;t instanceof xa&&"return"===t.g&&(t=t.o);return Hb(t)};fd();for(var c=0;c<a.length;c++){var d=a[c];if(!Oa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&be(d,b[c]);cd.Lc(d)}}function bq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ma(b)&&(a.gtmOnSuccess=function(){M(b)});Ma(c)&&(a.gtmOnFailure=function(){M(c)})}
function aq(){var a=cd;N.SANDBOXED_JS_SEMAPHORE=N.SANDBOXED_JS_SEMAPHORE||0;kd(a,function(b,c,d){N.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{N.SANDBOXED_JS_SEMAPHORE--}})}function cq(a){void 0!==a&&Va(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Jh[e]=Jh[e]||[];Jh[e].push(b)}})};var dq="HA GF G UA AW DC".split(" "),eq=!1,fq={},gq=!1;function hq(a,b){var c={event:a};b&&(c.eventModel=G(b),b[J.ld]&&(c.eventCallback=b[J.ld]),b[J.sc]&&(c.eventTimeout=b[J.sc]));return c}function iq(){return eq}
var lq={config:function(a){var b;return b},consent:function(a){function b(){iq()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){Bf(39);var c=Kh(),d=a[1];"default"===d?(b(),Dg(a[2])):"update"===d&&(b(),Eg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&k(b)){var c;if(2<a.length){if(!Fb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=hq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return gq=!0,iq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=re.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Fb(a[1])?b=G(a[1]):3==a.length&&k(a[1])&&(b={},Fb(a[2])||Oa(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},mq={policy:!0};var nq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},pq=function(a){var b=oq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Gq=function(a){if(Fq(a))return a;this.g=a};Gq.prototype.Rh=function(){return this.g};var Fq=function(a){return!a||"object"!==Db(a)||Fb(a)?!1:"getUntrustedUpdateValue"in a};Gq.prototype.getUntrustedUpdateValue=Gq.prototype.Rh;var Hq=[];var Kq=!1,Lq=function(a){return p["dataLayer"].push(a)},Mq=function(a){var b=N["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Nq(a){var b=a._clear;Va(a,function(d,e){"_clear"!==d&&(b&&Th(d,void 0),Th(d,e))});Fh||(Fh=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Kh(),a["gtm.uniqueEventId"]=c,Th("gtm.uniqueEventId",c));return Nl(a)}function Oq(){var a=Hq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Wa(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Pq(){for(var a=!1;!Kq&&0<Hq.length;){
Kq=!0;delete Nh.eventModel;Ph();var d=Hq.shift();if(null!=d){var e=Fq(d);if(e){var f=d;d=Fq(f)?f.getUntrustedUpdateValue():void 0;for(var g=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],h=0;h<g.length;h++){var l=g[h],m=Qh(l,1);if(Oa(m)||Fb(m))m=G(m);Oh[l]=m}}try{if(Ma(d))try{d.call(Rh)}catch(y){}else if(Oa(d)){var n=d;if(k(n[0])){var q=n[0].split("."),t=q.pop(),r=n.slice(1),u=Qh(q.join("."),2);if(void 0!==u&&null!==u)try{u[t].apply(u,r)}catch(y){}}}else{if(Wa(d)){a:{var v=
d;if(v.length&&k(v[0])){var x=lq[v[0]];if(x&&(!e||!mq[v[0]])){d=x(v);break a}}d=void 0}if(!d){Kq=!1;continue}}a=Nq(d)||a}}finally{e&&Ph(!0)}}Kq=!1}return!a}function Qq(){var a=Pq();try{nq(p["dataLayer"],ne.F)}catch(b){}return a}
var Sq=function(){var a=Wf("dataLayer",[]),b=Wf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ck(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});pp(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<N.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Gq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Hq.push.apply(Hq,e);if(300<
this.length)for(Bf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Pq()&&h};var d=a.slice(0);Hq.push.apply(Hq,d);Rq()&&M(Qq)},Rq=function(){var a=!0;return a};var Tq={};Tq.yc=new String("undefined");
var Uq=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Tq.yc?b:a[d]);return c.join("")}};Uq.prototype.toString=function(){return this.g("undefined")};Uq.prototype.valueOf=Uq.prototype.toString;Tq.eh=Uq;Tq.Bd={};Tq.Eh=function(a){return new Uq(a)};var Vq={};Tq.zi=function(a,b){var c=Kh();Vq[c]=[a,b];return c};Tq.If=function(a){var b=a?0:1;return function(c){var d=Vq[c];if(d&&"function"===typeof d[b])d[b]();Vq[c]=void 0}};Tq.Yh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Tq.ui=function(a){if(a===Tq.yc)return a;var b=Kh();Tq.Bd[b]=a;return'google_tag_manager["'+ne.F+'"].macro('+b+")"};Tq.ii=function(a,b,c){a instanceof Tq.eh&&(a=a.g(Tq.zi(b,c)),b=Ka);return{Td:a,onSuccess:b}};var Wq=["input","select","textarea"],Xq=["button","hidden","image","reset","submit"],Yq=function(a){var b=a.tagName.toLowerCase();return!Ra(Wq,function(c){return c===b})||"input"===b&&Ra(Xq,function(c){return c===a.type.toLowerCase()})?!1:!0},Zq=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):hg(a,["form"],100)},$q=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Yq(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var kr=p.clearTimeout,lr=p.setTimeout,O=function(a,b,c){if(Tj()){b&&M(b)}else return Yf(a,b,c)},mr=function(){return new Date},nr=function(){return p.location.href},or=function(a){return $g(bh(a),"fragment")},pr=function(a){return ah(bh(a))},qr=function(a,b){return Qh(a,b||2)},rr=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Lq(a)):d=Lq(a);return d},sr=function(a,b){p[a]=b},R=function(a,b,c){b&&
(void 0===p[a]||c&&!p[a])&&(p[a]=b);return p[a]},tr=function(a,b,c){return di(a,b,void 0===c?!0:!!c)},ur=function(a,b,c){return 0===mi(a,b,c)},vr=function(a,b){if(Tj()){b&&M(b)}else $f(a,b)},wr=function(a){return!!po(a,"init",!1)},xr=function(a){no(a,"init",!0)},yr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Dh;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";O(Vj("https://","http://",c))},zr=function(a,
b){var c=a[b];c=jg(a,b);return c},Ar=function(a,b,c){sl&&(Jb(a)||wl(c,b,a))};
var Br=Tq.ii;function Yr(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Zr=new Ta;function $r(a,b){function c(g){var h=bh(g),l=$g(h,"protocol"),m=$g(h,"host",!0),n=$g(h,"port"),q=$g(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function as(a){return bs(a)?1:0}
function bs(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Oa(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(as(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Yr(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Qa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var n=a.ignore_case?"i":void 0;try{var q=String(c)+n,t=Zr.get(q);t||(t=new RegExp(c,n),Zr.set(q,t));m=t.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return $r(b,c)}return!1};var cs=encodeURI,V=encodeURIComponent,ds=ag;var es=function(a,b){if(!a)return!1;var c=$g(bh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var fs=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Lt(){return p.gaGlobal=p.gaGlobal||{}}var Mt=function(){var a=Lt();a.hid=a.hid||Sa();return a.hid},Nt=function(a,b){var c=Lt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var vu=window,wu=document,xu=function(a){var b=vu._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===vu["ga-disable-"+a])return!0;try{var c=vu.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=bi("AMP_TOKEN",String(wu.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return wu.getElementById("__gaOptOutExtension")?!0:!1};var yu={};function Au(a){delete a.eventModel[J.Gb];Cu(a.eventModel)}
var Cu=function(a){Va(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.qa]||{};Va(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Fu=function(a,b,c){Yn(b,c,a)},Gu=function(a,b,c){Yn(b,c,a,!0)},Nu=function(a,b){};
function Hu(a,b){}var W={h:{}};W.h.ctv=["google"],function(){(function(a){W.__ctv=a;W.__ctv.i="ctv";W.__ctv.m=!0;W.__ctv.priorityOverride=0})(function(){return"348"})}();
W.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(w){for(var z=[],A=w.split(","),C=0;C<A.length;C++){var D=Number(A[C]);if(isNaN(D))return[];n.test(A[C])||z.push(D)}return z}function c(){var w=0,z=0;return function(){var A=Og(),C=A.height;w=Math.max(v.scrollLeft+A.width,w);z=Math.max(v.scrollTop+C,z);return{Ld:w,Md:z}}}function d(){r=R("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(w,z,A,C){var D=l(z),E={},I;for(I in D){E.Ya=I;if(D.hasOwnProperty(E.Ya)){var Q=Number(E.Ya);w<Q||(rr({event:"gtm.scrollDepth","gtm.scrollThreshold":Q,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[E.Ya].join(",")}),oo("sdl",z,function(Y){return function(Z){delete Z[Y.Ya];return Z}}(E),{}))}E={Ya:E.Ya}}}function f(){var w=y(),z=w.Ld,A=w.Md,C=z/v.scrollWidth*100,D=A/v.scrollHeight*100;e(z,"horiz.pix",
q.Ac,t.lf);e(C,"horiz.pct",q.zc,t.lf);e(A,"vert.pix",q.Ac,t.Bf);e(D,"vert.pct",q.zc,t.Bf);no("sdl","pending",!1)}function g(){var w=250,z=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(w=50,z=!0);var A=0,C=!1,D=function(){C?A=lr(D,w):(A=0,f(),wr("sdl")&&!a()&&(cg(r,"scroll",E),cg(r,"resize",E),no("sdl","init",!1)));C=!1},E=function(){z&&y();A?C=!0:(A=lr(D,w),no("sdl","pending",!0))};return E}function h(w,z,A){if(z){var C=b(String(w));oo("sdl",A,function(D){for(var E=0;E<C.length;E++){var I=
String(C[E]);D.hasOwnProperty(I)||(D[I]=[]);D[I].push(z)}return D},{})}}function l(w){return po("sdl",w,{})}function m(w){M(w.vtp_gtmOnSuccess);var z=w.vtp_uniqueTriggerId,A=w.vtp_horizontalThresholdsPixels,C=w.vtp_horizontalThresholdsPercent,D=w.vtp_verticalThresholdUnits,E=w.vtp_verticalThresholdsPixels,I=w.vtp_verticalThresholdsPercent;switch(w.vtp_horizontalThresholdUnits){case q.Ac:h(A,z,"horiz.pix");break;case q.zc:h(C,z,"horiz.pct")}switch(D){case q.Ac:h(E,z,"vert.pix");break;case q.zc:h(I,
z,"vert.pct")}wr("sdl")?po("sdl","pending")||(x||(d(),x=!0),M(function(){return f()})):(d(),x=!0,v&&(xr("sdl"),no("sdl","pending",!0),M(function(){f();if(a()){var Q=g();bg(r,"scroll",Q);bg(r,"resize",Q)}else no("sdl","init",!1)})))}var n=/^\s*$/,q={zc:"PERCENT",Ac:"PIXELS"},t={Bf:"vertical",lf:"horizontal"},r,u,v,x=!1,y;(function(w){W.__sdl=w;W.__sdl.i="sdl";W.__sdl.m=!0;W.__sdl.priorityOverride=0})(function(w){w.vtp_triggerStartOption?m(w):pp(function(){m(w)})})}();

W.h.jsm=["customScripts"],function(){(function(a){W.__jsm=a;W.__jsm.i="jsm";W.__jsm.m=!0;W.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=R("google_tag_manager");var d=c&&c.e&&c.e(b);Ar(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
W.h.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;$m(b,c)}(function(b){W.__flc=b;W.__flc.i="flc";W.__flc.m=!0;W.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=fs(b.vtp_customVariable||[],"key","value")||{},e={Lb:b.vtp_activityTag,Kd:c,lb:b.vtp_conversionCookiePrefix||void 0,Ic:void 0,da:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Od:b.vtp_advertiserId,Rd:b.vtp_groupTag,onFailure:b.vtp_gtmOnFailure,onSuccess:b.vtp_gtmOnSuccess,
Sc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",ne:void 0,qe:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,ad:b.vtp_transactionVariable,transactionId:void 0,bd:b.vtp_userVariable,ve:d},f=!Fg(J.C)&&void 0!=qr(J.O)&&!1!==qr(J.O);e.wa=f;if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){O("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,R("google_attr").build([fs(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

W.h.sp=["google"],function(){(function(a){W.__sp=a;W.__sp.i="sp";W.__sp.m=!0;W.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=R("google_trackConversion");if(Ma(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=fs(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:em()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Hm();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){O(b,d,c)};wg()?Hg(function(){Fg(J.C)?e():Ag(e,J.C)},[J.C]):(Jk(),e())})}();W.h.c=["google"],function(){(function(a){W.__c=a;W.__c.i="c";W.__c.m=!0;W.__c.priorityOverride=0})(function(a){Ar(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
W.h.d=["google"],function(){(function(a){W.__d=a;W.__d.i="d";W.__d.m=!0;W.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType)try{var e=Jg(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}catch(f){b=null}else b=K.getElementById(a.vtp_elementId);b&&(d?c=dg(b,d):c=eg(b));return ab(String(b&&c))})}();
W.h.e=["google"],function(){(function(a){W.__e=a;W.__e.i="e";W.__e.m=!0;W.__e.priorityOverride=0})(function(a){return String(Vh(a.vtp_gtmEventId,"event"))})}();
W.h.f=["google"],function(){(function(a){W.__f=a;W.__f.i="f";W.__f.m=!0;W.__f.priorityOverride=0})(function(a){var b=qr("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?$g(bh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):pr(String(b)):String(b)})}();
W.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=lo(c,"gtm.click");rr(d)}}(function(b){W.__cl=b;W.__cl.i="cl";W.__cl.m=!0;W.__cl.priorityOverride=0})(function(b){if(!wr("cl")){var c=R("document");bg(c,"click",a,!0);xr("cl")}M(b.vtp_gtmOnSuccess)})}();
W.h.j=["google"],function(){(function(a){W.__j=a;W.__j.i="j";W.__j.m=!0;W.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=R(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Ar(c,"j",a.vtp_gtmEventId);return c})}();W.h.k=["google"],function(){(function(a){W.__k=a;W.__k.i="k";W.__k.m=!0;W.__k.priorityOverride=0})(function(a){return tr(a.vtp_name,qr("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

W.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){W.__access_globals=b;W.__access_globals.i="access_globals";W.__access_globals.m=!0;W.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,t){if(!k(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Qa(e,t))return}else if("write"===q){if(-1<Qa(f,t))return}else if("readwrite"===q){if(-1<Qa(f,t)&&-1<Qa(e,t))return}else if("execute"===q){if(-1<Qa(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},M:a}})}();W.h.r=["google"],function(){(function(a){W.__r=a;W.__r.i="r";W.__r.m=!0;W.__r.priorityOverride=0})(function(a){return Sa(a.vtp_min,a.vtp_max)})}();
W.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){W.__u=b;W.__u.i="u";W.__u.m=!0;W.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:qr("gtm.url",1))||nr();var d=b[a("vtp_component")];if(!d||"URL"==d)return pr(String(c));var e=bh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Oa(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var q=$g(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=$g(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
W.h.v=["google"],function(){(function(a){W.__v=a;W.__v.i="v";W.__v.m=!0;W.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=qr(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Ar(d,"v",a.vtp_gtmEventId);return d})}();
W.h.ua=["google"],function(){function a(q){return Fg(q)}function b(q,t){if(wg()&&!e[q]){var r=function(){var u=Ok(),v="gtm"+Kh(),x=m(t),y={name:v};l(x,y,!0);u("create",q,y);u(function(){u.remove(v)})};Ag(r,J.J);Ag(r,J.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,t,r){var u=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var x=g[v]?Za(q[v]):q[v];"anonymizeIp"!=v||x||
(x=void 0);t[v]=x;u++}return u},m=function(q){var t={};q.vtp_gaSettings&&G(fs(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);G(fs(q.vtp_fieldsToSet,"fieldName","value"),t);Fg(J.J)||(t.storage="none");Fg(J.C)||(t.allowAdFeatures=!1,t.storeGac=!1);wn()||(t.allowAdFeatures=!1);vn()||(t.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(t._x_19=q.vtp_transportUrl);
return t},n=function(q){function t(pa,S){void 0!==S&&E("set",pa,S)}var r={},u={},v={},x={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;G(fs(y.vtp_contentGroup,"index","group"),u);G(fs(y.vtp_dimension,"index","dimension"),v);G(fs(y.vtp_metric,"index","metric"),x);var w=G(y);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=
void 0;w.vtp_metric=void 0;q=G(q,w)}G(fs(q.vtp_contentGroup,"index","group"),u);G(fs(q.vtp_dimension,"index","dimension"),v);G(fs(q.vtp_metric,"index","metric"),x);var z=m(q),A=Qk(q.vtp_functionName);if(Ma(A)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Kh(),C=D+".");var E=function(pa){var S=[].slice.call(arguments,0);S[0]=C+S[0];A.apply(window,S)},I=function(pa,S){return void 0===S?S:pa(S)},Q=function(pa,S){if(S)for(var db in S)S.hasOwnProperty(db)&&
E("set",pa+db,S[db])},Y=function(){var pa={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},S={},db=(S[J.fd]="click",S[J.Aa]="detail",S[J.$a]="add",S[J.ab]="remove",S[J.La]="checkout",S[J.na]="purchase",S[J.cb]="refund",S),gd={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",
promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},Nb=function(Pa,kb){for(var lb in Pa)pa.hasOwnProperty(lb)&&(Pa[kb]=Pa[kb]||{},Pa[kb].actionField=Pa[kb].actionField||{},Pa[kb].actionField[pa[lb]]=Pa[lb])},pb=function(Pa){for(var kb=[],lb={},rb=0;rb<Pa.length;lb={ub:lb.ub},rb++)lb.ub={},Va(Pa[rb],function(Ob){return function(Gc,jd){gd.hasOwnProperty(Gc)?Ob.ub[gd[Gc]]=jd:Ob.ub[Gc]=jd}}(lb)),kb.push(lb.ub);return kb},qb=function(Pa,kb,lb){if(!Fb(kb))return!1;
for(var rb=fb(Object(kb),lb,[]),Ob=0;rb&&Ob<rb.length;Ob++)E(Pa,rb[Ob]);return!!rb&&0<rb.length},U;if(q.vtp_useEcommerceDataLayer){var Ya=!1;q.vtp_useGA4SchemaForEcommerce&&(U=Vh(q.vtp_gtmEventId,"eventModel"),Ya=!!U);Ya||(U=qr("ecommerce",1))}else q.vtp_ecommerceMacroData&&(U=q.vtp_ecommerceMacroData.ecommerce,!U&&q.vtp_useGA4SchemaForEcommerce&&
(U=q.vtp_ecommerceMacroData));if(!Fb(U))return;U=Object(U);if(q.vtp_useGA4SchemaForEcommerce){U=G(U);U.currencyCode=U.currencyCode||U.currency;var yb=String(Vh(q.vtp_gtmEventId,"event"));if("view_item_list"===yb&&!U.impressions&&U.items)U.impressions=pb(U.items);else if("view_promotion"===yb&&!U.promoView&&U.items)U.promoView={},U.promoView.promotions=pb(U.items);else if("select_promotion"===yb&&!U.promoClick)U.items&&(U.promoClick={},U.promoClick.promotions=pb(U.items)),Nb(U,"promoClick");else if(db.hasOwnProperty(yb)){var hd=
db[yb];U[hd]||(U.items&&(U[hd]={},U[hd].products=pb(U.items)),Nb(U,hd))}}var id=fb(z,"currencyCode",U.currencyCode);void 0!==id&&E("set","&cu",id);qb("ec:addImpression",U,"impressions");if(qb("ec:addPromo",U[U.promoClick?"promoClick":"promoView"],"promotions")&&U.promoClick){E("ec:setAction","promo_click",U.promoClick.actionField);return}for(var Kd="detail checkout checkout_option click add remove purchase refund".split(" "),Ld="refund purchase remove checkout checkout_option add click detail".split(" "),
Md=0;Md<Kd.length;Md++){var Fc=U[Kd[Md]];if(Fc){qb("ec:addProduct",Fc,"products");E("ec:setAction",Kd[Md],Fc.actionField);if(sl)for(var Nd=0;Nd<Ld.length;Nd++){var Od=U[Ld[Nd]];if(Od){Od!==Fc&&Bf(13);break}}break}}},Z={name:D};l(z,Z,!0);var qa=q.vtp_trackingId||r.trackingId;A("create",qa,Z);E("set","&gtm",em(!0));
wg()&&(E("set","&gcs",Gg()),b(qa,q));z._x_19&&(null==Vf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(Vk(D,String(z._x_20)))));q.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(pa,S){void 0!==q[S]&&E("set",pa,q[S])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",u);Q("dimension",v);Q("metric",x);var T={};l(z,T,!1)&&E("set",T);var L;
q.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var pa=z&&z.hitCallback;Ma(pa)&&pa();q.vtp_gtmOnSuccess()});var X=function(pa,S){return void 0===q[pa]?r[S]:q[pa]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(E("require","ec","ec.js"),Y());var P={hitType:"event",eventCategory:String(X("vtp_eventCategory","category")),eventAction:String(X("vtp_eventAction","action")),eventLabel:I(String,
X("vtp_eventLabel","label")),eventValue:I(Xa,X("vtp_eventValue","value"))};l(L,P,!1);E("send",P);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(E("require","ec","ec.js"),Y());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Ub="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:Ub})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Vb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:Vb})}L?E("send","pageview",L):E("send","pageview");
q.vtp_autoLinkDomains&&Rk(C,q.vtp_autoLinkDomains,!!q.vtp_useHashAutoLink,!!q.vtp_decorateFormsAutoLink);Za(z.urlPassthrough)&&Sk(C)}if(!c){var bb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(bb="internal/"+bb);c=!0;var cb=Pl(z._x_19,"/analytics.js"),yc=Vj("https:","http:","//www.google-analytics.com/"+bb,z&&!!z.forceSSL);O("analytics.js"===bb&&cb?cb:yc,function(){var pa=
Ok();pa&&pa.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else M(q.vtp_gtmOnFailure)};(function(q){W.__ua=q;W.__ua.i="ua";W.__ua.m=!0;W.__ua.priorityOverride=0})(function(q){Hg(function(){n(q)},[J.J,J.C])})}();
W.h.jel=["google"],function(){(function(a){W.__jel=a;W.__jel.i="jel";W.__jel.m=!0;W.__jel.priorityOverride=0})(function(a){if(!wr("jel")){var b=R("self"),c=b.onerror;b.onerror=function(d,e,f,g,h){c&&c(d,e,f,g,h);rr({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":f});return!1};xr("jel")}M(a.vtp_gtmOnSuccess)})}();

W.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){W.__inject_script=b;W.__inject_script.i="inject_script";W.__inject_script.m=!0;W.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Script URL must be a string.");try{if(Qe(bh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},M:a}})}();


W.h.cid=["google"],function(){(function(a){W.__cid=a;W.__cid.i="cid";W.__cid.m=!0;W.__cid.priorityOverride=0})(function(){return ne.F})}();

W.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"],b=!1;(function(c){W.__gclidw=c;W.__gclidw.i="gclidw";W.__gclidw.m=!0;W.__gclidw.priorityOverride=100})(function(c){M(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||hj())&&Aj(a,l));xj(l);Cj(["aw","dc"],l);b?Mj(h,l):Nj(h,l);var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var n=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Bj(a,n,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=qr(J.O);Lm({Jd:!1,wa:void 0!=
q&&!1!==q,Hc:l,Qc:!0});c.vtp_enableUrlPassthroughFeature&&c.vtp_enableUrlPassthrough&&Ej()});}();


W.h.aev=["google"],function(){function a(r,u){var v=Vh(r,"gtm");if(v)return v[u]}function b(r,u,v,x){x||(x="element");var y=r+"."+u,w;if(n.hasOwnProperty(y))w=n[y];else{var z=a(r,x);if(z&&(w=v(z),n[y]=w,q.push(y),35<q.length)){var A=q.shift();delete n[A]}}return w}function c(r,u,v){var x=a(r,t[u]);return void 0!==x?x:v}function d(r,u){if(!r)return!1;var v=e(nr());Oa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],y=0;y<u.length;y++){var w=u[y];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(A){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(r))return!1}else{var z=w;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;x.push(e(z))}}}return!es(r,x)}function e(r){m.test(r)||(r="http://"+r);return $g(bh(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var x=b(u,"FORM."+r,h);return void 0===x?v:x;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var w=a(u,"interactSequenceNumber");return void 0===w?v:w;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return dg(r,"value");case "button":return eg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)Yq(r.elements[v])&&
u++;return u}}function l(r,u,v){var x=a(r,"interactedFormField");return x&&dg(x,u)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){W.__aev=r;W.__aev.i="aev";W.__aev.m=!0;W.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,x=r.vtp_varType;switch(x){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,x,eg)||v;case "URL":var w;a:{var z=String(a(u,"elementUrl")||v||""),A=bh(z),C=String(r.vtp_component||"URL");switch(C){case "URL":w=z;break a;case "IS_OUTBOUND":w=d(z,r.vtp_affiliatedDomains);break a;default:w=$g(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return w;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
x,v);else{var E=r.vtp_attribute,I=a(u,"element");D=I&&dg(I,E)||v||""}return D;case "MD":var Q=r.vtp_mdValue,Y=b(u,"MD",gr);return Q&&Y?jr(Y,Q)||v:Y||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var Z=c(u,x,v);Ar(Z,"aev",r.vtp_gtmEventId);return Z}})}();W.h.gas=["google"],function(){(function(a){W.__gas=a;W.__gas.i="gas";W.__gas.m=!0;W.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[$d.Qa]=null;c[$d.Wg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
W.h.ga=["google"],function(){var a,b;(function(c){W.__ga=c;W.__ga.i="ga";W.__ga.m=!0;W.__ga.priorityOverride=0})(function(c){function d(T){var L=[].slice.call(arguments,0);L[0]=u+L[0];t.push(L)}function e(T,L){void 0!==c[L]&&d(T,c[L])}function f(T,L){void 0!==c[L]&&d(T,Number(c[L]))}function g(T,L){if(q(L))for(var X=0;X<L.length;X++)d(T,L[X])}function h(T,L,X){if(q(L))for(var P=0;P<L.length;P++){for(var ta=[T],Aa=L[P],ha=0;ha<
X.length;ha++)ta.push(Aa[X[ha]]);d.apply(this,ta)}}function l(T,L){void 0!==c[L]&&d("_set",T,c[L])}function m(T,L){return void 0===L?L:T(L)}function n(T,L){void 0!==L&&(v+="&"+T+"="+L)}var q=Oa,t=R("_gaq",[],!1),r=!1,u="";void 0==c.vtp_trackerName?u="gtm"+Kh()+".":""!==c.vtp_trackerName&&(u=c.vtp_trackerName+".");e("_setAccount","vtp_webPropertyId");d("_set","gtmid",em(!0));
e("_setSiteSpeedSampleRate","vtp_siteSpeedSampleRate");e("_setDomainName","vtp_domainName");e("_setAllowLinker","vtp_allowLinker");
e("_setAllowAnchor","vtp_allowAnchor");e("_setAllowHash","vtp_allowHash");
g("_addIgnoredRef",c.vtp_ignoredRef);g("_addIgnoredOrganic",c.vtp_ignoredOrganic);var v="";if(""!==v){var x=function(T,L,X){for(var P=L.length-1;0<=P;P--){var ta=L[P].split("=");if(ta[0]===T)return ta[1]||"1"}for(var Aa=X.length-1;0<=Aa;Aa--){var ha=X[Aa].split("=");if(ha[0]===T)return ha[1]||"1"}},y=bh(nr()),w=$g(y,"query").split("&"),z=c.vtp_allowAnchor?$g(y,"fragment").split("&"):[];n("gclid",x("gclid",z,w));n("gclsrc",x("gclsrc",z,w));n("dclid",x("dclid",z,w));d("_set",
"campaignParams",v)}l("anonymizeIp","vtp_anonymizeIp");c.vtp_enableInPageLinkId&&d("_require","inpage_linkid","//www.google-analytics.com/plugins/ga/inpage_linkid.js");e("_setCampaignTrack","vtp_campaignTrack");e("_setClientInfo","vtp_clientInfo");e("_setDetectFlash","vtp_detectFlash");
e("_setDetectTitle","vtp_detectTitle");
void 0!==c.vtp_forceSsl&&c.vtp_forceSsl&&(t.push(["_gat._forceSSL"]),
r=!!c.vtp_forceSsl);d("_set","hitCallback",function(){Ma(c.vtp_hitCallback)&&c.vtp_hitCallback();c.vtp_gtmOnSuccess()});
if("TRACK_EVENT"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("LINK"==c.vtp_trackType){}else if("LINK_BY_POST"==
c.vtp_trackType){}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==
c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else d("_trackPageview");
g("_cookiePathCopy",c.vtp_cookiePathCopy);var Z=function(){R("_gat")||c.vtp_gtmOnFailure()};if(c.vtp_doubleClick)b||(b=!0,O(Vj("https","http","://stats.g.doubleclick.net/dc.js",r),Z,c.vtp_gtmOnFailure));else if(!a){var qa=c.vtp_useDebugVersion?".google-analytics.com/u/ga_debug.js":".google-analytics.com/ga.js";a=!0;O(Vj("https://ssl","http://www",qa,r),Z,c.vtp_gtmOnFailure)}})}();
W.h.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=R("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){W.__awct=g;W.__awct.i="awct";W.__awct.m=!0;W.__awct.priorityOverride=
0})(function(g){function h(w,z,A){return"DATA_LAYER"===w?qr(A):g[z]}function l(){v("gdpr_consent",Hm());}function m(){var w=[];return w}function n(w){var z=!0,A=[];if(w){A=m();}z&&b.push(t)}function q(){}
Jk();var t={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:em()};t.google_gtm_experiments={capi:!0};g.vtp_rdp&&(t.google_restricted_data_processing=
!0);void 0!=qr(J.O)&&!1!==qr(J.O)&&(t.google_gtm_url_processor=function(w){return w=jk(w)});var r=function(w){return function(z,A,C){var D=h(w,A,C);D&&(t[z]=D)}},u=r("JSON");u("google_conversion_currency","vtp_currencyCode");u("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(u=r(g.vtp_productReportingDataSource),u("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),u("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),u("google_basket_feed_language",
"vtp_awFeedLanguage","aw_feed_language"),u("google_basket_discount","vtp_discount","discount"),u("google_conversion_items","vtp_items","items"),t.google_conversion_items&&t.google_conversion_items.map&&(t.google_conversion_items=t.google_conversion_items.map(function(w){return{value:w.price,quantity:w.quantity,item_id:w.id}})));var v=function(w,z){void 0!==z&&((t.google_additional_conversion_params=t.google_additional_conversion_params||{})[w]=z)},x=function(w){return function(z,A,C,D){var E=h(w,
A,C);D(E)&&v(z,E)}};(function(){if(!g.vtp_enableShippingData)return;v("delopc",g.vtp_deliveryPostalCode);v("oedeld",g.vtp_estimatedDeliveryDate);v("delc",g.vtp_deliveryCountry);v("shf",g.vtp_shippingFee);if(g.vtp_enableProductReporting){var w=h(g.vtp_productReportingDataSource,"vtp_items","items");v("iedeld",lk(w))}})();g.vtp_transportUrl&&(t.google_transport_url=g.vtp_transportUrl);var y=Pl(g.vtp_transportUrl,
"/pagead/conversion_async.js");y||(y=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(u=x(g.vtp_newCustomerReportingDataSource),u("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),u("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!g.hasOwnProperty("vtp_enableConversionLinker")||
g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(t.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),t.google_read_gcl_cookie_opt_out=!1):t.google_read_gcl_cookie_opt_out=!0;"1"===aj(!1)._up&&v("gtm_up","1");l();(function(){wg()?Hg(function(){l();var w=Fg(J.C),z=!w&&void 0!=qr(J.O)&&!1!==qr(J.O);!g.vtp_transportUrl&&z&&(t.google_transport_url="https://pagead2.googlesyndication.com/");v("gcs",Gg());q();n(w);w||Ag(function(){l();t=G(t);!g.vtp_transportUrl&&t.google_transport_url&&delete t.google_transport_url;
v("gcs",Gg());q();v("gcu","1");n(!0)},J.C)},[J.C]):n(!0)})();a||(a=!0,O(y,f(),e(y)))})}();
W.h.remm=["google"],function(){(function(a){W.__remm=a;W.__remm.i="remm";W.__remm.m=!0;W.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Ar(f,"remm",a.vtp_gtmEventId);return f})}();
W.h.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){W.__baut=b;W.__baut.i="baut";W.__baut.m=!0;W.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=R(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(g,h){void 0!==b[g]&&(e[h]=b[g])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction",
"ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{O("//bat.bing.com/bat.js",function(){var g=Cf(R("UET"),{ti:b.vtp_tagId,q:d});p[c]=g;g.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(g){M(b.vtp_gtmOnFailure)}})}();W.h.smm=["google"],function(){(function(a){W.__smm=a;W.__smm.i="smm";W.__smm.m=!0;W.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=fs(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;Ar(d,"smm",a.vtp_gtmEventId);return d})}();



W.h.paused=[],function(){(function(a){W.__paused=a;W.__paused.i="paused";W.__paused.m=!0;W.__paused.priorityOverride=0})(function(a){M(a.vtp_gtmOnFailure)})}();
W.h.hid=["google"],function(){(function(a){W.__hid=a;W.__hid.i="hid";W.__hid.m=!0;W.__hid.priorityOverride=0})(function(){return Tq.yc})}();
W.h.zone=[],function(){function a(n){for(var q=n.vtp_boundaries||[],t=0;t<q.length;t++)if(!q[t])return!1;return!0}function b(n){var q=ne.F,t=q+":"+n.vtp_gtmTagId,r=qr("gtm.uniqueEventId")||0,u=uk(function(){return new g}),v=a(n),x=n.vtp_enableTypeRestrictions?n.vtp_whitelistedTypes.map(function(D){return D.typeId}):null;x=x&&jb(x,f);if(u.registerZone(t,r,v,x))for(var y=n.vtp_childContainers.map(function(D){return D.publicId}),w=0;w<y.length;w++){var z=String(y[w]);if(u.registerChild(z,q,t)){var A=
0!==z.indexOf("GTM-");if(A){var C=function(D,E){rr(arguments)};C("js",new Date);m?(C("config",z),l||yr(z,A)):(N.addTargetToGroup(z),Zn({},z))}else yr(z,A)}}}var c={active:!1,isAllowed:function(){return!1},$h:function(){return!1}},d={active:!0,isAllowed:function(){return!0},$h:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.g={};this.o={}};g.prototype.checkState=function(n,q){var t=
this.g[n];if(!t)return d;var r=this.checkState(t.Vf,q);if(!r.active)return c;for(var u=[],v=0;v<t.xe.length;v++){var x=this.o[t.xe[v]];x.Wb(q)&&u.push(x)}return u.length?{active:!0,isAllowed:function(y,w){w=w||[];var z=r.isAllowed;if(!z(y,w))return!1;for(var A=0;A<u.length;++A)if(u[A].isAllowed(y,w))return!0;return!1}}:c};g.prototype.unregisterChild=function(n){delete this.g[n]};g.prototype.registerZone=function(n,q,t,r){var u=this.o[n];if(u)return u.s(q,t),!1;if(!t)return!1;this.o[n]=new h(q,r);
return!0};g.prototype.registerChild=function(n,q,t){var r=this.g[n];if(!r&&N[n]||r&&r.Vf!==q)return!1;if(r)return r.xe.push(t),!1;this.g[n]={Vf:q,xe:[t]};return!0};var h=function(n,q){this.g=[{eventId:n,Wb:!0}];this.o=null;if(q){this.o={};for(var t=0;t<q.length;t++)this.o[q[t]]=!0}};h.prototype.s=function(n,q){var t=this.g[this.g.length-1];n<=t.eventId||t.Wb!=q&&this.g.push({eventId:n,Wb:q})};h.prototype.Wb=function(n){if(!this.g||0==this.g.length)return!1;for(var q=this.g.length-1;0<=q;q--)if(this.g[q].eventId<=
n)return this.g[q].Wb;return!1};h.prototype.isAllowed=function(n,q){q=q||[];if(!this.o||e[n]||this.o[n])return!0;for(var t=0;t<q.length;++t)if(this.o[q[t]])return!0;return!1};var l=!1;var m=!0;m=!1;(function(n){W.__zone=n;W.__zone.i="zone";W.__zone.m=
!0;W.__zone.priorityOverride=0})(function(n){b(n);M(n.vtp_gtmOnSuccess)})}();
W.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,Xf(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){M(g)}}}var c=function(d){if(K.body){var e=d.vtp_gtmOnFailure,f=Br(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Td,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(K.body,gg(g),h,e)()}else lr(function(){c(d)},200)};W.__html=c;W.__html.i="html";
W.__html.m=!0;W.__html.priorityOverride=0}();

W.h.dbg=["google"],function(){(function(a){W.__dbg=a;W.__dbg.i="dbg";W.__dbg.m=!0;W.__dbg.priorityOverride=0})(function(){return!1})}();


W.h.img=["customPixels"],function(){(function(a){W.__img=a;W.__img.i="img";W.__img.m=!0;W.__img.priorityOverride=0})(function(a){var b=gg('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}ds(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


W.h.lcl=[],function(){function a(){var c=R("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Rf||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=hg(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=po("lcl",h?"nv.mwt":"mwt",0),m;m=h?po("lcl","nv.ids",[]):po("lcl","ids",[]);if(m.length){var n=lo(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=String(zr(g,"rel")||""),t=!!Ra(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&Bf(36);var r=R((zr(g,"target")||"_self").substring(1)),u=!0;if(rr(n,Mq(function(){var v;if(v=u&&r){var x;a:if(t){var y;try{var w=void 0;w={bubbles:!0};y=new MouseEvent(f.type,w)}catch(z){if(!c.createEvent){x=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Rf=!0;f.target.dispatchEvent(y);x=!0}else x=!1;v=!x}v&&(r.location.href=zr(g,"href"))}),l))u=!1;else return f.preventDefault&&
f.preventDefault(),f.returnValue=!1}else rr(n,function(){},l||2E3);return!0}}};bg(c,"click",e,!1);bg(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=zr(d,"href"),g=f.indexOf("#"),h=zr(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=pr(f),m=pr(e.location);return l!==m}return!0}(function(c){W.__lcl=c;W.__lcl.i="lcl";W.__lcl.m=!0;W.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?
!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};oo("lcl","mwt",h,0);e||oo("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};oo("lcl","ids",l,[]);e||oo("lcl","nv.ids",l,[]);wr("lcl")||(a(),xr("lcl"));M(c.vtp_gtmOnSuccess)})}();
W.h.evl=["google"],function(){function a(){var f=Number(qr("gtm.start"))||0;return mr().getTime()-f}function b(f,g,h,l){function m(){if(!Ng(f.target)){g.has(d.Bc)||g.set(d.Bc,""+a());g.has(d.yd)||g.set(d.yd,""+a());var q=0;g.has(d.Dc)&&(q=Number(g.get(d.Dc)));q+=100;g.set(d.Dc,""+q);if(q>=h){var t=lo(f.target,"gtm.elementVisibility",[g.g]),r=Pg(f.target);t["gtm.visibleRatio"]=Math.round(1E3*r)/10;t["gtm.visibleTime"]=h;t["gtm.visibleFirstTime"]=Number(g.get(d.yd));t["gtm.visibleLastTime"]=Number(g.get(d.Bc));
rr(t);l()}}}if(!g.has(d.Jb)&&(0==h&&m(),!g.has(d.jb))){var n=R("self").setInterval(m,100);g.set(d.Jb,n)}}function c(f){f.has(d.Jb)&&(R("self").clearInterval(Number(f.get(d.Jb))),f.o(d.Jb))}var d={Jb:"polling-id-",yd:"first-on-screen-",Bc:"recent-on-screen-",Dc:"total-visible-time-",jb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){W.__evl=f;W.__evl.i="evl";W.__evl.m=!0;W.__evl.priorityOverride=0})(function(f){function g(){var y=!1,w=null;if("CSS"===l){try{w=Jg(m)}catch(E){Bf(46)}y=!!w&&v.length!=w.length}else if("ID"===l){var z=K.getElementById(m);z&&(w=[z],y=1!=v.length||v[0]!==z)}w||(w=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++){var C=
new e(v[A],r);c(C)}v=[];for(var D=0;D<w.length;D++)v.push(w[D]);0<=x&&Vg(x);0<v.length&&(x=Ug(h,v,[t]))}}function h(y){var w=new e(y.target,r);y.intersectionRatio>=t?w.has(d.jb)||b(y,w,q,"ONCE"===u?function(){for(var z=0;z<v.length;z++){var A=new e(v[z],r);A.set(d.jb,"1");c(A)}Vg(x);if(n&&So)for(var C=0;C<So.length;C++)So[C]===g&&So.splice(C,1)}:function(){w.set(d.jb,"1");c(w)}):(c(w),"MANY_PER_ELEMENT"===u&&w.has(d.jb)&&(w.o(d.jb),w.o(d.Dc)),w.o(d.Bc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,r=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],x=-1;g();n&&To(g);M(f.vtp_gtmOnSuccess)})}();


var Ou={};Ou.macro=function(a){if(Tq.Bd.hasOwnProperty(a))return Tq.Bd[a]},Ou.onHtmlSuccess=Tq.If(!0),Ou.onHtmlFailure=Tq.If(!1);Ou.dataLayer=Rh;Ou.callback=function(a){Ih.hasOwnProperty(a)&&Ma(Ih[a])&&Ih[a]();delete Ih[a]};Ou.bootstrap=0;Ou._spx=!1;function Pu(){N[ne.F]=Ou;hb(Jh,W.h);Td=Td||Tq;Ud=je}
function Qu(){kg.gtag_cs_api=!0;N=p.google_tag_manager=p.google_tag_manager||{};Fm();if(N[ne.F]){var a=N.zones;a&&a.unregisterChild(ne.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Hd.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Pd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Jd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);Id.push(q)}Rd=W;Sd=as;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;$p();re=new qe(r);if(void 0!==u)for(var x=["sandboxedScripts"],y=0;y<u.length;y++){var w=u[y].replace(/^_*/,"");Jh[w]=x}cq(v);Pu();Sq();xk=!1;yk=0;if("interactive"==
K.readyState&&!K.createEventObject||"complete"==K.readyState)Ak();else{bg(K,"DOMContentLoaded",Ak);bg(K,"readystatechange",Ak);if(K.createEventObject&&K.documentElement.doScroll){var z=!0;try{z=!p.frameElement}catch(I){}z&&Bk()}bg(p,"load",Ak)}mp=!1;"complete"===K.readyState?op():bg(p,"load",op);a:{
if(!sl)break a;p.setInterval(tl,864E5);}Gh=(new Date).getTime();}}
(function(a){if(!p["__TAGGY_INSTALLED"]){var b=!1;if(K.referrer){var c=bh(K.referrer);b="cct.google"===Zg(c,"host")}if(!b){var d=di("googTaggyReferrer");b=d.length&&d[0].length}b&&(p["__TAGGY_INSTALLED"]=!0,Yf("https://cct.google/taggy/agent.js"))}var f=function(){var m=p["google.tagmanager.debugui2.queue"];m||(m=[],p["google.tagmanager.debugui2.queue"]=m,Yf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===$g(p.location,"query",!1,void 0,"gtm_debug");if(!g&&K.referrer){var h=bh(K.referrer);g="tagassistant.google.com"===Zg(h,"host")}if(!g){var l=di("__TAG_ASSISTANT");g=l.length&&l[0].length}p.__TAG_ASSISTANT_API&&(g=!0);g&&Vf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Vf,resume:function(){a()}}}):a()})(Qu);

})()
