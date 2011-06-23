$( document ).ready(function(){
	module( "jQuery.urlFor" );

	test( "using placeholders with an array", function(){
		var expect = "/foo/bar",
			result = $.urlFor( "/:param1/:param2", [ "foo", "bar" ] );
		
		equals( result, expect );
	});

	test( "using placeholders with a hash", function(){
		var expect = "/foo/bar",
			result = $.urlFor( "/:param1/:param2", { param1: "foo", param2: "bar" } );
	
		equals( result, expect );
	});

	test( "just a list passed", function(){
		var expect = "foo/bar/should/be/here",
			result = $.urlFor( "foo", "bar", "should", "be", "here" );
		
		equals( result, expect );
	});

	test( "just a list passed, starting with slash", function(){
		var expect = "/foo/bar/should/be/here",
			result = $.urlFor( "/foo", "bar", "should", "be", "here" );
		
		equals( result, expect );
	});

	test( "passing absolute url", function(){
		var expect = "http://jquery.com",
			result = $.urlFor( "http://jquery.com" );
	
		equals( result, expect );
	});

	test( "mixing placeholders and strings with array passed as 2nd arg", function(){
		var expect = "/action/for/13/with/value",
			result = $.urlFor( "/action/for/:id/with/:param", [ 13, "value" ] );
	
		equals( result, expect );
	});

	test( "mixing placeholders and strings with hash passed as 2nd arg", function(){
		var expect = "/action/for/13/with/value",
			result = $.urlFor( "/action/for/:id/with/:param", { id: 13, param: "value" } );
	
		equals( result, expect );
	});
});
