class PrimarySkills extends React.Component {
constructor(props) {
    super(props);
    this.state = {primarySkills: [{title: "C#"}, {title: ".NET"}, {title: "Javascript"}, {title: "Angular.js"}]};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {

    return (
      <ul>
      {this.state.primarySkills.map((primarySkill, i) =>
          <li class="primary" key={i}>{primarySkill.title}</li>
			    )}
      </ul>
    );
  }
}

ReactDOM.render(
  <PrimarySkills />,
  document.getElementById('skills-container')
);
