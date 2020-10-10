import React, {Component} from 'react';
import { Link} from "react-router-dom";

class Sidebar extends Component {

    scriptHtml = "(function($) {\n" +
        "\n" +
        "    \"use strict\";\n" +
        "\n" +
        "    var fullHeight = function() {\n" +
        "\n" +
        "        $('.js-fullheight').css('height', $(window).height());\n" +
        "        $(window).resize(function(){\n" +
        "            $('.js-fullheight').css('height', $(window).height());\n" +
        "        });\n" +
        "\n" +
        "    };\n" +
        "    fullHeight();\n" +
        "\n" +
        "    $('#sidebarCollapse').on('click', function () {\n" +
        "      $('#sidebar').toggleClass('active');\n" +
        "  });\n" +
        "\n" +
        "})(jQuery);"

    componentDidMount() {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerText = this.scriptHtml;
        document.body.appendChild(script);
    }
    

    render() {


        return (
            <React.Fragment>
                <nav id="sidebar">
                    <div className="custom-menu">
                        <button type="button" id="sidebarCollapse" className="btn btn-primary">
                       
                              <i className="fa fa-bars"></i>
	          				<span className="sr-only">Toggle Menu</span>
                        </button>
                    </div>
                    <div className="p-4">
                        <h1><a href="/home" className="logo">B12 <span>B12 is a web site thet host your contest </span></a>
                        </h1>
                        <ul className="list-unstyled components mb-5">
                            <li className="active">
                                <a href="#"><span className="fa fa-home mr-3"/>Brur</a>
                            </li>

                            <li>
                                <Link to="/counters"><span className="fa fa-briefcase mr-3"/>Projects</Link>
                            </li>

                            <li>
                                <a href="#"><span className="fa fa-suitcase mr-3"/>Gallery</a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-cogs mr-3"/> About Us</a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-paper-plane mr-3"/>Contacts</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer ml-3">
                        <p>Copyright &copy; by S.M.Miloy </p>
                    </div>

                </nav>

            </React.Fragment>

        );
    }

}

export default Sidebar;
