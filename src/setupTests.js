import 'raf/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { buildIconsLibrary } from './iconsLibrary';

buildIconsLibrary();

Enzyme.configure({ adapter: new Adapter() });