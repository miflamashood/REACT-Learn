class IndecisionApp extends React.Component {
    render() {
        const title = "My First React";
        const subtitle = "way to go";
        const options = ['One','Two', 'Three','Four'];
        return <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options} />
            <AddOption />
        </div>
    }

}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I not do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll=this.removeAll.bind(this);
    }

    removeAll() {
        console.log(this.props.options);
        alert('I amm remove all');
    }
    render() {

        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                {this.props.options.map((item) => <Option key={item} optiontext={item} ></Option>)}
            
            </div>
        
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optiontext}
      </div>
        );
    }
}


class AddOption extends React.Component {
    onFormSubmit(event) {
        event.preventDefault();
        const option = event.target.elements.txtoption.value;
        if(option)
        alert(option);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtoption" />
                    <button>Add Option</button>
                </form>
      </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddMore = this.handleAddMore.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleResetOne = this.handleResetOne.bind(this);
        this.state = { count:0 };
    }
    handleAddMore() {
        this.setState((prevState) => {
            return {
                count:prevState.count+1
            };
        });
        
    }

    handleMinusOne() {
        alert('minus one');
    }

    handleResetOne() {
        alert('reset');    }

     render() {
         return (
             <div>
                 <h1>Count: {this.state.count}</h1>
                 <button onClick={this.handleAddMore}>+1</button>
                 <button onClick={this.handleMinusOne}>-1</button>
                 <button onClick={this.handleResetOnes}>Reset</button>
             </div>
         );

     }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));
