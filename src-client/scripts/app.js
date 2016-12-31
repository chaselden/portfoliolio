const ReactDOM = require('react-dom')
const React = require('react')
const Backbone = require('backbone')
const $ = require('jquery')


let LandingPage = React.createClass({
  render: function(){
   return (
    <div className="multi-container">
          <div className="page-header">
            <h3>CHAD HASELDEN</h3>
            <h4>FRONT END DEVELOPER</h4>
            {/* <h4>ARTIST</h4> */}
            {/* <h4>JACK OF ALL TRADES</h4> */}
          </div>
            <nav className="cl-effect-1" id="cl-effect-1">
              <div className="about-me">
              	<a data-hover="about-me"><span>ABOUT ME</span></a>
                <div id="description">
                  <h5> Front-end developer,  artist,  fabricator,  tattoo-collector,  gym-rat,
                     dad,  native South-Carolinian,  and part-time alchemist. Charleston has been my home for
                     the last 20 years and I wouldn't want it any other way. If you'd like to meet and discuss how I may
                     be of service to you <mark>(* particularly as a front end developer *)</mark> please feel free to drop me a line, or
                     give me a call. If you'd like to chat about any of my other pastimes listed above, that'd be cool too!
                     (but bring <mark>BOURBON.</mark>)
                  </h5>
                </div>
              </div>

              <div className="projects">
                <a href="https://github.com/chaselden" data-hover="projects"><span>PROJECTS <i className="fa fa-github" aria-hidden="true"></i></span></a>
                <div className="project-thumbnails">
                	<div id="row">
                		<div className="col-sm-6 col-md-4 content">
                			<div className="thumbnail">
                				<a href="http://67.205.163.173:8080/" target="_blank">
                					{/* <img src={"../images/PRESTA.jpeg"}/> */}
                					<img src={"/Users/chadhaselden/TIY/portfoliolio/public/images/PRESTA.jpeg"}/>
                					<div className="caption">
                						<h4>PRESTA Trading Post</h4>
                					</div>
                				</a>
                			</div>
                		</div>
                		<div className="col-sm-6 col-md-4 content">
                			<div className="thumbnail">
                				<a href="http://reeltime.surge.sh/" target="_blank">
                					{/* <img src={"../images/reeltime.jpeg"}/> */}
                					<img src={"/Users/chadhaselden/TIY/portfoliolio/public/images/reeltime.jpeg"}/>
                					<div className="caption">
                						<h4>REEL-Time</h4>
                					</div>
                				</a>
                			</div>
                		</div>
                	</div>
                </div>
              </div>
              <div className="resume">
                {/* <a href="../images/RESUME.pdf" data-hover="resume"><span>RESUME</span></a> */}
                <a href="/Users/chadhaselden/TIY/portfoliolio/public/images/RESUME.pdf" data-hover="resume"><span>RESUME  <i className="fa fa-file-pdf-o" aria-hidden="true"></i></span></a>
              </div>
              <div className="contact">
                   <a href="mailto:chad@chaselden.com" data-hover="contact"><span>CONTACT <i className="fa fa-at" aria-hidden="true"></i></span></a>
              </div>
            </nav>
          <div className="col-sm-12 multi-icons">
             <h2 className="copyright multi-icons">&#xa9;<em>2016 CHASELDEN</em></h2>
             <a href="https://www.linkedin.com/pub/chad-haselden/101/ba6/569"><i className="fa fa-linkedin-square fa-3x multi-icons"></i></a>
          </div>
      </div>
   )
 }
})
     ReactDOM.render(<LandingPage/>, document.querySelector('#app-container'))

const AppRouter = Backbone.Router.extend({
  routes: {
      "aboutme" : "showAboutMe",
    },
    showAboutMe: function(){
      // ACTIONS.addToNavHistory('AboutMe')
      console.log('about me')
      ReactDOM.render(<AppViewController routedFrom="AboutMe"/>, document.querySelector('#app-container') )
    },

    initialize: function() {

      Backbone.history.start()
    }
})

new AppRouter()
