import React from 'react'
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'  //shallow function in Enzyme will create a wrapper instance of our component that we can interact with
import toJson from 'enzyme-to-json'
import Accordion from './Accordion'

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe(`Accordion component`, () => {
    //smoke test, ensures that the component renders in the first place
    it('renders without crashing', () => {
        // first create a DOM element to render the component into
        const ul = document.createElement('ul');
        //render the component, this is the actual test, if something is wrong it will fail here
        ReactDOM.render(<Accordion />, ul);
        //clean up code
        ReactDOM.unmountComponentAtNode(ul);
    })
    //snapshot test
    it('renders empty given no props without errors', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the no sections as default', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('opens clicked section', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('opens one section at a time', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})