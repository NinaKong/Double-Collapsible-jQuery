#Double-Collapsible-jQuery
A double layer collapse jQuery, which allows you to collapse content. Also, this is a responsive version.

#Demo
A demo can be found at 'Collapse.html' in this repository.

#Features
- Double Collapsible
- Responsive
- Lightweight
- Support Browser: IE11, Firefox, Safari, Chrome

#Setup

#Include the Collapse stylesheet in the head section of your webpage
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/font-awesome.css" type="text/css">
    <link href="css/styles.css" rel="stylesheet">

#Include the Collapse script at the bottom of the body of your webpage:
    <script type="text/javascript" src="js/jquery-2.1.4.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
#Following is an example section that you could apply this plugin
    <div class="col-md-12 col-sm-12 col-xs-12">
            <a class="col-md-5 col-sm-5 col-xs-12 FirstLayerTitle">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <span class="col-md-10 col-sm-10 col-xs-10 align-left">Star Wars</span>
                    <i id ="FirstIcon" class="fa fa-chevron-right col-md-2 col-sm-2 col-xs-2 align-right"></i>
                </div>
            </a>
        </div>
        <div class="FirstLayerDetail col-md-12 col-sm-12 col-xs-12">
            <div class="col-md-5 col-sm-5 col-xs-12">
                <a href="#" class="SecondLayerTitle col-md-12 col-sm-12 col-xs-12">
                    <span class="col-md-10 col-sm-10 col-xs-10 align-left">Darth Vader</span>
                    <i id="secondIcon" class="fa fa-chevron-right align-right col-md-2 col-sm-2 col-xs-2"></i>
                </a>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12 SecondLayerDetail align-left">
                <div class="col-md-5 col-sm-5 col-xs-12">
                    <span>Come to the dark side<span>
                </div>
            </div>
        </div>

