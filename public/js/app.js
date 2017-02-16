class PrimarySkills extends React.Component {
constructor(props) {
    super(props);
    //this.state = {primarySkills: [{primary_term: "C#"}, {primary_term: ".NET"}, {primary_term: "Javascript"}, {primary_term: "Angular.js"}, {primary_term: "React.js"}]};
    this.state = {primarySkills: [{primary_term: "C#", associated_terms_number: "250", associated_terms: [{
 		"number_of_times": 50,
 		"ratio": "0.500",
 		"secondary_term": "rest"
	    }, {
 		"number_of_times": 76,
 		"ratio": "0.760",
 		"secondary_term": "javascript"
 	}]}, {primary_term: ".NET", associated_terms_number: "350", associated_terms:  [{
 		"number_of_times": 1,
 		"ratio": "0.500",
 		"secondary_term": "puppet"
 	}, {
 		"number_of_times": 1,
 		"ratio": "0.500",
 		"secondary_term": "rust"
	    }]}
	]};
    //this.state = {};

    this.showSecondarySkills = function(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }

  }

 //componentDidMount() {
 componentWillMount() {
    //this.state = {primarySkills: [{title: "C#"}, {title: ".NET"}, {title: "Javascript"}, {title: "Angular.js"}, {title: "React.js"}, {title: "Backbone.js"}]};

    //var self = this;
    fetch(`skills`)
      .then(response => response.json())
      .then(json =>
	    this.setState({
	      primarySkills: json
		  })
	    )
  }

  render() {

    return (
      <ul>
      {this.state.primarySkills.map((primarySkill, i) =>
       <li className="primary" key={i}>
				    <a className="btn btn-info btn-md" href="none">{primarySkill.primary_term}</a>: this term is found {primarySkill.associated_terms.length} number of times </li>
			    )}
      </ul>
    );
  }
}

ReactDOM.render(
  <PrimarySkills />,
  document.getElementById('skills-container')
);
