define(["require","exports","../_.contribution"],(function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),(0,n.registerLanguage)({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:function(){return AMD?new Promise((function(r,n){e(["vs/basic-languages/razor/razor"],r,n)})):new Promise((function(r,n){e(["./razor"],r,n)}))}})}));