import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Register from './pages/Register'
import Register from './pages/Appointment'
import Login from './pages/Login'
describe("Register Testing",()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Register/>)
  })
})

test('renders the data from the register', () => {
  console.log(wrapper.debug());
  expect(wrapper.text()).toContain("piyush","kumar","abc","123","abc@xyz","Male","26/12/1996","abc@123","Pune")
});

describe("Register Testing For Appointment", ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Register/>)
  })
})

test('renders the data from the register', () => {
  console.log(wrapper.debug());
  expect(wrapper.text()).toContain("piyush kumar","Dr ABC","abc@112","12345","Patna","26/11/2021","fever")
});

describe("Register Testing For Appointment", ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Login/>)
  })
})
test('renders the data from the login', () => {
  console.log(wrapper.debug());
  expect(wrapper.text()).toContain("abc","abc@123")
});

