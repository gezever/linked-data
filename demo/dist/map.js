(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{370:function(t,e,n){"use strict";n.r(e);var o=n(681),i=n(526);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n(669);var a=n(383),s=Object(a.a)(i.default,o.a,o.b,!1,null,null,null);s.options.__file="src/vue/ld-map.vue",e.default=s.exports},526:function(t,e,n){"use strict";n.r(e);var o=n(527),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=i.a},527:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=x(n(671)),i=g(n(380)),r=n(660),a=g(n(371)),s=n(672),l=g(n(560)),u=g(n(595)),d=g(n(674)),c=g(n(673)),p=g(n(665)),h=n(666),m=x(n(594)),f=x(n(564));function g(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function x(t){return t&&t.__esModule?t:{default:t}}n(667),e.default={props:["x","y","lon","lat"],data:function(){return{projection:null,coordinates:null,mapExtent:[9928,66928,272072,329072],resolutions:[],matrixIds:[],map:null,tilesLayer:null,markerLayer:null}},computed:{},mounted:function(){this.initProjection(),this.initCoordinates()},watch:{coordinates:function(){var t=this;this.coordinates&&this.$nextTick(function(){t.initResolutions(),t.initMatrixIds(),t.initMap(),t.initTilesLayer(),t.triggerResize(),t.initMarkerLayer(),t.addMarker(),setTimeout(t.triggerResize,5e3)})}},methods:{initProjection:function(){var t="EPSG:31370";if(!i.get(t)){o.default.defs(t,"+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1 +units=m +no_defs"),(0,r.register)(o.default)}this.projection=i.get(t)},initCoordinates:function(){this.x&&this.y&&(this.coordinates=[parseFloat(this.x),parseFloat(this.y)]),this.lat&&this.lon&&(this.coordinates=i.transform([parseFloat(this.lon),parseFloat(this.lat)],"EPSG:4326","EPSG:31370"))},initResolutions:function(){for(var t=a.getHeight(this.mapExtent)/256,e=0;e<12;e++)this.resolutions[e]=t/Math.pow(2,e)},initMatrixIds:function(){for(var t=0;t<12;t++)this.matrixIds[t]=t.toString()},initMap:function(){this.map=new s.Map({target:this.$el,loadTilesWhileAnimating:!1,interactions:l.defaults({mouseWheelZoom:!1}),controls:[new u.ScaleLine,new u.Zoom,new u.ZoomSlider],view:new s.View({center:[140860.69299028325,190532.7165957574],extent:this.mapExtent,projection:this.projection,resolutions:this.resolutions,zoom:2})})},initTilesLayer:function(){this.tilesLayer=new d.Tile({name:"tiles",source:new f.default({url:"https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts",layer:"grb_bsk_grijs",matrixSet:"BPL72VL",format:"image/png",projection:"EPSG:31370",tileGrid:new m.default({extent:this.mapExtent,resolutions:this.resolutions,matrixIds:this.matrixIds}),style:""})}),this.map.addLayer(this.tilesLayer)},initMarkerLayer:function(){this.markerLayer=new d.Vector({name:"marker",source:new c.Vector({})}),this.map.addLayer(this.markerLayer)},addMarker:function(){var t=this,e=new s.Feature({name:"marker",geometry:new p.Point(this.coordinates)}),n=new h.Style({image:new h.Icon({anchor:[.5,.9],size:[80,90],opacity:1,scale:.7,src:"/dist/img/marker-selected.png"})});e.setStyle(n),this.markerLayer.getSource().clear(),this.markerLayer.getSource().addFeature(e),setTimeout(function(){t.map.getView().animate({duration:750,center:t.coordinates,resolution:t.resolutions[5]})},500)},triggerResize:function(){var t=document.createEvent("HTMLEvents");t.initEvent("resize",!0,!1),window.dispatchEvent(t)}}}},559:function(t,e,n){var o=n(670);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(131).default)("61c4ad7a",o,!1,{})},669:function(t,e,n){"use strict";var o=n(559);n.n(o).a},670:function(t,e,n){(t.exports=n(130)(!1)).push([t.i,".ld-map {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  border: 1px solid #ddd;\n  height: 410px;\n  position: relative;\n}\n.ld-map .ol-scale-line {\n    background: rgba(255, 255, 255, 0.4);\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n    border-radius: 2px;\n    bottom: 8px;\n    right: 64px;\n    left: auto;\n}\n.ld-map .ol-scale-line .ol-scale-line-inner {\n      border: 1px solid #4da692;\n      border-top: none;\n      border-bottom: none;\n      color: #333;\n      background-color: rgba(255, 255, 255, 0.8);\n}\n.ld-map .ol-control {\n    border-radius: 2px;\n}\n.ld-map .ol-control button {\n      height: 40px;\n      width: 40px;\n      line-height: .4em;\n      background-color: #4da692;\n}\n.ld-map .ol-control button:focus, .ld-map .ol-control button:hover {\n        background-color: #42796d;\n}\n.ld-map .ol-control.ol-zoom {\n      top: auto;\n      left: auto;\n      bottom: 8px;\n      right: .5em;\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n}\n.ld-map .ol-control.ol-zoomslider {\n      top: auto;\n      left: auto;\n      bottom: 100px;\n      right: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n}\n.ld-map .ol-control.ol-zoomslider button {\n        height: 10px;\n}\n",""])},681:function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return this.coordinates?e("div",{staticClass:"ld-map"},[e("div",{staticClass:"ol-map"})]):this._e()},i=[];o._withStripped=!0,n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}}]);