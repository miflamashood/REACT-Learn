import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption.js';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component {
 
  
    state = {
            title:'Hey',
            options: [],
            selectedOptions:undefined
        };

    handleDeleteselectedOptions= () => {
        this.setState(() => ({ selectedOptions: undefined }));
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOptions: option
        }));
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }
    componentDidMount=()=> {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));

            }
        }
        catch (e) {

        }
    }

    componentDidUpdate=(prevProps, prevState)=> {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }


 
    render() {
        const subtitle = 'Put your life in the hands of a computer !!!#############';

        return (
            <div>
              
                <Header title={this.state.title} subtitle={subtitle} />
                <div className="container">
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                        />
                    </div>
                <OptionModal
                    selectedOptions={this.state.selectedOptions}
                    handleDeleteselectedOptions={this.handleDeleteselectedOptions}
                />
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: [],
    title:'Mifla Super app'
};

