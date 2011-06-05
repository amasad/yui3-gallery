YUI.add("gallery-sortable-array",function(f){function b(){b.superclass.constructor.apply(this,arguments);}var e=f.Array;var d="sortable-array-data",c="arraychange",a="dataArray";b.NAME="SortableArray";b.NS="sortableArray";b.ATTRS={dataArray:{value:[]},observable:{value:null}};f.SortableArray=f.extend(b,f.Plugin.Base,{initializer:function(j){this.host=this.get("host");this.nodes=this.host.get("nodes");this.link();this.afterHostMethod("sync",this.sync);var h=[],g=this.get(a),k=h.slice,l=this,i=["pop","push","splice"];e.each(i,function(m){g[m]=function(){var n=h[m].apply(this,k.call(arguments));l.link();l.host.fire("arraychange",{dataArray:g});return n;};});g.restore=function(){e.each(i,function(m){delete g[m];});delete g["restore"];};},link:function(){var g=this.get(a),h=f.one(this.host.get("container")),i=this.nodes,j=this.get("observable");h.all(i).remove();e.each(g,function(m,l){var n=j?m[j]:m,k=f.Node.create("<"+i+">"+n+"</"+i+">");k.setData(d,m);h.append(k);});this.host.sync();},sync:function(){var g=this.host.delegate.dd.get("groups");e.each(f.Sortable._sortables,function(h){if(e.indexOf(g,h.get("id"))>-1){h.sortableArray.syncData();}});},syncData:function(){var h=this.get(a),j=false,i=null,g=this.host.getOrdering(function(l){var k=l.getData(d);if(e.indexOf(h,k)===-1){i=k;}return k;});e.each(g,function(l,k){if(h[k]!=l){j=true;}h[k]=l;});if(h.length!=g.length){j=true;}h.length=g.length;if(j){this.host.fire("arraychange",{dataArray:h,newItem:i});}},_arrayValidator:function(g){return f.Lang.isArray(g);}});},"@VERSION@",{skinnable:false,requires:["sortable","plugin","pluginhost"]});