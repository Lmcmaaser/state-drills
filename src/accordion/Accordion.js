import React, { Component } from 'react'
import './Accordion.css'

export default class Accordian extends Component {
    static defaultProps = {  //defaultProps: when a prop is missing it displays the fallback value in place of the missing prop
        sections: []  //sections is the prop, and an array of objects
    };

    state = {
        stateSectionIndex: null,
    }

    handleStateSetSection = (sectionIndex) => {
        this.setState({stateSectionIndex: sectionIndex}) //'this' references a JavaScript element
    }

    renderItem(section, stateSectionIndex, idx) {  //idx is a utility function for traversing properties on objects and arrays.
        return (
            <li className='accordionItem' key={idx}>
                <button
                    type='button'
                    onClick={() => this.handleStateSetSection(idx)}
                >
                    {section.title}
                </button>
                    {(stateSectionIndex === idx) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const { stateSectionIndex } = this.state
        const { sections } = this.props 
        return (
            <ul className='Accordion'>
                {sections.map((section, idx) => 
                    this.renderItem(section, idx, stateSectionIndex)
                )}
            </ul>
        )
    }
};