$('document').on("submit",function() {
	console.log("submit");
		var obj = {};
		var elements = form.querySelectorAll( "input, select" );
		for( var i = 0; i < elements.length; i++ ) {
			var obj = elements[i];
            return JSON.stringify( obj );
    }
});