cfg.Light
var address = "http://192.168.70.236:8060/";
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello" )
	txt.SetTextSize( 32 )
	lay.AddChild( txt )
	
	web = app.CreateWebView( 1, -1 );
	web.LoadHtml( '<center><img width="84" src="' + address+"/device-image.png" + '" /></center>' );
	web.SetBackColor( "#00000000" )
	web.SetBackAlpha(  256 );
	lay.AddChild( web )
	//img = app.CreateImage( address+"/device-image.png", 1, 1 );
//	lay.AddChild( img );
	
	//Add layout to app.	
	app.AddLayout( lay )
	app.HttpRequest( "GET", address+"query/tv-channels", null, null, handleReply );

}




function handleReply( error, reply )
{
    if( error ) alert( reply );
    else
    {
        //var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        alert( reply );
    }
}