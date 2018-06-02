CKEDITOR.dialog.add("about", function (a) {
  a = a.lang.about;
  return {
    title: a.dlgTitle, minWidth: 390, minHeight: 210, contents: [{
      id: "tab1", label: "", title: "关于", expand: !0, padding: 0, elements: [{
        type: "html",
        html: '\x3cdiv class\x3d"cke_about_container"\x3e这是一个测试\x3c/div\x3e'
      }]
    }], buttons: [CKEDITOR.dialog.cancelButton]
  }
});
