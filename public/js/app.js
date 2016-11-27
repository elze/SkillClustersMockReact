class PrimarySkillsList extends React.Component {
  render() {
    return (
      <ul>
        <li class="primary">
          This will be skill 1
        </li>
        <li class="primary">
          This will be skill 2
        </li>
        <li class="primary">
          This will be skill 3
        </li>
      </ul>
    );
  }
}

ReactDOM.render(
  <PrimarySkillsList />,
  document.getElementById('skills-container')
);
