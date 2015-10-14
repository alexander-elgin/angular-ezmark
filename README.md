# angular-ezmark

Angular adapter for jQuery ezMark plugin (see https://github.com/itsalif/ezMark)

##Install

###Get the required files
`bower install angular-ezmark`

###Include required files (e.g.)

```
<script type="text/javascript" src="bower_components/jquery/jquery.js"></script>
<script type="text/javascript" src="bower_components/ezmark/jquery.ezmark.js"></script>
<script type="text/javascript" src="bower_components/angular-ezmark/ezmark.js"></script>
```

##Usage

###Include the module in your app
`angular.module('myApp',['angular-ezmark'])`

###Apply to an element
`<input type="checkbox" ezmark />`