// APEX Plug-In: Save to Session State
// Author: Maxime Tremblay
// Version: 1.0

// global namespace
var apexSaveToSession = {
    // save to DB function
    saveToSession: function() {
        // plugin attributes
        let daThis = this,
            lOptions = JSON.parse(daThis.action.attribute01),
            lResumeCallback = daThis.resumeCallback;

        let lAjaxIdentifier = lOptions.ajaxIdentifier,
            lAffectedElementArray  = apex.util.toArray(lOptions.itemsToSubmit, "," );

        apex.debug.trace('apexSaveToSession: saveToSession Options');
        apex.debug.trace(lOptions);

        // Submit items to server-side
        let result = apex.server.plugin( lAjaxIdentifier, {
            pageItems: lAffectedElementArray
        } );

        result.done( function( data ) {
            apex.debug.trace('apexSaveToSession: apex.server.plugin -- Success');

            /* Resume execution of actions here and pass false to the callback, to indicate no
               error has occurred. */
            apex.da.resume( lResumeCallback, false );
        } ).fail(function( jqXHR, textStatus, errorThrown ) {
            // log error in console
            apex.debug.trace('apexSaveToSession: apex.server.plugin ERROR:', textStatus);

            /* Resume execution of actions here, but pass true to the callback, to indicate an error
               error has occurred with the Ajax call */
            apex.da.resume( lResumeCallback, true );
        } );
    }
};