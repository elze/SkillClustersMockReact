class PrimarySkills extends React.Component {
constructor(props) {
    super(props);
    this.state = {primarySkills: [{primary_term: "C#"}, {primary_term: ".NET"}, {primary_term: "Javascript"}, {primary_term: "Angular.js"}, {primary_term: "React.js"}]};
  }

  componentDidMount() {
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

  componentWillUnmount() {

  }

  render() {

    return (
      <ul>
      {this.state.primarySkills.map((primarySkill, i) =>
       <li className="primary" key={i}>
	<a className="btn btn-info btn-md" href="none">{primarySkill.primary_term}</a> </li>
			    )}
      </ul>
    );
  }
}

ReactDOM.render(
  <PrimarySkills />,
  document.getElementById('skills-container')
);
