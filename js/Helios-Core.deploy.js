smalltalk.addPackage('Helios-Core');
smalltalk.addClass('HLTab', smalltalk.Widget, ['widget', 'label', 'root'], 'Helios-Core');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.HLTab)})},
messageSends: ["activate:", "manager"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_add",
smalltalk.method({
selector: "add",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"add",{},smalltalk.HLTab)})},
messageSends: ["addTab:", "manager"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_displayLabel",
smalltalk.method({
selector: "displayLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(_st(_st(self)._label())._size()).__gt((20));
if(smalltalk.assert($2)){
$1=_st(_st(_st(self)._label())._first_((20))).__comma("...");
} else {
$1=_st(self)._label();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLTab)})},
messageSends: ["ifTrue:ifFalse:", ",", "first:", "label", ">", "size"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._widget())._canHaveFocus();
if(smalltalk.assert($1)){
_st(_st(self)._widget())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},smalltalk.HLTab)})},
messageSends: ["ifTrue:", "focus", "widget", "canHaveFocus"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_hide",
smalltalk.method({
selector: "hide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._hide();
};
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.HLTab)})},
messageSends: ["ifNotNil:", "hide", "asJQuery"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(_st(self)._manager())._activeTab()).__eq(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLTab)})},
messageSends: ["=", "activeTab", "manager"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLTab)})},
messageSends: ["ifNil:"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_label_",
smalltalk.method({
selector: "label:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"label:",{aString:aString},smalltalk.HLTab)})},
messageSends: []}),
smalltalk.HLTab);

smalltalk.addMethod(
"_manager",
smalltalk.method({
selector: "manager",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.HLManager || HLManager))._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{},smalltalk.HLTab)})},
messageSends: ["current"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_registerBindings",
smalltalk.method({
selector: "registerBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{},smalltalk.HLTab)})},
messageSends: ["registerBindings", "widget"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_remove",
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._remove();
};
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.HLTab)})},
messageSends: ["ifNotNil:", "remove", "asJQuery"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_("tab");
$2=_st($1)._yourself();
self["@root"]=$2;
_st(self)._renderTab();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLTab)})},
messageSends: ["class:", "div", "yourself", "renderTab"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_renderTab",
smalltalk.method({
selector: "renderTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@root"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st($1)._class_("amber_box");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTab",{},smalltalk.HLTab)})},
messageSends: ["contents:", "class:", "div", "with:", "renderOn:", "widget"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_show",
smalltalk.method({
selector: "show",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._appendToJQuery_(_st("body")._asJQuery());
} else {
_st(_st(self["@root"])._asJQuery())._show();
};
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.HLTab)})},
messageSends: ["ifNil:ifNotNil:", "appendToJQuery:", "asJQuery", "show"]}),
smalltalk.HLTab);

smalltalk.addMethod(
"_widget",
smalltalk.method({
selector: "widget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@widget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"widget",{},smalltalk.HLTab)})},
messageSends: []}),
smalltalk.HLTab);

smalltalk.addMethod(
"_widget_",
smalltalk.method({
selector: "widget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"widget:",{aWidget:aWidget},smalltalk.HLTab)})},
messageSends: []}),
smalltalk.HLTab);


smalltalk.addMethod(
"_on_labelled_",
smalltalk.method({
selector: "on:labelled:",
fn: function (aWidget,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._widget_(aWidget);
_st($2)._label_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:labelled:",{aWidget:aWidget,aString:aString},smalltalk.HLTab.klass)})},
messageSends: ["widget:", "new", "label:", "yourself"]}),
smalltalk.HLTab.klass);


smalltalk.addClass('HLWidget', smalltalk.Widget, ['wrapper'], 'Helios-Core');
smalltalk.addMethod(
"_alert_",
smalltalk.method({
selector: "alert:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString}, smalltalk.HLWidget)})},
messageSends: ["alert:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_canHaveFocus",
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_confirm_",
smalltalk.method({
selector: "confirm:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(window)._confirm_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString}, smalltalk.HLWidget)})},
messageSends: ["confirm:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_manager",
smalltalk.method({
selector: "manager",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.HLManager || HLManager))._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"manager",{}, smalltalk.HLWidget)})},
messageSends: ["current"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._wrapper();
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(_st(_st(self)._wrapper())._asJQuery())._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(_st(_st(self)._wrapper())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{}, smalltalk.HLWidget)})},
messageSends: ["ifNil:", "wrapper", "empty", "asJQuery", "appendToJQuery:", "renderContentOn:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_registerBindings",
smalltalk.method({
selector: "registerBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"registerBindings",{}, smalltalk.HLWidget)})},
messageSends: ["registerBindingsOn:", "bindings", "keyBinder", "manager"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_registerBindingsOn_",
smalltalk.method({
selector: "registerBindingsOn:",
fn: function (aBindingGroup){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(renderer){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({renderer:renderer},$ctx1)})}))._appendToJQuery_(_st(self["@wrapper"])._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.HLWidget)})},
messageSends: ["div", "appendToJQuery:", "asJQuery", "renderContentOn:"]}),
smalltalk.HLWidget);

smalltalk.addMethod(
"_wrapper",
smalltalk.method({
selector: "wrapper",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@wrapper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"wrapper",{}, smalltalk.HLWidget)})},
messageSends: []}),
smalltalk.HLWidget);


smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLWidget.klass)})},
messageSends: []}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
"_openAsTab",
smalltalk.method({
selector: "openAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._canBeOpenAsTab();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st((smalltalk.HLManager || HLManager))._current())._addTab_(_st((smalltalk.HLTab || HLTab))._on_labelled_(_st(self)._new(),_st(self)._tabLabel()));
return self}, function($ctx1) {$ctx1.fill(self,"openAsTab",{}, smalltalk.HLWidget.klass)})},
messageSends: ["ifFalse:", "canBeOpenAsTab", "addTab:", "on:labelled:", "new", "tabLabel", "current"]}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLWidget.klass)})},
messageSends: []}),
smalltalk.HLWidget.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLWidget.klass)})},
messageSends: []}),
smalltalk.HLWidget.klass);


smalltalk.addClass('HLDebugger', smalltalk.HLWidget, [], 'Helios-Core');


smalltalk.addClass('HLFocusableWidget', smalltalk.HLWidget, ['hiddenInput'], 'Helios-Core');
smalltalk.addMethod(
"_blur",
smalltalk.method({
selector: "blur",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"blur",{}, smalltalk.HLFocusableWidget)})},
messageSends: ["blur", "asJQuery"]}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_canHaveFocus",
smalltalk.method({
selector: "canHaveFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"canHaveFocus",{},smalltalk.HLFocusableWidget)})},
messageSends: []}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"focus",{}, smalltalk.HLFocusableWidget)})},
messageSends: ["focus", "asJQuery"]}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_focusClass",
smalltalk.method({
selector: "focusClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"focusClass",{}, smalltalk.HLFocusableWidget)})},
messageSends: []}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_hasFocus",
smalltalk.method({
selector: "hasFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(_st(self)._wrapper())._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasFocus",{}, smalltalk.HLFocusableWidget)})},
messageSends: ["and:", "hasClass:", "focusClass", "asJQuery", "wrapper", "notNil"]}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_renderHiddenInputOn_",
smalltalk.method({
selector: "renderHiddenInputOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._input();
_st($1)._style_("position: absolute; left: -100000px;");
_st($1)._onBlur_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._onFocus_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@hiddenInput"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderHiddenInputOn:",{html:html}, smalltalk.HLFocusableWidget)})},
messageSends: ["style:", "input", "onBlur:", "removeClass:", "focusClass", "asJQuery", "wrapper", "onFocus:", "addClass:"]}),
smalltalk.HLFocusableWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._registerBindings();
_st(self)._renderHiddenInputOn_(html);
$1=_st(html)._div();
_st($1)._class_("hl_widget");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@wrapper"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.HLFocusableWidget)})},
messageSends: ["registerBindings", "renderHiddenInputOn:", "class:", "div", "onClick:", "focus", "asJQuery", "with:", "renderContentOn:"]}),
smalltalk.HLFocusableWidget);



smalltalk.addClass('HLListWidget', smalltalk.HLFocusableWidget, ['items', 'selectedItem', 'mapping'], 'Helios-Core');
smalltalk.addMethod(
"_activateFirstListItem",
smalltalk.method({
selector: "activateFirstListItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"activateFirstListItem",{}, smalltalk.HLListWidget)})},
messageSends: ["activateListItem:", "jQuery:", "get:", "find:", "asJQuery"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_activateItem_",
smalltalk.method({
selector: "activateItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $early={};
try {
_st(self)._activateListItem_(_st(_st(self["@mapping"])._at_ifAbsent_(anObject,(function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._asJQuery());
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anObject:anObject},smalltalk.HLListWidget)})},
messageSends: ["activateListItem:", "asJQuery", "at:ifAbsent:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_activateListItem_",
smalltalk.method({
selector: "activateListItem:",
fn: function (aListItem){
var self=this;
var parent,position,item;
return smalltalk.withContext(function($ctx1) { 
$1=_st(aListItem)._get_((0));
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
position=_st(self)._positionOf_(aListItem);
parent=_st(aListItem)._parent();
_st(_st(parent)._children())._removeClass_("active");
_st(aListItem)._addClass_("active");
$3=_st(_st(_st(aListItem)._position())._top()).__lt((0));
if(smalltalk.assert($3)){
_st(_st(parent)._get_((0)))._scrollTop_(_st(_st(_st(_st(parent)._get_((0)))._scrollTop()).__plus(_st(_st(aListItem)._position())._top())).__minus((10)));
};
$4=_st(_st(_st(_st(aListItem)._position())._top()).__plus(_st(aListItem)._height())).__gt(_st(parent)._height());
if(smalltalk.assert($4)){
_st(_st(parent)._get_((0)))._scrollTop_(_st(_st(_st(_st(_st(parent)._get_((0)))._scrollTop()).__plus(_st(aListItem)._height())).__minus(_st(_st(parent)._height()).__minus(_st(_st(aListItem)._position())._top()))).__plus((10)));
};
item=_st(_st(self)._items())._at_(_st(_st(aListItem)._attr_("list-data"))._asNumber());
$5=_st(_st(self)._selectedItem()).__eq_eq(item);
if(! smalltalk.assert($5)){
_st(self)._selectItem_(item);
};
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{aListItem:aListItem,parent:parent,position:position,item:item},smalltalk.HLListWidget)})},
messageSends: ["ifNil:", "get:", "positionOf:", "parent", "removeClass:", "children", "addClass:", "ifTrue:", "scrollTop:", "-", "+", "top", "position", "scrollTop", "<", "height", ">", "at:", "asNumber", "attr:", "items", "ifFalse:", "selectItem:", "==", "selectedItem"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_cssClassForItem_",
smalltalk.method({
selector: "cssClassForItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(_st(self)._selectedItem()).__eq(anObject);
if(smalltalk.assert($2)){
$1="active";
} else {
$1="inactive";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClassForItem:",{anObject:anObject}, smalltalk.HLListWidget)})},
messageSends: ["ifTrue:ifFalse:", "=", "selectedItem"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_defaultItems",
smalltalk.method({
selector: "defaultItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"defaultItems",{}, smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_focus",
smalltalk.method({
selector: "focus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLFocusableWidget.fn.prototype._focus.apply(_st(self), []);
$1=_st(_st(self)._items())._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(self)._selectedItem();
if(($receiver = $2) == nil || $receiver == undefined){
_st(self)._activateFirstListItem();
} else {
$2;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"focus",{}, smalltalk.HLListWidget)})},
messageSends: ["focus", "ifFalse:", "ifNil:", "activateFirstListItem", "selectedItem", "isEmpty", "items"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"iconForItem:",{anObject:anObject}, smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapping"]=_st((smalltalk.Dictionary || Dictionary))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.HLListWidget)})},
messageSends: ["initialize", "new"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_items",
smalltalk.method({
selector: "items",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@items"]=_st(self)._defaultItems();
$1=self["@items"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{}, smalltalk.HLListWidget)})},
messageSends: ["ifNil:", "defaultItems"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_items_",
smalltalk.method({
selector: "items:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"items:",{aCollection:aCollection}, smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_positionOf_",
smalltalk.method({
selector: "positionOf:",
fn: function (aListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
    	return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1
	;
return self}, function($ctx1) {$ctx1.fill(self,"positionOf:",{aListItem:aListItem}, smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_registerMappingFrom_to_",
smalltalk.method({
selector: "registerMappingFrom:to:",
fn: function (anObject,aTag){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"registerMappingFrom:to:",{anObject:anObject,aTag:aTag},smalltalk.HLListWidget)})},
messageSends: ["at:put:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._ul();
_st($1)._class_("nav nav-pills nav-stacked");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._div();
_st($3)._class_("pane_actions form-actions");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._setupKeyBindings();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLListWidget)})},
messageSends: ["class:", "ul", "with:", "renderListOn:", "div", "renderButtonsOn:", "setupKeyBindings"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderItem_on_",
smalltalk.method({
selector: "renderItem:on:",
fn: function (anObject,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
li=_st(html)._li();
_st(self)._registerMappingFrom_to_(anObject,li);
$1=li;
_st($1)._class_(_st(self)._cssClassForItem_(anObject));
_st($1)._at_put_("list-data",_st(_st(_st(self)._items())._indexOf_(anObject))._asString());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._renderItemLabel_on_(anObject,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anObject:anObject,html:html,li:li},smalltalk.HLListWidget)})},
messageSends: ["li", "registerMappingFrom:to:", "class:", "cssClassForItem:", "at:put:", "asString", "indexOf:", "items", "with:", "iconForItem:", "tag:", "renderItemLabel:on:", "a", "onClick:", "activateListItem:", "asJQuery"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
fn: function (anObject,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{anObject:anObject,html:html}, smalltalk.HLListWidget)})},
messageSends: ["with:", "asString"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_renderListOn_",
smalltalk.method({
selector: "renderListOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._items())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html},smalltalk.HLListWidget)})},
messageSends: ["new", "do:", "renderItem:on:", "items"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject}, smalltalk.HLListWidget)})},
messageSends: ["selectedItem:"]}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_selectedItem",
smalltalk.method({
selector: "selectedItem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@selectedItem"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{}, smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_selectedItem_",
smalltalk.method({
selector: "selectedItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"selectedItem:",{anObject:anObject}, smalltalk.HLListWidget)})},
messageSends: []}),
smalltalk.HLListWidget);

smalltalk.addMethod(
"_setupKeyBindings",
smalltalk.method({
selector: "setupKeyBindings",
fn: function (){
var self=this;
var next;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@hiddenInput"])._asJQuery())._unbind_("keydown");
_st(_st(self["@hiddenInput"])._asJQuery())._keydown_((function(e){
var selected;
return smalltalk.withContext(function($ctx2) {
selected;
$1=_st(_st(e)._which()).__eq((38));
if(smalltalk.assert($1)){
_st(self)._activateListItem_(_st(selected)._prev());
};
$2=_st(_st(e)._which()).__eq((40));
if(smalltalk.assert($2)){
next=_st(selected)._next();
next;
$3=_st(next)._get_((0));
if(($receiver = $3) == nil || $receiver == undefined){
next=_st(window)._jQuery_(".focused .nav-pills li:first-child");
next;
} else {
$3;
};
return _st(self)._activateListItem_(next);
};
}, function($ctx2) {$ctx2.fillBlock({e:e,selected:selected},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{next:next}, smalltalk.HLListWidget)})},
messageSends: ["unbind:", "asJQuery", "keydown:", "jQuery:", "ifTrue:", "activateListItem:", "prev", "=", "which", "next", "ifNil:", "get:"]}),
smalltalk.HLListWidget);



smalltalk.addClass('HLNavigationListWidget', smalltalk.HLListWidget, ['previous', 'next'], 'Helios-Core');
smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@next"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{}, smalltalk.HLNavigationListWidget)})},
messageSends: []}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@next"]=aWidget;
$1=_st(_st(aWidget)._previous()).__eq(self);
if(! smalltalk.assert($1)){
_st(aWidget)._previous_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"next:",{aWidget:aWidget}, smalltalk.HLNavigationListWidget)})},
messageSends: ["ifFalse:", "previous:", "=", "previous"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_nextFocus",
smalltalk.method({
selector: "nextFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._next();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self)._next())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"nextFocus",{}, smalltalk.HLNavigationListWidget)})},
messageSends: ["ifNotNil:", "focus", "next"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@previous"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"previous",{}, smalltalk.HLNavigationListWidget)})},
messageSends: []}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_previous_",
smalltalk.method({
selector: "previous:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@previous"]=aWidget;
$1=_st(_st(aWidget)._next()).__eq(self);
if(! smalltalk.assert($1)){
_st(aWidget)._next_(self);
};
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aWidget:aWidget}, smalltalk.HLNavigationListWidget)})},
messageSends: ["ifFalse:", "next:", "=", "next"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_previousFocus",
smalltalk.method({
selector: "previousFocus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._previous();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(self)._previous())._focus();
};
return self}, function($ctx1) {$ctx1.fill(self,"previousFocus",{}, smalltalk.HLNavigationListWidget)})},
messageSends: ["ifNotNil:", "focus", "previous"]}),
smalltalk.HLNavigationListWidget);

smalltalk.addMethod(
"_setupKeyBindings",
smalltalk.method({
selector: "setupKeyBindings",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLListWidget.fn.prototype._setupKeyBindings.apply(_st(self), []);
_st(_st(self["@hiddenInput"])._asJQuery())._keydown_((function(e){
return smalltalk.withContext(function($ctx2) {
if(smalltalk.assert($1)){
_st(self)._nextFocus();
};
$2=_st(_st(e)._which()).__eq((37));
if(smalltalk.assert($2)){
return _st(self)._previousFocus();
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupKeyBindings",{}, smalltalk.HLNavigationListWidget)})},
messageSends: ["setupKeyBindings", "keydown:", "ifTrue:", "nextFocus", "=", "which", "previousFocus", "asJQuery"]}),
smalltalk.HLNavigationListWidget);



smalltalk.addClass('HLManager', smalltalk.HLWidget, ['tabs', 'activeTab', 'keyBinder', 'environment', 'history'], 'Helios-Core');
smalltalk.addMethod(
"_activate_",
smalltalk.method({
selector: "activate:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._keyBinder())._flushBindings();
_st(aTab)._registerBindings();
self["@activeTab"]=aTab;
$1=self;
_st($1)._refresh();
_st($1)._addToHistory_(aTab);
$2=_st($1)._show_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["flushBindings", "keyBinder", "registerBindings", "refresh", "addToHistory:", "show:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_activeTab",
smalltalk.method({
selector: "activeTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@activeTab"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeTab",{}, smalltalk.HLManager)})},
messageSends: []}),
smalltalk.HLManager);

smalltalk.addMethod(
"_addTab_",
smalltalk.method({
selector: "addTab:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._activate_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addTab:",{aTab:aTab}, smalltalk.HLManager)})},
messageSends: ["add:", "tabs", "activate:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_addToHistory_",
smalltalk.method({
selector: "addToHistory:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._history())._add_(aTab);
return self}, function($ctx1) {$ctx1.fill(self,"addToHistory:",{aTab:aTab}, smalltalk.HLManager)})},
messageSends: ["removeFromHistory:", "add:", "history"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_defaultEnvironment",
smalltalk.method({
selector: "defaultEnvironment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.HLLocalEnvironment || HLLocalEnvironment))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultEnvironment",{}, smalltalk.HLManager)})},
messageSends: ["new"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@environment"]=_st(self)._defaultEnvironment();
$1=self["@environment"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{}, smalltalk.HLManager)})},
messageSends: ["ifNil:", "defaultEnvironment"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment}, smalltalk.HLManager)})},
messageSends: []}),
smalltalk.HLManager);

smalltalk.addMethod(
"_history",
smalltalk.method({
selector: "history",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@history"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@history"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@history"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"history",{}, smalltalk.HLManager)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_history_",
smalltalk.method({
selector: "history:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"history:",{aCollection:aCollection}, smalltalk.HLManager)})},
messageSends: []}),
smalltalk.HLManager);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._keyBinder())._setupEvents();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLManager)})},
messageSends: ["initialize", "setupEvents", "keyBinder"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_keyBinder",
smalltalk.method({
selector: "keyBinder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@keyBinder"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@keyBinder"]=_st((smalltalk.HLKeyBinder || HLKeyBinder))._new();
$1=self["@keyBinder"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyBinder",{}, smalltalk.HLManager)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.HLManager)})},
messageSends: ["remove", "jQuery:", "appendToJQuery:", "asJQuery"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_removeActiveTab",
smalltalk.method({
selector: "removeActiveTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"removeActiveTab",{}, smalltalk.HLManager)})},
messageSends: ["removeTab:", "activeTab"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_removeFromHistory_",
smalltalk.method({
selector: "removeFromHistory:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"removeFromHistory:",{aTab:aTab}, smalltalk.HLManager)})},
messageSends: ["history:", "reject:", "==", "history"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_removeTab_",
smalltalk.method({
selector: "removeTab:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._tabs())._includes_(aTab);
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self)._removeFromHistory_(aTab);
_st(_st(self)._tabs())._remove_(aTab);
_st(_st(self)._keyBinder())._flushBindings();
_st(aTab)._remove();
_st(self)._refresh();
_st(_st(self)._history())._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeTab:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["ifFalse:", "includes:", "tabs", "removeFromHistory:", "remove:", "flushBindings", "keyBinder", "remove", "refresh", "ifNotEmpty:", "activate", "last", "history"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_renderAddOn_",
smalltalk.method({
selector: "renderAddOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._li();
_st($1)._class_("dropdown");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st($3)._class_("dropdown-toggle");
_st($3)._at_put_("data-toggle","dropdown");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._tag_("b"))._class_("caret");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._ul();
_st($5)._class_("dropdown-menu");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return smalltalk.withContext(function($ctx4) {
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})})))._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return smalltalk.withContext(function($ctx5) {
_st($7)._with_(_st(each)._tabLabel());
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
}, function($ctx6) {$ctx6.fillBlock({},$ctx1)})}));
return $8;
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderAddOn:",{html:html}, smalltalk.HLManager)})},
messageSends: ["class:", "li", "with:", "a", "at:put:", "tag:", "ul", "do:", "tabLabel", "onClick:", "openAsTab", "sorted:", "<", "tabPriority", "select:", "canBeOpenAsTab", "withAllSubclasses"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_("navbar navbar-fixed-top");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st($3)._class_("navbar-inner");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.HLManager)})},
messageSends: ["class:", "div", "with:", "renderTabsOn:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_renderTabsOn_",
smalltalk.method({
selector: "renderTabsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._ul();
_st($1)._class_("nav");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
$4=$3;
$6=_st(each)._isActive();
if(smalltalk.assert($6)){
$5="active";
} else {
$5="inactive";
};
_st($4)._class_($5);
$7=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st($8)._with_((function(){
return smalltalk.withContext(function($ctx5) {
return smalltalk.withContext(function($ctx6) {
}, function($ctx6) {$ctx6.fillBlock({},$ctx1)})}));
return _st(html)._with_(_st(each)._displayLabel());
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$9=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $9;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $7;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(self)._renderAddOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTabsOn:",{html:html},smalltalk.HLManager)})},
messageSends: ["class:", "ul", "with:", "do:", "ifTrue:ifFalse:", "isActive", "li", "onClick:", "removeTab:", "tag:", "displayLabel", "a", "activate", "tabs", "renderAddOn:"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_show_",
smalltalk.method({
selector: "show:",
fn: function (aTab){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._tabs())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=aTab;
_st($1)._show();
$2=_st($1)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aTab:aTab},smalltalk.HLManager)})},
messageSends: ["do:", "hide", "tabs", "show", "focus"]}),
smalltalk.HLManager);

smalltalk.addMethod(
"_tabs",
smalltalk.method({
selector: "tabs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@tabs"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@tabs"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
$1=self["@tabs"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabs",{}, smalltalk.HLManager)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLManager);


smalltalk.HLManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=_st(_st(self)._basicNew())._initialize();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.HLManager.klass)})},
messageSends: ["ifNil:", "initialize", "basicNew"]}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLManager.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "current"]}),
smalltalk.HLManager.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"new",{}, smalltalk.HLManager.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.HLManager.klass);


smalltalk.addClass('HLSUnit', smalltalk.HLWidget, [], 'Helios-Core');

smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLSUnit.klass)})},
messageSends: []}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLSUnit.klass)})},
messageSends: []}),
smalltalk.HLSUnit.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLSUnit.klass)})},
messageSends: []}),
smalltalk.HLSUnit.klass);


smalltalk.addClass('HLTranscript', smalltalk.HLWidget, [], 'Helios-Core');

smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLTranscript.klass)})},
messageSends: []}),
smalltalk.HLTranscript.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLTranscript.klass)})},
messageSends: []}),
smalltalk.HLTranscript.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLTranscript.klass)})},
messageSends: []}),
smalltalk.HLTranscript.klass);


smalltalk.addMethod(
"_ajaxPutAt_data_",
smalltalk.method({
selector: "ajaxPutAt:data:",
fn: function (aURL,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({xhr:xhr},$ctx1)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:",{aURL:aURL,aString:aString},smalltalk.Package)})},
messageSends: ["ajax:options:", "->", "alert:", ",", "responseText"]}),
smalltalk.Package);

smalltalk.addMethod(
"_heliosCommit",
smalltalk.method({
selector: "heliosCommit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var fileContents;
return smalltalk.withContext(function($ctx2) {
fileContents;
return _st(self)._ajaxPutAt_data_(_st(commitStrategy)._value(),fileContents);
}, function($ctx2) {$ctx2.fillBlock({commitStrategy:commitStrategy,fileContents:fileContents},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"heliosCommit",{},smalltalk.Package)})},
messageSends: ["do:", "exportPackage:", "name", "new", "key", "ajaxPutAt:data:", "value", "->", ",", "commitPathJs", "commitPathSt"]}),
smalltalk.Package);
