import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import NavigationItem from "./NavigationItem/NavigationItem"
import NavigationItems from './NavigationItems';

configure({ adapter: new Adapter() });

describe('<NavigationItem />', () => {
  let warpper;
  beforeEach(() => {
    warpper = shallow(<NavigationItems />);
  });
  it('Should render one NavigationItem if the user is not authenticated', () => {
    expect(warpper.find(NavigationItem)).toHaveLength(2);
  });

  it('Should render 3 NavigationItem if the user is authenticated', () => {
    warpper.setProps({ isAuthenticated: true });
    expect(warpper.find(NavigationItem)).toHaveLength(3);
  });

  it('Should render 3 NavigationItem if the user is authenticated', () => {
    warpper.setProps({ isAuthenticated: true });
    expect(warpper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  });

});