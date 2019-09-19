


  const exhandleChange = item => e => {
    this.setState({ [item]: e.target.value });
  };

  const OnFromSubmit = e => {
    e.preventDefault();
    console.log("this state",this.state);
    this.props.OnFromSubmit(this.state);
  };
