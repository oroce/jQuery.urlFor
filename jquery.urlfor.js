(function($) {
	$.urlFor = function( url, params ) {
		if( url && /\w+\/\/:/.test( url ) ){
			return url; //absolute
		}
		var isArr = $.isArray( params );
			
		if (arguments.length === 1) {
			return url; //url was passed
		}
		else if ( url && typeof params === "string" ) {
			return Array.prototype.slice.call( arguments ).join( "/" ); //list was passed
		}
		else if ( url && ( $.isPlainObject( params ) || isArr ) ){ //placeholder with object was passed (array, hash)
			var newUrl = [],
				index = 0;
			$.each( url.split( "/" ), function( i, elem ){
				newUrl.push( ( elem || "" ).replace( /:(\w+)/, function( str, match ) {
					if ( match){
						return ( isArr ? params[ index++ ] : params[ match ] ) || ""; 
					}
					else{
						return "";
					}
				}));
			});
			return newUrl.join( "/" );
		}
	}
})(jQuery);
