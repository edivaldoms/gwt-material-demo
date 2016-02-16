$wnd.gwtmaterialdemo.runAsyncCallback3("function DndPresenter(eventBus, view, proxy){\n  $clinit_DndPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(624, 55, $intern_53, DndPresenter);\n_.onReveal = function onReveal_5(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Drag and Drop', 'Provides a delightful dragging capability.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndPresenter', 624);\nfunction DndView(){\n  var dnd, dndWoInertia;\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_0(new DndView_BinderImpl$Widgets(this)));\n  dnd = new MaterialDnd;\n  $setTarget_0(dnd, this.panel);\n  dndWoInertia = new MaterialDnd;\n  $setTarget_0(dndWoInertia, this.woInertialPanel);\n  dndWoInertia.inertia = false;\n}\n\ndefineClass(802, 59, $intern_54, DndView);\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndView', 802);\nfunction DndView_BinderImpl(){\n}\n\ndefineClass(1029, 1, {}, DndView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndView_BinderImpl', 1029);\nfunction $build_f_MaterialPanel1_0(this$static){\n  var f_MaterialPanel1, f_MaterialTitle2, f_MaterialPanel3, panel, f_MaterialIcon4, f_MaterialLabel5, woInertialPanel, f_MaterialIcon6, f_MaterialLabel7, f_MaterialLabel8;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Introduction') , f_MaterialTitle2));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel3 = new MaterialPanel , $add_13(f_MaterialPanel3, (panel = new MaterialPanel , $add_13(panel, (f_MaterialIcon4 = new MaterialIcon , $setIconSize_1(f_MaterialIcon4, ($clinit_IconSize() , SMALL)) , $setIconType_3(f_MaterialIcon4, ($clinit_IconType() , TOUCH_APP)) , f_MaterialIcon4)) , $add_13(panel, (f_MaterialLabel5 = new MaterialLabel , $setInnerHTML(($clinit_DOM() , f_MaterialLabel5.element), 'Default') , $setFontSize_0(f_MaterialLabel5.fontSizeMixin, '1.5em') , f_MaterialLabel5)) , panel.setHeight_0('150px') , panel.element.style['paddingTop'] = ($clinit_Style$Unit() , '50.0px') , $setBackgroundColor_0((!panel.colorsMixin_0 && (panel.colorsMixin_0 = new ColorsMixin(panel)) , panel.colorsMixin_0), 'white') , $setShadow((!panel.shadowMixin && (panel.shadowMixin = new ShadowMixin(panel)) , panel.shadowMixin), 1) , $setWaves(panel, ($clinit_WavesType() , DEFAULT_7)) , panel.element.style['width'] = '150px' , panel.element.style['margin'] = '10.0px' , $setTextAlign(panel, ($clinit_TextAlign() , CENTER_4)) , this$static.owner.panel = panel , panel)) , $add_13(f_MaterialPanel3, (woInertialPanel = new MaterialPanel , $add_13(woInertialPanel, (f_MaterialIcon6 = new MaterialIcon , $setIconSize_1(f_MaterialIcon6, SMALL) , $setIconType_3(f_MaterialIcon6, TOUCH_APP) , f_MaterialIcon6)) , $add_13(woInertialPanel, (f_MaterialLabel7 = new MaterialLabel , $setInnerHTML(f_MaterialLabel7.element, 'With Inertia') , $setFontSize_0(f_MaterialLabel7.fontSizeMixin, '1.5em') , f_MaterialLabel7)) , $add_13(woInertialPanel, (f_MaterialLabel8 = new MaterialLabel , $setInnerHTML(f_MaterialLabel8.element, 'dnd.setInertia(true)') , f_MaterialLabel8)) , $setTextColor_0((!woInertialPanel.colorsMixin_0 && (woInertialPanel.colorsMixin_0 = new ColorsMixin(woInertialPanel)) , woInertialPanel.colorsMixin_0), 'white') , woInertialPanel.setHeight_0('150px') , woInertialPanel.element.style['paddingTop'] = '40.0px' , $setBackgroundColor_0((!woInertialPanel.colorsMixin_0 && (woInertialPanel.colorsMixin_0 = new ColorsMixin(woInertialPanel)) , woInertialPanel.colorsMixin_0), 'amber') , $setShadow((!woInertialPanel.shadowMixin && (woInertialPanel.shadowMixin = new ShadowMixin(woInertialPanel)) , woInertialPanel.shadowMixin), 1) , $setWaves(woInertialPanel, DEFAULT_7) , woInertialPanel.element.style['width'] = '150px' , woInertialPanel.element.style['margin'] = '10.0px' , $setTextAlign(woInertialPanel, CENTER_4) , this$static.owner.woInertialPanel = woInertialPanel , woInertialPanel)) , $setBackgroundColor_0((!f_MaterialPanel3.colorsMixin_0 && (f_MaterialPanel3.colorsMixin_0 = new ColorsMixin(f_MaterialPanel3)) , f_MaterialPanel3.colorsMixin_0), 'grey lighten-4') , f_MaterialPanel3.element.style['padding'] = '10.0px' , undefined , f_MaterialPanel3));\n  return f_MaterialPanel1;\n}\n\nfunction DndView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n}\n\ndefineClass(1030, 1, {}, DndView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndView_BinderImpl/Widgets', 1030);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$_annotation$$none$$) {\n    result = new DndPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndView$_annotation$$none$$) {\n    result = new DndView(new DndView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndView$_annotation$$none$$;\n}\n\ndefineClass(531, 1, $intern_78);\n_.onSuccess_0 = function onSuccess_2(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(3);\n\n//# sourceURL=gwtmaterialdemo-3.js\n")
