jQuery( document ).ready(function(){
	
	$( '#submit-button' ).click( function (){
		let fname = $( '#fname' ).val();
		let lname = $( '#lname' ).val();
		let phone = $( '#phone' ).val();
		let email = $( '#email' ).val();
		let age = $( '#age' ).val();

			$( '.display-wrapper' ).slideDown( 1000 );
		
		$( 'p #firstname' ).text( fname );
		$( 'p #lastname' ).text( lname );
		$( 'p #phonenumber' ).text( phone );
		$( 'p #emailadrss' ).text( email );
		$( 'p #ageunit' ).text( age );
		$( 'p #gendercategory' ).text( age );
		 
		 	


		// alert( value )
	});

	$( '.display-wrapper button' ).click(function(){
		$( '.display-wrapper' ).slideUp( 1000 ); 	
	});


});


