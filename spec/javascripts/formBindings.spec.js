describe("formBindings", function(){
  beforeEach(function(){
    this.model = new AModel({a_field: "initial value"});
    this.view = new AView({model: this.model});
    this.view.render();
  });

  afterEach(function(){
    this.view.close();
  });
  
  it("binds view changes to the model's field", function(){
    var something = $("#something");
    something.val("edited value");
    something.trigger('change');

    expect(this.model.get('a_field')).toEqual("edited value");
  });

  it("binds model changes to the view's field", function(){
    this.model.set({a_field: "another value"});
    var something = $("#something");
    expect(something.val()).toEqual("another value");
  });

  it("binds the model's value to the form field on render", function(){
    var something = $("#something");
    expect(something.val()).toEqual("initial value");
  });
});
